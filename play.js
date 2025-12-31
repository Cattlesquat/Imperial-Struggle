"use strict"

const war_layout = {
	war_7yw_theater_drawn: [ 353, 0, 667, 93 ],
	war_7yw_theater_1_france: [ 57, 132, 152, 152 ],
	war_7yw_theater_1_britain: [ 225, 132, 152, 152 ],
	war_7yw_theater_2_france: [ 579, 132, 152, 152 ],
	war_7yw_theater_2_britain: [ 747, 132, 152, 152 ],
	war_7yw_theater_3_france: [ 57, 503, 152, 152 ],
	war_7yw_theater_3_britain: [ 225, 503, 152, 152 ],
	war_7yw_theater_4_france: [ 579, 503, 152, 152 ],
	war_7yw_theater_4_britain: [ 747, 503, 152, 152 ],
	war_wss_theater_drawn: [ 240, 0, 667, 93 ],
	war_wss_theater_1_france: [ 57, 132, 152, 152 ],
	war_wss_theater_1_britain: [ 225, 132, 152, 152 ],
	war_wss_theater_2_france: [ 579, 132, 152, 152 ],
	war_wss_theater_2_britain: [ 747, 132, 152, 152 ],
	war_wss_theater_3_france: [ 57, 501, 152, 152 ],
	war_wss_theater_3_britain: [ 225, 504, 152, 152 ],
	war_wss_theater_4_france: [ 579, 503, 152, 152 ],
	war_wss_theater_4_britain: [ 747, 503, 152, 152 ],
	war_was_theater_drawn: [ 233, 0, 667, 93 ],
	war_was_theater_1_france: [ 57, 116, 152, 152 ],
	war_was_theater_1_britain: [ 225, 116, 152, 152 ],
	war_was_theater_2_france: [ 579, 111, 152, 152 ],
	war_was_theater_2_britain: [ 747, 116, 152, 152 ],
	war_was_theater_3_france: [ 57, 445, 152, 152 ],
	war_was_theater_3_britain: [ 225, 445, 152, 152 ],
	war_was_theater_4_france: [ 579, 445, 152, 152 ],
	war_was_theater_4_britain: [ 747, 445, 152, 152 ],
	war_awi_theater_drawn: [ 227, 0, 667, 93 ],
	war_awi_theater_1_france: [ 57, 132, 152, 152 ],
	war_awi_theater_1_britain: [ 225, 132, 152, 152 ],
	war_awi_theater_2_france: [ 579, 443, 152, 152 ],
	war_awi_theater_2_britain: [ 747, 443, 152, 152 ],
	war_awi_theater_3_france: [ 115, 613, 152, 152 ],
	war_awi_theater_3_britain: [ 300, 613, 152, 152 ],
	war_awi_theater_4_france: [ 577, 132, 152, 152 ],
	war_awi_theater_4_britain: [ 747, 132, 152, 152 ],
	war_7yw_theater_1: [ 36, 76, 507, 360 ],
	war_7yw_theater_2: [ 557, 76, 505, 360 ],
	war_7yw_theater_3: [ 36, 447, 507, 360 ],
	war_7yw_theater_4: [ 557, 447, 505, 360 ],
	war_wss_theater_1: [ 36, 76, 507, 360 ],
	war_wss_theater_2: [ 557, 76, 505, 360 ],
	war_wss_theater_3: [ 36, 447, 507, 360 ],
	war_wss_theater_4: [ 557, 447, 505, 360 ],
	war_was_theater_1: [ 36, 67, 507, 321 ],
	war_was_theater_2: [ 557, 67, 505, 321 ],
	war_was_theater_3: [ 36, 400, 507, 299 ],
	war_was_theater_4: [ 557, 400, 505, 417 ],
	war_awi_theater_1: [ 36, 76, 507, 465 ],
	war_awi_theater_2: [ 557, 76, 505, 297 ],
	war_awi_theater_3: [ 557, 387, 505, 425 ],
	war_awi_theater_4: [ 59, 568, 443, 219 ]
}

