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
	war_wss_theater_3_france: [57, 504, 152, 152],
	war_wss_theater_3_britain: [225, 504, 152, 152],
	war_wss_theater_4_france: [579, 503, 152, 152],
	war_wss_theater_4_britain: [747, 503, 152, 152],
	war_was_theater_drawn: [233, 0, 667, 93],
	war_was_theater_1_france: [57, 116, 152, 152],
	war_was_theater_1_britain: [225, 116, 152, 152],
	war_was_theater_2_france: [578, 116, 152, 152],
	war_was_theater_2_britain: [746, 116, 152, 152],
	war_was_theater_3_france: [57, 445, 152, 152],
	war_was_theater_3_britain: [225, 445, 152, 152],
	war_was_theater_4_france: [578, 439, 152, 152],
	war_was_theater_4_britain: [746, 439, 152, 152],
	war_awi_theater_drawn: [227, 0, 667, 93],
	war_awi_theater_1_france: [57, 132, 152, 152],
	war_awi_theater_1_britain: [225, 132, 152, 152],
	war_awi_theater_2_france: [579, 132, 152, 152],
	war_awi_theater_2_britain: [747, 132, 152, 152],
	war_awi_theater_3_france: [579, 443, 152, 152],
	war_awi_theater_3_britain: [747, 443, 152, 152],
	war_awi_theater_4_france: [577, 132, 152, 152],
	war_awi_theater_4_britain: [747, 132, 152, 152],
	war_7yw_theater_1: [36, 76, 507, 360],
	war_7yw_theater_2: [550, 76, 505, 360],
	war_7yw_theater_3: [36, 447, 507, 360],
	war_7yw_theater_4: [550, 447, 505, 360],
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

	// WSS - Strength
	war_wss_theater_1_strength_fr: [42, 400, 50, 25],
	war_wss_theater_1_strength_br: [480, 400, 50, 25],
	war_wss_theater_2_strength_fr: [560, 400, 50, 25],
	war_wss_theater_2_strength_br: [1015, 400, 50, 25],
	war_wss_theater_3_strength_fr: [42, 770, 50, 25],
	war_wss_theater_3_strength_br: [480, 770, 50, 25],
	war_wss_theater_4_strength_fr: [560, 770, 50, 25],
	war_wss_theater_4_strength_br: [1015, 770, 50, 25],

	// WSS - Winner
	war_wss_theater_1_winner: [290, 94, 60, 25],
	war_wss_theater_2_winner: [690, 94, 60, 25],
	war_wss_theater_3_winner: [340, 464, 60, 25],
	war_wss_theater_4_winner: [850, 464, 60, 25],

	// WSS - Alliances
	war_wss_theater_1_alliances: [500, 142, 50, 152],
	war_wss_theater_2_alliances: [1022, 160, 50, 152],
	war_wss_theater_3_alliances: [500, 527, 50, 152],
	war_wss_theater_4_alliances: [1022, 510, 50, 152],

	// WAS - Strength
	war_was_theater_1_strength_fr: [42, 360, 50, 25],
	war_was_theater_1_strength_br: [490, 360, 50, 25],
	war_was_theater_2_strength_fr: [560, 360, 50, 25],
	war_was_theater_2_strength_br: [1015, 360, 50, 25],
	war_was_theater_3_strength_fr: [40, 670, 50, 25],
	war_was_theater_3_strength_br: [492, 670, 50, 25],
	war_was_theater_4_strength_fr: [560, 815, 50, 25],
	war_was_theater_4_strength_br: [1030, 815, 50, 25],

	// WAS - Winner
	war_was_theater_1_winner: [295, 82, 60, 25],
	war_was_theater_2_winner: [865, 82, 60, 25],
	war_was_theater_3_winner: [335, 413, 60, 25],
	war_was_theater_4_winner: [865, 413, 60, 25],

	// WAS - Alliances
	war_was_theater_1_alliances: [500, 122, 50, 152],
	war_was_theater_2_alliances: [1022, 142, 50, 152],
	war_was_theater_3_alliances: [500, 471, 50, 152],
	war_was_theater_4_alliances: [1022, 445, 50, 152], 

	// 7YW - Strength
	war_7yw_theater_1_strength_fr: [42, 405, 50, 25],
	war_7yw_theater_1_strength_br: [490, 405, 50, 25],
	war_7yw_theater_2_strength_fr: [560, 405, 50, 25],
	war_7yw_theater_2_strength_br: [1015, 405, 50, 25],
	war_7yw_theater_3_strength_fr: [42, 775, 50, 25],
	war_7yw_theater_3_strength_br: [480, 775, 50, 25],
	war_7yw_theater_4_strength_fr: [560, 775, 50, 25],
	war_7yw_theater_4_strength_br: [1015, 775, 50, 25],

	// 7YW - Winner
	war_7yw_theater_1_winner: [355, 94, 60, 25],
	war_7yw_theater_2_winner: [875, 94, 60, 25],
	war_7yw_theater_3_winner: [355, 465, 60, 25],
	war_7yw_theater_4_winner: [810, 465, 60, 25],

	// 7YW - Alliances
	war_7yw_theater_1_alliances: [518, 147, 50, 152],
	war_7yw_theater_2_alliances: [1022, 150, 50, 152],
	war_7yw_theater_3_alliances: [533, 514, 50, 152],
	war_7yw_theater_4_alliances: [1022, 522, 50, 152],

	// AWI - Strength
	war_awi_theater_1_strength_fr: [36,  508, 50, 25],
	war_awi_theater_1_strength_br: [495, 508, 50, 25],
	war_awi_theater_2_strength_fr: [560,  343, 50, 25],
	war_awi_theater_2_strength_br: [1015, 343, 50, 25],
	war_awi_theater_3_strength_fr: [560, 780, 50, 25],
	war_awi_theater_3_strength_br: [1010, 780, 50, 25],

	// AWI - Winner
	war_awi_theater_1_winner: [355, 93, 60, 25],
	war_awi_theater_2_winner: [780, 93, 60, 25],
	war_awi_theater_3_winner: [780, 404, 60, 25],

	// AWI - Alliances
	war_awi_theater_1_alliances: [502,  144, 50, 152],
	war_awi_theater_2_alliances: [1037, 164, 50, 152],
	war_awi_theater_3_alliances: [1032, 442, 50, 152],
	war_awi_theater_4_alliances: [1022, 510, 50, 152],
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

	if (type === NAVAL) {
		if (V.flags[s] !== NONE) {
			other = bold(data.flags[V.flags[s]].adj + " Squadron")
			if (set_has(V.dirty, s)) {
				other += italic(" (already moved this round)")
			}
		}
	} else if (V.flags[s] !== NONE) {
		other = bold(data.flags[V.flags[s]].adj + " Flag")
	}

	if (has_conflict_marker(s)) other += ((other !== "") ? ". " : "") + bold("Conflict.")
	if (is_damaged_fort(s)) other += ((other !== "") ? ". " : "") + bold("Damaged.")

	return bold(data.spaces[s].name) + " " + italic("(" + typename + ((value > 0) ? ": " + value : "") + ")") + ((other !== "") ? ": " + other : "")
}


