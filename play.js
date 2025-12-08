"use strict"

const mat_layout = {
	"unbuilt_squadrons": [255,222,185,107],
	"advantage_tiles": [43,75,188,255],
	"basic_war_tiles": [257,77,260,122],
	"bonus_war_tiles": [527,78,258,122],
	"ministry_card": [41,341,405,268],

	/* actions */
	"bonus_war_tile": [485,366,82,72],
	"repair_seize_fort": [592,469,82,72],
	"remove_conflict": [697,469,82,72],
	"construct_fort": [486,469,82,72],
	"construct_squadron": [593,367,82,72],
	"deploy_squadron": [698,366,82,72],
	"draw_event": [484,229,85,85],
	"shift_political_space": [589,230,85,85],
	"shift_market": [696,227,85,85],

	/* investment tile display */
	"investment_tile_stack": [47,192,263,281],
	"used_investment_tiles": [328,192,263,281],
	"available_investment_1_5": [67,527,505,84],
	"available_investment_6_9": [119,629,400,84],
}

const space_type_class = [
	"political",
	"market",
	"naval",
	"territory",
	"fort",
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

	define_panel("panel-events", FRANCE, "events_fr")
	define_panel("panel-ministry", FRANCE, "ministry_fr")
	define_panel("panel-advantage", FRANCE, "advantage_fr")

	define_panel("panel-events", BRITAIN, "events_br")
	define_panel("panel-ministry", BRITAIN, "ministry_br")
	define_panel("panel-advantage", BRITAIN, "advantage_br")

	define_panel("panel-all-ministries", 0, "all_ministries")
	define_panel("panel-played", 0, "played")
	define_panel("panel-available-investments", 0, "available_investment_tiles")
	define_panel("panel-used-investments", 0, "used_investment_tiles")

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
	define_layout("lout-navy", 	0, find_layout_node("Navy Box"))
	define_layout("lout-initiative", 0, find_layout_node("Initiative"))

	define_layout("lout-award", REGION_EUROPE, find_layout_node("Award Europe"))
	define_layout("lout-award", REGION_NORTH_AMERICA, find_layout_node("Award North America"))
	define_layout("lout-award", REGION_CARIBBEAN, find_layout_node("Award Caribbean"))
	define_layout("lout-award", REGION_INDIA, find_layout_node("Award India"))

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

	for (i = 0; i < 4; ++i) {
		define_marker("action-br", i, `square-sm action_${i+1} br`)
		define_marker("action-fr", i, `square-sm action_${i+1} fr`)
	}

	for (i = 0; i < NUM_DEMANDS; ++i)
		define_marker("demand", i, [ "square-sm", data.demands[i].name.toLowerCase() ])

	for (i = 0; i < NUM_SPACES; ++i)
		define_marker("conflict", i, "hex-sm")

	for (a of data.awards)
		define_marker("award", a.num, "square-sm black a" + a.num)

	for (a of data.advantages) {
		var [ x, y, w, h ] = find_layout_node(a.name)
		x = x + w/2
		y = y + h/2
		define_layout("lout-advantage", a.num, make_lout(x, y, 88, 88))
		define_marker("advantage", a.num, "square advantage a" + a.num)
		register_tooltip("advantage", a.num, a.name)
	}

	for (a of data.investments)
		define_marker("investment", a.num, "square investment i" + a.num)

	for (i = 1; i <= 41; ++i)
		define_card("event_card", i, "c" + i)
	for (i = 1; i <= 26; ++i)
		define_card("ministry_card", i, "c" + i)

	define_board("war_display", 825, 637)
	// TODO: define spaces and layouts on war display

}

function on_update() {
	var i, r, s, a

	begin_update()

	populate("general-track", V.vp, "victory-points", 0)

	populate("general-track", V.debt[FRANCE], "debt", FRANCE)
	populate("general-track", V.debt_limit[FRANCE], "debt-limit", FRANCE)
	populate("general-track", V.treaty_points[FRANCE], "treaty-points", FRANCE)
	populate("general-track", V.debt[BRITAIN], "debt", BRITAIN)
	populate("general-track", V.debt_limit[BRITAIN], "debt-limit", BRITAIN)
	populate("general-track", V.treaty_points[BRITAIN], "treaty-points", BRITAIN)

	populate("turn-track", V.turn, "game-turn", 0)
	populate("lout-initiative", 0, "initiative", V.initiative)

	populate_with_list("lout-demand", 0, "demand", V.global_demand)

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

	for (a = 0; a < NUM_ADVANTAGES; ++a) {
		if (V.advantages[a] === NONE)
			populate("lout-advantage", a, "advantage", a)
		if (V.advantages[a] === FRANCE)
			populate("panel-advantage", FRANCE, "advantage", a)
		if (V.advantages[a] === BRITAIN)
			populate("panel-advantage", BRITAIN, "advantage", a)
	}

	// populate_generic("panel-squadrons", FRANCE, "marker hex fleet_fr", V.unbuilt_squadrons[FRANCE])
	// populate_generic("panel-squadrons", BRITAIN, "marker hex fleet_br", V.unbuilt_squadrons[BRITAIN])

	if (V.played_tile >= 0)
		populate("panel-played", 0, "investment", V.played_tile)

	if (V.all_ministries)
		populate_with_list("panel-all-ministries", 0, "ministry_card", V.all_ministries)

	populate_with_list("panel-available-investments", 0, "investment", G.available_investments)
	populate_with_list("panel-used-investments", 0, "investment", G.used_investments)

	populate_with_list("panel-ministry", FRANCE, "ministry_card", V.ministry[FRANCE], "card ministry_card deck_fr")
	populate_with_list("panel-ministry", BRITAIN, "ministry_card", V.ministry[BRITAIN], "card ministry_card deck_br")

	populate_with_list("panel-events", FRANCE, "event_card", V.hand[FRANCE], "card event_card deck")
	populate_with_list("panel-events", BRITAIN, "event_card", V.hand[BRITAIN], "card event_card deck")

	map_for_each(V.conflicts, (s, n) => {
		populate("lout-space", s, "conflict", s)
		toggle_keyword("conflict", s, "plus-one", n > 1)
	})

	for (i = 0; i < G.played_tiles[FRANCE].length; ++i)
		populate("investment", G.played_tiles[FRANCE][i], "action-fr", i)
	for (i = 0; i < G.played_tiles[BRITAIN].length; ++i)
		populate("investment", G.played_tiles[BRITAIN][i], "action-br", i)

	for (r = 0; r < NUM_REGIONS; ++r) {
		if (V.awards[r] >= 0)
			populate("lout-award", r, "award", V.awards[r])
		else
			populate_generic("lout-award", r, "marker square-sm black award reverse")
	}

	action_button("france", "France")
	action_button("britain", "Britain")

	action_button("confirm", "Confirm")
	action_button("pass", "Pass")

	action_button("draw_event", "Draw Event")
	action_button("construct_squadron", "Construct Squadron")

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
	case "=":
		p.className = "h2"
		text = text.substring(1)
		break
	}

	p.innerHTML = escape_text(text)
	return p
}
