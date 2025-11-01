"use strict"

const FRANCE = 0
const BRITAIN = 1

function on_init() {
	define_board("map", 1650, 1275)

	// TODO: define spaces and layouts on map

	define_board("war_display", 825, 637)

	// TODO: define spaces and layouts on war display

	define_panel("played", 0, "played")
	define_panel("hand", 0, "hand")

	// TODO: define pieces, tiles, and cards
}

function on_update() {
	begin_update()

	// TODO: update pieces, tiles, and cards

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
