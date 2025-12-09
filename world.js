"use strict"

var G, V, R // convenient aliases so that we can share bits of code verbatim from rules.js

/* MISC */

function assert(exp, msg) {
	if (!exp)
		throw new Error("ASSERT: " + msg)
}

function $(x) {
	return x instanceof HTMLElement ? x : document.querySelector(x)
}

function toggle_pieces() {
	document.body.classList.toggle("hide-pieces")
}

function toggle_markers() {
	document.body.classList.toggle("hide-markers")
}

function toggle_markers_and_pieces() {
	// cycle between showing everything, only pieces, and nothing.
	let hidden_pieces = document.body.classList.contains("hide-pieces")
	let hidden_markers = document.body.classList.contains("hide-markers")
	if (hidden_pieces && hidden_markers) {
		document.body.classList.remove("hide-pieces")
		document.body.classList.remove("hide-markers")
	} else if (hidden_pieces) {
		document.body.classList.add("hide-markers")
	} else {
		document.body.classList.add("hide-pieces")
	}
}

function escape_typography(text) {
	text = String(text)
	// TODO: smart quotes
	text = text.replace(/---/g, "\u2014")
	text = text.replace(/--/g, "\u2013")
	text = text.replace(/->/g, "\u2192")
	text = text.replace(/-( ?[\d])/g, "\u2212$1")
	text = text.replace(/&/g, "&amp;")
	text = text.replace(/</g, "&lt;")
	text = text.replace(/>/g, "&gt;")
	return text
}

function is_action(action, id) {
	if (view.actions) {
		if (id === undefined)
			return view.actions[action] === 1
		if (view.actions[action] === undefined)
			return false
		if (!Array.isArray(view.actions[action]))
			throw new Error("action is not a list: " + action)
		return view.actions[action].includes(id)
	}
	return false
}

/* WORLD */

const world = {
	things: {},
	favicon: $("link[rel='icon']"),
	header: $("header"),
	status: $("#status"),
	mapwrap: $("#mapwrap"),
	panzoom: $("#pan_zoom_main"),
	parent_list: [],
	action_list: [],
	animate_list: [],
	keyword_list: [],
	text_list: [],
	generic_unused: {},
	generic_used: {},
	parent: $("#map"),
	parent_w: 1920,
	parent_h: 1080,
}

class Thing {
	constructor(element, action, id) {
		assert(element, "thing without an html element")

		this.element = element
		this.my_action = action
		this.my_id = id
		this.my_keywords = [ action ]

		this.is_parent = false
		this.is_action = false
		this.is_keyword = false
		this.is_text = false
		this.is_animate = false
		this.is_rotate = false

		element.thing = this

		element.classList.add(action)

		if (!world.things[action])
			world.things[action] = []
		world.things[action][id] = this
	}

	action() {
		if (!this.is_action) {
			this.element.onmousedown = _on_click_action
			world.action_list.push(this)
		}
		return this
	}

	animate(time = 300) {
		if (!this.is_animate) {
			this.is_animate = true
			world.animate_list.push(this)
		}
		this.my_time = time
		return this
	}

	ensure_parent() {
		if (!this.is_parent) {
			this.is_parent = true
			world.parent_list.push(this)
		}
		return this
	}

	ensure_keyword() {
		if (!this.is_keyword) {
			this.is_keyword = true
			this.my_dynamic_keywords = []
			world.keyword_list.push(this)
		}
		return this
	}

	ensure_text() {
		if (!this.is_text) {
			this.is_text = true
			this.my_text = null
			this.my_text_html = null
			world.text_list.push(this)
		}
		return this
	}

	ensure_rotate() {
		if (!this.is_rotate) {
			this.is_rotate = true
			this.my_old_angle = 0
			this.my_new_angle = 0
		}
		return this
	}

	tooltip(tip) {
		this.element.onmouseenter = function () {
			if (typeof tip === "function")
				world.status.textContent = tip(id)
			else
				world.status.textContent = tip
		}
		this.element.onmouseleave = function () {
			world.status.textContent = ""
		}
		return this
	}

