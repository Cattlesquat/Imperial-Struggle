"use strict"

const war_layout = {
	war_7yw_theater_drawn: [353, 0, 667, 93],
	war_7yw_theater_1_france: [57, 132, 152, 152],
	war_7yw_theater_1_britain: [225, 132, 152, 152],
	war_7yw_theater_2_france: [579, 132, 152, 152],
	war_7yw_theater_2_britain: [747, 132, 152, 152],
	war_7yw_theater_3_france: [57, 503, 152, 152],
	war_7yw_theater_3_britain: [225, 503, 152, 152],
	war_7yw_theater_4_france: [579, 503, 152, 152],
	war_7yw_theater_4_britain: [747, 503, 152, 152],
	war_wss_theater_drawn: [240, 0, 667, 93],
	war_wss_theater_1_france: [57, 132, 152, 152],
	war_wss_theater_1_britain: [225, 132, 152, 152],
	war_wss_theater_2_france: [579, 132, 152, 152],
	war_wss_theater_2_britain: [747, 132, 152, 152],
	war_wss_theater_3_france: [57, 501, 152, 152],
	war_wss_theater_3_britain: [225, 504, 152, 152],
	war_wss_theater_4_france: [579, 503, 152, 152],
	war_wss_theater_4_britain: [747, 503, 152, 152],
	war_was_theater_drawn: [233, 0, 667, 93],
	war_was_theater_1_france: [57, 116, 152, 152],
	war_was_theater_1_britain: [225, 116, 152, 152],
	war_was_theater_2_france: [579, 111, 152, 152],
	war_was_theater_2_britain: [747, 116, 152, 152],
	war_was_theater_3_france: [57, 445, 152, 152],
	war_was_theater_3_britain: [225, 445, 152, 152],
	war_was_theater_4_france: [579, 445, 152, 152],
	war_was_theater_4_britain: [747, 445, 152, 152],
	war_awi_theater_drawn: [227, 0, 667, 93],
	war_awi_theater_1_france: [57, 132, 152, 152],
	war_awi_theater_1_britain: [225, 132, 152, 152],
	war_awi_theater_2_france: [579, 443, 152, 152],
	war_awi_theater_2_britain: [747, 443, 152, 152],
	war_awi_theater_3_france: [115, 613, 152, 152],
	war_awi_theater_3_britain: [300, 613, 152, 152],
	war_awi_theater_4_france: [577, 132, 152, 152],
	war_awi_theater_4_britain: [747, 132, 152, 152],
	war_7yw_theater_1: [36, 76, 507, 360],
	war_7yw_theater_2: [557, 76, 505, 360],
	war_7yw_theater_3: [36, 447, 507, 360],
	war_7yw_theater_4: [557, 447, 505, 360],
	war_wss_theater_1: [36, 76, 507, 360],
	war_wss_theater_2: [557, 76, 505, 360],
	war_wss_theater_3: [36, 447, 507, 360],
	war_wss_theater_4: [557, 447, 505, 360],
	war_was_theater_1: [36, 67, 507, 321],
	war_was_theater_2: [557, 67, 505, 321],
	war_was_theater_3: [36, 400, 507, 299],
	war_was_theater_4: [557, 400, 505, 417],
	war_awi_theater_1: [36, 76, 507, 465],
	war_awi_theater_2: [557, 76, 505, 297],
	war_awi_theater_3: [557, 387, 505, 425],
	war_awi_theater_4: [59, 568, 443, 219],

	// WSS
	war_wss_theater_1_strength_fr: [42, 400, 50, 25],
	war_wss_theater_1_strength_br: [480, 400, 50, 25],
	war_wss_theater_1_winner: [275, 94, 60, 25],

	war_wss_theater_2_strength_fr: [560, 400, 50, 25],
	war_wss_theater_2_strength_br: [1015, 400, 50, 25],
	war_wss_theater_2_winner: [675, 94, 60, 25],

	war_wss_theater_3_strength_fr: [42, 770, 50, 25],
	war_wss_theater_3_strength_br: [480, 770, 50, 25],
	war_wss_theater_3_winner: [325, 464, 60, 25],

	war_wss_theater_4_strength_fr: [560, 770, 50, 25],
	war_wss_theater_4_strength_br: [1015, 770, 50, 25],
	war_wss_theater_4_winner: [835, 464, 60, 25],

	// WAS
	war_was_theater_1_strength_fr: [42, 360, 50, 25],
	war_was_theater_1_strength_br: [490, 360, 50, 25],
	war_was_theater_1_winner: [275, 94, 60, 25],

	war_was_theater_2_strength_fr: [560, 360, 50, 25],
	war_was_theater_2_strength_br: [1015, 360, 50, 25],
	war_was_theater_2_winner: [675, 94, 60, 25],

	war_was_theater_3_strength_fr: [42, 770, 50, 25],
	war_was_theater_3_strength_br: [490, 770, 50, 25],
	war_was_theater_3_winner: [325, 464, 60, 25],

	war_was_theater_4_strength_fr: [560, 815, 50, 25],
	war_was_theater_4_strength_br: [1030, 815, 50, 25],
	war_was_theater_4_winner: [835, 464, 60, 25],

	// 7YW
	war_7yw_theater_1_strength_fr: [36, 405, 50, 25],
	war_7yw_theater_1_strength_br: [350, 405, 50, 25],
	war_7yw_theater_1_winner: [320, 78, 60, 25],

	war_7yw_theater_2_strength_fr: [557, 405, 50, 25],
	war_7yw_theater_2_strength_br: [870, 405, 50, 25],
	war_7yw_theater_2_winner: [780, 78, 60, 25],

	war_7yw_theater_3_strength_fr: [36, 775, 50, 25],
	war_7yw_theater_3_strength_br: [350, 775, 50, 25],
	war_7yw_theater_3_winner: [380, 448, 60, 25],

	war_7yw_theater_4_strength_fr: [557, 775, 50, 25],
	war_7yw_theater_4_strength_br: [870, 775, 50, 25],
	war_7yw_theater_4_winner: [700, 448, 60, 25],

	// AWI
	war_awi_theater_1_strength_fr: [36, 510, 50, 25],
	war_awi_theater_1_strength_br: [350, 510, 50, 25],
	war_awi_theater_1_winner: [330, 78, 60, 25],

	war_awi_theater_2_strength_fr: [557, 345, 50, 25],
	war_awi_theater_2_strength_br: [870, 345, 50, 25],
	war_awi_theater_2_winner: [700, 78, 60, 25],

	war_awi_theater_3_strength_fr: [557, 780, 50, 25],
	war_awi_theater_3_strength_br: [870, 780, 50, 25],
	war_awi_theater_3_winner: [700, 388, 60, 25],
	}

const layout_theater_drawn = [0, 0, 1800, 70] // Usually one of these at a time. One fairly rare case of 3. So I put them to the right of the name of the map for a bit less scrolling down.

const space_type_class = [
	"political",
	"market",
	"naval",
	"territory",
	"fort",
]

function find_layout_node(name) {
	for (var g in layout.nodes) {
		var rect = layout.nodes[g][name]
		if (rect)
			return rect
	}
	return null
}

function center_rect(xc, yc, w, h) {
	return [xc - w / 2, yc - h / 2, w, h]
}


function has_conflict_marker(s) {
	return get_conflict_marker(s) > 0
}

function get_conflict_marker(s) {
	return map_get(V.conflicts, s, 0)
}

function is_damaged_fort(s) {
	return set_has(V.damaged_forts, s)
}

function region_flag_winner(region) {
	if (V.flag_count[FRANCE][region] > V.flag_count[BRITAIN][region]) return FRANCE
	if (V.flag_count[BRITAIN][region] > V.flag_count[FRANCE][region]) return BRITAIN
	return NONE
}

function region_flag_delta(region) {
	return Math.abs(V.flag_count[FRANCE][region] - V.flag_count[BRITAIN][region])
}

function prestige_winner() {
	if (V.prestige_flags[FRANCE] > V.prestige_flags[BRITAIN]) return FRANCE
	if (V.prestige_flags[BRITAIN] > V.prestige_flags[FRANCE]) return BRITAIN
	return NONE
}

function prestige_flag_delta() {
	return Math.abs(V.prestige_flags[FRANCE] - V.prestige_flags[BRITAIN])
}

function demand_flag_winner(demand) {
	if (V.demand_flag_count[FRANCE][demand] > V.demand_flag_count[BRITAIN][demand]) return FRANCE
	if (V.demand_flag_count[BRITAIN][demand] > V.demand_flag_count[FRANCE][demand]) return BRITAIN
	return NONE
}

function demand_flag_delta(demand) {
	return Math.abs(V.demand_flag_count[FRANCE][demand] - V.demand_flag_count[BRITAIN][demand])
}

function on_ask() {
	return "whee"
}

