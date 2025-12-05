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
	var i, s, x, y, w, h, lout

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

		if (s.type === TERRITORY)
			lout = make_lout(x, y - 40, 80, 80)

		define_layout("lout-space", s.num, lout)
	}

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
	var i, s

	begin_update()

	// TODO: update pieces, tiles, and cards

	if (V.hand)
		populate_with_list("hand", 0, "event_card", V.hand)

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