function space_tooltip_image(s, onoff)
{
	if (onoff && !is_mobile()) {
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
	if (onoff && !is_mobile()) {
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
		text += bold(italic(escape_square_brackets(label)))
		text += ": "
	}
	if (effect !== "") {
		text += escape_square_brackets(effect)
	}

	if (bonus !== "") {
		text += italic(" (" + escape_square_brackets(bonus) + ")")
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
	} else {
		if ((who === undefined) && ((R === FRANCE) || (R === BRITAIN))) {
			if (V.hand[R].includes(c)) who = R
			if (V.played_event === c) {
				who = V.active
			}
		}

		if (who === FRANCE) {
			msg += say_event_effect(data.cards[c].frenchlabel, data.cards[c].frencheffect, data.cards[c].frenchbonus)
		} else if (who === BRITAIN){
			msg += say_event_effect(data.cards[c].britishlabel, data.cards[c].britisheffect, data.cards[c].britishbonus)
		} else {
			msg += say_event_effect(data.cards[c].frenchlabel, data.cards[c].frencheffect, data.cards[c].frenchbonus)
			msg += " / " + say_event_effect(data.cards[c].britishlabel, data.cards[c].britisheffect, data.cards[c].britishbonus)
		}
	}

	return msg.trim()
}



function ministry_tooltip(m, who) {
	let msg = bold(data.ministries[m].name)

	if (data.ministries[m].keylabel !== "") {
		msg += " " + parens(data.ministries[m].keylabel)
	}

	msg += ": "
	msg += escape_square_brackets(data.ministries[m].effect)

	return msg
}


function advantage_tooltip(a) {
	let msg = bold(data.advantages[a].name) + ": " + italic(escape_square_brackets(data.advantages[a].desc) + ".")

	if (is_advantage_exhausted(a)) {
		msg += bold(" EXHAUSTED")
	} else if (is_advantage_conflicted(a)) {
		msg += bold(" CONFLICT MARKER - cannot use advantage.")
	} else if ((whose_advantage(a) === V.active) && (V.action_round_subphase !== NOT_ACTION_PHASE)) {
		if (V.action_round_subphase < PICKED_TILE_OPTION_TO_PASS) {
			msg += bold(" Must pick investment tile before using advantages.")
		} else if (V.advantages_used_this_round >= 2) {
			msg += bold(" You have already used two advantages this round (see 8.2)")
		} else if (V.advantage_regions & (1 << get_advantage_region(a))) {
			msg += bold(" You have already used an advantage in the same region this round (see 8.2)")
		} else if (V.advantages_newly_acquired & (1 << a)) {
			msg += bold(" Cannot use an advantage you just acquired (see 8.0)")
		}
	}

	return msg
}

function investment_tooltip(i)
{
	let msg = bold("Investment Tile: ") + data.investments[i].name
	if (V.used_investments.includes(i)) {
		msg += " (Used on previous turn)"
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
		+ ". " + ((region === REGION_EUROPE) ? bold("Flags " ) : "") + bold(data.flags[region_flag_winner(region)].name2 + " +" + region_flag_delta(region)
			+ ((region === REGION_EUROPE) ? " / Prestige " + data.flags[prestige_winner()].name2 + " +" + prestige_flag_delta() : ""))
}

function available_debt_tooltip(who) {
	let msg = bold(data.flags[who].adj + " " + "Available Spending: " + available_debt_plus_trps(who) + ".")
	msg += italic(" (Debt: " + V.debt[who] + ", Debt Limit: " + V.debt_limit[who] + ", Treaty Points: " + V.treaty_points[who] + ")")
	return msg
}


function game_turn_tooltip(x) {
	let tip = bold ("Current Game Turn: ")
	if (data.turns[G.turn].war) {
		tip += data.turns[G.turn].name
	} else {
		tip += data.turns[G.turn].id + " - PEACE"
	}
	tip += " " + italic(parens(data.turns[G.turn].dates))
	return tip
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

function townshend_tooltip(who) {
	return bold("Townshend Acts") + " " + italic(parens(data.demands[V.townshend_acts].name)) + ": British minor action can be used to unflag this demand's markets."
}

function jacobite_victory_tooltip() {
	return bold("Jacobite Victory: ") + "+1 VP when using Jacobite Uprisings ministry."
}

function jacobite_defeat_tooltip() {
	return bold("Jacobite Defeat: ") + "No more Jacobite Uprisings for rest of game."
}




function basic_war_tooltip(t, who) {
	let msg = bold(data.flags[who].adj + " Basic War Tile: ")
	let msg2 = ""

	if (t < 0) {
		msg += "Hidden"
		return msg
	}

	let val = data.basic_war_tiles[t].val
	msg += ((val >= 0) ? "+" + val : val)
	switch (data.basic_war_tiles[t].type) {
		case WAR_DEBT:
			msg += " with Debt"
			msg2 = data.flags[1-who].name + " must spend one debt"
			break
		case WAR_FORT:
			msg += " with Fort/Fleet"
			msg2 = data.flags[1-who].name + " must damage one of its forts or retire a squadron"
			break
		case WAR_FLAG:
			msg += " with Flag"
			msg2 = data.flags[who].name + " unflags a " + data.flags[1-who].adj + " market or political space"
			break
	}
	if (msg2 !== "") {
		msg += " " + italic(parens(msg2))
	}
	return msg
}


function bonus_war_tooltip(t, who) {
	let msg = bold(data.flags[who].adj + " Bonus War Tile: ")
	let msg2 = ""

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
			msg2 = data.flags[1-who].name + " must spend one debt"
			break
		case WAR_FORT:
			msg += " with Fort/Fleet"
			msg2 = data.flags[1-who].name + " must damage one of its forts or retire a squadron"
			break
	}
	if (msg2 !== "") {
		msg += ". " + italic(msg2)
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


// Returns an "s" if the amount is anything but 1; returns "" if amount is one
function s(amount) {
	if (amount !== 1) return "s"
	return ""
}

// Returns "a " if the amount is exactly 1; returns "" if amount is any other value
function a(amount) {
	if (amount === 1) return "a "
	return ""
}

// Returns "an " if the amount is exactly 1; returns "" if amount is any other value
function an(amount) {
	if (amount === 1) return "an "
	return ""
}



function set_available_debt_tooltips() {
	var id = roles[FRANCE].stat.my_id
	roles[FRANCE].stat.addEventListener("mouseenter", function () {
		world.status.innerHTML = available_debt_tooltip(FRANCE)
	})
	roles[FRANCE].stat.addEventListener("mouseleave", function () {
		world.status.innerHTML = ""
	})

	roles[FRANCE].stat.addEventListener("click", function () { scroll_to_debt() })
	roles[BRITAIN].stat.addEventListener("click", function () { scroll_to_debt() })

	id = roles[BRITAIN].stat.my_id
	roles[BRITAIN].stat.addEventListener("mouseenter", function () {
		world.status.innerHTML = available_debt_tooltip(BRITAIN)
	})
	roles[FRANCE].stat.addEventListener("mouseleave", function () {
		world.status.innerHTML = ""
	})
}


var Whole //BR// Hack to let me scroll to this specific element

function on_init() {
	var i, a, s, x, y, w, h, lout

	update_favicon("favicon1.png")

	init_preference_checkbox("noanims", false)
	init_preference_checkbox("noflipsies", false)
	init_preference_checkbox("downanddirty", false)
	init_preference_checkbox("tracksies", true)
	init_preference_checkbox("tipsies", true)
	init_preference_checkbox("allwars", false)
	init_preference_checkbox_dialog("scoresies", false)

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

	define_board("#map", 2550, 1650, [0, 0, 0, 0])

	define_stack("lout-jacobite", undefined, [1750, 240, 40, 40], 5, -5, 0, -50)
	define_marker("jacobite-victory", 0, "square-sm jacobite-victory").tooltip(jacobite_victory_tooltip)
	define_marker("jacobite-victory", 1, "square-sm jacobite-victory").tooltip(jacobite_victory_tooltip)
	define_marker("jacobite-defeat", 0, "square-sm jacobite-defeat").tooltip(jacobite_defeat_tooltip)

	// Extra ones to put on the turn track
	define_marker("jacobite-victory", 2, "square-sm jacobite-victory").tooltip(jacobite_victory_tooltip)    // These ones go on turn track and should "center" in their turn track spaces
	define_marker("jacobite-victory", 3, "square-sm jacobite-victory").tooltip(jacobite_victory_tooltip)
	define_marker("jacobite-defeat", 1, "square-sm jacobite-defeat").tooltip(jacobite_defeat_tooltip)


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
			//define_space("conflict-space", s.num, conflict_rect)
			define_layout("conflict-space", s.num, conflict_rect).keyword("grav-nw")
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

	let whole_track_rect = [ 2084, 1242, 413, 417 ]
	Whole = define_layout("general-track-whole", 0, whole_track_rect)
	Whole.element.style.setProperty("pointer-events", "none")

	for (i = -7; i <= 36; ++i) { //NB: Yup, it's -7 through 36, inclusive! Whee!
		define_stack("general-track", i,
			resize_rect(find_layout_node("record track " + i), 49, 49),
			5, -5,
			0, -50
		)
	}

	for (i = -7; i <= 36; ++i) { //NB: Yup, it's -7 through 36, inclusive! Whee!
		define_layout("general-track-text", i,
			resize_rect(find_layout_node("record track " + i), 49, 49)
		)
	}

	for (s of data.turns) {
		define_stack_centered("turn-track", s.num, find_layout_node(s.layout), 8, -8, 0, -50)
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

	for (let r = 0; r < NUM_REGIONS; r++) {
		define_marker("award-winner-left", r)
			.keyword("award-winner-slot")
		define_marker("award-winner-right", r)
			.keyword("award-winner-slot")
	}
	define_marker("award-winner-prestige-left", 0)
		.keyword("award-winner-slot prestige")
	define_marker("award-winner-prestige-right", 0)
		.keyword("award-winner-slot prestige")
	define_layout("lout-award-winner-left", REGION_EUROPE, find_layout_node("Award_winner Europe Left"))
	define_layout("lout-award-winner-left", REGION_NORTH_AMERICA, find_layout_node("Award_winner North America Left"))
	define_layout("lout-award-winner-left", REGION_CARIBBEAN, find_layout_node("Award_winner Caribbean Left"))
	define_layout("lout-award-winner-left", REGION_INDIA, find_layout_node("Award_winner India Left"))
	define_layout("lout-award-winner-prestige-left", 0, find_layout_node("Award_winner Europe Prestige Left"))

	define_layout("lout-award-winner-right", REGION_EUROPE, find_layout_node("Award_winner Europe Right"))
	define_layout("lout-award-winner-right", REGION_NORTH_AMERICA, find_layout_node("Award_winner North America Right"))
	define_layout("lout-award-winner-right", REGION_CARIBBEAN, find_layout_node("Award_winner Caribbean Right"))
	define_layout("lout-award-winner-right", REGION_INDIA, find_layout_node("Award_winner India Right"))
	define_layout("lout-award-winner-prestige-right", 0, find_layout_node("Award_winner Europe Prestige Right"))

	define_layout("lout-demand", undefined, find_layout_node("Demand"))
	for (let i = 0; i < 5; i++) {
		define_marker("demand-winner", i)
			.keyword("demand-winner-slot")
	}
	define_layout("lout-demand-winner", 0, find_layout_node("Demand_winner"))
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

	define_marker("game-turn", 0, "square-sm").tooltip(game_turn_tooltip)
	define_marker("victory-points", undefined, "square-sm black").tooltip(vp_tooltip)
	define_marker("debt", FRANCE, "square-sm fr").tooltip(debt_tooltip)
	define_marker("debt", BRITAIN, "square-sm br").tooltip(debt_tooltip)
	define_marker("debt-limit", FRANCE, "square-sm fr").tooltip(debt_limit_tooltip)
	define_marker("debt-limit", BRITAIN, "square-sm br").tooltip(debt_limit_tooltip)
	define_marker("treaty-points", FRANCE, "square-sm treaty-points-fr").tooltip(treaty_points_tooltip)
	define_marker("treaty-points", BRITAIN, "square-sm treaty-points-br").tooltip(treaty_points_tooltip)
	define_marker("initiative", FRANCE, "square-sm initiative-fr").tooltip(initiative_tooltip)
	define_marker("initiative", BRITAIN, "square-sm initiative-br").tooltip(initiative_tooltip)

	define_marker("townshend-acts", undefined, "square-sm townshend_acts").tooltip(townshend_tooltip)

	define_stack("stack-deal", undefined, find_layout_node("Deal Tiles"))

	define_stack("lout-navy-fr", undefined, find_layout_node("Navy Box Britain"), 8, -8, 0, -50)
	define_stack("lout-navy-br", undefined, find_layout_node("Navy Box France"), 8, -8, 0, -50)

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

		define_marker ("advantage-exhausted", a.num).tooltip(advantage_tooltip).tooltip_image(advantage_tooltip_image)
	}

	for (a of data.investments) {
		define_marker("investment", a.num)
			.keyword("square investment i" + a.num)
			.tooltip(investment_tooltip)
	}

	for (i = 1; i <= NUM_EVENT_CARDS; ++i) {
		define_card_animated ("event_card", i)
			.keyword("c" + i)
			.tooltip(event_tooltip)
	}

	for (i = 1; i <= 26; ++i) {
		define_card_animated("ministry_card", i)
			.keyword("c" + i)
			.tooltip(ministry_tooltip(i))
	}

	for (i = 0; i < NUM_BASE_WAR_TILES; ++i) {
		define_marker("basic_war", i + 0, "hex fr war-basic" + (i + 0)).tooltip(basic_war_tooltip(i, FRANCE))
		define_marker("basic_war", i + 16, "hex br war-basic" + (i + 16)).tooltip(basic_war_tooltip(i, BRITAIN))
	}

	for (i = 0; i < NUM_BONUS_WAR_TILES; ++i) {
		define_marker("bonus_war", (i + 0), "hex fr war" + (i + 0)).tooltip(bonus_war_tooltip(i, FRANCE))
		define_marker("bonus_war", (i + 12), "hex br war" + (i + 12)).tooltip(bonus_war_tooltip(i + 12, BRITAIN))
		define_marker("bonus_war", (i + 24), "hex fr war" + (i + 24)).tooltip(bonus_war_tooltip(i + 24, FRANCE))
		define_marker("bonus_war", (i + 36), "hex br war" + (i + 36)).tooltip(bonus_war_tooltip(i + 36, BRITAIN))
		define_marker("bonus_war", (i + 48), "hex fr war" + (i + 48)).tooltip(bonus_war_tooltip(i + 48, FRANCE))
		define_marker("bonus_war", (i + 60), "hex br war" + (i + 60)).tooltip(bonus_war_tooltip(i + 60, BRITAIN))
		define_marker("bonus_war", (i + 72), "hex fr war" + (i + 72)).tooltip(bonus_war_tooltip(i + 72, FRANCE))
		define_marker("bonus_war", (i + 84), "hex br war" + (i + 84)).tooltip(bonus_war_tooltip(i + 84, BRITAIN))
	}

	define_marker("bonus_war", ATLANTIC_DOMINANCE + FRANCE, "hex-sm atlantic-dominance fr").tooltip(bonus_war_tooltip(96, FRANCE))
	define_marker("bonus_war", ATLANTIC_DOMINANCE + BRITAIN, "hex-sm atlantic-dominance br").tooltip(bonus_war_tooltip(97, BRITAIN))
	define_marker("bonus_war", BYNG, "hex-sm byng").tooltip(bonus_war_tooltip(BYNG, BRITAIN))

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
		define_layout("lout-wss-alliance", 1, war_layout.war_wss_theater_1_alliances)
		define_layout("lout-wss-alliance", 2, war_layout.war_wss_theater_2_alliances)
		define_layout("lout-wss-alliance", 3, war_layout.war_wss_theater_3_alliances)
		define_layout("lout-wss-alliance", 4, war_layout.war_wss_theater_4_alliances)

		define_layout("lout-wss-theater-1-margin-1", 1, [ 80,  304, 410, 17])
		define_layout("lout-wss-theater-1-margin-2", 1, [ 80,  322, 410, 17])
		define_layout("lout-wss-theater-1-margin-3", 1, [ 80,  340, 410, 17])
		define_layout("lout-wss-theater-2-margin-1", 2, [600,  306, 412, 17])
		define_layout("lout-wss-theater-2-margin-2", 2, [600,  324, 412, 17])
		define_layout("lout-wss-theater-2-margin-3", 2, [600,  343, 412, 17])
		define_layout("lout-wss-theater-3-margin-1", 3, [ 80,  680, 412, 17])
		define_layout("lout-wss-theater-3-margin-2", 3, [ 80,  698, 412, 17])
		define_layout("lout-wss-theater-3-margin-3", 3, [ 80,  717, 412, 30])
		define_layout("lout-wss-theater-4-margin-1", 4, [600,  680, 412, 17])
		define_layout("lout-wss-theater-4-margin-2", 4, [600,  698, 412, 17])
		define_layout("lout-wss-theater-4-margin-3", 4, [600,  717, 412, 17])
	}

	define_board("#war_was", 1100, 850)
	{
		define_space("theater", 5, war_layout.war_was_theater_1)
		define_space("theater", 6, war_layout.war_was_theater_2)
		define_space("theater", 7, war_layout.war_was_theater_3)
		define_space("theater", 8, war_layout.war_was_theater_4)
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
		define_layout("lout-was-alliance", 1, war_layout.war_was_theater_1_alliances)
		define_layout("lout-was-alliance", 2, war_layout.war_was_theater_2_alliances)
		define_layout("lout-was-alliance", 3, war_layout.war_was_theater_3_alliances)
		define_layout("lout-was-alliance", 4, war_layout.war_was_theater_4_alliances)

		define_layout("lout-was-theater-1-margin-1", 1, [102,  283, 360, 17])
		define_layout("lout-was-theater-1-margin-2", 1, [102,  301, 360, 17])
		define_layout("lout-was-theater-1-margin-3", 1, [102,  301, 360, 17])
		define_layout("lout-was-theater-2-margin-1", 2, [600,  283, 412, 17])
		define_layout("lout-was-theater-2-margin-2", 2, [600,  301, 412, 17])
		define_layout("lout-was-theater-2-margin-3", 2, [600,  301, 412, 17])
		define_layout("lout-was-theater-3-margin-1", 3, [ 80,  615, 412, 17])
		define_layout("lout-was-theater-3-margin-2", 3, [ 80,  632, 412, 17])
		define_layout("lout-was-theater-3-margin-3", 3, [ 80,  650, 412, 17])
		define_layout("lout-was-theater-4-margin-1", 4, [578,  591, 459, 17])
		define_layout("lout-was-theater-4-margin-2", 4, [578,  609, 459, 17])
		define_layout("lout-was-theater-4-margin-3", 4, [578,  627, 459, 17])
		define_layout("lout-was-theater-4-margin-1-br", 4, [578,  669, 459, 17])
		define_layout("lout-was-theater-4-margin-2-br", 4, [578,  687, 459, 17])
		define_layout("lout-was-theater-4-margin-3-br", 4, [578,  705, 459, 17])
	}

	define_board("#war_7yw", 1100, 850)
	{
		define_space("theater", 9, war_layout.war_7yw_theater_1)
		define_space("theater", 10, war_layout.war_7yw_theater_2)
		define_space("theater", 11, war_layout.war_7yw_theater_3)
		define_space("theater", 12, war_layout.war_7yw_theater_4)
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
		define_layout("lout-7yw-alliance", 1, war_layout.war_7yw_theater_1_alliances)
		define_layout("lout-7yw-alliance", 2, war_layout.war_7yw_theater_2_alliances)
		define_layout("lout-7yw-alliance", 3, war_layout.war_7yw_theater_3_alliances)
		define_layout("lout-7yw-alliance", 4, war_layout.war_7yw_theater_4_alliances)

		define_layout("lout-7yw-theater-1-margin-1", 1, [ 88,  306, 396, 32])
		define_layout("lout-7yw-theater-1-margin-2", 1, [ 88,  339, 396, 32])
		define_layout("lout-7yw-theater-1-margin-3", 1, [ 88,  372, 396, 32])
		define_layout("lout-7yw-theater-2-margin-1", 2, [600,  306, 412, 17])
		define_layout("lout-7yw-theater-2-margin-2", 2, [600,  324, 412, 17])
		define_layout("lout-7yw-theater-2-margin-3", 2, [600,  342, 412, 17])
		define_layout("lout-7yw-theater-3-margin-1", 3, [ 80,  671, 412, 17])
		define_layout("lout-7yw-theater-3-margin-2", 3, [ 80,  689, 412, 17])
		define_layout("lout-7yw-theater-3-margin-3", 3, [ 80,  707, 412, 17])
		define_layout("lout-7yw-theater-4-margin-1", 4, [600,  709, 416, 17])
		define_layout("lout-7yw-theater-4-margin-2", 4, [600,  727, 416, 17])
		define_layout("lout-7yw-theater-4-margin-3", 4, [600,  745, 416, 17])
	}

	define_board("#war_awi", 1100, 850)
	{
		define_space("theater", 13, war_layout.war_awi_theater_1)
		define_space("theater", 14, war_layout.war_awi_theater_2)
		define_space("theater", 15, war_layout.war_awi_theater_3)
		//define_space("theater", 4, war_layout.war_awi_theater_4)
		define_layout("lout-theater-drawn", 3, layout_theater_drawn) // war_layout.war_awi_theater_drawn)
		define_layout("lout-theater", 25, war_layout.war_awi_theater_1_france)
		define_layout("lout-theater", 26, war_layout.war_awi_theater_1_britain)
		define_layout("lout-theater", 27, war_layout.war_awi_theater_2_france)
		define_layout("lout-theater", 28, war_layout.war_awi_theater_2_britain)
		define_layout("lout-theater", 29, war_layout.war_awi_theater_3_france)
		define_layout("lout-theater", 30, war_layout.war_awi_theater_3_britain)
		define_layout("lout-awi-strength-fr", 1, war_layout.war_awi_theater_1_strength_fr)
		define_layout("lout-awi-strength-br", 1, war_layout.war_awi_theater_1_strength_br)
		define_layout("lout-awi-winner", 1,  war_layout.war_awi_theater_1_winner)
		define_layout("lout-awi-strength-fr", 2, war_layout.war_awi_theater_2_strength_fr)
		define_layout("lout-awi-strength-br", 2, war_layout.war_awi_theater_2_strength_br)
		define_layout("lout-awi-winner", 2,  war_layout.war_awi_theater_2_winner)
		define_layout("lout-awi-strength-fr", 3, war_layout.war_awi_theater_3_strength_fr)
		define_layout("lout-awi-strength-br", 3, war_layout.war_awi_theater_3_strength_br)
		define_layout("lout-awi-winner", 3,  war_layout.war_awi_theater_3_winner)
		define_layout("lout-awi-alliance", 1, war_layout.war_awi_theater_1_alliances)
		define_layout("lout-awi-alliance", 2, war_layout.war_awi_theater_2_alliances)
		define_layout("lout-awi-alliance", 3, war_layout.war_awi_theater_3_alliances)

		define_layout("lout-awi-theater-1-margin-1", 1, [ 80,  307, 412, 17])
		define_layout("lout-awi-theater-1-margin-2", 1, [ 80,  325, 412, 17])
		define_layout("lout-awi-theater-1-margin-3", 1, [ 80,  343, 412, 17])
		define_layout("lout-awi-theater-1-margin-1-br", 1, [ 80,  400, 412, 17])
		define_layout("lout-awi-theater-1-margin-2-br", 1, [ 80,  418, 412, 17])
		define_layout("lout-awi-theater-1-margin-3-br", 1, [ 80,  436, 412, 17])
		define_layout("lout-awi-theater-2-margin-1", 2, [600,  306, 412, 17])
		define_layout("lout-awi-theater-2-margin-2", 2, [600,  324, 412, 17])
		define_layout("lout-awi-theater-2-margin-3", 2, [600,  324, 412, 17])
		define_layout("lout-awi-theater-3-margin-1", 3, [600,  620, 412, 17])
		define_layout("lout-awi-theater-3-margin-2", 3, [600,  638, 412, 17])
		define_layout("lout-awi-theater-3-margin-3", 3, [600,  656, 412, 17])
	}

	for (let sq = 0; sq < NUM_SQUADRONS; sq++) {
		define_marker("squadron-fr", sq, "marker hex fleet_fr").tooltip(space_tooltip).tooltip_image(space_tooltip_image)
		define_marker("squadron-br", sq, "marker hex fleet_br").tooltip(space_tooltip).tooltip_image(space_tooltip_image)
	}

	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== TERRITORY) continue
		if ((data.spaces[s].region !== REGION_NORTH_AMERICA) && (data.spaces[s].region !== REGION_CARIBBEAN)) continue
		define_marker("huguenots", s, "marker square-sm huguenots").tooltip(bold("Huguenots") + ": increases conquest cost of space by 1. Can be flipped once per game to reduce the economic action cost of a market in the same region by 1.")
		define_marker("huguenots_spent", s, "marker square-sm huguenots_spent").tooltip(bold("Huguenots (Spent)") + ": increases conquest cost of space by 1. Can be refreshed once per game by North American Trade ministry in Revolutionary Era.")
	}
}


// Returns which squadron token a player has at a particular space (or first one from navy box or unbuilt). Used only to animate squadrons between spaces.
function get_squadron_token(who, s, match = 0)
{
	let matches = 0

	for (let sq = 0; sq < NUM_SQUADRONS; sq++) {
		if (V.squadrons[who][sq] === s) {
			if (matches >= match) return sq
			matches++
		}
	}
	console.error ("No squadron found for space: " + s)

	upconvert_squadrons()
	for (let sq = 0; sq < NUM_SQUADRONS; sq++) {
		if (V.squadrons[who][sq] === s) return sq
	}

	return 0
}



// True if ministry is presently exhausted
// Some ministries have more than one separately exhaustible ability (in which case can pass a different "ability" number)
function is_ministry_exhausted(who, m, ability = 0) {
	if (!V.ministry[who].includes(m)) return false
	var idx = V.ministry[who].indexOf(m)
	return set_has(V.ministry_exhausted[who], idx + (ability * NUM_MINISTRY_CARDS))
}

function is_advantage_exhausted(a) {
	return !!(V.advantages_exhausted & (1 << a))
}

function get_advantage_region(a) {
	return data.spaces[data.advantages[a].req[0]].region
}

function has_advantage(who, a) {
	for (var s of data.advantages[a].req)
		if (V.flags[s] !== who)
			return false
	return true
}

function whose_advantage(a) {
	if (has_advantage(FRANCE, a)) return FRANCE
	if (has_advantage(BRITAIN, a)) return BRITAIN
	return NONE
}

function is_advantage_conflicted(a)
{
	for (var s of data.advantages[a].req) {
		if (has_conflict_marker(s)) return true
	}
	return false
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
		//let avail = available_debt_plus_trps(who)
		let avail = available_debt(who)
		roles[who].stat.innerHTML = avail + " Debt + " + V.treaty_points[who] + " TRP" + s(V.treaty_points[who])
	}

	let msg = bold("VP: " + V.vp)

	let div = document.getElementById("vp")
	if (div === null) {
		div = document.createElement("div")
		div.className = "vp"
		div.id = "vp"

		//BR// VP display goes different places depending on platform
		if (is_mobile()) {
			div.className += " mobile"
			world.toolbar.append(div)
		} else {
			world.turn_info.classList.add("desktop")
			world.turn_info.classList.add("vp")
			world.turn_info.innerHTML = msg
		}
	}

	div.innerHTML = msg
}