	layout(rect, keywords) {
		var e = this.element

		world.parent.appendChild(this.element)

		this.keyword(keywords)

		if (Array.isArray(rect))
			var [ x, y, w, h ] = rect
		else
			var { x, y, w, h } = rect
		x = Math.round(x)
		y = Math.round(y)
		w = Math.round(w ?? 0)
		h = Math.round(h ?? 0)

		var r = world.parent_w - (x + w)
		var b = world.parent_h - (y + h)

		var grow_n = this.my_keywords.includes("grow-n")
		var grow_e = this.my_keywords.includes("grow-e")
		var grow_s = this.my_keywords.includes("grow-s")
		var grow_w = this.my_keywords.includes("grow-w")

		if (!grow_n) e.style.top = Math.round(y) + "px"
		if (!grow_s) e.style.bottom = Math.round(b) + "px"
		if (!grow_e) e.style.right = Math.round(r) + "px"
		if (!grow_w) e.style.left = Math.round(x) + "px"
		if (grow_w || grow_e)
			this.keyword("grow-h")

		e.style.minHeight = Math.round(h) + "px"
		e.style.minWidth = Math.round(w) + "px"

		return this
	}

	keyword(keywords, on = true) {
		if (keywords && on) {
			if (typeof keywords === "string")
				keywords = keywords.trim().split(" ")
			for (var word of keywords) {
				set_add(this.my_keywords, word)
				this.element.classList.add(word)
			}
		}
		return this
	}

	// style({ key: value, ... }) or style(key, value)
	style(dict_or_key, value) {
		if (typeof dict_or_key === "string") {
			this.element.style.setProperty(dict_or_key, value)
		} else {
			for (var key in dict_or_key)
				this.element.style.setProperty(key, styles[key])
		}
		return this
	}
}

function lookup_thing(action, id) {
	var list = world.things[action]
	if (list === undefined)
		throw new Error(`cannot find thing: ${action} ${id}`)
	var thing = list[id]
	if (thing === undefined)
		throw new Error(`cannot find thing: ${action} ${id}`)
	return thing
}

function _on_click_action(evt) {
	if (evt.button === 0 && send_action(evt.target.thing.my_action, evt.target.thing.my_id))
		evt.stopPropagation()
}

/* DEFINE THINGS */

function define_thing(action, id) {
	return new Thing(document.createElement("div"), action, id)
}

function define_html_thing(selector, action, id) {
	return new Thing($(selector), action, id)
}

function define_board(selector, w, h) {
	world.parent = $(selector)
	assert(world.parent, "board not found: " + selector)
	world.parent.classList.add("board")
	if (!w || !h) {
		var rect = world.parent.getBoundingClientRect()
		w = rect.width
		h = rect.height
	}
	world.parent_w = w
	world.parent_h = h
}

function sort_board_children() {
	var parent = world.parent
	var list = Array.from(parent.childNodes)
	list.sort((a,b) => {
		var ra = a.getBoundingClientRect()
		var rb = b.getBoundingClientRect()
		var za = ra.top * 2 + ra.left
		var zb = rb.top * 2 + rb.left
		return za - zb
	})
	parent.replaceChildren()
	for (var e of list)
		parent.appendChild(e)
}

function define_layout(action, id, rect, keywords, styles) {
	return define_thing(action, id)
		.keyword("layout")
		.keyword(keywords)
		.style(styles)
		.layout(rect)
}

function define_layout_track_h(action, a, b, layout, gap=0, keywords, styles) {
	var [ x, y, w, h ] = layout
	var n = 1 + Math.abs(b - a)
	var cell_w = (w - gap * (n-1)) / n
	if (a < b) {
		for (var id = a; id <= b; ++id) {
			define_layout(action, id, [ x, y, cell_w, h ], keywords, styles)
			x += cell_w + gap
		}
	} else {
		for (var id = a; id >= b; --id) {
			define_layout(action, id, [ x, y, cell_w, h ], keywords, styles)
			x += cell_w + gap
		}
	}
}

function define_layout_track_v(action, a, b, layout, gap=0, keywords, styles) {
	var [ x, y, w, h ] = layout
	var n = 1 + Math.abs(b - a)
	var cell_h = (h - gap * (n-1)) / n
	if (a < b) {
		for (var id = a; id <= b; ++id) {
			define_layout(action, id, [ x, y, w, cell_h ], keywords, styles)
			y += cell_h + gap
		}
	} else {
		for (var id = a; id >= b; --id) {
			define_layout(action, id, [ x, y, w, cell_h ], keywords, styles)
			y += cell_h + gap
		}
	}
}