function space_tooltip(s) {
	var type = data.spaces[s].type
	var typename
	if (type === MARKET) {
		var market = data.spaces[s].market
		if (market !== undefined) {
			typename = data.demands[market].name
		} else {
			typename = "Market"
		}
	} else if (type === POLITICAL) {
		var alliance = (data.spaces[s].alliance !== undefined) && (data.spaces[s].alliance.length > 0)
		var prestige = data.spaces[s].prestige
		if (prestige && !alliance) {
			typename = "Prestige"
		} else if (data.spaces[s].region === REGION_EUROPE) {
			if (prestige) {
				typename = "Prestige + Alliance"
			} else {
				typename = "Alliance"
			}
		} else {
			typename = "Local Alliance"
		}
	} else {
		typename = data.space_types[type].name
	}

	var value
	if ((type !== NAVAL) && (type !== TERRITORY)) {
		value = data.spaces[s].cost
	} else {
		value = 0
	}

	var other = ""
	if (has_conflict_marker(s)) other = "Conflict"
	if (is_damaged_fort(s)) other = "Damaged"

	return bold(data.spaces[s].name) + " " + italic("(" + typename + ((value > 0) ? ": " + value : "") + ")") + ((other !== "") ? ": " + other : "")
}


function space_tooltip_image(s, onoff)
{
	if (onoff) {
		let rect = find_layout_node(data.spaces[s].layout ?? data.spaces[s].name)
		if (!rect) return

		if (data.spaces[s].type === POLITICAL) {
			rect = expand_rect(rect, 30, 30)
			rect[1] -= 10
			rect[3] += 10
		} else {
			rect = expand_rect(rect, 20, 20)
		}

		world.map_tip.hidden = false
		world.map_tip.style.backgroundPosition = "-" + rect[0] + "px -" + rect[1] + "px" //need negative offsets
		world.map_tip.style.width = rect[2] + "px";
		world.map_tip.style.height = rect[3] + "px";
	} else {
		world.map_tip.hidden = true
	}
}


function bizarro_space_tooltip(bs) {

	if ((bs >= AWARD_EUROPE) && (bs <= AWARD_INDIA)) {
		return award_tooltip(bs - AWARD_EUROPE)
	}

	if (bs === NAVY_BOX) {
		return bold(data.bizarro_spaces[bs].name) + ": " + italic("(France: " + V.navy_box[FRANCE] + ", Britain: " + V.navy_box[BRITAIN] + ")")
	}

	return bold(data.bizarro_spaces[bs].name)
}


function current_era() {
	if (V.turn < PEACE_TURN_3) return SUCCESSION_ERA
	if (V.turn < PEACE_TURN_5) return EMPIRE_ERA
	return REVOLUTION_ERA
}


function demand_tooltip(demand) {
	var awards = data.demands[demand].awards[current_era()]
	var awards_string = awards.vp + " VP"
	if (awards.trp > 0) awards_string += ", " + awards.trp + " TRP"
	if (awards.debt !== 0) awards_string += ", " + ((awards.debt > 0) ? "+" : "") + awards.debt + " Debt"
	awards_string += " for most flagged " + data.demands[demand].name + " markets. "
	return bold(data.demands[demand].name) + ": " + italic(awards_string) + bold(data.flags[demand_flag_winner(demand)].name2) + " +" + demand_flag_delta(demand)
}


const demand_columns = [ "1180px", "1266px", "1352px"]
//const demand_rows = [ "223px", "243px", "264px", "284px", "305px", "325px"]
const demand_rows = [ "178px", "198px", "219px", "239px", "260px", "280px"]

function demand_tooltip_image(d, onoff) {
	if (onoff) {
		world.demand_highlight.hidden = false
		world.demand_highlight.style.left = demand_columns[current_era()]
		world.demand_highlight.style.top  = demand_rows[d]

		let winner = demand_flag_winner(d)
		switch (winner) {
			case FRANCE:
				world.demand_highlight.style.borderColor = "skyblue"
				break

			case BRITAIN:
				world.demand_highlight.style.borderColor = "salmon"
				break

			default:
				world.demand_highlight.style.borderColor = "green"
				break
		}

	} else {
		world.demand_highlight.hidden = true
	}
}


function say_event_effect(label, effect, bonus) {

	let text = ""
	if (label !== "") {
		text += label
		text += ": "
	}
	if (effect !== "") {
		text += effect
	}

	if (bonus !== "") {
		text += italic(" (" + bonus + ")")
	}

	return text
}

function event_tooltip(c, who) {
	let msg = bold(data.cards[c].name)

	if (data.cards[c].keylabel !== "") {
		msg += " " + parens(data.cards[c].keylabel)
	}

	msg += ": "

	if ((data.cards[c].label !== "") || (data.cards[c].effect !== "")) {
		msg += say_event_effect(data.cards[c].label, data.cards[c].effect, data.cards[c].bonus)
	} else if (who === FRANCE) {
		msg += say_event_effect(data.cards[c].frenchlabel, data.cards[c].frencheffect, data.cards[c].frenchbonus)
	} else if (who === BRITAIN){
		msg += say_event_effect(data.cards[c].britishlabel, data.cards[c].britisheffect, data.cards[c].britishbonus)
	} else {
		msg += say_event_effect(data.cards[c].frenchlabel, data.cards[c].frencheffect, data.cards[c].frenchbonus)
		msg += " / " + say_event_effect(data.cards[c].britishlabel, data.cards[c].britisheffect, data.cards[c].britishbonus)
	}

	return msg.trim()
}



function ministry_tooltip(m, who) {
	let msg = bold(data.ministries[m].name)

	if (data.ministries[m].keylabel !== "") {
		msg += " " + parens(data.ministries[m].keylabel)
	}

	msg += ": "
	msg += data.ministries[m].effect

	return msg
}


function advantage_tooltip(a) {
	return bold(data.advantages[a].name) + ": " + italic(data.advantages[a].desc)
}

function investment_tooltip(i)
{
	let msg = bold("Investment Tile: ") + data.investments[i].name
	if (V.used_investments.includes(i)) {
		msg += "(Used on previous turn)"
	} else {
		let avail = true
		for (let whom = FRANCE; whom <= BRITAIN; whom++) {
			if (V.played_tiles[whom].includes(i)) {
				msg += italic(" (Chosen by " + data.flags[whom].name + ", action round " + (V.played_tiles[whom].indexOf(i) + 1) + ")")
				avail = false
				break
			}
		}

		if (avail) msg += italic(" (Available)")
	}

	return msg
}

function award_tooltip(region) {
	var award = V.awards[region]
	return bold(data.bizarro_spaces[AWARD_EUROPE + region].name) + ": "
		+ italic(data.awards[award].name + ((region === REGION_EUROPE) ? " for most total flags and +2 VP for most flagged prestige spaces" : " for most total flags"))
		+ ". " + bold(data.flags[region_flag_winner(region)].name2 + " +" + region_flag_delta(region)
			+ ((region === REGION_EUROPE) ? " / " + data.flags[prestige_winner()].name2 + " +" + prestige_flag_delta() : ""))
}

function available_debt_tooltip(who) {
	let msg = bold(data.flags[who].adj + " " + "Available Spending: " + available_debt_plus_trps(who) + ".")
	msg += italic(" (Debt: " + V.debt[who] + ", Debt Limit: " + V.debt_limit[who] + ", Treaty Points: " + V.treaty_points[who] + ")")
	return msg
}


function game_turn_tooltip(x) {
	return bold("Game Turn: ") + data.turns[V.turn].name
}

function vp_tooltip(x) {
	return bold("Victory Points: ") + V.vp
}

function debt_tooltip(who) {
	let msg = bold(data.flags[who].adj + " Debt: ") + V.debt[who]
	msg += italic(" (Debt Limit: " + V.debt_limit[who] + ")")
	return msg
}

function debt_limit_tooltip(who) {
	let msg = bold(data.flags[who].adj + " Debt Limit: ") + V.debt_limit[who]
	msg += italic(" (Current Debt: " + V.debt[who] + ")")
	return msg
}

function treaty_points_tooltip(who) {
	return bold(data.flags[who].adj + " Treaty Points: ") + V.treaty_points[who]
}

function initiative_tooltip(who) {
	return bold("Initiative: ") + data.flags[who].name
}


function basic_war_tooltip(t, who) {
	let msg = bold(data.flags[who].adj + " Basic War Tile: ")

	if (t < 0) {
		msg += "Hidden"
		return msg
	}

	let val = data.basic_war_tiles[t].val
	msg += ((val >= 0) ? "+" + val : val)
	switch (data.basic_war_tiles[t].type) {
		case WAR_DEBT:
			msg += " with Debt"
			break
		case WAR_FORT:
			msg += " with Fort/Fleet"
			break
		case WAR_FLAG:
			msg += " with Flag"
			break
	}
	return msg
}