function scroll_log_to_end() {
	let div = document.getElementById("log")
	div.scrollTop = div.scrollHeight
}


function scroll_to_war() {
	scroll_into_view(document.getElementById("war"))
}

function scroll_to_map() {
	scroll_into_view(document.getElementById("top"))
}

function scroll_to_debt()
{
	scroll_into_view(Whole.element)
}

function scroll_to_cards() {
	if (R !== BRITAIN) {
		scroll_into_view(document.getElementById("ministry_fr"))
	} else {
		scroll_into_view(document.getElementById("ministry_br"))
	}
	//scroll_into_view(document.getElementById("panels-top"))
}


function next_peace_turn(turn)
{
	if (turn < PEACE_TURN_2) return PEACE_TURN_2
	if (turn < PEACE_TURN_3) return PEACE_TURN_3
	if (turn < PEACE_TURN_4) return PEACE_TURN_4
	if (turn < PEACE_TURN_5) return PEACE_TURN_5
	if (turn < PEACE_TURN_6) return PEACE_TURN_6
	return GAME_OVER
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

	let tell_vp = Math.min(36, Math.max(-7, V.vp))
	populate("general-track", tell_vp, "victory-points")

	if ((V.vp < 0) || (V.vp > 30)) {
		update_text_html("general-track-text", tell_vp, `<span class="vp-overlay">${V.vp}</span>`)
	}

	populate("general-track", V.debt[FRANCE], "debt", FRANCE)
	populate("general-track", V.debt_limit[FRANCE], "debt-limit", FRANCE)
	populate("general-track", V.treaty_points[FRANCE], "treaty-points", FRANCE)
	populate("general-track", V.debt[BRITAIN], "debt", BRITAIN)
	populate("general-track", V.debt_limit[BRITAIN], "debt-limit", BRITAIN)
	populate("general-track", V.treaty_points[BRITAIN], "treaty-points", BRITAIN)

	if (V.the_brig > 0) {
		for (let i = 0; i < V.the_brig; i++) {
			let turn = (V.did_the_brig ? next_peace_turn(V.turn) : V.turn)
			if (turn < GAME_OVER) populate("turn-track", turn, "squadron-br", get_squadron_token(BRITAIN, SPACE_THE_BRIG, i))
		}
	}

	if (V.jacobite_victory_wss) populate("turn-track", WAR_TURN_WSS, "jacobite-victory", 2)
	if (V.jacobite_victory_was) populate("turn-track", WAR_TURN_WAS, "jacobite-victory", 3)
	if (V.jacobite_defeat) populate("turn-track", WAR_TURN_WAS, "jacobite-defeat", 1)

	populate("turn-track", V.turn, "game-turn", 0)
	populate("lout-initiative", "initiative", V.initiative)

	var global_demand_chits = []
	for (var i = 0; i < NUM_DEMANDS; i++) {
		if (V.global_demand.includes(i)) continue
		global_demand_chits.push(i)
	}

	// These keep a hidden stack of all the not-presently-in-play demands, awards, and investment tiles, to provide the better visuals of tiles "being dealt out" and "cleared away"
	for (const d of global_demand_chits) {
		populate("stack-deal", undefined, "demand", d)
	}

	if (V.award_chits) {
		for (const a of V.award_chits) {
			populate("stack-deal", undefined, "award", a)
		}
	}

	if (V.investment_tile_stack) {
		for (const i of V.investment_tile_stack) {
			populate("stack-deal", undefined, "investment", i)
		}
	}

	for (let r = 0; r < NUM_REGIONS; r++) {
		populate("lout-award-winner-left", r, "award-winner-left", r)
		populate("lout-award-winner-right", r, "award-winner-right", r)

		let winner = region_flag_winner(r)
		let delta = region_flag_delta(r)
		let fr_count = V.flag_count[FRANCE][r]
		let br_count = V.flag_count[BRITAIN][r]
		
		let html_left = ""
		let html_right = ""
		if (winner !== NONE) {
			let flag_class = winner === FRANCE ? "fr" : "br"
			html_left += `<span class="award-flag ${flag_class}"></span>`
			html_right += `<span class="award-count">+${delta}</span>`
		}
		
		update_text_html("award-winner-left", r, html_left)
		update_text_html("award-winner-right", r, html_right)
	}

	// Europe prestige winner indicator
	populate("lout-award-winner-prestige-left", 0, "award-winner-prestige-left", 0)
	populate("lout-award-winner-prestige-right", 0, "award-winner-prestige-right", 0)

	let prestige_win = prestige_winner()
	let prestige_delta = prestige_flag_delta()
	let prestige_fr = V.prestige_flags[FRANCE]
	let prestige_br = V.prestige_flags[BRITAIN]

	let prestige_html_left = ""
	let prestige_html_right = ""
	if (prestige_win !== NONE) {
		let flag_class = prestige_win === FRANCE ? "fr" : "br"
		prestige_html_left += `<span class="award-flag ${flag_class}"></span>`
		prestige_html_right += `<span class="award-count">+${prestige_delta}<span style = "color:#007000; font-weight: bold;">♢</span></span>`
	}

	// Feather = 🪶
	// Diamond = ♢

	update_text_html("award-winner-prestige-left", 0, prestige_html_left)
	update_text_html("award-winner-prestige-right", 0, prestige_html_right)

	populate_with_list("lout-demand", "demand", V.global_demand)

	if (V.townshend_acts >= 0) {
		let demand_tiles = document.querySelector(".layout.lout-demand").firstElementChild
		let index = V.global_demand.indexOf(V.townshend_acts)
		if (index >= 0) {
			for (let skip = 0; skip < index; skip++) {
				demand_tiles = demand_tiles.nextElementSibling
			}
			let marker = lookup_thing("townshend-acts", undefined)
			demand_tiles.appendChild(marker.element)
			switch (index) {
				case 0:
					marker.element.style.cssText = "margin-top: -40px; margin-left: -40px"
					break
				case 1:
					marker.element.style.cssText = "margin-top: -40px; margin-left: -2px"
					break
				case 2:
					if (V.global_demand.length === 3) {
						marker.element.style.cssText = "margin-top: -40px; margin-left: 36px"
					} else {
						marker.element.style.cssText = "margin-top: -40px; margin-left: -2px"
					}
					break
				default:
					marker.element.style.cssText = "margin-top: -40px; margin-left: 36px"
					break
			}
		}
	} else {
		populate("stack-deal", undefined, "townshend-acts")
	}

	for (let i = 0; i < V.global_demand.length; i++) {
		populate("lout-demand-winner", 0, "demand-winner", i)
		
		let demand = V.global_demand[i]
		let winner = demand_flag_winner(demand)
		let delta = demand_flag_delta(demand)
		let fr_count = V.demand_flag_count[FRANCE][demand]
		let br_count = V.demand_flag_count[BRITAIN][demand]
		
		let html = ""
		if (winner !== NONE) {
			let flag_class = winner === FRANCE ? "fr" : "br"
			html += `<span class="demand-flag ${flag_class}"></span>`
			html += `<span class="demand-count"><span style="background-color:#e5c28a">+${delta}</span></span>`
		}
		
		update_text_html("demand-winner", i, html)
	}

	let jacobite_count = V.jacobite_victory + (V.jacobite_defeat > 0 ? 1 : 0)

	if (jacobite_count > 0) {
		let offset = (jacobite_count - 1) * 2.5
		update_position("lout-jacobite", undefined, 1750 + offset, 230 + offset)
		
		for (let i = 0; i < V.jacobite_victory; i++) {
			populate("lout-jacobite", "jacobite-victory", i)
		}
		if (V.jacobite_defeat > 0) {
			populate("lout-jacobite", "jacobite-defeat", 0)
		}
	}

	// Upconvert squadrons if we've "undone"
	if (V.squadrons === undefined) {
		upconvert_squadrons()
	}

	for (let who = FRANCE; who <= BRITAIN; who++) {
		let total = 0
		for (let sq = NUM_SQUADRONS - 1; sq >= 0; sq--) { // Count backwards so that when one leaves the navy box it will be the "top one in the stack"
			if (V.squadrons[who][sq] !== SPACE_NAVY_BOX) continue
			populate("lout-navy" + ((who === FRANCE) ? "-fr" : "-br"), (who === FRANCE) ? "squadron-fr" : "squadron-br", sq)
			total++
			if (total >= V.navy_box[who]) break
			//document.querySelector(".layout.lout-navy").lastChild.style.cssText = `margin-top:${(index - 2) * -10}px; margin-left:${index * 10}px`
		}
	}

	//for (i = 0; i < V.navy_box[FRANCE]; i++) {
	//	populate("lout-navy", "squadron-fr-navy", i)
	//	document.querySelector(".layout.lout-navy").lastChild.style.cssText = `margin-top:${(i - 2) * -10}px; margin-left:${i * 10}px`
	//}

	//for (i = 0; i < V.navy_box[BRITAIN]; i++) {
	//	populate("lout-navy", "squadron-br-navy", i)
	//	document.querySelector(".layout.lout-navy").lastChild.style.cssText = `margin-top:${(i - 2) * -10}px; margin-left:${i * 10}px`
	//}

	for (s of data.spaces) {
		if (s.type === NAVAL) {
			if (V.flags[s.num] === FRANCE) {
				populate("lout-space", s.num, "squadron-fr", get_squadron_token(FRANCE, s.num))
			}
			if (V.flags[s.num] === BRITAIN) {
				populate("lout-space", s.num, "squadron-br", get_squadron_token(BRITAIN, s.num))
			}
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

		if (is_advantage_exhausted(a) && (V.advantages[a] !== NONE)) {
			populate("lout-advantage", a, "advantage-exhausted", a)
		}

		update_keyword("advantage", a, "reverse", reverse)
		update_keyword("advantage", a, "exhausted", is_advantage_exhausted(a) && (noflipsies || (downanddirty && V.advantages[a] === NONE)))
	}

	if (V.all_ministries) {
		populate_with_list("panel-all-ministries", "ministry_card", V.all_ministries)
		let title = document.getElementById("ministries_title")
		if (title) {
			if (V.choosing_ministries) {
				title.textContent = "Choose from Available Ministries"
			} else {
				title.textContent = "Ministries Available This Turn"
			}
		}
	}

	V.available_investments.sort((a, b) =>
	{
		let aa = data.investments[a].majortype * 100 + (5 - data.investments[a].majorval) * 10 + data.investments[a].minortype
		let bb = data.investments[b].majortype * 100 + (5 - data.investments[b].majorval) * 10 + data.investments[b].minortype
		return aa - bb
	})

	V.used_investments.sort((a, b) =>
	{
		let aa = data.investments[a].majortype * 100 + (5 - data.investments[a].majorval) * 10 + data.investments[a].minortype
		let bb = data.investments[b].majortype * 100 + (5 - data.investments[b].majorval) * 10 + data.investments[b].minortype
		return aa - bb
	})

	populate_with_list("panel-available-investments", "investment", V.available_investments)
	populate_with_list("panel-used-investments", "investment", V.used_investments)

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

				//console.log ("Ministry: " + data.ministries[m].name + "  Ability 1 exhausted: " + is_ministry_exhausted(who, m, 0) + "  Ability 2 exhausted: " + is_ministry_exhausted(who, m, 1))

				for (let ability = 0; ability < 2; ability++) {
					update_keyword("ministry_card", m, "exhausted-" + (ability + 1), is_ministry_exhausted(who, m, ability))
				}
				//for (let ability = 0; ability < data.ministries[m].abilities; ability++) {
				//	if (is_ministry_exhausted(who, m, ability)) {
				//		update_keyword("ministry_card", m, "exhausted-" + (ability + 1), true)
				//	}
				//}
			} else {
				set_fallback_tips(populate_generic("panel-ministry", who, "card ministry_card deck_" + ((who === FRANCE) ? "fr" : "br")), (bold(((who === FRANCE) ? "French" : "British") + " Ministry: ")) + "Hidden.")
			}
		}
	}

	if (V.deck) {
		for (const c of V.deck) {
			populate("stack-deal", undefined, "event_card", c)
		}
	}

	if (V.discard_pile) {
		for (const c of V.discard_pile) {
			if (Array.isArray(c)) continue
			if (!c) continue
			populate("stack-deal", undefined, "event_card", c)
		}
	}

	if (V.played_events) {
		for (const c of V.played_events) {
			if (c === V.played_event) continue // Except for the one that goes on the played_event slot
			populate("stack-deal", undefined, "event_card", c)
		}
	}

	if (V.hand) {
		set_fallback_tips(populate_with_list("panel-events", FRANCE, "event_card", V.hand[FRANCE], "card event_card deck"), bold("French Event Card: ") + "Hidden.")
		set_fallback_tips(populate_with_list("panel-events", BRITAIN, "event_card", V.hand[BRITAIN], "card event_card deck"), bold("British Event Card: ") + "Hidden.")
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

	// Hide hotkey shortcuts on mobile
	if (is_mobile()) {
		let elements = document.getElementsByClassName("hotkey")
		for (const e of elements) {
			e.hidden = true
		}
	}

	action_button ("fail", "Fuzzer Only Fail Button")

	action_button("france", "France")
	action_button("britain", "Britain")

	action_button("paydebt", is_mobile() ? "1 Debt" : "Add 1 Debt")
	action_button("paytrp", is_mobile() ? "1 TRP" : "Spend 1 Treaty Point")

	action_button("refuse", "Refuse")
	action_button("accept", "Accept")

	action_button("confirm", "Confirm")
	action_button("continue", "Continue")

	confirm_action_button("confirm_pass_to_reduce_debt", is_mobile() ? "Pass" : "Pass for Debt Reduction", "Confirm passing your entire action round to reduce Debt?")
	confirm_action_button("confirm_pass_usa", "Pass", "You have not converted all eligible territories to USA flags. Confirm passing early?")

	action_button_imp("military_upgrade", "Military Upgrade", evt => { send_action("military_upgrade"); scroll_to_war(); } )

	action_button("end_action_round", is_mobile() ? "End Round" : "End Action Round")
	confirm_action_button("confirm_end_action_round_2", is_mobile() ? "End Round" : "End Action Round", "You still have usable advantages. Confirm ending Action Round?")

	confirm_action_button("confirm_end_action_round_bank", is_mobile() ? "End Round" : "End Action Round", "You have not used Bank of England to increase your debt limit. Confirm ending your final action round this turn?")
	confirm_action_button("confirm_end_action_round_halley", is_mobile() ? "End Round" : "End Action Round", "You have not used Edmond Halley to discard an event card for a treaty point. Confirm ending your final Action Round this turn?")
	confirm_action_button("confirm_end_action_round_walpole", is_mobile() ? "End Round" : "End Action Round", "You have not used Robert Walpole to draw/discard event cards. Confirm ending your final action round this turn?")
	confirm_action_button("confirm_end_action_round_huguenots", is_mobile() ? "End Round" : "End Action Round", "You have not used New World Huguenots to place Huguenots. Confirm ending your final action round this turn?")

	action_button("buy_diplomatic", is_mobile() ? "Buy Diplo" : "Buy Diplomatic")
	action_button("buy_economic", is_mobile() ? "Buy Econ" : "Buy Economic")

	action_button("construct_squadron", is_mobile() ? "Squadron" : "Build Squadron")
	action_button("buy_bonus_war_tile", is_mobile() ? "War Tile" : "Buy War Tile")
	action_button("draw_event", "Buy Event")

	confirm_action_button("confirm_end_action_round", is_mobile() ? "End Early" : "End Action Round Early", "You still have unspent action points! Confirm ending Action Round early?")
	confirm_action_button("confirm_no_military_upgrade", is_mobile() ? "End Early" : "End Action Round Early", "You are still eligible for a military upgrade! Confirm ending Action Round early?")

	action_button("reveal_ministry", "Reveal")
	action_button("dont_reveal_ministry", "Don't Reveal")
	action_button("exhaust_ministry", "Exhaust")
	action_button("dont_exhaust_ministry", "Don't Exhaust")

	action_button("diplomatic_point", is_mobile() ? "+1 Diplo" : "Gain Diplomatic Point")
	action_button("military_point", is_mobile() ? "+1 Mil" : "Gain Military Point")
	action_button("build_squadron", is_mobile() ? "Squadron Discount" : "Build Squadron w/ Discount")
	action_button("discard_event_for_trp", is_mobile() ? "Event => TRP": "Discard Event for TRP")
	action_button("increase_debt_limit", is_mobile() ? "Debt Limit" : "Increase Debt Limit")
	action_button("play_event", "Play Event")
	action_button("jacobite_vp", "Score VP")
	action_button("unflag_discount", is_mobile() ? "Use" : "Use Discount This Round")

	action_button("shift_market", is_mobile() ? "Market" : "Shift Market")
	action_button("place_conflict_marker", is_mobile() ? "Conflict" : "Place Conflict Marker")
	action_button("diplomatic2", is_mobile() ? "+2 Diplo" : "+2 Diplomatic")
	action_button("economic2", is_mobile() ? "+2 Econ" : "+2 Economic")
	action_button("scorecotton", "Score Cotton")
	action_button("construct_squadron_now", is_mobile() ?  "Squadron" : "Build Squadron Now")
	action_button("defer", "Defer")
	action_button("fur", "Fur")
	action_button("cotton", "Cotton")
	action_button("take_control", is_mobile() ? "Control" : "Take Control")
	action_button("place_conflicts", is_mobile() ? "Conflict" : "Place Conflict Markers")
	action_button("diplomatic", is_mobile() ? "Diplo" : "Diplomatic")
	action_button("military", is_mobile() ? "Mil" : "Military")

	action_button("use_advantage", "Use")
	action_button("dont_use_advantage", "Don't Use")

	action_button("major", "Major")
	action_button("minor", "Minor")

	action_button("return_to_pool", is_mobile() ? "Return" : "Return to Pool")
	action_button("remove_from_game", is_mobile() ? "Remove" : "Remove From Game")

	action_button("pass", "Pass")
	action_button("done", "Done")
	action_button("undo", "Undo")

	for (let ix = 0; ix < V.log_length; ix++) {
		let logline = world.log.children[ix]
		if (!logline) continue
		if (logline.innerHTML.startsWith("~a")) {
			logline.innerHTML = log_awards(logline.innerHTML)
		} else if (logline.innerHTML.startsWith("~d")) {
			logline.innerHTML = log_demands(logline.innerHTML)
		} else if (logline.innerHTML.startsWith("~w")) {
			logline.innerHTML = log_war_tiles(logline.innerHTML)
		}
	}

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

	update_debt_display()

	end_update()
}