function define_layout_grid(action, order, cols, rows, layout, gapx, gapy, keywords, styles) {
	var [ x, y, w, h ] = layout
	var cell_w = (w - gapx * (cols-1)) / cols
	var cell_h = (h - gapy * (rows-1)) / rows
	var r, c, i
	i = 0
	for (r = 0; r < rows; ++r) {
		x = layout[0]
		for (c = 0; c < cols; ++c) {
			define_layout(action, order[i++], [ x, y, cell_w, cell_h ], keywords, styles)
			x += cell_w + gapx
		}
		y += cell_h + gapy
	}
}

/* PREDEFINED THINGS - SPACE, PIECE, MARKER, CARD */

function define_space(action, id, rect, keywords) {
	return define_thing(action, id)
		.keyword("space")
		.action()
		.keyword(keywords)
		.layout(rect)
}

function define_piece(action, id, keywords) {
	return define_thing(action, id)
		.keyword("piece")
		.action()
		.animate()
		.keyword(keywords)
}

function define_marker(action, id, keywords) {
	return define_thing(action, id)
		.keyword("marker")
		.action()
		.animate()
		.keyword(keywords)
}

function define_card(action, id, keywords) {
	return define_thing(action, id)
		.keyword("card")
		.action()
		.keyword(keywords)
}

function define_piece_list(action, a, b, keywords) {
	for (var i = a; i <= b; ++i)
		define_piece(action, i, keywords)
}

function define_marker_list(action, a, b, keywords) {
	for (var i = a; i <= b; ++i)
		define_marker(action, i, keywords)
}

function define_card_list(action, a, b, keywords_with_prefix) {
	for (var i = a; i <= b; ++i)
		define_card(action, i, keywords_with_prefix + i)
}

/* UPDATE THINGS */

function update_favicon(url) {
	world.favicon.href = url
}

// populate(parent_action, [parent_id], child_action, [child_id])
function populate(parent_action, arg2, arg3, arg4) {
	var parent_id, child_action, child_id
	if (typeof arg2 === "string") {
		parent_id = undefined
		child_action = arg2
		child_id = arg3
	} else {
		parent_id = arg2
		child_action = arg3
		child_id = arg4
	}
	var parent = lookup_thing(parent_action, parent_id)
	var child = lookup_thing(child_action, child_id)
	parent.ensure_parent()
	parent.element.appendChild(child.element)
}

// populate_with_list(parent_action, [parent_id], child_action, child_id_list, fallback)
function populate_with_list(parent_action, arg2, arg3, arg4, arg5) {
	var parent_id, child_action, child_id_list, fallback
	if (typeof arg2 === "string") {
		parent_id = undefined
		child_action = arg2
		child_id_list = arg3
		fallback = arg4
	} else {
		parent_id = arg2
		child_action = arg3
		child_id_list = arg4
		fallback = arg5
	}
	var parent = lookup_thing(parent_action, parent_id)
	parent.ensure_parent()
	for (var child_id of child_id_list) {
		if (child_id < 0)
			parent.element.appendChild(_create_generic(fallback))
		else
			parent.element.appendChild(lookup_thing(child_action, child_id).element)
	}
}

function _create_generic(keywords) {
	var unused = world.generic_unused[keywords] ??= []
	var used = world.generic_used[keywords] ??= []
	var e
	if (unused.length > 0) {
		e = unused.pop()
	} else {
		e = document.createElement("div")
		e.className = keywords
	}
	used.push(e)
	return e
}

// populate_generic(parent_action, [parent_id], keywords, n=1)
function populate_generic(parent_action, arg2, arg3, arg4) {
	var parent_id, keywords, n
	if (typeof arg2 === "string" || Array.isArray(arg2)) {
		parent_id = undefined
		keywords = arg2
		n = arg4
	} else {
		parent_id = arg2
		keywords = arg3
		n = arg4
	}
	n = n ?? 1
	var parent = lookup_thing(parent_action, parent_id)
	parent.ensure_parent()
	while (n-- > 0)
		parent.element.appendChild(_create_generic(keywords))
}

function update_position(action, id, x, y) {
	var thing = lookup_thing(action, id)
	thing.element.style.left = Math.round(x) + "px"
	thing.element.style.top = Math.round(y) + "px"
}

function update_style(action, id, key, value) {
	var thing = lookup_thing(action, id)
	thing.element.style.setProperty(key, value)
}