const layout_theater_drawn = [0,0,1800,70] // Usually one of these at a time. One fairly rare case of 3. So I put them to the right of the name of the map for a bit less scrolling down.

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
	return [ xc - w/2, yc - h/2, w, h ]
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
	}
	else if (type === POLITICAL) {
		var alliance = (data.spaces[s].alliance !== undefined) && (data.spaces[s].alliance.length > 0)
		var prestige = data.spaces[s].prestige
		if (prestige && !alliance) {
			typename = "Prestige"
		}
		else if (data.spaces[s].region === REGION_EUROPE) {
			if (prestige) {
				typename = "Prestige + Alliance"
			} else {
				typename = "Alliance"
			}
		}
		else {
			typename = "Local Alliance"
		}
	}
	else {
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

	return bold(data.spaces[s].name) + " " + italic("(" + typename + ((value > 0) ? ": " + value : ""	) + ")") + ((other !== "") ? ": " + other : "")
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


function demand_tooltip(demand)
{
	var awards = data.demands[demand].awards[current_era()]
	var awards_string = awards.vp + " VP"
	if (awards.trp > 0) awards_string += ", " + awards.trp + " TRP"
	if (awards.debt !== 0) awards_string += ", " + ((awards.debt > 0) ? "+" : "") + awards.debt + " Debt"
	awards_string += " for most flagged " + data.demands[demand].name + " markets. "
	return bold(data.demands[demand].name) + ": " + italic(awards_string) + bold(data.flags[demand_flag_winner(demand)].name2) + " +" + demand_flag_delta(demand)
}

function award_tooltip(region)
{
	var award = V.awards[region]
	return bold(data.bizarro_spaces[AWARD_EUROPE + region].name) + ": "
		   + italic(data.awards[award].name + ((region === REGION_EUROPE) ? " for most total flags and +2 VP for most flagged prestige spaces" : " for most total flags"))
	       + ". " + bold(data.flags[region_flag_winner(region)].name2 + " +" + region_flag_delta(region)
	       + ((region === REGION_EUROPE) ? " / " + data.flags[prestige_winner()].name2 + " +" + prestige_flag_delta() : ""))
}

function bold (s, condition = true)
{
	if (!condition) return s
	return "<b>" + s + "</b>"
}

function italic (s, condition = true )
{
	if (!condition) return s
	return "<i>" + s + "</i>"
}

function strike (s, condition = true )
{
	if (!condition) return s
	return "<s>" + s + "</s>"
}


function on_init() {
	var i, a, s, x, y, w, h, lout

	init_preference_checkbox("noanims", false)
	init_preference_checkbox("noflipsies", false)
	init_preference_checkbox("downanddirty", false)
	init_preference_checkbox("tracksies", true)

	//BR// get_preference("noanims", false) (second argument is the "default" value if it's not set or has been deleted)
	//BR// body[data-noanims="true"] .space.action { non-animated css }

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

	define_board("#map", 2550, 1650, [ 24, 24, 24, 24 ])

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

		if ((s.type === POLITICAL) || (s.type === MARKET)) {
			let conflict_rect = rect.slice()
			if (s.type === MARKET) {
				if ((s.num === NORTHEAST_CHANNEL) || (s.num === OSWEGO)) {
					conflict_rect = translate_rect(conflict_rect, -65, -40) // upper left
				} else if ([ NIAGARA, HAVANA, ANTIGUA, KURPA, MARTINIQUE ].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -65, 20) // lower left
				} else {
					conflict_rect = translate_rect(conflict_rect, 32, 22) // Conflict markers positioning - default lower right
				}
			} else if (s.type === POLITICAL) {
				if ([ PRIVATEERS, IRELAND_1, SCOTLAND_1, DUTCH_1, GERMAN_STATES_1, PRUSSIA_1, PRUSSIA_3, SPAIN_1, SPAIN_3, AUSTRIA_1, AUSTRIA_3 ].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -63, 27) // Conflict markers positioning - lower right
				} else if ([ BAVARIA ].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -63, -45) // Conflict markers positioning - upper left
				} else if ([ DUTCH_2 ].includes(s.num)) {
					conflict_rect = translate_rect(conflict_rect, -15, 50) // Conflict markers positioning - lower middle
				} else {
					conflict_rect = translate_rect(conflict_rect, 30, 27) // Conflict markers positioning - default lower right
				}
			}
			conflict_rect = resize_rect(conflict_rect, 35, 35)     // fit to the counters, at least approximately
			define_space("conflict-space", s.num, conflict_rect).tooltip(space_tooltip)
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
			define_space ("fortdamaged", s.num, damaged_rect).tooltip(space_tooltip)
		}

		define_layout("lout-space", s.num, rect)

		if (s.type === TERRITORY) {
			if ((s.region === REGION_NORTH_AMERICA) || (s.region === REGION_CARIBBEAN)) {
				rect = translate_rect(rect, 35, 75) // Huguenot markers displayed at center of territory
				rect = resize_rect(rect, 51, 51) // fit to the counters
				define_space ("huguenots", s.num, rect)
				define_layout ("huguenot-space", s.num, rect)
			}
		}
	}

	for (i = 0; i <= 36; ++i) {
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
		define_marker("action-br", i, `square-sm action_${i+1} br`).tooltip ("Britain Action Round " + (i+1))
		define_marker("action-fr", i, `square-sm action_${i+1} fr`).tooltip ("France Action Round " + (i+1))
	}

	for (i = 0; i < NUM_SPACES; ++i) {
		let t = data.spaces[i].type
		if ((t === POLITICAL) || (t === MARKET)) {
			define_marker("conflict", i, "hex-sm")
		} else if (t === FORT) {
			define_marker("damaged", i, "hex-sm")
		}
	}

	for (a of data.demands) {
		define_marker("demand", a.num)
			.keyword("square-sm")
			.keyword(a.name.toLowerCase())
			.tooltip(demand_tooltip)
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
			.tooltip((a) => { return bold(data.advantages[a].name) + ": " + italic(data.advantages[a].desc) })
			.tooltip_image(advantage_tooltip_image)
		let marker = define_marker("advantage", a.num)
			.keyword("square advantage a" + a.num)
			.tooltip(bold(a.name) + ": " + italic(a.desc))
			.tooltip_image(advantage_tooltip_image)
	}

	for (a of data.investments) {
		define_marker("investment", a.num)
			.keyword("square investment i" + a.num)
			.tooltip(bold("Investment Tile: ") + a.name)
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
	}

	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		define_marker("squadron-fr", s, "marker hex fleet_fr").tooltip(space_tooltip)
		define_marker("squadron-br", s, "marker hex fleet_br").tooltip(space_tooltip)
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
function is_ministry_exhausted (who, m, ability = 0)
{
	if (!V.ministry[who].includes(m)) return false
	var idx = V.ministry[who].indexOf(m)
	return set_has(V.ministry_exhausted, idx + (ability * NUM_MINISTRY_CARDS))
}

