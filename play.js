"use strict"

const war_layout = {
	"war_7yw_theater_drawn": [265,0,500,70],
	"war_7yw_theater_1_france": [43,99,114,104],
	"war_7yw_theater_1_britain": [169,99,114,104],
	"war_7yw_theater_2_france": [434,99,114,104],
	"war_7yw_theater_2_britain": [560,99,114,104],
	"war_7yw_theater_3_france": [43,377,114,104],
	"war_7yw_theater_3_britain": [169,377,114,104],
	"war_7yw_theater_4_france": [434,377,114,104],
	"war_7yw_theater_4_britain": [560,377,114,104],
	"war_wss_theater_drawn": [180,0,500,70],
	"war_wss_theater_1_france": [43,99,114,104],
	"war_wss_theater_1_britain": [169,99,114,104],
	"war_wss_theater_2_france": [434,99,114,104],
	"war_wss_theater_2_britain": [560,99,114,104],
	"war_wss_theater_3_france": [43,376,114,104],
	"war_wss_theater_3_britain": [169,378,114,104],
	"war_wss_theater_4_france": [434,377,114,104],
	"war_wss_theater_4_britain": [560,377,114,104],
	"war_was_theater_drawn": [175,0,500,70],
	"war_was_theater_1_france": [43,87,114,104],
	"war_was_theater_1_britain": [169,87,114,104],
	"war_was_theater_2_france": [434,83,114,104],
	"war_was_theater_2_britain": [560,87,114,104],
	"war_was_theater_3_france": [43,334,114,104],
	"war_was_theater_3_britain": [169,334,114,104],
	"war_was_theater_4_france": [434,334,114,104],
	"war_was_theater_4_britain": [560,334,114,104],
	"war_awi_theater_drawn": [170,0,500,70],
	"war_awi_theater_1_france": [43,99,114,104],
	"war_awi_theater_1_britain": [169,99,114,104],
	"war_awi_theater_2_france": [434,332,114,104],
	"war_awi_theater_2_britain": [560,332,114,104],
	"war_awi_theater_3_france": [86,460,114,104],
	"war_awi_theater_3_britain": [225,460,114,104],
	"war_awi_theater_4_france": [433,99,114,104],
	"war_awi_theater_4_britain": [560,99,114,104],
	"war_7yw_theater_1": [27,57,380,270],
	"war_7yw_theater_2": [418,57,379,270],
	"war_7yw_theater_3": [27,335,380,270],
	"war_7yw_theater_4": [418,335,379,270],
	"war_wss_theater_1": [27,57,380,270],
	"war_wss_theater_2": [418,57,379,270],
	"war_wss_theater_3": [27,335,380,270],
	"war_wss_theater_4": [418,335,379,270],
	"war_was_theater_1": [27,50,380,241],
	"war_was_theater_2": [418,50,379,241],
	"war_was_theater_3": [27,300,380,224],
	"war_was_theater_4": [418,300,379,313],
	"war_awi_theater_1": [27,57,380,349],
	"war_awi_theater_2": [418,57,379,223],
	"war_awi_theater_3": [418,290,379,319],
	"war_awi_theater_4": [44,426,332,164],
}