function bonus_war_tooltip(t, who) {
	let msg = bold(data.flags[who].adj + " Bonus War Tile: ")

	if (t < 0) {
		msg += "Hidden"
		return msg
	}

	let name = data.bonus_war_tiles[t].name
	let val = data.bonus_war_tiles[t].val
	msg += name + " (+" + val
	switch (data.bonus_war_tiles[t].type) {
		case WAR_DEBT:
			msg += " with Debt"
			break
		case WAR_FORT:
			msg += " with Fort/Fleet"
			break
	}
	msg += ")"
	return msg
}



function pad(s, condition = true) {
	if (!condition) return s
	return " " + s + " "
}

function parens(s, condition = true) {
	if (!condition) return s
	return "(" + s + ")"
}

function bold(s, condition = true) {
	if (!condition) return s
	return "<b>" + s + "</b>"
}

function italic(s, condition = true) {
	if (!condition) return s
	return "<i>" + s + "</i>"
}

function strike(s, condition = true) {
	if (!condition) return s
	return "<s>" + s + "</s>"
}


function set_available_debt_tooltips() {
	var id = roles[FRANCE].stat.my_id
	roles[FRANCE].stat.addEventListener("mouseenter", function () {
		world.status.innerHTML = available_debt_tooltip(FRANCE)
	})
	roles[FRANCE].stat.addEventListener("mouseleave", function () {
		world.status.innerHTML = ""
	})

	id = roles[BRITAIN].stat.my_id
	roles[BRITAIN].stat.addEventListener("mouseenter", function () {
		world.status.innerHTML = available_debt_tooltip(BRITAIN)
	})
	roles[FRANCE].stat.addEventListener("mouseleave", function () {
		world.status.innerHTML = ""
	})
}