function is_advantage_exhausted(a)
{
	return !!(V.advantages_exhausted & (1 << a))
}


function is_ministry_fully_exhausted(who, m)
{
	for (let i = 0; i < data.ministries[m].abilities; i++) {
		if (!is_ministry_exhausted(who, m, i)) return false
	}
	return true
}

function is_ministry_partially_exhausted(who, m)
{
	for (let i = 0; i < data.ministries[m].abilities; i++) {
		if (is_ministry_exhausted(who, m, i)) return true
	}
	return false
}


function available_debt(who)
{
	return G.debt_limit[who] - G.debt[who]
}

function available_debt_plus_trps(who)
{
	return available_debt(who) + G.treaty_points[who]
}

function update_debt_display()
{
	for (let who = FRANCE; who <= BRITAIN; who++) {
		let avail = available_debt_plus_trps(who)
		roles[who].stat.innerHTML = avail + " Debt + TRPs"
	}
}


function on_update() {
	var i, r, s, a

	begin_update()

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
				populate ("lout-space", s.num, "squadron-fr", s.num)
			if (V.flags[s.num] === BRITAIN)
				populate ("lout-space", s.num, "squadron-br", s.num)
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
				populate ("huguenot-space", s.num, (V.huguenots_spent.includes(s.num) ? "huguenots_spent" : "huguenots"), s.num)
			}
		}
		let dirty = set_has(V.dirty, s.num)
		let tracksies = get_preference("tracksies", true)
		update_keyword("space", s.num, "dirty_br", dirty && (V.dirty_who === BRITAIN) && tracksies)
		update_keyword("space", s.num, "dirty_fr", dirty && (V.dirty_who !== BRITAIN) && tracksies)
	}

	let noflipsies = get_preference("noflipsies", false)
	let downanddirty = get_preference("downanddirty", false)

	for (a = 0; a < NUM_ADVANTAGES; ++a) { ///
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
		for (i = 0; i < NUM_MINISTRY_SLOTS; ++i) {
			let m = V.ministry[who][i]
			if (m >= 0) {
				populate("panel-ministry", who, "ministry_card", m)
				update_keyword("ministry_card", m, "exhausted", V.ministry_revealed[who][i] && is_ministry_fully_exhausted(who, m))
				update_keyword("ministry_card", m, "partial", V.ministry_revealed[who][i] && is_ministry_partially_exhausted(who, m) && !is_ministry_fully_exhausted(who, m))
				update_keyword("ministry_card", m, "revealed", V.ministry_revealed[who][i] && !is_ministry_partially_exhausted(who, m))
				update_keyword("ministry_card", m, "hidden", !V.ministry_revealed[who][i])

				for (let ability = 0; ability < data.ministries[m].abilities; ability++) {
					if (is_ministry_exhausted(who, m, ability)) {
						update_keyword("ministry_card", m, "exhausted-" + (ability + 1), true)
					}
				}
			} else {
				populate_generic("panel-ministry", who, "card ministry_card deck_" + ((who === FRANCE) ? "fr" : "br"))
			}
		}
	}

	populate_with_list("panel-events", FRANCE, "event_card", V.hand[FRANCE], "card event_card deck")
	populate_with_list("panel-events", BRITAIN, "event_card", V.hand[BRITAIN], "card event_card deck")

	map_for_each(V.conflicts, (s, n) => {
		populate("conflict-space", s, "conflict", s)
		update_keyword("conflict", s, "plus-one", n > 1)
	})

	for (s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== FORT) continue
		if (is_damaged_fort(s)) {
			populate ("fortdamaged", s, "damaged", s)
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

	action_button("confirm", "Confirm")

	confirm_action_button("confirm_pass_to_reduce_debt", "Pass for Debt Reduction", "Confirm passing your entire action round to reduce Debt?")

	action_button("draw_event", "Draw Event")
	action_button("construct_squadron", "Build Squadron")
	action_button("buy_bonus_war_tile", "Buy War Tile")

	action_button("end_action_round", "End Action Round")
	confirm_action_button("confirm_end_action_round", "End Action Round Early", "You still have unspent action points! Confirm ending Action Round early?")
	confirm_action_button("confirm_no_military_upgrade", "End Action Round Early", "You are still eligible for a military upgrade! Confirm ending Action Round early?")

	action_button ("reveal_ministry", "Reveal")
	action_button ("dont_reveal_ministry", "Don't Reveal")
	action_button ("exhaust_ministry", "Exhaust")
	action_button ("dont_exhaust_ministry", "Don't Exhaust")

	action_button ("build_squadron", "Build Squadron w/ Discount")
	action_button ("discard_event_for_trp", "Discard Event for TRP")
	action_button ("increase_debt_limit", "Increase Debt Limit")
	action_button ("jacobite_vp", "Score VP")

	action_button("shift_market", "Shift Market")
	action_button("place_conflict_marker", "Place Conflict Marker")

	action_button ("use_advantage", "Use")
	action_button ("dont_use_advantage", "Don't Use")

	action_button ("major", "Major")
	action_button ("minor", "Minor")

	action_button ("return_to_pool", "Return to Pool")
	action_button ("remove_from_game", "Remove From Game")

    action_button("pass", "Pass")
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
		war_display[w].hidden = (war !== w)
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
					(player === FRANCE) ? "marker hex war-basic fr" : "marker hex war-basic br"
				)
				populate_with_list(
					"lout-theater", offset,
					"bonus_war", V.theater_bonus_war_tiles[player][theater],
					war_reverse[player][war]
				)
				++offset
			}
		}
	}
}