function upconvert_squadrons()
{
	V.squadrons = [ [], [] ]
	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		let who = G.flags[s]
		if (who === NONE) continue
		V.squadrons[who].push(s)
	}
	for (let who = FRANCE; who <= BRITAIN; who++) {
		for (let ss = 0; ss < V.navy_box[who]; ss++) {
			V.squadrons[who].push(SPACE_NAVY_BOX)
		}
		for (let ss = 0; ss < V.unbuilt_squadrons[who]; ss++) {
			V.squadrons[who].push(SPACE_UNBUILT)
		}
		if (who === BRITAIN) {
			for (let ss = 0; ss < V.the_brig; ss++) {
				V.squadrons[who].push(SPACE_THE_BRIG)
			}
		}
	}
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

/* Basic/Bonus war tiles placement */
/* Here to change the value depending on how many tiles are present */
const TILE_POSITIONS = {
	1: [[40, 45]],
	2: [[10, 9], [65, 64]],
	3: [[40, 0], [0, 68], [75, 68]],
	4: [[0, 0], [75, 0], [0, 68], [75, 68]]
}

function agencement_theater_tiles(element) {
	let children = element.children
	let count = children.length 
	if (count === 0 || count > 4)
		return
	
	let positions = TILE_POSITIONS[count]
	for (let i = 0; i < count; i++) {
		children[i].style.position = "absolute"
		children[i].style.left = positions[i][0] + "px"
		children[i].style.top = positions[i][1] + "px"
	}
}



function theater_tier(winner, theater, delta)
{
	var margin;
	if ((winner === FRANCE) && (data.wars[G.next_war].theater[theater].france_margin !== undefined)) {
		margin = data.wars[G.next_war].theater[theater].france_margin
	} else {
		margin = data.wars[G.next_war].theater[theater].margin
	}

	for (let i = margin.length - 1; i >= 0; i--) {
		if (delta >= margin[i]) return i
	}

	return -1
}



var temp = 1