function on_init() {
	var i, a, s, x, y, w, h, lout

	update_favicon("favicon1.png")

	init_preference_checkbox("noanims", false)
	init_preference_checkbox("noflipsies", false)
	init_preference_checkbox("downanddirty", false)
	init_preference_checkbox("tracksies", true)
	init_preference_checkbox("tipsies", true)

	init_preference_radio("actionverbosity", "medium")

	set_available_debt_tooltips()

	//BR// get_preference("noanims", false) (second argument is the "default" value if it's not set or has been deleted)
	//BR// body[data-noanims="true"] .space.action { non-animated css }

	define_panel("#events_fr", "panel-events", FRANCE)
	define_panel("#ministry_fr", "panel-ministry", FRANCE)
	define_panel("#advantage_fr", "panel-advantage", FRANCE)

	define_panel("#events_br", "panel-events", BRITAIN)
	define_panel("#ministry_br", "panel-ministry", BRITAIN)
	define_panel("#advantage_br", "panel-advantage", BRITAIN)

	define_panel("#all_ministries", "panel-all-ministries")
	define_panel("#played", "panel-played", 0)
	define_panel("#available_investment_tiles", "panel-available-investments")
	define_panel("#used_investment_tiles", "panel-used-investments")

	define_board("#map", 2550, 1650, [24, 24, 24, 24])

	define_stack("lout-jacobite", undefined, [1750, 240, 40, 40], -5, -5)
	define_marker("jacobite-victory", 0, "square-sm jacobite-victory").tooltip("Jacobite Victory")
	define_marker("jacobite-victory", 1, "square-sm jacobite-victory").tooltip("Jacobite Victory")
	define_marker("jacobite-defeat", 0, "square-sm jacobite-defeat").tooltip("Jacobite Defeat")

	for (s of data.spaces) {
		let rect = find_layout_node(s.layout ?? s.name)
		if (!rect) {
			console.error("no layout for " + s.name)
			continue
		}

		if (s.type === POLITICAL)
			rect = resize_rect(rect, 66, 66)
		else if (s.type === MARKET)
			rect = resize_rect(rect, 80, 80)
		else if (s.type === TERRITORY)
			rect = resize_rect(rect, 80, 80)
		else if (s.type === NAVAL || s.type === FORT)
			rect = resize_rect(rect, 92, 92)

		let space_rect = rect.slice()  //BR// I want a separate copy, not the same array
		if (s.type === TERRITORY) {	   //BR// Territory clickbox extends above the space
			space_rect[1] -= 20
			space_rect[3] += 28
		}

		define_space("space", s.num, space_rect)
			.keyword(space_type_class[s.type])
			.tooltip(space_tooltip)
			.tooltip_image(space_tooltip_image)

		if ((s.type === POLITICAL) || (s.type === MARKET)) {
			let conflict_rect = rect.slice()
			if (s.type === MARKET) {
				if ([NORTHEAST_CHANNEL, OSWEGO].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -65, -40) // upper left
				} else if ([PUERTO_RICO, CUBA_PASSAGE_EAST, MARTINIQUE].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -15, -65) // Upper middle
				} else if ([CAICOS, PUERTO_PRINCIPE, TIRUCHIRAPPALLI].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, 32, -40) // Upper right
				} else if ([NIAGARA, HAVANA, ANTIGUA, KURPA].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -65, 20) // lower left
				} else {
					conflict_rect = translate_rect(conflict_rect, 32, 22) // Conflict markers positioning - default lower right
				}
			} else if (s.type === POLITICAL) {
				if ([PRIVATEERS, IRELAND_1, SCOTLAND_1, DUTCH_1, GERMAN_STATES_1, PRUSSIA_3, SPAIN_3, AUSTRIA_3].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -63, 27) // Conflict markers positioning - lower right
				} else if ([PRUSSIA_1, SPAIN_1, BAVARIA].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -63, -55) // Conflict markers positioning - upper left
				} else if ([USA_1].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -63, 27) // Conflict markers positioning - lower left
				} else if ([DUTCH_2].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -15, 50) // Conflict markers positioning - lower middle
				} else if ([AUSTRIA_1].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -15, -68) // Conflict markers positioning - upper middle
				} else if ([SPAIN_2, AUSTRIA_2, PRUSSIA_2].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, 30, -55) // Conflict markers positioning - upper right
				} else {
					conflict_rect = translate_rect(conflict_rect, 30, 27) // Conflict markers positioning - default lower right
				}
			}
			conflict_rect = resize_rect(conflict_rect, 35, 35)     // fit to the counters, at least approximately
			define_space("conflict-space", s.num, conflict_rect).tooltip(space_tooltip).tooltip_image(space_tooltip_image)
		}

		if (s.type === TERRITORY) {
			rect = translate_rect(rect, 0, -38) //BR// Territory markers displayed above the spaces
		} else if (s.type === MARKET) {
			rect = translate_rect(rect, 0, -3) // Move every market flag position up a bit
		} else if (s.type === FORT) {
			rect = translate_rect(rect, -1, -12) // Move every fort flag position up a bunchy (uncover the fort number)

			let damaged_rect = rect.slice()
			damaged_rect = translate_rect(damaged_rect, 40, 37) // Damaged markers
			damaged_rect = resize_rect(damaged_rect, 35, 35)     // fit to the counters, at least approximately
			define_space("fortdamaged", s.num, damaged_rect).tooltip(space_tooltip).tooltip_image(space_tooltip_image)
		}

		define_layout("lout-space", s.num, rect)

		if (s.type === TERRITORY) {
			if ((s.region === REGION_NORTH_AMERICA) || (s.region === REGION_CARIBBEAN)) {
				rect = translate_rect(rect, 35, 75) // Huguenot markers displayed at center of territory
				rect = resize_rect(rect, 51, 51) // fit to the counters
				define_space("huguenots", s.num, rect)
				define_layout("huguenot-space", s.num, rect)
			}
		}
	}

	for (i = -7; i <= 36; ++i) { //NB: Yup, it's -7 through 36, inclusive! Whee!
		define_stack("general-track", i,
			resize_rect(find_layout_node("record track " + i), 49, 49),
			-5, -5,
			0, -50
		)
	}

	for (s of data.turns) {
		define_layout("turn-track", s.num, find_layout_node(s.layout))
	}

	for (s of data.bizarro_spaces) {
		if (s.layout.includes("record track")) continue
		var rect = find_layout_node(s.layout ?? s.name)
		if (!rect) {
			console.log("No layout for Bizarro Space: " + s.name)
			continue
		}

		define_thing("tip-bizarro", s.num).layout(rect).tooltip(bizarro_space_tooltip)
	}

	define_layout("lout-demand", undefined, find_layout_node("Demand"))
	define_layout("lout-navy", undefined, find_layout_node("Navy Box"))
	define_space("navy_box", 0, find_layout_node("Navy Box")).tooltip(() => bizarro_space_tooltip(NAVY_BOX))
	define_layout("lout-initiative", undefined, find_layout_node("Initiative"))

	define_layout("lout-award", REGION_EUROPE, find_layout_node("Award Europe"))
	define_layout("lout-award", REGION_NORTH_AMERICA, find_layout_node("Award North America"))
	define_layout("lout-award", REGION_CARIBBEAN, find_layout_node("Award Caribbean"))
	define_layout("lout-award", REGION_INDIA, find_layout_node("Award India"))

	//define_thing("tip-navy").layout(find_layout_node("Navy Box")).tooltip("Navy Box")
	//define_thing("tip-award", REGION_EUROPE).layout(find_layout_node("Award Europe")).tooltip(award_tooltip)
	//define_thing("tip-award", REGION_NORTH_AMERICA).layout(find_layout_node("Award North America")).tooltip(award_tooltip)
	//define_thing("tip-award", REGION_CARIBBEAN).layout(find_layout_node("Award Caribbean")).tooltip(award_tooltip)
	//define_thing("tip-award", REGION_INDIA).layout(find_layout_node("Award India")).tooltip(award_tooltip)

	define_marker("exhausted", undefined, "square-sm")

	define_marker("game-turn", undefined, "square-sm").tooltip(game_turn_tooltip)
	define_marker("victory-points", undefined, "square-sm black").tooltip(vp_tooltip)
	define_marker("debt", FRANCE, "square-sm fr").tooltip(debt_tooltip)
	define_marker("debt", BRITAIN, "square-sm br").tooltip(debt_tooltip)
	define_marker("debt-limit", FRANCE, "square-sm fr").tooltip(debt_limit_tooltip)
	define_marker("debt-limit", BRITAIN, "square-sm br").tooltip(debt_limit_tooltip)
	define_marker("treaty-points", FRANCE, "square-sm treaty-points-fr").tooltip(treaty_points_tooltip)
	define_marker("treaty-points", BRITAIN, "square-sm treaty-points-br").tooltip(treaty_points_tooltip)
	define_marker("initiative", FRANCE, "square-sm initiative-fr").tooltip(initiative_tooltip)
	define_marker("initiative", BRITAIN, "square-sm initiative-br").tooltip(initiative_tooltip)

	for (i = 0; i < 4; ++i) {
		define_marker("action-br", i, `square-sm action_${i + 1} br`).tooltip(bold("Britain Action Round " + (i + 1)))
		define_marker("action-fr", i, `square-sm action_${i + 1} fr`).tooltip(bold("France Action Round " + (i + 1)))
	}

	for (i = 0; i < NUM_SPACES; ++i) {
		let t = data.spaces[i].type
		if ((t === POLITICAL) || (t === MARKET)) {
			define_marker("conflict", i, "hex-sm").tooltip(bold("Conflict Marker"))
		} else if (t === FORT) {
			define_marker("damaged", i, "hex-sm").tooltip(bold("Fort Damaged Marker"))
		}
	}

	for (a of data.demands) {
		define_marker("demand", a.num)
			.keyword("square-sm")
			.keyword(a.name.toLowerCase())
			.tooltip(demand_tooltip)
			.tooltip_image(demand_tooltip_image)
	}

	for (a of data.awards) {
		define_marker("award", a.num)
			.keyword("square-sm black a" + a.num)
			.tooltip(a.name)
	}

	for (a of data.advantages) {
		var rect = find_layout_node(a.name)
		define_layout("lout-advantage", a.num, resize_rect(rect, 88, 88))
		define_space("advantage", a.num, resize_rect(rect, 88, 88))
			.tooltip(advantage_tooltip)
			.tooltip_image(advantage_tooltip_image)
		let marker = define_marker("advantage", a.num)
			.keyword("square advantage a" + a.num)
			.tooltip(advantage_tooltip)
			.tooltip_image(advantage_tooltip_image)
	}

	for (a of data.investments) {
		define_marker("investment", a.num)
			.keyword("square investment i" + a.num)
			.tooltip(investment_tooltip)
	}

	for (i = 1; i <= 41; ++i) {
		define_card("event_card", i)
			.keyword("c" + i)
			.tooltip(event_tooltip(i))
	}

	for (i = 1; i <= 26; ++i) {
		define_card("ministry_card", i)
			.keyword("c" + i)
			.tooltip(ministry_tooltip(i))
	}

	for (i = 0; i < NUM_BASE_WAR_TILES; ++i) {
		define_marker("basic_war", i + 0, "hex fr war-basic" + (i + 0)).tooltip(basic_war_tooltip(i, FRANCE))
		define_marker("basic_war", i + 16, "hex br war-basic" + (i + 16)).tooltip(basic_war_tooltip(i, BRITAIN))
	}

	for (i = 0; i < NUM_BONUS_WAR_TILES; ++i) {
		define_marker("bonus_war", (i + 0), "hex fr war" + (i + 0)).tooltip(bonus_war_tooltip(i, FRANCE))
		define_marker("bonus_war", (i + 12), "hex br war" + (i + 12)).tooltip(bonus_war_tooltip(i, BRITAIN))
		define_marker("bonus_war", (i + 24), "hex fr war" + (i + 24)).tooltip(bonus_war_tooltip(i, FRANCE))
		define_marker("bonus_war", (i + 36), "hex br war" + (i + 36)).tooltip(bonus_war_tooltip(i, BRITAIN))
		define_marker("bonus_war", (i + 48), "hex fr war" + (i + 48)).tooltip(bonus_war_tooltip(i, FRANCE))
		define_marker("bonus_war", (i + 60), "hex br war" + (i + 60)).tooltip(bonus_war_tooltip(i, BRITAIN))
		define_marker("bonus_war", (i + 72), "hex fr war" + (i + 72)).tooltip(bonus_war_tooltip(i, FRANCE))
		define_marker("bonus_war", (i + 84), "hex br war" + (i + 84)).tooltip(bonus_war_tooltip(i, BRITAIN))
	}

	define_marker("bonus_war", ATLANTIC_DOMINANCE + FRANCE, "hex-sm atlantic-dominance fr").tooltip(bonus_war_tooltip(96, FRANCE))
	define_marker("bonus_war", ATLANTIC_DOMINANCE + BRITAIN, "hex-sm atlantic-dominance br").tooltip(bonus_war_tooltip(97, BRITAIN))

	define_board("#war_wss", 1100, 850)
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
		define_layout("lout-wss-strength-fr", 1, war_layout.war_wss_theater_1_strength_fr)
		define_layout("lout-wss-strength-br", 1, war_layout.war_wss_theater_1_strength_br)
		define_layout("lout-wss-winner", 1,  war_layout.war_wss_theater_1_winner)
		define_layout("lout-wss-strength-fr", 2, war_layout.war_wss_theater_2_strength_fr)
		define_layout("lout-wss-strength-br", 2, war_layout.war_wss_theater_2_strength_br)
		define_layout("lout-wss-winner", 2,  war_layout.war_wss_theater_2_winner)
		define_layout("lout-wss-strength-fr", 3, war_layout.war_wss_theater_3_strength_fr)
		define_layout("lout-wss-strength-br", 3, war_layout.war_wss_theater_3_strength_br)
		define_layout("lout-wss-winner", 3,  war_layout.war_wss_theater_3_winner)
		define_layout("lout-wss-strength-fr", 4, war_layout.war_wss_theater_4_strength_fr)
		define_layout("lout-wss-strength-br", 4, war_layout.war_wss_theater_4_strength_br)
		define_layout("lout-wss-winner", 4,  war_layout.war_wss_theater_4_winner)
	}

	define_board("#war_was", 1100, 850)
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
		define_layout("lout-was-strength-fr", 1, war_layout.war_was_theater_1_strength_fr)
		define_layout("lout-was-strength-br", 1, war_layout.war_was_theater_1_strength_br)
		define_layout("lout-was-winner", 1,  war_layout.war_was_theater_1_winner)
		define_layout("lout-was-strength-fr", 2, war_layout.war_was_theater_2_strength_fr)
		define_layout("lout-was-strength-br", 2, war_layout.war_was_theater_2_strength_br)
		define_layout("lout-was-winner", 2,  war_layout.war_was_theater_2_winner)
		define_layout("lout-was-strength-fr", 3, war_layout.war_was_theater_3_strength_fr)
		define_layout("lout-was-strength-br", 3, war_layout.war_was_theater_3_strength_br)
		define_layout("lout-was-winner", 3,  war_layout.war_was_theater_3_winner)
		define_layout("lout-was-strength-fr", 4, war_layout.war_was_theater_4_strength_fr)
		define_layout("lout-was-strength-br", 4, war_layout.war_was_theater_4_strength_br)
		define_layout("lout-was-winner", 4,  war_layout.war_was_theater_4_winner)
	}

	define_board("#war_7yw", 1100, 850)
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
		define_layout("lout-7yw-strength-fr", 1, war_layout.war_7yw_theater_1_strength_fr)
		define_layout("lout-7yw-strength-br", 1, war_layout.war_7yw_theater_1_strength_br)
		define_layout("lout-7yw-winner", 1,  war_layout.war_7yw_theater_1_winner)
		define_layout("lout-7yw-strength-fr", 2, war_layout.war_7yw_theater_2_strength_fr)
		define_layout("lout-7yw-strength-br", 2, war_layout.war_7yw_theater_2_strength_br)
		define_layout("lout-7yw-winner", 2,  war_layout.war_7yw_theater_2_winner)
		define_layout("lout-7yw-strength-fr", 3, war_layout.war_7yw_theater_3_strength_fr)
		define_layout("lout-7yw-strength-br", 3, war_layout.war_7yw_theater_3_strength_br)
		define_layout("lout-7yw-winner", 3,  war_layout.war_7yw_theater_3_winner)
		define_layout("lout-7yw-strength-fr", 4, war_layout.war_7yw_theater_4_strength_fr)
		define_layout("lout-7yw-strength-br", 4, war_layout.war_7yw_theater_4_strength_br)
		define_layout("lout-7yw-winner", 4,  war_layout.war_7yw_theater_4_winner)
	}

	define_board("#war_awi", 1100, 850)
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
		define_layout("lout-awi-strength-fr", 1, war_layout.war_awi_theater_1_strength_fr)
		define_layout("lout-awi-strength-br", 1, war_layout.war_awi_theater_1_strength_br)
		define_layout("lout-awi-winner", 1,  war_layout.war_awi_theater_1_winner)
		define_layout("lout-awi-strength-fr", 2, war_layout.war_awi_theater_2_strength_fr)
		define_layout("lout-awi-strength-br", 2, war_layout.war_awi_theater_2_strength_br)
		define_layout("lout-awi-winner", 2,  war_layout.war_awi_theater_2_winner)
		define_layout("lout-awi-strength-fr", 3, war_layout.war_awi_theater_3_strength_fr)
		define_layout("lout-awi-strength-br", 3, war_layout.war_awi_theater_3_strength_br)
		define_layout("lout-awi-winner", 3,  war_layout.war_awi_theater_3_winner)
	}

	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		define_marker("squadron-fr", s, "marker hex fleet_fr").tooltip(space_tooltip).tooltip_image(space_tooltip_image)
		define_marker("squadron-br", s, "marker hex fleet_br").tooltip(space_tooltip).tooltip_image(space_tooltip_image)
	}

	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== TERRITORY) continue
		if ((data.spaces[s].region !== REGION_NORTH_AMERICA) && (data.spaces[s].region !== REGION_CARIBBEAN)) continue
		define_marker("huguenots", s, "marker square-sm huguenots").tooltip(bold("Huguenots") + ": increases conquest cost of space by 1. Can be flipped once per game to reduce the economic action cost of a market in the same region by 1.")
		define_marker("huguenots_spent", s, "marker square-sm huguenots_spent").tooltip(bold("Huguenots (Spent)") + ": increases conquest cost of space by 1. Can be refreshed once per game by North American Trade ministry in Revolutionary Era.")
	}

	for (let ships = 0; ships < NUM_SQUADRONS; ships++) {
		define_marker("squadron-fr-navy", ships, "marker hex fleet_fr").tooltip(() => bizarro_space_tooltip(NAVY_BOX))
		define_marker("squadron-br-navy", ships, "marker hex fleet_br").tooltip(() => bizarro_space_tooltip(NAVY_BOX))
	}
}