function update_rotation(action, id, angle) {
	var thing = lookup_thing(action, id)
	thing.ensure_rotate()
	thing.my_new_angle = angle
	thing.element.style.transform = `rotate(${angle}deg)`
}

function update_keyword(action, id, keyword, on = true) {
	var thing = lookup_thing(action, id)
	thing.ensure_keyword()
	if (on)
		thing.my_dynamic_keywords.push(keyword)
}

function update_text(action, id, text) {
	var thing = lookup_thing(action, id)
	thing.ensure_text()
	thing.my_text = text
}

function update_text_html(action, id, text) {
	var thing = lookup_thing(action, id)
	thing.ensure_text()
	thing.my_text_html = text
}

/* ENGINE */

function begin_update() {
	G = V = view
	R = player

	// reset unused element cache
	for (var key in world.generic_used) {
		var unused = world.generic_unused[key]
		var used = world.generic_used[key]
		while (used.length > 0)
			unused.push(used.pop())
	}

	for (var thing of world.animate_list)
		_remember_position(thing)
	for (var thing of world.parent_list)
		thing.element.replaceChildren()
	for (var thing of world.keyword_list)
		thing.my_dynamic_keywords = []
	for (var thing of world.text_list)
		thing.my_text = thing.my_text_html = null
}

function end_update() {
	for (var e of document.querySelectorAll(".layout.square"))
		e.style.setProperty("--square", Math.ceil(Math.sqrt(e.childElementCount)))

	for (var thing of world.keyword_list)
		thing.element.setAttribute("class", [ ...thing.my_keywords, ...thing.my_dynamic_keywords ].join(" "))

	for (var thing of world.text_list) {
		if (thing.my_text_html !== null)
			thing.element.innerHTML = thing.my_text_html
		else if (thing.my_text !== null)
			thing.element.textContent = thing.my_text
		else
			thing.element.textContent = ""
	}

	for (var thing of world.action_list)
		thing.element.classList.toggle("action", is_action(thing.my_action, thing.my_id))

	var scale1 = Number(world.mapwrap?.dataset?.scale ?? 1)
	var scale2 = Number(world.panzoom?.dataset?.scale ?? 1)
	var inv_scale = 1 / (scale1 * scale2)
	for (var thing of world.animate_list)
		_animate_position(thing, inv_scale)
}

function _remember_position(thing) {
	var e = thing.element
	if (e.offsetParent) {
		let prect = e.offsetParent.getBoundingClientRect()
		e.my_parent = e.offsetParent
		e.my_px = prect.x
		e.my_py = prect.y
		e.my_x = prect.x + e.offsetLeft
		e.my_y = prect.y + e.offsetTop
		if (thing.is_rotate)
			thing.my_old_angle = thing.my_new_angle
	} else {
		e.my_parent = null
		e.my_px = e.my_py = e.my_x = e.my_y = 0
		if (thing.is_rotate)
			thing.my_old_angle = 0
	}
}

function _animate_position(thing, inv_scale) {
	var e = thing.element
	if (e.offsetParent && e.my_parent) {
		let prect = e.offsetParent.getBoundingClientRect()
		let new_x = prect.x + e.offsetLeft
		let new_y = prect.y + e.offsetTop
		let dx, dy, da
		// TODO: fix dx,dy calculation with nested transform
		if (e.offsetParent === e.my_parent) {
			// animate pieces on pieces
			dx = (e.my_x - e.my_px) - (new_x - prect.x)
			dy = (e.my_y - e.my_py) - (new_y - prect.y)
		} else {
			dx = e.my_x - new_x
			dy = e.my_y - new_y
		}
		if (thing.is_rotate) {
			da = thing.my_new_angle - thing.my_old_angle
		} else {
			da = 0
		}
		if (dx !== 0 || dy !== 0 || da !== 0) {
			dx *= inv_scale
			dy *= inv_scale
			if (thing.is_rotate) {
				e.animate(
					[
						{ transform: `translate(${dx}px, ${dy}px) rotate(${thing.my_old_angle}deg)`, },
						{ transform: `translate(0, 0) rotate(${thing.my_new_angle}deg)`, },
					],
					{ duration: thing.my_time, easing: "ease" }
				)
			} else {
				e.animate(
					[
						{ transform: `translate(${dx}px, ${dy}px)`, },
						{ transform: `translate(0, 0)`, },
					],
					{ duration: thing.my_time, easing: "ease" }
				)
			}
		}
	}
}