function update_war_display() {
	var player, theater, offset
	var war = G.next_war - 1 // make it zero-based

	let allwars = get_preference("allwars", false)
	for (var w = 0; w < NUM_WARS; w++) {
		war_display[w].hidden = allwars ? false : (war !== w)
	}

	const war_prefixes = ["wss", "was", "7yw", "awi"]

	/*
	// This code is for testing the positioning of theater margin-of-victory highlight bars
	if (allwars) {
		for (let w = 1; w <= 4; w++) {
			var num_theaters = data.wars[w].theaters
			let war_prefix = war_prefixes[w - 1]
			for (theater = 1; theater <= num_theaters; theater++) {
				for (let margin = 1; margin <= 3; margin++) {
					let flag_class = "fr"
					switch (margin) {
						case 1:
							flag_class = "fr";
							break
						case 2:
							flag_class = "br";
							break
						case 3:
							flag_class = "fr";
							break
					}

					let box = `lout-${war_prefix}-theater-${theater}-margin-${margin}`

					if (margin === temp) {
						update_keyword(box, theater, `theater-margin ${flag_class}`)
						update_show(box, theater, true)

						if (((w === 2) && (theater === 4)) || ((w === 4) && (theater === 1))) {
							box += "-br"
							update_keyword(box, theater, `theater-margin ${flag_class}`)
							update_show(box, theater, true)
						}

					} else {
						update_show(box, theater, false)

						if (((w === 2) && (theater === 4)) || ((w === 4) && (theater === 1))) {
							box += "-br"
							update_show(box, theater, false)
						}
					}
				}
			}
		}
	}
	*/

	if (allwars) {
		for (let w = 1; w < G.next_war; w++) {
			var num_theaters = data.wars[w].theaters
			let war_prefix = war_prefixes[w-1]
			for (theater = 1; theater <= num_theaters; theater++) {

				for (let margin = 1; margin <= 3; margin++) {
					let box = `lout-${war_prefix}-theater-${theater}-margin-${margin}`
					update_show(box, theater, false)
					if (((w === 2) && (theater === 4)) || ((w === 4) && (theater === 1))) {
						box += "-br"
						update_show(box, theater, false)
					}
				}

				if (V.old_war_theater_winners && (V.old_war_theater_winners[w][theater] !== -1)) {
					let winner = V.old_war_theater_winners[w][theater]
					let margin = V.old_war_theater_margins[w][theater]
					let is_tie = margin === 0
					let flag_class = is_tie ? "tie" : (winner === FRANCE ? "fr" : "br")

					if (margin > 0) {
						let tier = theater_tier(winner, theater, margin) + 1
						if (tier > 0) {
							let box = `lout-${war_prefix}-theater-${theater}-margin-${tier}`
							if (((w === 2) && (theater === 4)) || ((w === 4) && (theater === 1))) {
								if (winner === BRITAIN) box += "-br"
							}
							update_keyword(box, theater, `theater-margin ${flag_class}`)
							update_show(box, theater, true)
						}
					}

					update_keyword(`lout-${war_prefix}-winner`, theater, `theater-winner ${flag_class}`)
					update_text_html(`lout-${war_prefix}-winner`, theater, is_tie ? `<span>TIE</span>` : `<span class="flag"></span><span>${margin}</span>`)
					update_show(`lout-${war_prefix}-winner`, theater, true)
				} else {
					update_show(`lout-${war_prefix}-winner`, theater, false)
				}
			}
		}
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

				agencement_theater_tiles(lookup_thing("lout-theater", offset).element)
				++offset
			}
		}

		let war_prefix = war_prefixes[war]
		const num_theaters = data.wars[G.next_war].theaters

		for (theater = 1; theater <= num_theaters; ++theater) {
			let fr_strength = V.theater_strength ? V.theater_strength[FRANCE][theater] : 0
			let br_strength = V.theater_strength ? V.theater_strength[BRITAIN][theater] : 0

			let unrevealed = 0
			if ((R === FRANCE) || (R === BRITAIN)) {
				for (const t of G.theater_basic_war_tiles[R][theater]) {
					if (!set_has(G.basic_war_tile_revealed[R], t)) unrevealed += data.basic_war_tiles[t].val
				}

				for (const t of G.theater_bonus_war_tiles[R][theater]) {
					if (!set_has(G.bonus_war_tile_revealed[R], t)) unrevealed += data.bonus_war_tiles[t].val
				}
			}

			if (unrevealed !== 0) {
				if (unrevealed > 0) {
					unrevealed = "+" + unrevealed
				}
				if (R === FRANCE) {
					fr_strength = String(fr_strength) + " " + parens(unrevealed)
				} else {
					br_strength = String(br_strength) + " " + parens(unrevealed)
				}
			}

			// Strength FR
			update_keyword(`lout-${war_prefix}-strength-fr`, theater, "theater-strength fr")
			update_text_html(`lout-${war_prefix}-strength-fr`, theater, `<span class="flag"></span><span>${fr_strength}</span>`)

			// Strength BR
			update_keyword(`lout-${war_prefix}-strength-br`, theater, "theater-strength br")
			update_text_html(`lout-${war_prefix}-strength-br`, theater, `<span class="flag"></span><span>${br_strength}</span>`)

			w = G.next_war
			for (let margin = 1; margin <= 3; margin++) {
				let box = `lout-${war_prefix}-theater-${theater}-margin-${margin}`
				update_show(box, theater, false)
				if (((w === 2) && (theater === 4)) || ((w === 4) && (theater === 1))) {
					box += "-br"
					update_show(box, theater, false)
				}
			}

			// Winner
			if (V.theater_winner && V.theater_winner[theater] !== -1) {
				let winner = V.theater_winner[theater]
				let margin = V.theater_margin[theater]
				let is_tie = margin === 0
				let flag_class = is_tie ? "tie" : (winner === FRANCE ? "fr" : "br")

				if (margin > 0) {
					let tier = theater_tier(winner, theater, margin) + 1
					if (tier > 0) {
						let box = `lout-${war_prefix}-theater-${theater}-margin-${tier}`
						if (((w === 2) && (theater === 4)) || ((w === 4) && (theater === 1))) {
							if (winner === BRITAIN) box += "-br"
						}
						update_keyword(box, theater, `theater-margin ${flag_class}`)
						update_show(box, theater, true)
					}
				}

				update_keyword(`lout-${war_prefix}-winner`, theater, `theater-winner ${flag_class}`)
				update_text_html(`lout-${war_prefix}-winner`, theater, is_tie ? `<span>TIE</span>` : `<span class="flag"></span><span>${margin}</span>`)
				update_show(`lout-${war_prefix}-winner`, theater, true)
			}
			else {
				update_show(`lout-${war_prefix}-winner`, theater, false)
			}
		}
	}

	for (let who = FRANCE; who <= BRITAIN; who++) {
		for (let theater = 0; theater <= data.wars[G.next_war].theaters; theater++) {
			for (let tile of V.theater_bonus_war_tiles[who][theater]) {
				if (tile >= 0) {
					update_keyword("bonus_war", tile, (set_has(V.bonus_war_tile_revealed[who], tile) || (tile === BYNG) || (tile === ATLANTIC_DOMINANCE))  ? "revealed" : "hidden")
				}
			}
			for (let tile of V.theater_basic_war_tiles[who][theater]) {
				if (tile >= 0) {
					update_keyword("basic_war", tile, set_has(V.basic_war_tile_revealed[who], tile) ? "revealed" : "hidden")
				}
			}
		}
	}

	// Alliance flags for all wars
	const war_number = war + 1
	const war_prefix = war_prefixes[war]
	const num_war_theaters = data.wars[war_number].theaters

	// Sort order: political (0) first, then forts (4), then naval (2)
	const TYPE_SORT_ORDER = { [POLITICAL]: 0, [FORT]: 1, [NAVAL]: 2 }

	function build_flag_row(c, name) {
		let row = `<div class="alliance-row">`
		
		for (let s of c.fr) {
			let space_name = data.spaces[s].name
			row += `<span class="alliance-flag fr" data-tooltip="${space_name}"
				onmouseenter="_tip_focus_light('space',${s})"
				onmouseleave="_tip_blur_light('space',${s})"
				onmousedown="_tip_click_light('space',${s})"></span>`
		}
		for (let s of c.br) {
			let space_name = data.spaces[s].name
			row += `<span class="alliance-flag br" data-tooltip="${space_name}"
				onmouseenter="_tip_focus_light('space',${s})"
				onmouseleave="_tip_blur_light('space',${s})"
				onmousedown="_tip_click_light('space',${s})"></span>`
		}
		
		row += `</div>`
		return row
	}

	for (let theater = 1; theater <= num_war_theaters; theater++) {
		let theater_data = data.wars[war_number].theater[theater]
		let ministry_keyword = theater_data.keyword
		
		let minister = { fr: false, br: false }
		let alliances = {}
		let conflicts = {}
		
		// Ministry keyword
		if (ministry_keyword > 0) {
			if (V.active_keywords && V.active_keywords[FRANCE].includes(ministry_keyword)) minister.fr = true
			if (V.active_keywords && V.active_keywords[BRITAIN].includes(ministry_keyword)) minister.br = true
		}
		
		// Scan all spaces for alliances and conflicts
		for (let s = 0; s < NUM_SPACES; s++) {
			let space = data.spaces[s]
			let flag = V.flags[s]
			
			// Alliances
			if (space.alliance) {
				for (const a of space.alliance) {
					if (a[0] !== war_number || a[1] !== theater) continue

					// 7YW Theater 3 includes both North America and Caribbean
					if (war_number === WAR_7YW && theater === 3) {
						if (space.region !== REGION_NORTH_AMERICA && space.region !== REGION_CARIBBEAN) continue
					}
					// Group forts and naval spaces together
					let name
					if (space.type === FORT) {
						name = "_Forts"
					} else if (space.type === NAVAL) {
						if (war_number === WAR_7YW && (theater === 1 || theater === 3)) {
							if (space.region === REGION_CARIBBEAN) {
								name = "_Squadrons (Caribbean)"
							} else if (space.region === REGION_NORTH_AMERICA) {
								name = "_Squadrons (N. Amer.)"
							} else {
								name = "_Squadrons"
							}
						} else {
							name = "_Squadrons"
						}
					} else {
						name = space.name.split(" - ")[0].replace(/\s*\(\d+\)$/, "").trim()
					}
					
					if (!alliances[name]) {
						alliances[name] = { fr: [], br: [], type: space.type }
					}
					
					// flag no count if conflict or damaged
					if (flag !== FRANCE && flag !== BRITAIN) continue
					if (set_has(V.conflicts, s) || is_damaged_fort(s)) continue
					
					// Add space to array (avoid duplicates)
					if (flag === FRANCE && !alliances[name].fr.includes(s)) alliances[name].fr.push(s)
					if (flag === BRITAIN && !alliances[name].br.includes(s)) alliances[name].br.push(s)
				}
			}
				
			// Conflict markers
			let region_match = space.region === theater_data.region
			if (war_number === WAR_7YW && theater === 3 && space.region === REGION_CARIBBEAN) {
				region_match = true
			}
			if (theater_data.conflicts && region_match) {
				if (map_get(V.conflicts, s, 0) && (flag === FRANCE || flag === BRITAIN)) {
					let opponent = 1 - flag
					if (!conflicts["_Conflicts"]) {
						conflicts["_Conflicts"] = { fr: [], br: [] }
					}
					if (opponent === FRANCE && !conflicts["_Conflicts"].fr.includes(s)) conflicts["_Conflicts"].fr.push(s)
					if (opponent === BRITAIN && !conflicts["_Conflicts"].br.includes(s)) conflicts["_Conflicts"].br.push(s)
				}
			}
		}
		if (war_number === WAR_7YW && theater === 3) {
			for (let s of [ SPAIN_1, SPAIN_3]) {
				let flag = V.flags[s]
				if (flag !== FRANCE && flag !== BRITAIN) continue
				
				if (!alliances["_Spain"]) {
					alliances["_Spain"] = { fr: [], br: [], type: TERRITORY }
				}
				
				if (flag === FRANCE && !alliances["_Spain"].fr.includes(s)) alliances["_Spain"].fr.push(s)
				if (flag === BRITAIN && !alliances["_Spain"].br.includes(s)) alliances["_Spain"].br.push(s)
			}
		}
		
		// Build HTML
		let flag_html = ""

		if (conflicts["_Conflicts"]) {
			alliances["_Conflicts"] = { fr: conflicts["_Conflicts"].fr, br: conflicts["_Conflicts"].br, type: -1 }
		}

		// 1. Ministry keyword bonus
		if (ministry_keyword > 0) {
			let keyword_name = data.keywords[ministry_keyword].name
			flag_html += `<div class="alliance-row">`
			if (minister.fr) flag_html += `<span class="alliance-flag fr" data-tooltip="${keyword_name}"></span>`
			if (minister.br) flag_html += `<span class="alliance-flag br" data-tooltip="${keyword_name}"></span>`
			flag_html += `</div>`
		}
		
		// 2. Alliances
		// Sort order: political (0), conflicts (1), forts (2), naval (3)
		const SORT_ORDER = { [TERRITORY]: 0, [POLITICAL]: 0, [-1]: 1, [FORT]: 2, [NAVAL]: 3 }	
		
		let alliance_names = Object.keys(alliances).sort((a, b) => {
			let orderA = SORT_ORDER[alliances[a].type] ?? 4
			let orderB = SORT_ORDER[alliances[b].type] ?? 4
			if (orderA !== orderB) return orderA - orderB
			
			// Special sort for 7YW theater 1 & 3
			if (war_number === WAR_7YW && (theater === 1 || theater === 3)) {
				const regionOrder = { "_Squadrons (Caribbean)": 0, "_Squadrons": 1, "_Squadrons (N. Amer.)": 2 }
				if (regionOrder[a] !== undefined && regionOrder[b] !== undefined) {
					return regionOrder[a] - regionOrder[b]
				}
			}
			
			return a.localeCompare(b)
		})
		
		for (let name of alliance_names) {
			flag_html += build_flag_row(alliances[name], name)
		}
		
		update_text_html(`lout-${war_prefix}-alliance`, theater, flag_html)
	}
}

const event_card_names = data.cards.map(x => x?.name)
const ministry_card_names = data.ministries.map(x => x?.name)
const advantage_names = data.advantages.map(x => x?.name)
const demand_names = data.demands.map(x => x?.name)

function escape_text(text) {
	let verbose = get_preference("actionverbosity", "medium")
	let shortest = (verbose === "short")

	if (shortest) {
		text = text.replace("Britain", "BR")
		text = text.replace("British", "BR")
		text = text.replace("France", "FR")
		text = text.replace("French", "FR")
	}

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
	world.tip.hidden = is_mobile()

	for (let region = 0; region < NUM_REGIONS; region++) {
		if (V.awards[region] === a) {
			world.status.innerHTML = award_tooltip(region)
		}
	}
}

function _tip_blur_award() {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.status.innerHTML = ""
}


function _tip_focus_investment(i, who)
{
	world.tip.setAttribute("class", "square marker investment i" + i)
	position_tip_image()
	world.tip.hidden = is_mobile()

	world.status.innerHTML = investment_tooltip(i)
}

function _tip_blur_investment() {
	world.tip.removeAttribute("class")
	world.status.innerHTML = ""
	world.tip.hidden = true
}


function _tip_focus_basic_war_tile(t, who)
{
	world.tip.setAttribute("class", "hex marker " + (who ? "br" : "fr") + " war-basic" + t)
	position_tip_image()
	world.tip.hidden = is_mobile()

	world.status.innerHTML = basic_war_tooltip(t, who)
}

function _tip_blur_basic_war_tile() {
	world.tip.removeAttribute("class")
	world.status.innerHTML = ""
	world.tip.hidden = true
}