// True if ministry is presently exhausted
// Some ministries have more than one separately exhaustible ability (in which case can pass a different "ability" number)
function is_ministry_exhausted(who, m, ability = 0) {
	if (!V.ministry[who].includes(m)) return false
	var idx = V.ministry[who].indexOf(m)
	return set_has(V.ministry_exhausted, idx + (ability * NUM_MINISTRY_CARDS))
}

function is_advantage_exhausted(a) {
	return !!(V.advantages_exhausted & (1 << a))
}


function is_ministry_fully_exhausted(who, m) {
	for (let i = 0; i < data.ministries[m].abilities; i++) {
		if (!is_ministry_exhausted(who, m, i)) return false
	}
	return true
}

function is_ministry_partially_exhausted(who, m) {
	for (let i = 0; i < data.ministries[m].abilities; i++) {
		if (is_ministry_exhausted(who, m, i)) return true
	}
	return false
}


function available_debt(who) {
	return G.debt_limit[who] - G.debt[who]
}

function available_debt_plus_trps(who) {
	return available_debt(who) + G.treaty_points[who]
}

function update_debt_display() {
	for (let who = FRANCE; who <= BRITAIN; who++) {
		let avail = available_debt_plus_trps(who)
		roles[who].stat.innerHTML = avail + " Debt + TRPs"
	}
}

function scroll_log_to_end() {
	let div = document.getElementById("log")
	div.scrollTop = div.scrollHeight
}


function on_update() {
	var i, r, s, a

	begin_update()

	if (R === FRANCE) {
		update_favicon("favicon-fr.png")
	} else if (R === BRITAIN) {
		update_favicon("favicon-br.png")
	} else {
		update_favicon("favicon1.png")
	}

	update_debt_display()

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

	let jacobite_count = V.jacobite_victory + (V.jacobite_defeat > 0 ? 1 : 0)

	if (jacobite_count > 0) {
		let offset = (jacobite_count - 1) * 2.5
		update_position("lout-jacobite", undefined, 1750 + offset, 240 + offset)
		
		for (let i = 0; i < V.jacobite_victory; i++) {
			populate("lout-jacobite", "jacobite-victory", i)
		}
		if (V.jacobite_defeat > 0) {
			populate("lout-jacobite", "jacobite-defeat", 0)
		}
	}

	for (i = 0; i < V.navy_box[FRANCE]; i++) {
		populate("lout-navy", "squadron-fr-navy", i)
		document.querySelector(".layout.lout-navy").lastChild.style.cssText = `margin-top:${(i - 2) * -10}px; margin-left:${i * 10}px`
	}

	for (i = 0; i < V.navy_box[BRITAIN]; i++) {
		populate("lout-navy", "squadron-br-navy", i)
		document.querySelector(".layout.lout-navy").lastChild.style.cssText = `margin-top:${(i - 2) * -10}px; margin-left:${i * 10}px`
	}

	for (s of data.spaces) {
		if (s.type === NAVAL) {
			if (V.flags[s.num] === FRANCE)
				populate("lout-space", s.num, "squadron-fr", s.num)
			if (V.flags[s.num] === BRITAIN)
				populate("lout-space", s.num, "squadron-br", s.num)
		} else {
			if (V.flags[s.num] === FRANCE)
				populate_generic("lout-space", s.num, "marker square-sm flag_fr")
			if (V.flags[s.num] === BRITAIN)
				populate_generic("lout-space", s.num, "marker square-sm flag_br")
			if (V.flags[s.num] === SPAIN)
				populate_generic("lout-space", s.num, "marker square-sm flag_spain")
			if (V.flags[s.num] === USA)
				populate_generic("lout-space", s.num, "marker square-sm flag_usa")

			if ((s.type === TERRITORY) && V.huguenots.includes(s.num)) {
				populate("huguenot-space", s.num, (V.huguenots_spent.includes(s.num) ? "huguenots_spent" : "huguenots"), s.num)
			}
		}
		let dirty = set_has(V.dirty, s.num)
		let tracksies = get_preference("tracksies", true)
		update_keyword("space", s.num, "dirty_br", dirty && (V.dirty_who === BRITAIN) && tracksies)
		update_keyword("space", s.num, "dirty_fr", dirty && (V.dirty_who !== BRITAIN) && tracksies)
	}

	let noflipsies = get_preference("noflipsies", false)
	let downanddirty = get_preference("downanddirty", false)

	for (a = 0; a < NUM_ADVANTAGES; ++a) {
		var layout, index, reverse
		if (V.advantages[a] === NONE) {
			layout = "lout-advantage"
			index = a
			reverse = downanddirty || (is_advantage_exhausted(a) && !noflipsies)
		} else {
			layout = "panel-advantage"
			index = V.advantages[a]
			reverse = (is_advantage_exhausted(a) && !noflipsies)
		}
		populate(layout, index, "advantage", a)

		update_keyword("advantage", a, "reverse", reverse)
		update_keyword("advantage", a, "exhausted", is_advantage_exhausted(a) && (noflipsies || (downanddirty && V.advantages[a] === NONE)))
	}

	if (V.all_ministries)
		populate_with_list("panel-all-ministries", "ministry_card", V.all_ministries)

	populate_with_list("panel-available-investments", "investment", G.available_investments)
	populate_with_list("panel-used-investments", "investment", G.used_investments)

	for (let who = FRANCE; who <= BRITAIN; who++) {
		if (!V.ministry) continue
		for (i = 0; i < V.ministry[who].length; ++i) {
			let m = V.ministry[who][i]
			if (m >= 0) {
				populate("panel-ministry", who, "ministry_card", m)
				update_keyword("ministry_card", m, "exhausted", V.ministry_revealed[who][i] && is_ministry_fully_exhausted(who, m))
				update_keyword("ministry_card", m, "partial", V.ministry_revealed[who][i] && is_ministry_partially_exhausted(who, m) && !is_ministry_fully_exhausted(who, m))
				update_keyword("ministry_card", m, "revealed", V.ministry_revealed[who][i] && !is_ministry_partially_exhausted(who, m))
				update_keyword("ministry_card", m, "hidden", !V.ministry_revealed[who][i])

				for (let ability = 0; ability < 2; ability++) {
					update_keyword("ministry_card", m, "exhausted-" + (ability + 1), is_ministry_exhausted(who, m, ability))
				}
				//for (let ability = 0; ability < data.ministries[m].abilities; ability++) {
				//	if (is_ministry_exhausted(who, m, ability)) {
				//		update_keyword("ministry_card", m, "exhausted-" + (ability + 1), true)
				//	}
				//}
			} else {
				populate_generic("panel-ministry", who, "card ministry_card deck_" + ((who === FRANCE) ? "fr" : "br"))
			}
		}
	}

	if (V.hand) {
		populate_with_list("panel-events", FRANCE, "event_card", V.hand[FRANCE], "card event_card deck")
		populate_with_list("panel-events", BRITAIN, "event_card", V.hand[BRITAIN], "card event_card deck")
	}

	//BR// Show any event played THIS action round in the played event slot
	if (V.played_event > 0) {
		populate("panel-played", 0, "event_card", V.played_event, "card event_card deck")
	}

	map_for_each(V.conflicts, (s, n) => {
		populate("conflict-space", s, "conflict", s)
		update_keyword("conflict", s, "plus-one", n > 1)
	})

	for (s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== FORT) continue
		if (is_damaged_fort(s)) {
			populate("fortdamaged", s, "damaged", s)
		}
	}

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

	action_button("paydebt", "Add 1 Debt")
	action_button("paytrp", "Spend 1 Treaty Point")

	action_button("refuse", "Refuse")
	action_button("accept", "Accept")

	action_button("confirm", "Confirm")
	action_button("continue", "Continue")

	confirm_action_button("confirm_pass_to_reduce_debt", "Pass for Debt Reduction", "Confirm passing your entire action round to reduce Debt?")
	confirm_action_button("confirm_pass_usa", "Pass", "You have not converted all eligible territories to USA flags. Confirm passing early?")

	action_button("draw_event", "Draw Event")
	action_button("construct_squadron", "Build Squadron")
	action_button("buy_bonus_war_tile", "Buy War Tile")

	action_button("end_action_round", "End Action Round")
	confirm_action_button("confirm_end_action_round", "End Action Round Early", "You still have unspent action points! Confirm ending Action Round early?")
	confirm_action_button("confirm_no_military_upgrade", "End Action Round Early", "You are still eligible for a military upgrade! Confirm ending Action Round early?")

	action_button("reveal_ministry", "Reveal")
	action_button("dont_reveal_ministry", "Don't Reveal")
	action_button("exhaust_ministry", "Exhaust")
	action_button("dont_exhaust_ministry", "Don't Exhaust")

	action_button("build_squadron", "Build Squadron w/ Discount")
	action_button("discard_event_for_trp", "Discard Event for TRP")
	action_button("increase_debt_limit", "Increase Debt Limit")
	action_button("jacobite_vp", "Score VP")

	action_button("shift_market", "Shift Market")
	action_button("place_conflict_marker", "Place Conflict Marker")
	action_button("diplomatic2", "+2 Diplomatic")
	action_button("economic2", "+2 Economic")
	action_button("scorecotton", "Score Cotton")
	action_button("construct_squadron_now", "Build Squadron Now")
	action_button("defer", "Defer")

	action_button("use_advantage", "Use")
	action_button("dont_use_advantage", "Don't Use")

	action_button("major", "Major")
	action_button("minor", "Minor")

	action_button("return_to_pool", "Return to Pool")
	action_button("remove_from_game", "Remove From Game")

	action_button("pass", "Pass")
	action_button("done", "Done")
	action_button("undo", "Undo")

	if (V.log_hide_after && (V.log_hide_after[R] >= 0)) {
		log_partially_hidden = true
		for (let ix = 0; ix < V.log_length; ix++) {
			//let logline = document.getElementById(ix)
			let logline = world.log.children[ix]
			if (logline) logline.style.display = (ix > V.log_hide_after[R]) ? "none" : "block"
		}

		scroll_log_to_end()
	} else if (log_partially_hidden) { // We don't have to unhide everything every time -- only if we know some part of it was hidden before

		log_partially_hidden = false
		for (let ix = 0; ix < V.log_length; ix++) {
			let logline = document.getElementById(ix)
			if (logline) logline.style.display = "block"
		}

		scroll_log_to_end()
	}

	end_update()
}


