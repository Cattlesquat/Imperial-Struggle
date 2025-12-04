"use strict"

const FRANCE = 0
const BRITAIN = 1

function find_layout_node(name) {
	console.log("looking for " + name)
	for (var g in layout.nodes)
		if (name in layout.nodes[g])
			return layout.nodes[g]
	return null
}

function find_space_layouts() {
	var last_id = 0
	var last_name = null
	for (var s of data.spaces) {
		var box = find_layout_node(s.name, last_name)
		if (!box) {
			if (s.name !== last_name)
				last_id = 1
			box = find_layout_node(s.name + "_" + (last_id++))
			if (!box)
				throw new Error("cannot find layout for " + s.name)
		}
		last_name = s.name
		s.layout = box
	}
}

function on_init() {
	var i, s

	define_board("map", 1650, 1275)

	// TODO: define spaces and layouts on map
	find_space_layouts()
	for (s of data.spaces) {
		define_space("space", s.num, s.layout)
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
	begin_update()

	// TODO: update pieces, tiles, and cards

	if (V.hand)
		populate_with_list("hand", 0, "event_card", V.hand)

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