const layout_theater_drawn = [0,638-70,825,70]

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

	define_panel("#events_fr", "panel-events", FRANCE)
	define_panel("#ministry_fr", "panel-ministry", FRANCE)
	define_panel("#advantage_fr", "panel-advantage", FRANCE)

	define_panel("#events_br", "panel-events", BRITAIN)
	define_panel("#ministry_br", "panel-ministry", BRITAIN)
	define_panel("#advantage_br", "panel-advantage", BRITAIN)

	define_panel("#all_ministries", "panel-all-ministries")
	define_panel("#played", "panel-played")
	define_panel("#available_investment_tiles", "panel-available-investments")
	define_panel("#used_investment_tiles", "panel-used-investments")

	define_board("#map", 2550, 1650)

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

		define_space("space", s.num, lout)
			.keyword(space_type_class[s.type])
			.tooltip(s.name)

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

	define_layout("lout-demand", undefined, find_layout_node("Demand"))
	define_layout("lout-navy", undefined, find_layout_node("Navy Box"))
	define_layout("lout-initiative", undefined, find_layout_node("Initiative"))

	define_layout("lout-award", REGION_EUROPE, find_layout_node("Award Europe"))
	define_layout("lout-award", REGION_NORTH_AMERICA, find_layout_node("Award North America"))
	define_layout("lout-award", REGION_CARIBBEAN, find_layout_node("Award Caribbean"))
	define_layout("lout-award", REGION_INDIA, find_layout_node("Award India"))

	define_marker("game-turn", undefined, "square-sm")
	define_marker("victory-points", undefined, "square-sm black")
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

	for (i = 0; i < NUM_SPACES; ++i)
		define_marker("conflict", i, "hex-sm")

	for (a of data.demands) {
		define_marker("demand", a.num)
			.keyword("square-sm")
			.keyword(a.name.toLowerCase())
			.tooltip(a.name)
	}

	for (a of data.awards) {
		define_marker("award", a.num)
			.keyword("square-sm black a" + a.num)
			.tooltip(a.name)
	}

	for (a of data.advantages) {
		var [ x, y, w, h ] = find_layout_node(a.name)
		x = x + w/2
		y = y + h/2
		define_layout("lout-advantage", a.num, make_lout(x, y, 88, 88))
		define_marker("advantage", a.num)
			.keyword("square advantage a" + a.num)
			.tooltip(a.name)
	}

	for (a of data.investments) {
		define_marker("investment", a.num)
			.keyword("square investment i" + a.num)
			.tooltip(a.name)
	}

	for (i = 1; i <= 41; ++i) {
		define_card("event_card", i)
			.keyword("c" + i)
			.tooltip(data.cards[i].name)
	}

	for (i = 1; i <= 26; ++i) {
		define_card("ministry_card", i)
			.keyword("c" + i)
			.tooltip(data.ministries[i].name)
	}

	for (i = 0; i < NUM_BASE_WAR_TILES; ++i) {
		define_marker("basic_war", i+0, "hex fr war-basic" + (i+0))
		define_marker("basic_war", i+16, "hex br war-basic" + (i+16))
	}

	for (i = 0; i < NUM_BONUS_WAR_TILES; ++i) {
		define_marker("bonus_war", (i+0), "hex fr war" + (i+0))
		define_marker("bonus_war", (i+12), "hex br war" + (i+12))
		define_marker("bonus_war", (i+24), "hex fr war" + (i+24))
		define_marker("bonus_war", (i+36), "hex br war" + (i+36))
		define_marker("bonus_war", (i+48), "hex fr war" + (i+48))
		define_marker("bonus_war", (i+60), "hex br war" + (i+60))
		define_marker("bonus_war", (i+72), "hex fr war" + (i+72))
		define_marker("bonus_war", (i+84), "hex br war" + (i+84))
	}

	define_board("#war_wss", 825, 638)
	{
		define_space("theater", 1, war_layout.war_wss_theater_1)
		define_space("theater", 2, war_layout.war_wss_theater_2)
		define_space("theater", 3, war_layout.war_wss_theater_3)
		define_space("theater", 4, war_layout.war_wss_theater_4)
		define_layout("lout-theater-drawn", 0, layout_theater_drawn) // war_layout.war_wss_theater_drawn)
		define_layout("lout-theater", 1, war_layout.war_wss_theater_1_france)
		define_layout("lout-theater", 2, war_layout.war_wss_theater_1_britain)
		define_layout("lout-theater", 3, war_layout.war_wss_theater_2_france)
		define_layout("lout-theater", 4, war_layout.war_wss_theater_2_britain)
		define_layout("lout-theater", 5, war_layout.war_wss_theater_3_france)
		define_layout("lout-theater", 6, war_layout.war_wss_theater_3_britain)
		define_layout("lout-theater", 7, war_layout.war_wss_theater_4_france)
		define_layout("lout-theater", 8, war_layout.war_wss_theater_4_britain)
	}

	define_board("#war_was", 825, 638)
	{
		define_space("theater", 1, war_layout.war_was_theater_1)
		define_space("theater", 2, war_layout.war_was_theater_2)
		define_space("theater", 3, war_layout.war_was_theater_3)
		define_space("theater", 4, war_layout.war_was_theater_4)
		define_layout("lout-theater-drawn", 1, layout_theater_drawn) // war_layout.war_was_theater_drawn)
		define_layout("lout-theater", 9, war_layout.war_was_theater_1_france)
		define_layout("lout-theater", 10, war_layout.war_was_theater_1_britain)
		define_layout("lout-theater", 11, war_layout.war_was_theater_2_france)
		define_layout("lout-theater", 12, war_layout.war_was_theater_2_britain)
		define_layout("lout-theater", 13, war_layout.war_was_theater_3_france)
		define_layout("lout-theater", 14, war_layout.war_was_theater_3_britain)
		define_layout("lout-theater", 15, war_layout.war_was_theater_4_france)
		define_layout("lout-theater", 16, war_layout.war_was_theater_4_britain)
	}

	define_board("#war_7yw", 825, 638)
	{
		define_space("theater", 1, war_layout.war_7yw_theater_1)
		define_space("theater", 2, war_layout.war_7yw_theater_2)
		define_space("theater", 3, war_layout.war_7yw_theater_3)
		define_space("theater", 4, war_layout.war_7yw_theater_4)
		define_layout("lout-theater-drawn", 2, layout_theater_drawn) // war_layout.war_7yw_theater_drawn)
		define_layout("lout-theater", 17, war_layout.war_7yw_theater_1_france)
		define_layout("lout-theater", 18, war_layout.war_7yw_theater_1_britain)
		define_layout("lout-theater", 19, war_layout.war_7yw_theater_2_france)
		define_layout("lout-theater", 20, war_layout.war_7yw_theater_2_britain)
		define_layout("lout-theater", 21, war_layout.war_7yw_theater_3_france)
		define_layout("lout-theater", 22, war_layout.war_7yw_theater_3_britain)
		define_layout("lout-theater", 23, war_layout.war_7yw_theater_4_france)
		define_layout("lout-theater", 24, war_layout.war_7yw_theater_4_britain)
	}

	define_board("#war_awi", 825, 638)
	{
		define_space("theater", 1, war_layout.war_awi_theater_1)
		define_space("theater", 2, war_layout.war_awi_theater_2)
		define_space("theater", 3, war_layout.war_awi_theater_3)
		define_space("theater", 4, war_layout.war_awi_theater_4)
		define_layout("lout-theater-drawn", 3, layout_theater_drawn) // war_layout.war_awi_theater_drawn)
		define_layout("lout-theater", 25, war_layout.war_awi_theater_1_france)
		define_layout("lout-theater", 26, war_layout.war_awi_theater_1_britain)
		define_layout("lout-theater", 27, war_layout.war_awi_theater_2_france)
		define_layout("lout-theater", 28, war_layout.war_awi_theater_2_britain)
		define_layout("lout-theater", 29, war_layout.war_awi_theater_3_france)
		define_layout("lout-theater", 30, war_layout.war_awi_theater_3_britain)
		define_layout("lout-theater", 31, war_layout.war_awi_theater_4_france)
		define_layout("lout-theater", 32, war_layout.war_awi_theater_4_britain)
	}
}