var log_partially_hidden = false


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


function set_fallback_tips(fallbacks, tip) {
	for (const f of fallbacks) {
		f.addEventListener("mouseenter", function () {
			world.status.innerHTML = tip
		})
		f.addEventListener("mouseleave", function () {
			world.status.innerHTML = ""
		})
	}
}

function update_war_display() {
	var player, theater, offset
	var war = G.next_war - 1 // make it zero-based

	for (var w = 0; w < NUM_WARS; w++) {
		war_display[w].hidden = (war !== w)
	}

	if (war < NUM_WARS) {
		set_fallback_tips(populate_with_list("lout-theater-drawn", war, "basic_war", V.theater_basic_war_tiles[FRANCE][0], "marker hex war-basic fr"), basic_war_tooltip(-1, FRANCE))
		set_fallback_tips(populate_with_list("lout-theater-drawn", war, "basic_war", V.theater_basic_war_tiles[BRITAIN][0], "marker hex war-basic br"), basic_war_tooltip(-1, BRITAIN))
		set_fallback_tips(populate_with_list("lout-theater-drawn", war, "bonus_war", V.theater_bonus_war_tiles[FRANCE][0], war_reverse[FRANCE][war]), bonus_war_tooltip(-1, FRANCE))
		set_fallback_tips(populate_with_list("lout-theater-drawn", war, "bonus_war", V.theater_bonus_war_tiles[BRITAIN][0], war_reverse[BRITAIN][war]), bonus_war_tooltip(-1, BRITAIN))

		offset = war * 8 + 1
		for (theater = 1; theater <= data.wars[G.next_war].theaters; ++theater) {
			for (player = FRANCE; player <= BRITAIN; ++player) {
				set_fallback_tips(populate_with_list(
					"lout-theater", offset,
					"basic_war", V.theater_basic_war_tiles[player][theater],
					(player === FRANCE) ? "marker hex war-basic fr" : "marker hex war-basic br"
				), basic_war_tooltip(-1, player))

				set_fallback_tips(populate_with_list(
					"lout-theater", offset,
					"bonus_war", V.theater_bonus_war_tiles[player][theater],
					war_reverse[player][war]
				), bonus_war_tooltip(-1, player))

				++offset
			}
		}

		const war_prefix = ["wss", "was", "7yw", "awi"][war]
		const num_theaters = data.wars[G.next_war].theaters

		for (theater = 1; theater <= num_theaters; ++theater) {
			let fr_strength = V.theater_strength ? V.theater_strength[FRANCE][theater] : 0
			let br_strength = V.theater_strength ? V.theater_strength[BRITAIN][theater] : 0

			// Strength FR
			update_keyword(`lout-${war_prefix}-strength-fr`, theater, "theater-strength fr")
			update_text_html(`lout-${war_prefix}-strength-fr`, theater, `<span class="flag"></span><span>${fr_strength}</span>`)

			// Strength BR
			update_keyword(`lout-${war_prefix}-strength-br`, theater, "theater-strength br")
			update_text_html(`lout-${war_prefix}-strength-br`, theater, `<span class="flag"></span><span>${br_strength}</span>`)

			// Winner
			if (V.theater_winner && V.theater_winner[theater] !== -1) {
				let winner = V.theater_winner[theater]
				let margin = V.theater_margin[theater]
				let is_tie = margin === 0
				let flag_class = is_tie ? "tie" : (winner === FRANCE ? "fr" : "br")
				
				update_keyword(`lout-${war_prefix}-winner`, theater, `theater-winner ${flag_class}`)
				update_text_html(`lout-${war_prefix}-winner`, theater, is_tie ? `<span>TIE</span>` : `<span class="flag"></span><span>${margin}</span>`)
				update_show(`lout-${war_prefix}-winner`, theater, true)
			} 
			else {
				update_show(`lout-${war_prefix}-winner`, theater, false)
			}
		}
	}
}

const event_card_names = data.cards.map(x => x?.name)
const ministry_card_names = data.ministries.map(x => x?.name)
const advantage_names = data.advantages.map(x => x?.name)
const demand_names = data.demands.map(x => x?.name)