/* PANELS */

function create_panel(parent, action, id, text) {
	var panel = document.createElement("div")
	var head = document.createElement("div")
	var body = document.createElement("div")
	panel.className = "panel"
	head.className = "panel-head"
	body.className = "panel-body"
	head.textContent = text ?? action + ":" + id
	panel.append(head, body)
	$(parent).append(panel)
	return define_panel(panel, action, id)
}

function define_panel(selector, action, id) {
	var panel = $(selector)
	var head = panel.querySelector(".panel-head")
	var body = panel.querySelector(".panel-body")
	var thing = new Thing(panel.querySelector(".panel-body"), action, id)
	thing.my_panel = panel
	thing.my_panel_head = head
	thing.my_panel_body = body
	return thing
}

function update_panel_show(action, id, show) {
	var thing = lookup_thing(action, id)
	assert(thing.my_panel, "not a panel")
	thing.my_panel.classList.toggle("hide", !show)
}

function update_panel_text(action, id, text) {
	var thing = lookup_thing(action, id)
	assert(thing.my_panel, "not a panel")
	thing.my_panel_head.textContent = text
	
}

function update_panel_text_html(action, id, text) {
	var thing = lookup_thing(action, id)
	assert(thing.my_panel, "not a panel")
	thing.my_panel_head.innerHTML = text
}

/* PREFERENCES (WIP) */

function get_preference(name, fallback) {
	var key = params.title_id + "/" + name
	var value = window.localStorage.getItem(key)
	if (value)
		return JSON.parse(value)
	return fallback
}

function set_preference(name, value) {
	var key = params.title_id + "/" + name
	window.localStorage.setItem(key, JSON.stringify(value))
	return value
}

function init_preference_checkbox(name, initial) {
	var input = document.getElementById(name)
	var value = get_preference(name, initial)
	input.checked = value
	input.onchange = function () {
		_update_preference_checkbox(name)
		close_toolbar_menus()
		on_update()
	}
	document.body.classList.toggle(name, value)
}

function _update_preference_checkbox(name) {
	var input = document.getElementById(name)
	var value = input.checked
	set_preference(name, value)
	document.body.classList.toggle(name, value)
}

function init_preference_radio(name, initial) {
	var value = get_preference(name, initial)
	for (var input of document.querySelectorAll(`input[name="${name}"]`)) {
		if (value === input.value) {
			input.checked = true
			document.body.dataset[name] = value
		} else {
			input.checked = false
		}
		input.onchange = function () {
			_update_preference_radio(name)
			close_toolbar_menus()
			on_update()
		}
	}
}

function _update_preference_radio(name) {
	for (var input of document.querySelectorAll(`input[name="${name}"]`)) {
		if (input.checked) {
			set_preference(name, input.value)
			document.body.dataset[name] = input.value
		}
	}
}

/* LIBRARY */

function array_insert(array, index, item) {
	for (var i = array.length; i > index; --i)
		array[i] = array[i - 1]
	array[index] = item
}

function set_has(set, item) {
	if (set === item)
		return true
	if (!set)
		return false
	var a = 0
	var b = set.length - 1
	while (a <= b) {
		var m = (a + b) >> 1
		var x = set[m]
		if (item < x)
			b = m - 1
		else if (item > x)
			a = m + 1
		else
			return true
	}
	return false
}

function set_add(set, item) {
	var a = 0
	var b = set.length - 1
	// optimize fast case of appending items in order
	if (item > set[b]) {
		set[b+1] = item
		return
	}
	while (a <= b) {
		var m = (a + b) >> 1
		var x = set[m]
		if (item < x)
			b = m - 1
		else if (item > x)
			a = m + 1
		else
			return
	}
	array_insert(set, a, item)
}

function map_get(map, key, missing) {
	if (!map)
		return missing
	let a = 0
	let b = (map.length >> 1) - 1
	while (a <= b) {
		let m = (a + b) >> 1
		let x = map[m << 1]
		if (key < x)
			b = m - 1
		else if (key > x)
			a = m + 1
		else
			return map[(m << 1) + 1]
	}
	return missing
}

function map_for_each(map, f) {
	for (var i = 0; i < map.length; i += 2)
		f(map[i], map[i+1])
}