const event_card_names = data.cards.map(x => x?.name)
const ministry_card_names = data.ministries.map(x => x?.name)
const advantage_names = data.advantages.map(x => x?.name)

function escape_text(text) {
	text = escape_tip_class_sub(text, /\bEE(\d+)\b/g, "tip-event-uc", "card event_card c$1", event_card_names)
	text = escape_tip_class_sub(text, /\bEEF(\d+)\b/g, "tip-event-uc-fr", "card event_card c$1", event_card_names)
	text = escape_tip_class_sub(text, /\bEEB(\d+)\b/g, "tip-event-uc-br", "card event_card c$1", event_card_names)

	text = escape_tip_class_sub(text, /\bMM(\d+)\b/g, "tip-ministry-uc", "card ministry_card c$1", ministry_card_names)
	text = escape_tip_class_sub(text, /\bMMF(\d+)\b/g, "tip-ministry-uc-fr", "card ministry_card c$1", ministry_card_names)
	text = escape_tip_class_sub(text, /\bMMB(\d+)\b/g, "tip-ministry-uc-br", "card ministry_card c$1", ministry_card_names)

	text = escape_tip_class_sub(text, /\bAA(\d+)\b/g, "tip-advantage-uc", "marker advantage a$1", advantage_names)
	text = escape_tip_class_sub(text, /\bAAF(\d+)\b/g, "tip-advantage-uc-fr", "marker advantage a$1", advantage_names)
	text = escape_tip_class_sub(text, /\bAAB(\d+)\b/g, "tip-advantage-uc-br", "marker advantage a$1", advantage_names)

	text = escape_tip_class_sub(text, /\bE(\d+)\b/g, "tip-event", "card event_card c$1", event_card_names)
	text = escape_tip_class_sub(text, /\bEF(\d+)\b/g, "tip-event-fr", "card event_card c$1", event_card_names)
	text = escape_tip_class_sub(text, /\bEB(\d+)\b/g, "tip-event-br", "card event_card c$1", event_card_names)

	text = escape_tip_class_sub(text, /\bM(\d+)\b/g, "tip-ministry", "card ministry_card c$1", ministry_card_names)
	text = escape_tip_class_sub(text, /\bMF(\d+)\b/g, "tip-ministry-fr", "card ministry_card c$1", ministry_card_names)
	text = escape_tip_class_sub(text, /\bMB(\d+)\b/g, "tip-ministry-br", "card ministry_card c$1", ministry_card_names)

	text = escape_tip_class_sub(text, /\bA(\d+)\b/g, "tip-advantage", "marker advantage a$1", advantage_names)
	text = escape_tip_class_sub(text, /\bAF(\d+)\b/g, "tip-advantage-fr", "marker advantage a$1", advantage_names)
	text = escape_tip_class_sub(text, /\bAB(\d+)\b/g, "tip-advantage-br", "marker advantage a$1", advantage_names)

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
			send_message("action", [ "frenchify", null, game_cookie ])
			evt.preventDefault()
			break
		case "b":
		case "B":
			send_message("action", [ "britify", null, game_cookie ])
			evt.preventDefault()
			break
		case "r":
		case "R":
			send_message("action", [ "cheatrefresh", null, game_cookie ])
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
			send_message("action", [ "cheat_huguenots", null, game_cookie ])
			break;
		case "c":
			send_message("action", [ "cheat_conflict", null, game_cookie])
			break;
		case "d":
		case "y":
			send_message("action", [ "cheat_damage", null, game_cookie])
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
	world.tip.innerHTML = `
		<div class="marker square advantage a${a} reverse advantage-back"></div>
		<div class="marker square advantage a${a} advantage-front"></div>
	`
}

function on_blur_advantage_tip() {
	world.tip.hidden = true
	world.tip.innerHTML = ""
}

function advantage_class_name(a) {
	return `advantage.a${a}`
}