function escape_text(text) {
	text = escape_event(text, /\bEE(\d+)\b/g, "tip-event-uc", "card event_card c$1", event_card_names, NONE)
	text = escape_event(text, /\bEEF(\d+)\b/g, "tip-event-uc-fr", "card event_card c$1", event_card_names, FRANCE)
	text = escape_event(text, /\bEEB(\d+)\b/g, "tip-event-uc-br", "card event_card c$1", event_card_names, BRITAIN)

	text = escape_ministry(text, /\bMM(\d+)\b/g, "tip-ministry-uc", "card ministry_card c$1", ministry_card_names, NONE)
	text = escape_ministry(text, /\bMMF(\d+)\b/g, "tip-ministry-uc-fr", "card ministry_card c$1", ministry_card_names, FRANCE)
	text = escape_ministry(text, /\bMMB(\d+)\b/g, "tip-ministry-uc-br", "card ministry_card c$1", ministry_card_names, BRITAIN)

	text = escape_advantage(text, /\bAA(\d+)\b/g, "tip-advantage-uc", "square marker advantage a$1", advantage_names, NONE)
	text = escape_advantage(text, /\bAAF(\d+)\b/g, "tip-advantage-uc-fr", "square marker advantage a$1", advantage_names, FRANCE)
	text = escape_advantage(text, /\bAAB(\d+)\b/g, "tip-advantage-uc-br", "square marker advantage a$1", advantage_names, BRITAIN)

	text = escape_demand(text, /\bDD(\d+)\b/g, "tip-demand-uc", "marker square-sm demand $1", demand_names)
	text = escape_demand(text, /\bDDF(\d+)\b/g, "tip-demand-uc-fr", "marker square-sm demand $1", demand_names)
	text = escape_demand(text, /\bDDB(\d+)\b/g, "tip-demand-uc-br", "marker square-sm demand $1", demand_names)

	text = escape_event(text, /\bE(\d+)\b/g, "tip-event", "card event_card c$1", event_card_names, NONE)
	text = escape_event(text, /\bEF(\d+)\b/g, "tip-event-fr", "card event_card c$1", event_card_names, FRANCE)
	text = escape_event(text, /\bEB(\d+)\b/g, "tip-event-br", "card event_card c$1", event_card_names, BRITAIN)

	text = escape_ministry(text, /\bM(\d+)\b/g, "tip-ministry", "card ministry_card c$1", ministry_card_names, NONE)
	text = escape_ministry(text, /\bMF(\d+)\b/g, "tip-ministry-fr", "card ministry_card c$1", ministry_card_names, FRANCE)
	text = escape_ministry(text, /\bMB(\d+)\b/g, "tip-ministry-br", "card ministry_card c$1", ministry_card_names, BRITAIN)

	text = escape_advantage(text, /\bA(\d+)\b/g, "tip-advantage", "square marker advantage a$1", advantage_names, NONE)
	text = escape_advantage(text, /\bAF(\d+)\b/g, "tip-advantage-fr", "square marker advantage a$1", advantage_names, FRANCE)
	text = escape_advantage(text, /\bAB(\d+)\b/g, "tip-advantage-br", "square marker advantage a$1", advantage_names, BRITAIN)

	text = escape_demand(text, /\bD(\d+)\b/g, "tip-demand", "marker square-sm demand $1", demand_names)
	text = escape_demand(text, /\bDF(\d+)\b/g, "tip-demand-fr", "marker square-sm demand $1", demand_names)
	text = escape_demand(text, /\bDB(\d+)\b/g, "tip-demand-br", "marker square-sm demand $1", demand_names)

	text = escape_square_brackets(text)

	return escape_typography(text)
}


function _tip_focus_spending(who) {
	world.status.innerHTML = available_debt_tooltip(who)
}

function _tip_blur_spending() {
	world.status.innerHTML = ""
}


function _tip_focus_award(a, who)
{
	world.tip.setAttribute("class", "square-sm marker award a" + a)
	position_tip_image()
	world.tip.hidden = false

	for (let region = 0; region < NUM_REGIONS; region++) {
		if (V.awards[region] === a) world.status.innerHTML = award_tooltip(region)
	}
}

function _tip_blur_award() {
	world.tip.hidden = true
	world.status.innerHTML = ""
}


function _tip_focus_investment(i, who)
{
	world.tip.setAttribute("class", "square marker investment i" + i)
	position_tip_image()
	world.tip.hidden = false

	world.status.innerHTML = investment_tooltip(i)
}

function _tip_blur_investment() {
	world.status.innerHTML = ""
	world.tip.hidden = true
}

function is_digit(c) {
	return (c >= '0') && (c <= '9')
}


function escape_square_brackets(text) {
	let runaway = 0
	let match = ""

	do {
		match = text.match(/\[.*?]/) // Get the whole expression including the brackets
		if (match) {
			let inside = match[0].match(/\[(.*?)]/) // Get the inside-the-brackets bit.
			let type = inside[1][0]                 // First character tells us what type of thing (S = Spending, A = Award, I = Investment, P = action points)

			if (type === "P") {
				let action_text = say_action_points()
				text = text.replace(/\[.*?]/, action_text)
				break; // Gonna cheat and break here, because I only use this at the end of strings. Sorry, future-self-using-it-somewhere-else...
			}

			let key = inside[1][1]                  // Second character tells us what nation color to use, if any
			let msg = inside[1].slice(2)            // Rest of string is the message
			let value = 0

			if (["I", "W", "S"].includes(type)) {	// Some items encode a three digit number
				if (is_digit(msg[0])) {
					value = msg[0] - '0'
					msg = msg.substring(1)
					if (is_digit(msg[0])) {
						value = value * 10 + (msg[0] - '0')
						msg = msg.substring(1)
						if (is_digit(msg[0])) {
							value = value * 10 + (msg[0] - '0')
							msg = msg.substring(1)
						}
					}
				}
			}

			let who = (key === "F") ? FRANCE : (key === "B") ? BRITAIN : NONE

			let tooltip_text = ""
			let className = ""
			switch (type) {
				case "I":
					className = "tip-investment"
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_investment(${value}, ${who})"
						onmouseleave="_tip_blur_investment()"
						>${escape_typography(msg)}</span>`
					break
				case "W":
					className = "tip-award"
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_award(${value}, ${who})"
						onmouseleave="_tip_blur_award()"
						>${escape_typography(msg)}</span>`
					break
				case "S":
					className = "tip-space"
					msg = data.spaces[value].name
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_space(${who}, ${value})"
						onmouseleave="_tip_blur_space()"
						>${escape_typography(msg)}</span>`
					break
				case "$":
				default:
					className = "tip-spending"
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_spending(${who})"
						onmouseleave="_tip_blur_spending()"
						>${escape_typography(msg)}</span>`
					break
			}

			className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
			text = text.replace(/\[.*?]/, tooltip_text)
		}

		if (++runaway > 500) {
			throw new Error("Runaway Square Brackets escape sequence: " + text.slice(0, 40))
		}
	} while (match)

	return text
}


function demand_name(d) {
	return data.demands[d].name.toLowerCase() // Eventually different treatments by era, but for now...
}

function escape_tip_class_sub_function(text, re, log_className, tip_className, names, func) {
	return text.replace(re, (m, x) => `<span
		class="${log_className}"
		onmouseenter="_tip_focus_class('${tip_className.replace("$1", func(x))}')"
		onmouseleave="_tip_blur_class()"
		>${escape_typography(names[x])}</span>`
	)
}


function position_tip_image() {
	let tipsies = get_preference("tipsies", true)
	if (tipsies) {
		world.tip.style.left = "0px"
		world.tip.style.bottom = "25px"
		world.tip.style.display = "flex"
		world.tip.style.right = ""
		world.tip.style.top = ""
	} else {
		world.tip.style.left = ""
		world.tip.style.bottom = ""
		world.tip.style.display = "block"
		world.tip.style.right = "240px"
		world.tip.style.top = "60px"
	}
}

function _tip_focus_class(name) {
	world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = false
}

function _tip_blur_class(action, id) {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
}


function _tip_focus_demand(d, name) {
	world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = false
	world.status.innerHTML = demand_tooltip(d)
	demand_tooltip_image(d, true)
}

function _tip_blur_demand(action, id) {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.status.innerHTML = ""
	demand_tooltip_image(0, false)
}

