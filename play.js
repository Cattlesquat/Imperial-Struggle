"use strict"

const space_type_class = [
	"political",
	"market",
	"naval",
	"territory",
	"fort",
	"advantage"
]

function find_layout_node(name) {
	for (var g in layout.nodes) {
		var lout = layout.nodes[g][name]
		if (lout)
			return lout
	}
	return null
}

function make_lout(xc, yc, w, h) {
	return [ xc - w/2, yc - h/2, w, h ]
}

function on_init() {
	var i, a, s, x, y, w, h, lout

	define_board("map", 2550, 1650)

	for (s of data.spaces) {
		var lout = find_layout_node(s.layout ?? s.name)
		if (!lout) {
			console.error("no layout for " + s.name)
			continue
		}

		;[ x, y, w, h ] = lout
		x = x + w/2
		y = y + h/2

		if (s.type === POLITICAL)
			lout = make_lout(x, y, 66, 66)
		else if (s.type === MARKET)
			lout = make_lout(x, y, 80, 80)
		else if (s.type === TERRITORY)
			lout = make_lout(x, y, 80, 80)
		else if (s.type === NAVAL || s.type === FORT)
			lout = make_lout(x, y, 92, 92)
		else if (s.type === ADVANTAGE)
			lout = make_lout(x, y, 88, 88)

		define_space("space", s.num, lout, space_type_class[s.type])
		if (s.name !== s.layout)
			register_tooltip("space", s.num, s.name + " (" + s.layout + ")")
		else
			register_tooltip("space", s.num, s.name)

		define_layout("lout-space", s.num, lout)
	}

	for (i = 0; i <= 36; ++i) {
		define_layout("general-track", i,
			find_layout_node("record track " + i),
			"stack offset:5 hover-offset:20"
		)
	}

	for (s of data.turns) {
		define_layout("turn-track", s.num, find_layout_node(s.layout))
	}

	define_layout("lout-demand", 0, find_layout_node("Demand"))
	define_layout("lout-navy", 0, find_layout_node("Navy Box"))
	define_layout("lout-initiative", 0, find_layout_node("Initiative"))

	define_layout("lout-region", EUROPE, find_layout_node("Award Europe"))
	define_layout("lout-region", NORTH_AMERICA, find_layout_node("Award North America"))
	define_layout("lout-region", CARIBBEAN, find_layout_node("Award Caribbean"))
	define_layout("lout-region", INDIA, find_layout_node("Award India"))

	define_marker("game-turn", 0, "square-sm")
	define_marker("victory-points", 0, "square-sm black")
	define_marker("debt", FRANCE, "square-sm fr")
	define_marker("debt", BRITAIN, "square-sm br")
	define_marker("debt-limit", FRANCE, "square-sm fr")
	define_marker("debt-limit", BRITAIN, "square-sm br")
	define_marker("treaty-points", FRANCE, "square-sm treaty-points-fr")
	define_marker("treaty-points", BRITAIN, "square-sm treaty-points-br")
	define_marker("initiative", FRANCE, "square-sm initiative-fr")
	define_marker("initiative", BRITAIN, "square-sm initiative-br")

	for (i = 0; i < NUM_DEMANDS; ++i)
		define_marker("demand", i, [ "square-sm", data.demands[i].name.toLowerCase() ])

	for (a of data.awards)
		define_marker("award", a.num, "square-sm black a" + a.num)

	for (a of data.advantages)
		define_marker("advantage", a.num, "square advantage a" + a.num)

	for (a of data.investments)
		define_marker("investment", a.num, "square investment i" + a.num)

	define_board("war_display", 825, 637)

	// TODO: define spaces and layouts on war display

	define_panel("played", 0, "played")
	define_panel("hand", 0, "hand")

	// TODO: define pieces, tiles, and cards

	for (i = 1; i <= 41; ++i)
		define_card("event_card", i, "c" + i)
	for (i = 1; i <= 26; ++i)
		define_card("ministry_card", i, "c" + i)
}

function on_update() {
	var i, r, s, a

	begin_update()

	if (V.hand)
		populate_with_list("hand", 0, "event_card", V.hand)

	populate_with_list("lout-demand", 0, "demand", V.global_demand)

	populate("general-track", V.vp, "victory-points", 0)

	populate("general-track", V.debt[FRANCE], "debt", FRANCE)
	populate("general-track", V.debt_limit[FRANCE], "debt-limit", FRANCE)
	populate("general-track", V.treaty_points[FRANCE], "treaty-points", FRANCE)
	populate("general-track", V.debt[BRITAIN], "debt", BRITAIN)
	populate("general-track", V.debt_limit[BRITAIN], "debt-limit", BRITAIN)
	populate("general-track", V.treaty_points[BRITAIN], "treaty-points", BRITAIN)

	populate("turn-track", V.turn, "game-turn", 0)
	populate("lout-initiative", 0, "initiative", V.initiative)

	populate_generic("lout-navy", 0, "marker hex fleet_fr", V.navy_box[FRANCE])
	populate_generic("lout-navy", 0, "marker hex fleet_br", V.navy_box[BRITAIN])

	for (s of data.spaces) {
		if (s.type === NAVAL) {
			if (V.flags[s.num] === FRANCE)
				populate_generic("lout-space", s.num, "marker hex fleet_fr")
			if (V.flags[s.num] === BRITAIN)
				populate_generic("lout-space", s.num, "marker hex fleet_br")
		} else {
			if (V.flags[s.num] === FRANCE)
				populate_generic("lout-space", s.num, "marker square-sm flag_fr")
			if (V.flags[s.num] === BRITAIN)
				populate_generic("lout-space", s.num, "marker square-sm flag_br")
			if (V.flags[s.num] === SPAIN)
				populate_generic("lout-space", s.num, "marker square-sm flag_spain")
			if (V.flags[s.num] === USA)
				populate_generic("lout-space", s.num, "marker square-sm flag_usa")
		}
	}

	for (a = 0; a < NUM_ADVANTAGES; ++a)
		populate("lout-space", V.advantages[a], "advantage", a)

	for (r = 0; r < NUM_REGIONS; ++r) {
		if (V.awards[r] >= 0)
			populate("lout-region", r, "award", V.awards[r])
		else
			populate_generic("lout-region", r, "marker square-sm black award reverse")
	}

	action_button("pass", "Pass")
	action_button("next", "Next")
	action_button("done", "Done")
	action_button("undo", "Undo")

	end_update()
}

function escape_text(text) {
	text = String(text)
	text = text.replace(/---/g, "\u2014")
	text = text.replace(/--/g, "\u2013")
	text = text.replace(/->/g, "\u2192")
	text = text.replace(/-( ?[\d])/g, "\u2212$1")
	text = text.replace(/&/g, "&amp;")
	text = text.replace(/</g, "&lt;")
	text = text.replace(/>/g, "&gt;")
	return text
}

function on_prompt(text) {
	return escape_text(text)
}

function on_log(text) {
	var p = document.createElement("div")

	switch (text[0]) {
	case ">":
		p.className = "i"
		text = text.substring(1)
		break
	case "#":
		p.className = "h1"
		text = text.substring(1)
		break
	}

	p.innerHTML = escape_text(text)
	return p
}
