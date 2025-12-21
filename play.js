"use strict"

const war_layout = {
	"war_7yw_theater_drawn": [265,0,500,70],
	"war_7yw_theater_1_france": [43,99,114,114],
	"war_7yw_theater_1_britain": [169,99,114,114],
	"war_7yw_theater_2_france": [434,99,114,114],
	"war_7yw_theater_2_britain": [560,99,114,114],
	"war_7yw_theater_3_france": [43,377,114,114],
	"war_7yw_theater_3_britain": [169,377,114,114],
	"war_7yw_theater_4_france": [434,377,114,114],
	"war_7yw_theater_4_britain": [560,377,114,114],
	"war_wss_theater_drawn": [180,0,500,70],
	"war_wss_theater_1_france": [43,99,114,114],
	"war_wss_theater_1_britain": [169,99,114,114],
	"war_wss_theater_2_france": [434,99,114,114],
	"war_wss_theater_2_britain": [560,99,114,114],
	"war_wss_theater_3_france": [43,376,114,114],
	"war_wss_theater_3_britain": [169,378,114,114],
	"war_wss_theater_4_france": [434,377,114,114],
	"war_wss_theater_4_britain": [560,377,114,114],
	"war_was_theater_drawn": [175,0,500,70],
	"war_was_theater_1_france": [43,87,114,114],
	"war_was_theater_1_britain": [169,87,114,114],
	"war_was_theater_2_france": [434,83,114,114],
	"war_was_theater_2_britain": [560,87,114,114],
	"war_was_theater_3_france": [43,334,114,114],
	"war_was_theater_3_britain": [169,334,114,114],
	"war_was_theater_4_france": [434,334,114,114],
	"war_was_theater_4_britain": [560,334,114,114],
	"war_awi_theater_drawn": [170,0,500,70],
	"war_awi_theater_1_france": [43,99,114,114],
	"war_awi_theater_1_britain": [169,99,114,114],
	"war_awi_theater_2_france": [434,332,114,114],
	"war_awi_theater_2_britain": [560,332,114,114],
	"war_awi_theater_3_france": [86,460,114,114],
	"war_awi_theater_3_britain": [225,460,114,114],
	"war_awi_theater_4_france": [433,99,114,114],
	"war_awi_theater_4_britain": [560,99,114,114],
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
		var rect = layout.nodes[g][name]
		if (rect)
			return rect
	}
	return null
}

function center_rect(xc, yc, w, h) {
	return [ xc - w/2, yc - h/2, w, h ]
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

	return bold(data.spaces[s].name) + " " + italic("(" + typename + ((value > 0) ? ": " + value : "") + ")");
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

function bold (s)
{
	return "<b>" + s + "</b>"
}

function italic (s)
{
	return "<i>" + s + "</i>"
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

		let space_rect = structuredClone(rect)  //BR// I want a separate copy, not the same array
		if (s.type === TERRITORY) {		        //BR// Territory clickbox extends above the space
			space_rect[1] -= 38
			space_rect[3] += 38
		}

		define_space("space", s.num, space_rect)
			.keyword(space_type_class[s.type])
			.tooltip(space_tooltip)

		if (s.type === TERRITORY) {
			rect = translate_rect(rect, 0, -38) //BR// Territory markers displayed above the spaces
		} else if (s.type === MARKET) {
			rect = translate_rect(rect, 0, -3) // Move every market flag position up a bit
		} else if (s.type === FORT) {
			rect = translate_rect(rect, -1, -12) // Move every fort flag position up a bunchy (uncover the fort number)
		}

		define_layout("lout-space", s.num, rect)
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

	for (i = 0; i < NUM_SPACES; ++i)
		define_marker("conflict", i, "hex-sm")

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
		define_thing("tip-advantage", a.num).layout(resize_rect(rect, 88, 88)).tooltip((a) => { return bold(data.advantages[a].name) + ": " + italic(data.advantages[a].desc) })
		define_marker("advantage", a.num)
			.keyword("square advantage a" + a.num)
			.tooltip(bold(a.name) + ": " + italic(a.desc))
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

	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		define_marker("squadron-fr", s, "marker hex fleet_fr").tooltip(space_tooltip(s))
		define_marker("squadron-br", s, "marker hex fleet_br").tooltip(space_tooltip(s))
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
	return set_has(V.ministry_exhausted, idx + (ability * NUM_ADVANTAGES))
}

function is_advantage_exhausted(a)
{
	return !!(V.advantages_exhausted & (1 << a))
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
		}

		update_keyword("space", s.num, "dirty", set_has(V.dirty, s.num))
	}

	for (a = 0; a < NUM_ADVANTAGES; ++a) {
		var layout, index
		if (V.advantages[a] === NONE) {
			layout = "lout-advantage"
			index = a
		} else {
			layout = "panel-advantage"
			index = V.advantages[a]
		}
		populate(layout, index, "advantage", a)
		if (is_advantage_exhausted(a)) {
			// TODO - display Exhausted marker for/on this advantage
		}
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
				update_keyword("ministry_card", m, "revealed", V.ministry_revealed[who][i])
				update_keyword("ministry_card", m, "hidden", !V.ministry_revealed[who][i])

				for (let ability = 0; ability < data.ministries[m].abilities; ability++) {
					if (is_ministry_exhausted(who, m, ability)) {
						//BR// TODO - somehow show exhausted marker on a decent part of the ministry card
						//BR// TODO - if card has two possibile abilities (i.e. data.ministries[m].abilities > 1) then show each exhausted marker near where it's specific ability is printed on card
						populate_generic("panel-ministry", who, "marker square-sm exhausted")
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

	action_button("paydebt", "Add 1 Debt")
	action_button("paytrp", "Spend 1 Treaty Point")

	action_button("confirm", "Confirm")
	action_button("pass", "Pass")

	confirm_action_button("confirm_pass_to_reduce_debt", "Pass for Debt Reduction", "Confirm passing your entire action round to reduce Debt?")

	action_button("draw_event", "Draw Event")
	action_button("construct_squadron", "Construct Squadron")

	action_button("end_action_round", "End Action Round")
	confirm_action_button("confirm_end_action_round", "End Action Round Early", "You still have unspent action points! Confirm ending Action Round early?")
	confirm_action_button("confirm_no_military_upgrade", "End Action Round Early", "You are still eligible for a military upgrade! Confirm ending Action Round early?")

	action_button ("reveal_ministry", "Reveal")
	action_button ("dont_reveal_ministry", "Don't Reveal")

	action_button ("use_advantage", "Use")
	action_button ("dont_use_advantage", "Don't Use")

	action_button ("major", "Major")
	action_button ("minor", "Minor")

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
	}
})