function escape_demand(text, re, log_className, tip_className, names) {
	return text.replace(re, (m, x) => `<span
		class="${log_className}"
		onmouseenter="_tip_focus_demand('${x}', '${tip_className.replace("$1", demand_name(x))}')"
		onmouseleave="_tip_blur_demand()"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_event(who, c, name) {
	world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = false
	world.status.innerHTML = event_tooltip(c, who)
}

function _tip_blur_event(action, id) {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.status.innerHTML = ""
}

function escape_event(text, re, log_className, tip_className, names, who) {
	return text.replace(re, (m, x) => `<span
		class="${log_className}"
		onmouseenter="_tip_focus_event('${who}', '${x}', '${tip_className.replace("$1", x)}')"
		onmouseleave="_tip_blur_event()"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_ministry(who, m, name) {
	world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = false
	world.status.innerHTML = ministry_tooltip(m, who)
}

function _tip_blur_ministry(action, id) {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.status.innerHTML = ""
}

function escape_ministry(text, re, log_className, tip_className, names, who) {
	return text.replace(re, (m, x) => `<span
		class="${log_className}"
		onmouseenter="_tip_focus_ministry('${who}', '${x}', '${tip_className.replace("$1", x)}')"
		onmouseleave="_tip_blur_ministry()"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_advantage(who, a, name) {
	//world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = false
	world.status.innerHTML = advantage_tooltip(a)

	// Show BOTH sides of the marker
	world.tip.innerHTML = `		
		<div class="marker square advantage a${a} reverse advantage-back"></div>
		<div class="marker square advantage a${a} advantage-front"></div>		`
}

function _tip_blur_advantage(action, id) {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.status.innerHTML = ""
}


function escape_advantage(text, re, log_className, tip_className, names, who) {
	return text.replace(re, (m, x) => `<span
		class="${log_className}"
		onmouseenter="_tip_focus_advantage('${who}', '${x}', '${tip_className.replace("$1", x)}')"
		onmouseleave="_tip_blur_advantage()"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_space(who, s, name) {
	world.tip.hidden = false
	space_tooltip_image(s, true)
	position_tip_image()
	world.status.innerHTML = space_tooltip(s)
}

function _tip_blur_space(action, id) {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.status.innerHTML = ""
}



function on_prompt(text) {
	if (text === null) {
		console.error("V.prompt is NULL")
		return "V.prompt is NULL"
	}
	return escape_text(text)
}


const log_box_keywords = ["fr", "br", "both"]
const log_box_types = { "1": "ministry", "2": "event", "3": "advantage", "4": "misc" }

function on_log(text, ix) {
	var p = document.createElement("div")

	update_log_boxes(ix)

	if (text.startsWith("=br")) {
		text = text.substring(3)
		p.className = "h2 br"
	}

	if (text.startsWith("=fr")) {
		text = text.substring(3)
		p.className = "h2 fr"
	}

	switch (text[0]) {
		case "{":
			p.classList.add("header")
			let keyword = log_box_keywords[text[1]] + "-" + log_box_types[text[2]]
			open_log_box(ix, keyword)
			text = text.substring(3)
			break
		case "}":
			close_log_box(ix)
			text = text.substring(1)
			break
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

	if (text.match(/^\.h1/)) {
		text = text.substring(4)
		p.className = 'h1'
	}
	if (text.match(/^\.h2/)) {
		text = text.substring(4)
		p.className = 'h2'
	}
	if (text.match(/^\.h3/)) {
		text = text.substring(4)
		p.className = "h3"
	}

	apply_log_boxes(ix, p, "group")

	//p.setAttribute("id", ix) // So we can find it later
	p.innerHTML = escape_text(text)
	return p
}


// DEBUG KEYS
//TODO take out :)
window.addEventListener("keydown", function (evt) {
	if (document.activeElement instanceof HTMLInputElement)
		return
	if (document.activeElement instanceof HTMLTextAreaElement)
		return
	if (evt.altKey || evt.ctrlKey)
		return
	switch (evt.key) {
		case "f":
		case "F":
			send_message("action", ["frenchify", null, game_cookie])
			evt.preventDefault()
			break
		case "b":
		case "B":
			send_message("action", ["britify", null, game_cookie])
			evt.preventDefault()
			break
		case "r":
		case "R":
			send_message("action", ["cheatrefresh", null, game_cookie])
			evt.preventDefault()
			break
		case " ":
		case "X":
		case "x":
			if (window.location.search.includes("France")) {
				window.location.search = window.location.search.replace("France", "Britain")
			} else {
				window.location.search = window.location.search.replace("Britain", "France")
			}
			evt.preventDefault()
			break
		case "h":
			send_message("action", ["cheat_huguenots", null, game_cookie])
			break;
		case "o":
			send_message("action", ["cheat_conflict", null, game_cookie])
			break;
		case "d":
		case "y":
			send_message("action", ["cheat_damage", null, game_cookie])
			break;
		case "c":
			send_message("action", ["cheat_cheat", null, game_cookie])
			break;
	}
})


function advantage_tooltip_image(a, onoff) {
	if (onoff) {
		on_focus_advantage_tip(a)
	} else {
		on_blur_advantage_tip()
	}
}

function on_focus_advantage_tip(a) {
	world.tip.hidden = false

	// Show BOTH sides of the marker
	world.tip.innerHTML = `
		<div class="marker square advantage a${a} reverse advantage-back"></div>
		<div class="marker square advantage a${a} advantage-front"></div>	`
}

function on_blur_advantage_tip() {
	world.tip.hidden = true
	world.tip.innerHTML = ""
}

function advantage_class_name(a) {
	return `advantage.a${a}`
}


// True if ANY contingent action points of the specified type (ECON, DIPLO, MIL) theoretically available based on array of rules we're eligible for (or a single rule). Even if we've spent it all we can still use debt/TRPs in that category.
function any_contingent(type, rules) {
	if ((rules !== undefined) && (rules !== null)) {
		if (rules.constructor === Array) {
			for (let rule of rules) {
				for (let i = 0; i < G.action_points_contingent.length; i++) {
					if (G.action_points_contingent[i].type !== type) continue
					if (G.action_points_contingent[i].rule !== rule) continue
					return true
				}
			}
		} else {
			for (let i = 0; i < G.action_points_contingent.length; i++) {
				if (G.action_points_contingent[i].type !== type) continue
				if (G.action_points_contingent[i].rule !== rules) continue
				return true
			}
		}
	}
	return false
}


// Amount of contingent action points of the specified type (ECON, DIPLO, MIL) available based on array of rules we're eligible for (or a single rule)
function get_contingent(type, rules)
{
	let amount = 0
	if ((rules !== undefined) && (rules !== null)) {
		if (rules.constructor === Array) {
			for (let rule of rules) {
				for (let i = 0; i < G.action_points_contingent.length; i++) {
					if (G.action_points_contingent[i].type !== type) continue
					if (G.action_points_contingent[i].rule !== rule) continue
					amount += G.action_points_contingent[i].amount
				}
			}
		} else {
			for (let i = 0; i < G.action_points_contingent.length; i++) {
				if (G.action_points_contingent[i].type !== type) continue
				if (G.action_points_contingent[i].rule !== rules) continue
				amount += G.action_points_contingent[i].amount
			}
		}
	}
	return amount
}


function action_points_eligible(type, rules = []) {
	return G.action_points_eligible[type] || any_contingent(type, rules)
}

// Returns a list of all presently-active contingent action point rules
function active_rules() {
	let rules = []
	for (const contingency of G.action_points_contingent) {
		rules.push(contingency.rule)
	}
	return rules
}


function active_rules_list() {
	let rules = []
	for (const contingency of G.action_points_contingent) {
		rules.push( { "rule": contingency.rule, "short": contingency.short } )
	}
	return rules
}


function is_action_phase()
{
	if (V === undefined) return false
	return V.action_round_subphase !== NOT_ACTION_PHASE
}


function say_action_points(space = true, brackets = true) {

	if (!is_action_phase()) return ""
	if (G.action_round_subphase < PICKED_TILE_OPTION_TO_PASS) return ""

	let verbose = get_preference("actionverbosity", "medium")
	let names = []
	let shortest = (verbose === "short")
	for (i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
		if (verbose === "short") {
			names[i] = data.action_points[i].letter
		} else if (verbose === "long") {
			names[i] = data.action_points[i].name
		} else {
			names[i] = data.action_points[i].short
		}
	}


	var need_comma = false;
	var early = [ false, false, false ]
	var tell = ""
	for (var level = MAJOR; level <= MINOR; level++) {
		for (var i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
			if (G.action_points_eligible === undefined) continue
			if (action_points_eligible(i, active_rules())) {
				if ((level === MAJOR) && G.action_points_eligible_major[i]) {

					if (need_comma) {
						tell += ", "
					}
					tell += names[i] + (shortest ? "" : ": ")
					need_comma = true;

					tell += G.action_points_major[i] //+ " major"
					if (G.action_points_minor[i]) {
						tell += shortest ? "M," : " Major, " // only explicitly say Major if we also have Minor
						early[i] = true
					}
				}

				if ((level === MAJOR) === early[i]) {
					if ((G.action_points_minor[i] || !G.action_points_eligible_major[i])) {
						if (level === MINOR) {
							if (need_comma) {
								tell += ", "
							}
							tell += names[i] + (shortest ? "" : ": ")
						}

						tell += G.action_points_minor[i] + (shortest ? "m" : " Minor")
						need_comma = true;
					}

					if (G.action_points_committed_bonus[i] > 0) {
						if (need_comma) {
							tell += ", "
						}
						tell += G.action_points_committed_bonus[i] + " Bonus"
						need_comma = true;
					}

					for (let rule of active_rules_list()) {
						let amount = get_contingent(i, rule.rule)
						if (any_contingent(i, rule.rule)) {
							if (need_comma) tell += ", "
							tell += amount + " " + (shortest ? rule.short : rule.rule)
							need_comma = true
						}
					}
				}
			}
		}
	}

	if (tell === "") return tell
	if (brackets) tell = "(" + tell + ")"
	if (space) tell = " " + tell
	return italic(tell)


	//console.log (get_preference("actionverbosity", "medium"))
}