function on_update() {
	var i, r, s, a

	begin_update()

	populate("general-track", V.vp, "victory-points")

	populate("general-track", V.debt[FRANCE], "debt", FRANCE)
	populate("general-track", V.debt_limit[FRANCE], "debt-limit", FRANCE)
	populate("general-track", V.treaty_points[FRANCE], "treaty-points", FRANCE)
	populate("general-track", V.debt[BRITAIN], "debt", BRITAIN)
	populate("general-track", V.debt_limit[BRITAIN], "debt-limit", BRITAIN)
	populate("general-track", V.treaty_points[BRITAIN], "treaty-points", BRITAIN)

	populate("turn-track", V.turn, "game-turn")
	populate("lout-initiative", "initiative", V.initiative)

	populate_with_list("lout-demand", "demand", V.global_demand)

	populate_generic("lout-navy", "marker hex fleet_fr", V.navy_box[FRANCE])
	populate_generic("lout-navy", "marker hex fleet_br", V.navy_box[BRITAIN])

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

		update_keyword("space", s.num, "dirty", set_has(V.dirty, s.num))
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

	if (V.all_ministries)
		populate_with_list("panel-all-ministries", "ministry_card", V.all_ministries)

	populate_with_list("panel-available-investments", "investment", G.available_investments)
	populate_with_list("panel-used-investments", "investment", G.used_investments)

	populate_with_list("panel-ministry", FRANCE, "ministry_card", V.ministry[FRANCE], "card ministry_card deck_fr")
	populate_with_list("panel-ministry", BRITAIN, "ministry_card", V.ministry[BRITAIN], "card ministry_card deck_br")

	populate_with_list("panel-events", FRANCE, "event_card", V.hand[FRANCE], "card event_card deck")
	populate_with_list("panel-events", BRITAIN, "event_card", V.hand[BRITAIN], "card event_card deck")

	map_for_each(V.conflicts, (s, n) => {
		populate("lout-space", s, "conflict", s)
		update_keyword("conflict", s, "plus-one", n > 1)
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

	update_war_display()

	action_button("france", "France")
	action_button("britain", "Britain")

	action_button("confirm", "Confirm")
	action_button("pass", "Pass")

	action_button("draw_event", "Draw Event")
	action_button("construct_squadron", "Construct Squadron")

	action_button("end_action_round", "End Action Round")
	confirm_action_button("confirm_end_action_round", "End Action Round Early", "You still have unspent action points! Confirm ending Action Round early?")
	confirm_action_button("confirm_no_military_upgrade", "End Action Round Early", "You are still eligible for a military upgrade! Confirm ending Action Round early?")

	action_button("done", "Done")

	action_button("undo", "Undo")

	end_update()
}

const war_display = [
	$("#war_wss"),
	$("#war_was"),
	$("#war_7yw"),
	$("#war_awi"),
]

const war_reverse = [
	[
		"marker hex war-wss fr",
		"marker hex war-was fr",
		"marker hex war-7yw fr",
		"marker hex war-awi fr",
	],
	[
		"marker hex war-wss br",
		"marker hex war-was br",
		"marker hex war-7yw br",
		"marker hex war-awi br",
	]
]

function update_war_display() {
	var player, theater, offset
	var war = G.next_war - 1 // make it zero-based

	for (var w = 0; w < NUM_WARS; w++) {
		war_display[w].classList.toggle("hide", war !== w)
	}

	if (war < NUM_WARS) {
		populate_with_list("lout-theater-drawn", war, "basic_war", V.theater_basic_war_tiles[FRANCE][0], "marker hex war-basic fr")
		populate_with_list("lout-theater-drawn", war, "basic_war", V.theater_basic_war_tiles[BRITAIN][0], "marker hex war-basic br")

		populate_with_list( "lout-theater-drawn", war, "bonus_war", V.theater_bonus_war_tiles[FRANCE][0], war_reverse[FRANCE][war])
		populate_with_list("lout-theater-drawn", war, "bonus_war", V.theater_bonus_war_tiles[BRITAIN][0], war_reverse[BRITAIN][war])

		offset = war * 12 + 1
		for (theater = 1; theater <= data.wars[G.next_war].theaters; ++theater) {
			for (player = FRANCE; player <= BRITAIN; ++player) {
				populate_with_list(
					"lout-theater", offset,
					"basic_war", V.theater_basic_war_tiles[player][theater],
					war_reverse[war][player]
				)
				populate_with_list(
					"lout-theater", offset,
					"bonus_war", V.theater_bonus_war_tiles[player][theater],
					war_reverse[war][player]
				)
				++offset
			}
		}
	}
}

function escape_text(text) {
	return escape_typography(text)
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