function _tip_focus_bonus_war_tile(t, who)
{
	world.tip.setAttribute("class", "hex marker " + (who ? "br" : "fr") + " war" + t)
	position_tip_image()
	world.tip.hidden = is_mobile()

	world.status.innerHTML = bonus_war_tooltip(t, who)
}

function _tip_blur_bonus_war_tile() {
	world.tip.removeAttribute("class")
	world.status.innerHTML = ""
	world.tip.hidden = true
}


function is_digit(c) {
	return (c >= '0') && (c <= '9')
}


// Returns true if we're playing this on a mobile platform e.g. phone
function is_mobile() {
	return ("ontouchstart" in window)
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

			if (inside[1] === "Click") {
				text = text.replace(/\[.*?]/, is_mobile() ? "Tap" : "Click")
				continue
			}

			if (inside[1] === "click") {
				text = text.replace(/\[.*?]/, is_mobile() ? "tap" : "click")
				continue
			}

			let has_who_key = ((type !== "@") && (type !== "a"))
			let who_key = inside[1][1]                         // Second character tells us what nation color to use, if any
			let msg     = inside[1].slice(has_who_key ? 2 : 1) // Rest of string is the message
			let value = 0

			if (["I", "W", "S", "B", "b"].includes(type)) {	// Some items encode a three-digit number
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
			} else if ((type === "@") || (type === "a")) { // Others have a one-digit number
				value = msg[0] - '0'
				msg = msg.substring(1)
			}

			let who = (who_key === "F") ? FRANCE : (who_key === "B") ? BRITAIN : NONE

			// Second character is usually F/B/X for French/British/None
			// a - [#0] - text description of action point type, variable by verbosity preference
			// @ - [#0] - Action points symbol (0=Econ, 1=Diplo, 2=Mil)
			// b - [bF001] - basic war tile
			// B - [BF001] - bonus war tile
			// F - [FFstring] - "Flag" string - colored by nationality of second letter (i.e. F/B/X)
			// I - [IF001] - Investment tile
			// W - [WF001] - Award tile
			// S - [SF001] - Space name
			// V - [V] - scroll down to war mat
			// $ - [$Fstring] - Display string, link to spending

			let tooltip_text = ""
			let className = ""
			switch (type) {
				case "a":
					let verbose = get_preference("actionverbosity", "medium")
                    if (verbose === "long") {
						tooltip_text = " " + data.action_points[value].name + " action point" + escape_typography(msg)
					} else {
						tooltip_text = ""
					}
					break
				case "@":
					className = "symbol"
					switch (value) {
						case ECON: className += " econ"; break;
						case DIPLO: className += " diplo"; break;
						case MIL: className += " mil"; break;
					}
					tooltip_text = `<span 
						class="${className}"
						>${escape_typography(msg)}</span>`
					break
				case "b":
					className = "tip-basic-war"
					className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_basic_war_tile(${value}, ${who})"
						onmouseleave="_tip_blur_basic_war_tile()"
						>${escape_typography(msg)}</span>`
					break
				case "B":
					className = "tip-bonus-war"
					className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_bonus_war_tile(${value}, ${who})"
						onmouseleave="_tip_blur_bonus_war_tile()"
						>${escape_typography(msg)}</span>`
					break
				case "F":
					className = "flag-string"
					className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
					tooltip_text = `<span 
						class="${className}"
						>${escape_typography(msg)}</span>`
					break
				case "I":
					className = "tip-investment"
					className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_investment(${value}, ${who})"
						onmouseleave="_tip_blur_investment()"
						onmousedown="_tip_click_light('investment',${value})"
						>${escape_typography(msg)}</span>`
					break
				case "W":
					className = "tip-award"
					className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_award(${value}, ${who})"
						onmouseleave="_tip_blur_award()"
						onmousedown="_tip_click_light('award',${value})"
						>${escape_typography(msg)}</span>`
					break
				case "S":
					className = "tip-space"
					className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
					msg = data.spaces[value].name
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_space(${who}, ${value})"
						onmouseleave="_tip_blur_space()"
						onmousedown="_tip_click_light('space',${value})"
						>${escape_typography(msg)}</span>`
					break
				case "V":
					tooltip_text = `${escape_typography(msg)}`
					scroll_to_war()
					break
				case "$":
				default:
					className = "tip-spending"
					className += ((who === FRANCE) ? "-fr" : (who === BRITAIN) ? "-br" : "")
					tooltip_text = `<span 
						class="${className}"
						onmouseenter="_tip_focus_spending(${who})"
						onmouseleave="_tip_blur_spending()"
						onmousedown="_tip_click_light('general-track', '15')"
						>${escape_typography(msg)}</span>`
					break
			}
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

function position_tip_image_imp() {
	let tipsies = get_preference("tipsies", true)
	if (tipsies) {
		world.tip.style.left = "0px"
		world.tip.style.bottom = world.status.offsetHeight + "px"
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

function position_tip_image() {
	// postpone actual positioning until browser has laid out everything else
	setTimeout(position_tip_image_imp, 0)
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
	world.tip.hidden = is_mobile()
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
		onmousedown="_tip_click_light('demand',${x})"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_event(who, c, name) {
	world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = is_mobile()
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
		onmousedown="_tip_click_light('event_card',${x})"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_ministry(who, m, name) {
	world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = is_mobile()
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
		onmousedown="_tip_click_light('ministry_card',${x})"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_advantage(who, a, name) {
	//world.tip.setAttribute("class", name)
	position_tip_image()
	world.tip.hidden = is_mobile()
	world.status.innerHTML = advantage_tooltip(a)

	// Show BOTH sides of the marker
	world.tip.innerHTML = `		
		<div class="marker square advantage a${a} reverse advantage-back"></div>
		<div class="marker square advantage a${a} advantage-front"></div>		`
}

function _tip_blur_advantage(action, id) {
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.tip.innerHTML = ""
	world.status.innerHTML = ""
}


function escape_advantage(text, re, log_className, tip_className, names, who) {
	return text.replace(re, (m, x) => `<span
		class="${log_className}"
		onmouseenter="_tip_focus_advantage('${who}', '${x}', '${tip_className.replace("$1", x)}')"
		onmouseleave="_tip_blur_advantage()"
		onmousedown="_tip_click_light('advantage',${x})"
		>${escape_typography(names[x])}</span>`
	)
}


function _tip_focus_space(who, s, name) {
	world.tip.hidden = is_mobile()
	space_tooltip_image(s, true)
	position_tip_image()
	world.status.innerHTML = space_tooltip(s)
}

function _tip_blur_space(action, id) {
	world.map_tip.hidden = true
	world.tip.removeAttribute("class")
	world.tip.hidden = true
	world.map_tip.hidden = true
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
	if (typeof text !== "string") text = String(text)  // instead of having the whole client crash at the startsWith when I accidentally log(struct) or whatever

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
		case "~":
			p.innerHTML = text // award/demand codes -- save for processing later in on_update() when we have latest view
			return p
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


function log_awards(codes)
{
	let awards = []
	awards[REGION_EUROPE] = codes[2] - '0' // Starts at 2  (0 and 1 are the ~a)
	awards[REGION_NORTH_AMERICA] = codes[3] - '0'
	awards[REGION_CARIBBEAN] = codes[4] - '0'
	awards[REGION_INDIA] = codes[5] - '0'

	let wrap = 0
	let msg = "<div style=\"display: flex; justify-content: center;\">"
	for (const region of [ REGION_NORTH_AMERICA, REGION_EUROPE, REGION_CARIBBEAN, REGION_INDIA ]) {
		var chit = awards[region]

		msg += `<span class="a${chit} award marker black square-sm award-in-log" style="pointer-events: auto;"                  
				onmouseenter="_tip_focus_award(${chit}, ${NONE})"
				onmouseleave="_tip_blur_award()"
				onmousedown="_tip_click_light('award',${chit})"
				><span class="region r${region}">${data.regions[region].name}</span></span>`
		if (++wrap >= 2) {
			wrap = 0
			msg += "</div>"
			msg += "<div style=\"display: flex; justify-content: center;\">"
		}
	}
	msg += "</div>"
	return msg
}


function log_demands(codes)
{
	let global_demand = []
	global_demand.push(codes[2] - '0') // Starts at 2  (0 and 1 are the ~d)
	global_demand.push(codes[3] - '0')
	global_demand.push(codes[4] - '0')

	let msg = "<div style=\"display: flex; justify-content: center;\">"
	for (var i = 0; i < 3; i++) {
		var chit = global_demand[i]
		msg += `<span class="${data.demands[chit].name.toLowerCase()} demand marker square-sm demand-in-log" 
          onmouseenter="_tip_focus_demand('${chit}', 'marker demand small-sm ${data.demands[chit].name.toLowerCase()}')"
		  onmouseleave="_tip_blur_demand()"
		  onmousedown="_tip_click_light('demand',${chit})"
        ></span>`
	}
	msg += "</div>"
	return msg
}


function log_war_tiles(codes)
{
	let basic = []
	let bonus = []
	let index = 1 // Starts at 2, but we need a +1 at the beginning to make the loop work
	codes += "X" // terminate with something

	// Example encoding: ~wb00,B10,B20
	do {
		index++
		let key = codes[index++]
		let value = codes[index++] - '0'
		value = value*10 + (codes[index++] - '0')
		if (key === 'b') {
			basic.push(value)
		} else {
			bonus.push(value)
		}
	} while (codes[index] === ',')

	let msg = "<div style=\"display: flex; justify-content: center;\">"
	let who = NONE
	let whom = ""
	let wrap = 0
	for (const tile of basic) {
		who = (tile < NUM_BASE_WAR_TILES) ? FRANCE : BRITAIN
		whom = (who === FRANCE) ? "fr" : "br"
		msg += `<span class="basic_war marker hex ${whom} war-basic${tile} revealed wartile-in-log" 
				onmouseenter="_tip_focus_basic_war_tile('${tile}', '${who}')"
				onmouseleave="_tip_blur_basic_war_tile()"
				></span>`
		if (++wrap >= 2) {
			wrap = 0
			msg += "</div>"
			msg += "<div style=\"display: flex; justify-content: center;\">"
		}
	}
	for (const tile of bonus) {
		if (tile === ATLANTIC_DOMINANCE + who) {
			msg += `<span class="hex-sm atlantic-dominance marker ${whom} revealed wartile-in-log" 
				onmouseenter="_tip_focus_bonus_war_tile('${tile}', '${who}')"
				onmouseleave="_tip_blur_bonus_war_tile()"
				></span>`
		} else if (tile === BYNG) {
			msg += `<span class="hex-sm byng marker ${whom} revealed wartile-in-log" 
				onmouseenter="_tip_focus_bonus_war_tile('${tile}', '${who}')"
				onmouseleave="_tip_blur_bonus_war_tile()"
				></span>`
		} else {
			msg += `<span class="bonus_war marker hex ${whom} war${tile} revealed wartile-in-log" 
				onmouseenter="_tip_focus_bonus_war_tile('${tile}', '${who}')"
				onmouseleave="_tip_blur_bonus_war_tile()"
				></span>`
		}
		if (++wrap >= 2) {
			wrap = 0
			msg += "</div>"
			msg += "<div style=\"display: flex; justify-content: center;\">"
		}
	}
	msg += "</div>"
	return msg
}


function toggle_dialog(id)
{
	if (document.getElementById(id).classList.contains("show")) {
		hide_dialog(id)
	} else {
		show_card_list(id, null)
	}
}


// A preference has changed that only needs to refresh active dialogs (not the whole document)
function on_dialog_refresh(name, value) {
	//BR// In theory check name of what preference changed, etc, but at the moment we only have one
	show_card_list("scoring_summary_dialog", null)
}

// Hotkeys
window.addEventListener("keydown", function (evt) {
	if (document.activeElement instanceof HTMLInputElement)
		return
	if (document.activeElement instanceof HTMLTextAreaElement)
		return
	if (evt.altKey || evt.ctrlKey)
		return
	switch (evt.key) {
		case "s":
		case "S":
			toggle_dialog("scoring_summary_dialog")
			evt.preventDefault()
			break

		case "T":
		case "t":
			toggle_preference("scoresies", false)
			on_dialog_refresh("scoresies", get_preference("scoresies", false))
			var input = document.querySelector(`input[name="scoresies"]`)
			input.checked = get_preference("scoresies", false)
			break;

		case "y":
		case "Y":
			toggle_dialog("final_scoring_summary_dialog")
			evt.preventDefault()
			break

		case "f":
		case "F":
			toggle_dialog("french_ministry_dialog")
			evt.preventDefault()
			break
		case "b":
		case "B":
			toggle_dialog("british_ministry_dialog")
			evt.preventDefault()
			break
		case "e":
		case "E":
			toggle_dialog("event_card_dialog")
			evt.preventDefault()
			break
		case "l":
		case "L":
			toggle_log()
			evt.preventDefault()
			break
		case "z":
		case "Z":
			toggle_zoom()
			scroll_to_map()
			evt.preventDefault()
			break

		case "h":
		case "H":
			window.location.href = "/games/active";
			evt.preventDefault()
			break

		case "n":
		case "N":
			window.location.href = "/games/next";
			evt.preventDefault()
			break

		case "m":
		case "M":
			scroll_to_map()
			evt.preventDefault()
			break

		case "w":
		case "W":
			scroll_to_war()
			evt.preventDefault()
			break

		case "c":
		case "C":
			scroll_to_cards()
			evt.preventDefault()
			break

		case "d":
		case "D":
			scroll_to_debt()
			evt.preventDefault()
			break

		case "a":
		case "A":
			toggle_preference("allwars")
			scroll_to_war()
			evt.preventDefault()
			break

		case "p":
		case "P":
			toggle_notepad()
			evt.preventDefault()
			break;

		case "v":
		case "V":
			let verbose = get_preference("actionverbosity", "medium")
			if (verbose === "short") {
				verbose = "medium"
			} else if (verbose === "medium") {
				verbose = "long"
			} else {
				verbose = "short"
			}
			set_preference("actionverbosity", verbose)
			evt.preventDefault()
			break

		case "Tab": // TAB
			toggle_markers()
			evt.preventDefault()
			break;

		case "Escape": // ESC - hide any dialogs, restore approximate "default state"
			hide_dialog("scoring_summary_dialog")
			hide_dialog("final_scoring_summary_dialog")
			hide_dialog("french_ministry_dialog")
			hide_dialog("british_ministry_dialog")
			hide_dialog("event_card_dialog")
			document.querySelector("aside").hidden = false // Show the log
			document.body.classList.remove("hide-markers")
			set_preference("allwars", false)
			hide_notepad()
			update_zoom()
			evt.preventDefault()
			break;

		case " ":
			if (window.location.search.includes("France")) {
				window.location.search = window.location.search.replace("France", "Britain")
			} else {
				window.location.search = window.location.search.replace("Britain", "France")
			}
			evt.preventDefault()
			break

		// TODO take out the below (cheat/debug keys)
		case "x":
		case "X":
			send_message("action", ["cheat_cheat", null, game_cookie])
			evt.preventDefault()
			break;

		case "1":
		case "2":
			temp = temp + 1
			if (temp > 3) temp = 1
			console.log(temp)
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
	world.tip.hidden = is_mobile()

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
		rules.push( { "rule": contingency.rule, "short": contingency.short, "amount": contingency.amount } )
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
	let longest = (verbose === "long")
	for (i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
		names[i] = escape_square_brackets("[@" + i + "]")
		if (verbose === "short") {
			//names[i] = "" // data.action_points[i].letter
		} else if (verbose === "long") {
			names[i] += " " + data.action_points[i].name
		} else {
			//names[i] = data.action_points[i].short
		}
	}


	var need_comma = false;
	var early = [ false, false, false ]
	var tell = ""
	var told_name = [ false, false, false ]
	for (var level = MAJOR; level <= MINOR; level++) {
		for (var i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
			if (G.action_points_eligible === undefined) continue
			if (action_points_eligible(i, active_rules())) {
				if ((level === MAJOR) && G.action_points_eligible_major[i]) {

					if (need_comma) {
						tell += ", "
					}
					tell += names[i] + (!longest ? "" : ": ")
					told_name[i] = true
					need_comma = true;

					tell += G.action_points_major[i] //+ " major"
					if (G.action_points_minor[i]) {
						tell += shortest ? "M," : " Major, " // only explicitly say Major if we also have Minor
						early[i] = true
					}
				}

				if ((level === MAJOR) === early[i]) {
					if (data.investments[V.played_tile].minortype === i) { // (G.action_points_minor[i] || !G.action_points_eligible_major[i])) {
						if (level === MINOR) {
							if (need_comma) {
								tell += ", "
							}
							tell += names[i] + (!longest ? "" : ": ")
							told_name[i] = true
						}

						tell += G.action_points_minor[i] + (shortest ? "m" : " Minor")
						need_comma = true;
					}

					if (G.action_points_committed_bonus[i] > 0) {
						if (need_comma) {
							tell += ", "
						}

						if (!told_name[i]) {
							tell += names[i] + (!longest ? "" : ": ")
							told_name[i] = true
						}

						tell += G.action_points_committed_bonus[i] + " Bonus"
						need_comma = true;
					}

					for (let rule of active_rules_list()) {
						let amount = rule.amount //get_contingent(i, rule.rule)
						if (any_contingent(i, rule.rule)) {
							if (need_comma) tell += ", "
							if (!told_name[i]) {
								tell += names[i] + (!longest ? "" : ": ")
								told_name[i] = true
							}
							tell += amount + " " + (shortest ? rule.short : rule.rule)
							need_comma = true
						}
					}
				}
			}
		}
	}

	if (tell === "") return tell
	//if (brackets) tell = "(" + tell + ")"
	if (space) tell = " " + tell
	tell = italic(tell)

	if (is_mobile()) {
		tell = "<div>" + tell + "</div>" // On mobile we don't let the amount of action points fold up
	}

	return tell


	//console.log (get_preference("actionverbosity", "medium"))
}

function attract(e) {
	e.classList.add("attract")
	window.setTimeout(() => e.classList.remove("attract"), 1500)
}


function format_card_info(c) {
	let text = "E" + c
	return escape_text(text)
}

function format_ministry_info(c) {
	let text = "M" + c
	return escape_text(text)
}


function say_flag_color(who, string)
{
	return escape_square_brackets("[F" + ((who === FRANCE) ? "F" : (who === BRITAIN) ? "B" : "X") + string + "]")
}

function format_prestige_info()
{
	let winner = prestige_winner()
	let delta = prestige_flag_delta()
	let leader = ""

	if (winner !== NONE) {
		leader = say_flag_color(winner, "+" + delta)
	} else {
		leader = "+0"
	}

	return leader + (get_preference("scoresies") ? " Prestige: 2 VP" : "")
}


function format_final_prestige_info()
{
	let winner = prestige_winner()
	let delta = prestige_flag_delta()
	let leader = ""

	if (winner !== NONE) {
		leader = say_flag_color(winner, "+" + delta + " Prestige: +2 VP")
	} else {
		leader = "+0 Prestige: +0 VP"
	}

	return leader
}



function format_debt_info() {
	let winner = debt_winner()
	let delta = debt_delta()
	let award = debt_award()
	let leader = ""

	if ((winner !== NONE)) {
		leader = say_flag_color(winner, "+" + delta + " Available Debt: +" + award + " VP")
	} else {
		leader = "+0 Available Debt: +0 VP"
	}

	return leader
}


function format_space_info(s)
{
	return say_flag_color(G.flags[s], data.spaces[s].name + ": +2 VP")
}


function format_award_info(r, a)
{
	let winner = region_flag_winner(r)
	let delta = region_flag_delta(r)
	let leader = ""

	if (winner !== NONE) {
		leader = say_flag_color(winner, "+" + delta)
	} else {
		leader = "+0"
	}

	let msg = data.regions[r].name + ": " + data.awards[a].name

	return leader + (get_preference("scoresies") ? " " + msg : "")
}

function format_demand_info(d)
{
	let awards = data.demands[d].awards[current_era()]
	let msg = data.demands[d].name + ": +" + awards.vp + " VP"
	if (awards.trp > 0) msg += ", +" + awards.trp + " TRP"
	if (awards.debt < 0) msg += ", " + awards.debt + " Debt"
	if (awards.debt > 0) msg += ", +" + awards.debt + " Debt"

	let winner = demand_flag_winner(d)
	let delta = demand_flag_delta(d)
	let leader = ""
	if (winner !== NONE) {
		leader = say_flag_color(winner, "+" + delta)
	} else {
		leader = "+0"
	}

	return leader + (get_preference("scoresies") ? " " + msg : "")
}


function format_final_demand_info(d)
{
	let winner = demand_flag_winner(d)
	let delta = demand_flag_delta(d)
	let leader = ""
	if (winner !== NONE) {
		leader = say_flag_color(winner, "+" + delta + " " + data.demands[d].name + ": +1 VP")
	} else {
		leader = "+0 " + data.demands[d].name
	}

	return leader
}



function format_results_info()
{
	preview_scoring_results()

	let msg = ""
	if (V.preview_vp === 0) {
		msg += "+0 VP"
	} else if (V.preview_vp > 0) {
		msg += escape_square_brackets("[FF+" + V.preview_vp + " VP France]")
	} else {
		msg += escape_square_brackets("[FB+" + Math.abs(V.preview_vp) + " VP Britain]")
	}
	if (V.preview_trp[FRANCE] || V.preview_trp[BRITAIN]) {
		msg += "<br/>"
		if (V.preview_trp[FRANCE]) {
			msg += escape_square_brackets("[FF+" + V.preview_trp[FRANCE] + " TRP France]")
		}
		if (V.preview_trp[BRITAIN]) {
			if (V.preview_trp[FRANCE]) msg += ", "
			msg += escape_square_brackets("[FB+" + V.preview_trp[BRITAIN] + " TRP Britain]")
		}
	}
	if (V.preview_debt[FRANCE] || V.preview_debt[BRITAIN]) {
		msg += "<br/>"
		if (V.preview_debt[FRANCE]) {
			msg += escape_square_brackets("[FF" + ((V.preview_debt[FRANCE] > 0) ? "+" : "") + V.preview_debt[FRANCE] + " Debt France]")
		}
		if (V.preview_debt[BRITAIN]) {
			if (V.preview_debt[FRANCE]) msg += ", "
			msg += escape_square_brackets("[FB" + ((V.preview_debt[BRITAIN] > 0) ? "+" : "") + V.preview_debt[BRITAIN] + " Debt Britain]")
		}
	}
	if (V.preview_ministries.length > 0) {
		msg += "<br/>"
		msg += "Ministries: "
		let any = false
		for (const m of V.preview_ministries) {
			if (any) msg += ", "
			msg += escape_text("M" + ((data.ministries[m].side === FRANCE) ? "F" : "B") + m)
			any = true
		}
	}

	return msg
}


// Ministry is active if it's one of the player's ministry cards AND it has been revealed
function has_active_ministry(who, m)
{
	if (!G.ministry[who].includes(m)) return false
	let idx = G.ministry[who].indexOf(m)
	return G.ministry_revealed[who][idx]
}


function preview_scoring_results() {
	let vp = 0
	let trp = [0, 0]
	let debt = [0, 0]
	let ministries = []

	let winner = prestige_winner()
	if (winner !== NONE) {
		vp += ((winner === FRANCE) ? 2 : -2)
	}

	//TODO it would be *more sound* if this stuff were pre-computed in rules using the same code that runs "scoring_phase". It would require refactoring that code.

	for (let r = 0; r < NUM_REGIONS; r++) {
		let award = G.awards[r]
		let winner = region_flag_winner(r)
		let delta = region_flag_delta(r)
		if (data.awards[award].by2 && region_flag_delta(r) < 2) continue
		if (winner === NONE) continue

		let award_vp = data.awards[award].vp
		let award_trp = data.awards[award].trp
		if (r === REGION_EUROPE) {
			if (has_active_ministry(winner, COURT_OF_THE_SUN_KING)) {
				award_vp++
				ministries.push(COURT_OF_THE_SUN_KING)
			}
			if (has_active_ministry(winner, SAMUEL_JOHNSON)) {
				ministries.push(SAMUEL_JOHNSON)
				award_vp++
			} else if (has_active_ministry(1 - winner, SAMUEL_JOHNSON)) {
				if (award_vp > 0) {
					award_vp--
					ministries.push(SAMUEL_JOHNSON)
				}
			}
		} else if (r === REGION_INDIA) {
			if (has_active_ministry(winner, DUPLEIX)) {
				award_trp++
				ministries.push(DUPLEIX)
			}
		}

		if (award_vp > 0) {
			vp += ((winner === FRANCE) ? award_vp : -award_vp)
		}
		trp[winner] += award_trp

		if (r === REGION_EUROPE) {
			if (has_active_ministry(FRANCE, VOLTAIRE)) {
				let multispace = 0
				if (G.flags[IRELAND_2] === FRANCE) multispace++
				if (G.flags[SCOTLAND_2] === FRANCE) multispace++
				if ((G.flags[PRUSSIA_2] === FRANCE) || (G.flags[PRUSSIA_4] === FRANCE)) multispace++
				if (G.flags[DUTCH_2] === FRANCE) multispace++
				if ((G.flags[AUSTRIA_2] === FRANCE) || (G.flags[AUSTRIA_4] === FRANCE)) multispace++
				if ((G.flags[SPAIN_2] === FRANCE) || (G.flags[SPAIN_4] === FRANCE)) multispace++

				let countries = Math.min(3, multispace)
				if (countries) {
					vp += countries
					ministries.push(VOLTAIRE)
				}
			}
		}
	}

	for (const d of G.global_demand) {
		let winner = demand_flag_winner(d)
		if (winner === NONE) continue

		let award_vp = data.demands[d].awards[current_era()].vp
		let award_trp = data.demands[d].awards[current_era()].trp
		let award_debt = data.demands[d].awards[current_era()].debt

		if ((d === COTTON) || (d === SPICE)) {
			if (has_active_ministry(winner, DUPLEIX)) {
				award_trp++
				if (!ministries.includes(DUPLEIX)) ministries.push(DUPLEIX)
			}
		}

		if (award_vp > 0) {
			vp += ((winner === FRANCE) ? award_vp : -award_vp)
		}
		trp[winner] += award_trp
		debt[winner] += award_debt
	}

	if (has_active_ministry(BRITAIN, EAST_INDIA_COMPANY)) {
		let award_vp = 0
		for (const a of [ TEXTILES, SILK, FRUIT, FUR_TRADE, RUM]) {
			if (has_advantage(BRITAIN, a) && !is_advantage_conflicted(a)) {
				award_vp++
			}
		}
		award_vp = Math.min(award_vp, 3)
		if (award_vp > 0) {
			vp -= award_vp
			ministries.push(EAST_INDIA_COMPANY)
		}
	}

	V.preview_vp = vp
	V.preview_trp = trp
	V.preview_debt = debt
	V.preview_ministries = ministries
}


function format_final_scoring_results_info()
{
	let vp = 0

	let winner = prestige_winner()
	if (winner !== NONE) {
		vp += ((winner === FRANCE) ? 2 : -2)
	}

	winner = debt_winner()
	if ((winner !== NONE) && (debt_award() > 0)) {
		vp += ((winner === FRANCE) ? debt_award() : -debt_award())
	}

	for (let d = 0; d < NUM_DEMANDS; d++) {
		winner = demand_flag_winner(d)
		if (winner !== NONE) {
			vp += ((winner === FRANCE) ? 1 : -1)
		}
	}

	for (const s of [ NORTHERN_COLONIES, CAROLINAS, JAMAICA, BARBADOS, MADRAS, CALCUTTA ]) {
		if ((G.flags[s] === FRANCE) || (G.flags[s] === USA)) {
			vp += 2
		}
	}

	for (const s of [ ACADIA, QUEBEC_AND_MONTREAL, LOUISIANA, ST_DOMINGUE, GUADELOUPE, PONDICHERRY, CHANDERNAGORE ]) {
		if (G.flags[s] === BRITAIN) {
			vp -= 2
		}
	}

	if (vp > 0) {
		return escape_square_brackets("[FF+" + vp + " VP France]")
	} else if (vp < 0) {
		return escape_square_brackets("[FB+" + (0 - vp) + " VP Britain]")
	} else {
		return "+0 VP"
	}
}


function debt_winner() {
	if (available_debt(FRANCE) > available_debt(BRITAIN) + 1) return FRANCE
	if (available_debt(BRITAIN) > available_debt(FRANCE) + 1) return BRITAIN
	return NONE
}


function debt_delta() {
	return Math.abs(available_debt(FRANCE) - available_debt(BRITAIN))
}

function debt_award() {
	return Math.min(4,debt_delta() / 2)
}



function on_reply(q, params)
{
	if (q === "event_cards") {
		toggle_dialog("event_card_dialog")
	} else if (q === "french_ministry") {
		toggle_dialog("french_ministry_dialog")
	} else if (q === "british_ministry") {
		toggle_dialog("british_ministry_dialog")
	} else if (q === "scoring_summary") {
		toggle_dialog("scoring_summary_dialog")
	} else if (q === "final_scoring_summary") {
		toggle_dialog("final_scoring_summary_dialog")
	}
}

function is_observing()
{
	return (R !== FRANCE) && (R !== BRITAIN)
}


function show_card_list(id, params) {
	show_dialog(id, (body) => {
		let dl = document.createElement("dl")
		let append_header = (text) => {
			let header = document.createElement("dt")
			header.textContent = text
			dl.appendChild(header)
		}
		let append_card = (c) => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			//p.className = (c <= HIGHEST_AP_CARD) ? "cardtip ap-card" : "cardtip cp-card"
			p.onmouseenter = () => _tip_focus_event(NONE, c, data.cards[c].name)
			p.onmouseleave = () => _tip_blur_event()
			p.innerHTML = format_card_info(c)
			dl.appendChild(p)
		}

		let append_ministry = (m) => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			//p.className = (c <= HIGHEST_AP_CARD) ? "cardtip ap-card" : "cardtip cp-card"
			p.onmouseenter = () => _tip_focus_ministry(NONE, m, data.ministries[m].name)
			p.onmouseleave = () => _tip_blur_ministry()
			p.innerHTML = format_ministry_info(m)
			dl.appendChild(p)
		}

		let append_prestige = () => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.onmouseenter = () => _tip_focus_award(REGION_EUROPE)
			p.onmouseleave = () => _tip_blur_award()
			p.innerHTML = format_prestige_info()
			dl.appendChild(p)
		}

		let append_final_prestige = () => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.onmouseenter = () => _tip_focus_award(REGION_EUROPE)
			p.onmouseleave = () => _tip_blur_award()
			p.innerHTML = format_final_prestige_info()
			dl.appendChild(p)
		}

		let append_debt = () => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.onmouseenter = () => _tip_focus_award(REGION_EUROPE)
			p.onmouseleave = () => _tip_blur_award()
			p.innerHTML = format_debt_info()
			dl.appendChild(p)
		}


		let append_region = (r, a) => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.onmouseenter = () => _tip_focus_award(a)
			p.onmouseleave = () => _tip_blur_award()
			p.innerHTML = format_award_info(r, a)
			dl.appendChild(p)
		}

		let append_space = (s) => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.onmouseenter = () => _tip_focus_space(s)
			p.onmouseleave = () => _tip_blur_space()
			p.innerHTML = format_space_info(s)
			dl.appendChild(p)
		}

		let append_demand = (d) => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.onmouseenter = () => _tip_focus_demand(d)
			p.onmouseleave = () => _tip_blur_demand()
			p.innerHTML = format_demand_info(d)
			dl.appendChild(p)
		}

		let append_final_demand = (d) => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.onmouseenter = () => _tip_focus_demand(d)
			p.onmouseleave = () => _tip_blur_demand()
			p.innerHTML = format_final_demand_info(d)
			dl.appendChild(p)
		}

		let append_results = () => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.innerHTML = format_results_info()
			dl.appendChild(p)
		}

		let append_final_scoring_results = () => {
			let p = document.createElement("dd")
			p.className = "cardtip"
			p.innerHTML = format_final_scoring_results_info()
			dl.appendChild(p)
		}

		if (id === "event_card_dialog") {
			append_header(`Played Event Cards (${V.played_events.length})`)
			V.played_events.forEach(append_card)
			append_header(`Discarded Event Cards (${V.discard_pile.length})`)
			V.discard_pile.forEach(append_card)
			append_header(is_observing() ? `Player Hands or Deck (${V.deck.length})` : `Opponent's Hand or Deck (${V.deck.length})`)
			V.deck.forEach(append_card)
			if (!is_observing()) {
				append_header(`Your Hand (${V.hand[R].length})`)
				V.hand[R].forEach(append_card)
			}
			if (current_era() < EMPIRE_ERA) {
				append_header(`Empire Era (not yet in play) (15)`)
				for (let c = SUCCESSION_ERA_CARDS + 1; c <= EMPIRE_ERA_CARDS; c++) {
					append_card(c)
				}
			}
			if (current_era() < REVOLUTION_ERA) {
				append_header(`Revolution Era (not yet in play) (11)`)
				for (let c = EMPIRE_ERA_CARDS + 1; c <= REVOLUTION_ERA_CARDS; c++) {
					append_card(c)
				}
			}
		} else if ((id === "french_ministry_dialog") || (id === "british_ministry_dialog")) {
			let who = (id === "french_ministry_dialog") ? FRANCE : BRITAIN
			append_header("Current Available Ministers")
			for (let m = 1; m <= NUM_MINISTRY_CARDS; m++) {
				if (data.ministries[m].side !== who) continue
				if (!data.ministries[m].era.includes(current_era())) continue
				if ((m === JACOBITE_UPRISINGS) && V.jacobites_never) continue
				append_ministry(m)
			}

			if (current_era() === SUCCESSION_ERA) {
				append_header("Empire Era Ministers (not yet in play)")
				for (let m = 1; m <= NUM_MINISTRY_CARDS; m++) {
					if (data.ministries[m].side !== who) continue
					if (data.ministries[m].era.includes(current_era())) continue
					if (!data.ministries[m].era.includes(EMPIRE_ERA)) continue
					append_ministry(m)
				}
			}

			if (current_era() === EMPIRE_ERA) {
				append_header("Revolution Era Ministers (not yet in play)")
				for (let m = 1; m <= NUM_MINISTRY_CARDS; m++) {
					if (data.ministries[m].side !== who) continue
					if (data.ministries[m].era.includes(current_era())) continue
					if (data.ministries[m].era.includes(EMPIRE_ERA)) continue
					if (!data.ministries[m].era.includes(REVOLUTION_ERA)) continue
					append_ministry(m)
				}
			}

			if (V.jacobites_never && (who === FRANCE)) {
				append_header("Removed From Game")
				append_ministry(JACOBITE_UPRISINGS)
			}

			if (current_era() === REVOLUTION_ERA) {
				append_header("Empire Era Ministers (out of play)")
				for (let m = 1; m <= NUM_MINISTRY_CARDS; m++) {
					if (data.ministries[m].side !== who) continue
					if (data.ministries[m].era.includes(current_era())) continue
					if (!data.ministries[m].era.includes(EMPIRE_ERA)) continue
					append_ministry(m)
				}
			}

			if (current_era() !== SUCCESSION_ERA) {
				append_header("Succession Era Ministers (out of play)")
				for (let m = 1; m <= NUM_MINISTRY_CARDS; m++) {
					if (data.ministries[m].side !== who) continue
					if (data.ministries[m].era.includes(current_era())) continue
					if (data.ministries[m].era.includes(EMPIRE_ERA)) continue
					if (!data.ministries[m].era.includes(SUCCESSION_ERA)) continue
					if ((m === JACOBITE_UPRISINGS) && V.jacobites_never) continue
					append_ministry(m)
				}
			}
		} else if (id === "scoring_summary_dialog") {
			let do_text_only = get_preference("scoresies")
			if (do_text_only) {
				append_header("Prestige")
				append_prestige()

				append_header("Regions")
				for (let r = 0; r < NUM_REGIONS; r++) {
					var a = V.awards[r]
					append_region(r, a)
				}

				append_header("Global Demand")
				let era = current_era()
				for (let d = 0; d < NUM_DEMANDS; d++) {
					if (!V.global_demand.includes(d)) continue
					append_demand(d)
				}

				let header = document.createElement("dt")
				header.innerHTML = "<br/>"
				dl.appendChild(header)

			} else {

				let p = document.createElement("dd")
				p.className = "score-top"
				dl.appendChild(p)

				let msg = "<div class=\"score-region-line\">"
				msg += `<div class=\"score-prestige\"
						onmouseenter="_tip_focus_award(${V.awards[REGION_EUROPE]}, ${NONE})"
						onmouseleave="_tip_blur_award()"
						onmousedown="_tip_click_light('award',${V.awards[REGION_EUROPE]})">`
				msg += `<span class="a${V.awards[REGION_EUROPE]} prestige-in-score">`
				msg += `<span class="score-prestige-label">Prestige</span>`
				msg += `<span class="score-prestige-amount">${format_prestige_info()}</span>`
				msg += "</span>"
				msg += "</div>"
				msg += "</div>"
				p = document.createElement("dc")
				p.className = "prestige-summary"
				p.innerHTML = msg
				dl.appendChild(p)

				let wrap = 0
				msg = "<div class=\"score-region-line\">"
				let regions = 0
				for (const region of [REGION_NORTH_AMERICA, REGION_EUROPE, REGION_CARIBBEAN, REGION_INDIA]) {
					var chit = V.awards[region]

					msg += `<span class="a${chit} award marker black square-sm award-in-score"                  
					onmouseenter="_tip_focus_award(${chit}, ${NONE})"
					onmouseleave="_tip_blur_award()"
					onmousedown="_tip_click_light('award',${chit})"
					><span class="score-region r${region}">${data.regions[region].name}</span>
					<span class="score-region-delta r${region}">${format_award_info(region, chit)}</span>
					</span>`
					regions++
					if (++wrap >= 2 && regions <= 2) {
						wrap = 0
						msg += "</div>"
						msg += "<div class=\"score-region-line\">"
					}
				}
				msg += "</div>"
				p = document.createElement("dc")
				p.className = "region-summary"
				p.innerHTML = msg
				dl.appendChild(p)

				p = document.createElement("dd")
				p.className = "score-below-regions"
				dl.appendChild(p)

				append_header("Global Demand")
				let era = current_era()
				for (let d = 0; d < NUM_DEMANDS; d++) {
					if (!V.global_demand.includes(d)) continue

					msg = `<div class=\"score-demand-line\"
							onmouseenter="_tip_focus_award(${chit}, ${NONE})"
							onmouseleave="_tip_blur_award()"
							onmousedown="_tip_click_light('award',${chit})"
							>`

					msg += `<div class = "score-demand-label d${d}"></div>`
					msg += `<div class = "score-demand-value d${d} e${era}"></div>`
					msg += `<div class = "score-demand-delta-box"><div class="score-demand-delta">${format_demand_info(d)}</div></div>`

					msg += "</div>"

					p = document.createElement("dc")
					p.className = "score-demand-summary"
					p.innerHTML = msg
					dl.appendChild(p)
				}

				p = document.createElement("dd")
				p.className = "score-below-demands"
				dl.appendChild(p)
			}

			append_header("Projected Results")
			append_results()
		} else if (id === "final_scoring_summary_dialog") {


			let winner = prestige_winner()
			append_header("Prestige")
			append_final_prestige()

			append_header("Debt")
			append_debt()

			append_header("Global Demand")
			for (let d = 0; d < NUM_DEMANDS; d++) {
				append_final_demand(d)
			}

			let any = false
			for (const s of [ NORTHERN_COLONIES, CAROLINAS, JAMAICA, BARBADOS, MADRAS, CALCUTTA ]) {
				if ((G.flags[s] === FRANCE) || (G.flags[s] === USA)) {
					if (!any) {
						append_header("Conquests")
						any = true
					}
					append_space(s)
				}
			}

			for (const s of [ ACADIA, QUEBEC_AND_MONTREAL, LOUISIANA, ST_DOMINGUE, GUADELOUPE, PONDICHERRY, CHANDERNAGORE ]) {
				if (G.flags[s] === BRITAIN) {
					if (!any) {
						append_header("Conquests")
						any = true
					}
					append_space(s)
				}
			}

			let header = document.createElement("dt")
			header.innerHTML = "<br/>"
			dl.appendChild(header)

			append_header("Projected Results")
			append_final_scoring_results()
		}

		body.appendChild(dl)
	})
}


function show_dialog(id, dialog_generator) {
	document.getElementById(id).classList.add("show")
	let body = document.getElementById(id).querySelector(".dialog_body")
	body.replaceChildren()
	if (dialog_generator) {
		dialog_generator(body)
	}
	if (!is_mobile()) dragElement(document.getElementById(id))
}


//BR// Makes an element/dialog draggable by the player
function dragElement(e) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
	var the_e = e
	if (document.getElementById(e.id + "header")) {
		document.getElementById(e.id + "header").onmousedown = dragMouseDown  // Drag by the header if it exists
	} else {
		e.onmousedown = dragMouseDown                                                  // Otherwise drag by the whole element
	}

	function dragMouseDown(e) {
		e.preventDefault()
		pos3 = e.clientX
		pos4 = e.clientY
		document.onmouseup = closeDragElement
		document.onmousemove = elementDrag
	}

	function elementDrag(e) {
		e.preventDefault()

		pos1 = pos3 - e.clientX
		pos2 = pos4 - e.clientY
		pos3 = e.clientX
		pos4 = e.clientY

		// set the element's new position

		the_e.style.position = "absolute";
		the_e.style.top = (the_e.offsetTop - pos2) + "px"
		the_e.style.left = (the_e.offsetLeft - pos1) + "px"
	}

	function closeDragElement() {
		// stop moving when mouse button is released
		document.onmouseup = null
		document.onmousemove = null
	}
}

function hide_dialog(id) {
	document.getElementById(id).classList.remove("show")
}

function toggle_dialog_collapse(id) {
	let dialog_body = document.getElementById(id).querySelector(".dialog_body")
	let dialog_x = document.getElementById(id).querySelector(".dialog_x")
	if (dialog_body.className.includes("hide")) {
		dialog_body.classList.remove("hide")
		dialog_x.textContent = "A"
	} else {
		dialog_body.classList.add("hide")
		dialog_x.textContent = "V"
	}
}


