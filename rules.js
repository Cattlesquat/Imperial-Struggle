"use strict"
const data = require("./data.js")

const ROLES = [ "France", "Britain" ]

var G, L, R, V, P = {}    // G = Game state, V = View, R = role of active player, L = Local, P = Procedures

/* CONSTANTS */

// FLAGS
const FRANCE  = 0
const BRITAIN = 1
const SPAIN   = 2
const USA     = 3
const NONE    = 4

// Types of Action Point
const ECON  = 0
const DIPLO   = 1
const MIL   = 2
const WILD  = 3

// Amounts of things!
const NUM_REGIONS           = 4
const NUM_INVESTMENT_TILES  = 24
const NUM_BASE_WAR_TILES    = 16 // per side
const NUM_BONUS_WAR_TILES   = 12 // per side, per war
const NUM_WARS              = 4
const NUM_EVENT_CARDS       = 41
const NUM_MINISTRY_KEYWORDS = 5
const NUM_MINISTRY_CARDS    = 21
const NUM_DEMANDS           = 6
const NUM_AWARD_TILES       = 8
const NUM_ADVANTAGES 		= 22
const NUM_SPACES            = 112
const NUM_ACTION_POINTS_TYPES       = 3

// Types of War Tile
const WAR_DUDE = 0 // Just a soldier
const WAR_DEBT = 1 // Debt attack
const WAR_FORT = 2 // Fort/Fleet attack
const WAR_FLAG = 3 // Diplomatic attack

// Eras
const SUCCESSION_ERA = 0
const EMPIRE_ERA = 1
const REVOLUTION_ERA = 2

// Wars
const WAR_WSS = 1
const WAR_WAS = 2
const WAR_7YW = 3
const WAR_AWI = 4

// Ministry keywords
const FINANCE      = 0
const MERCANTILISM = 1
const GOVERNANCE   = 2
const STYLE        = 3
const SCHOLARSHIP  = 4

// Global Demand
const FURS    = 0
const SPICE   = 1
const FISH    = 2
const TOBACCO = 3
const SUGAR   = 4
const COTTON  = 5

// Advantages
const BALTIC_TRADE            = 0   // EUROPE
const CENTRAL_EUROPE_CONFLICT = 1
const GERMAN_DIPLOMACY        = 2
const ITALY_INFLUENCE         = 3
const MEDITERRANEAN_INTRIGUE  = 4
const NAVAL_BASTION           = 5
const SILESIA_NEGOTIATIONS    = 6
const ALGONQUIN_RAIDS         = 7   // NORTH AMERICA
const FUR_TRADE               = 8
const IROQUOIS_RAIDS          = 9
const PATRIOT_AGITATION       = 10
const WHEAT                   = 11
const FRUIT                   = 12  // CARIBBEAN
const LETTERS_OF_MARQUE       = 13
const PIRATE_HAVENS           = 14
const RUM                     = 15
const SLAVING_CONTRACTS       = 16
const POWER_STRUGGLE          = 17  // INDIA
const RAIDS_AND_INCURSIONS    = 18
const SEPARATIST_WARS         = 19
const SILK                    = 20
const TEXTILES                = 21

// Event Deck Eras
const SUCCESSION_ERA_CARDS = 15
const EMPIRE_ERA_CARDS     = 30
const REVOLUTION_ERA_CARDS = 41

// Event Cards
const CARNATIC_WAR                  = 1  // SUCCESSION ERA
const ACTS_OF_UNION                 = 2
const TROPICAL_DISEASES             = 3
const SOUTH_SEA_SPECULATION         = 4
const WAR_OF_JENKINS_EAR            = 5
const NATIVE_AMERICAN_ALLIANCES     = 6
const AUSTRO_SPANISH_RIVALRY        = 7
const TAX_REFORM                    = 8
const GREAT_NORTHERN_WAR            = 9
const VATICAN_POLITICS              = 10
const CALICO_ACTS                   = 11
const MILITARY_SPENDING_OVERRUNS    = 12
const ALBERONIS_AMBITION            = 13
const FAMINE_IN_IRELAND             = 14
const INTEREST_PAYMENTS             = 15
const CARRIBEAN_SLAVE_UNREST        = 16 // EMPIRE ERA
const PACTE_DE_FAMILLE              = 17
const BYNGS_TRIAL                   = 18
const LE_BEAU_MONDE                 = 19
const HYDER_ALI                     = 20
const CO_HONG_SYSTEM                = 21
const CORSICAN_CRISIS               = 22
const EUROPEAN_PANIC                = 23
const WEST_AFRICAN_GOLD_MINING      = 24
const WAR_OF_THE_QUADRUPLE_ALLIANCE = 25
const SALON_D_HERCULE               = 26
const BENGAL_FAMINE                 = 27
const FATHER_LE_LOUTRE              = 28
const WAR_OF_THE_POLISH_SUCCESSION  = 29
const JONATHANS_COFFEE_HOUSE        = 30
const NOOTKA_INCIDENT               = 31 // REVOLUTION ERA
const HAITIAN_REVOLUTION            = 32
const LOGE_DES_NEUF_SOEURS          = 33
const LA_GABELLE                    = 34
const JESUIT_ABOLITION              = 35
const WEALTH_OF_NATIONS             = 36
const DEBT_CRISIS                   = 37
const EAST_ASIA_PIRACY              = 38
const STAMP_ACT                     = 39
const FALKLANDS_CRISIS              = 40
const COOK_AND_BOUGAINVILLE         = 41

// MINISTRY CARDS
const THE_CARDINAL_MINISTERS      = 1   // F
const JOHN_LAW                    = 2   // F
const COURT_OF_THE_SUN_KING       = 3   // F
const JACOBITE_UPRISINGS          = 4   // F
const ROBERT_WALPOLE              = 5   //  B
const JONATHAN_SWIFT              = 6   //  B
const EAST_INDIA_COMPANY          = 7   //  B
const BANK_OF_ENGLAND             = 8   //  B
const NEW_WORLD_HUGUENOTS         = 9   // F
const EDMOND_HALLEY               = 10  //  B
const CHOISEUL                    = 11  // F
const DUPLEIX                     = 12  // F
const POMPADOUR_AND_DU_BARRY      = 13  // F
const VOLTAIRE                    = 14  // F
const PITT_THE_ELDER              = 15  //  B
const CHARLES_HANBURY_WILLIAMS    = 16  //  B
const MERCHANT_BANKS              = 17  //  B
const SAMUEL_JOHNSON              = 18  //  B
const JAMES_WATT                  = 19  //  B
const PAPACY_HANOVER_NEGOTIATIONS = 20  //  B
const TOWNSHEND_ACTS              = 21  //  B
const EDMUND_BURKE                = 22  //  B
const TURGOT                      = 23  // F
const NORTH_AMERICAN_TRADE        = 24  // F
const MARQUIS_DE_CONDORCET        = 25  // F
const LAVOISIER                   = 26  // F

// REGIONS
const REGION_EUROPE        = 0
const REGION_NORTH_AMERICA = 1
const REGION_CARIBBEAN     = 2
const REGION_INDIA         = 3
const REGION_ALL           = -1

// SUBREGIONS
const SUBREGION_CANADA         = 0
const SUBREGION_NORTHERN_COL   = 1
const SUBREGION_HOOGHLY_RIVER  = 2
const SUBREGION_CARNATIC_COAST = 3

// SPACE TYPES
const POLITICAL = 0
const MARKET    = 1
const NAVAL     = 2
const TERRITORY = 3
const FORT      = 4

// SPACES
const IRELAND_1 = 0
const IRELAND_2 = 1
const SCOTLAND_1 = 2
const SCOTLAND_2 = 3
const DENMARK = 4
const PRUSSIA_1 = 5
const PRUSSIA_2 = 6
const PRUSSIA_3 = 7
const PRUSSIA_4 = 8
const SWEDEN = 9
const RUSSIA = 10
const DUTCH_1 = 11
const DUTCH_2 = 12
const GERMAN_STATES_1 = 13
const GERMAN_STATES_2 = 14
const BAVARIA = 15
const AUSTRIA_1 = 16
const AUSTRIA_2 = 17
const AUSTRIA_3 = 18
const AUSTRIA_4 = 19
const SARDINIA = 20
const SAVOY = 21
const SPAIN_1 = 22
const SPAIN_2 = 23
const SPAIN_3 = 24
const SPAIN_4 = 25
const GIBRALTAR = 26
const MINORCA = 27
const BISCAY = 28
const BALEARIC = 29
const ALGONQUIN = 30
const HUDSON_BAY = 31
const YORK_FACTORY = 32
const QUEBEC_AND_MONTREAL = 33
const GULF_OF_ST_LAWRENCE = 34
const CABOT_STRAIT = 35
const LOUISBOURG = 36
const ACADIA = 37
const NORTHEAST_CHANNEL = 38
const HALIFAX = 39
const GEORGES_BANK = 40
const ATLANTIC_PASSAGE = 41
const GULF_OF_MAINE = 42
const MASS_BAY = 43
const NORTHERN_COLONIES = 44
const CHESAPEAKE = 45
const HUDSON_VALLEY = 46
const ALBANY = 47
const CUMBERLAND = 48
const OHIO_FORKS = 49
const ALLEGHENY = 50
const NIAGARA = 51
const OSWEGO = 52
const CHAMPLAIN_VALLEY = 53
const ILE_AUX_NOIX = 54
const CATARAQUI = 55
const IROQUOIS = 56
const SONS_OF_LIBERTY = 57
const USA_1 = 58
const USA_2 = 59
const ASIENTO = 60
const PRIVATEERS = 61
const BUCCANEERS = 62
const CAROLINAS = 63
const GEORGIA = 64
const SAN_AGUSTIN = 65
const PANZACOLA = 66
const BAHAMAS_RUN_WEST = 67
const BAHAMAS_RUN_NORTH = 68
const CAICOS = 69
const BAHAMAS_RUN = 70
const ST_DOMINGUE = 71
const PORT_DE_PAIX = 72
const PUERTO_PRINCIPE = 73
const PUERTO_RICO = 74
const ANTIGUA = 75
const MARTINIQUE = 76
const ST_LUCIA = 77
const ANTILLES_CHANNEL = 78
const GUADELOUPE = 79
const BARBADOS = 80
const HAVANA = 81
const GULF_OF_CAZONES = 82
const SANTIAGO = 83
const JAMAICA = 84
const CAYMAN_PASSAGE = 85
const CUBA_PASSAGE_EAST = 86
const CUBA_PASSAGE = 87
const ST_JAMES = 88
const LOUISIANA = 89
const MARATHA = 90
const NIZAM = 91
const MYSORE = 92
const MALACCA_ROUTE = 93
const HOOGHLY_RIVER = 94
const CHANDERNAGORE = 95
const PLASSEY = 96
const WEST_BENGAL = 97
const MIDNAPORE = 98
const CALCUTTA = 99
const KURPA = 100
const ARCOT = 101
const VELLORE = 102
const KANCHIPURAM = 103
const MADRAS = 104
const PONDICHERRY = 105
const KARAIKAL = 106
const VANDAVASI = 107
const TIRUCHIRAPPALLI = 108
const CALICUT = 109
const MANGALORE = 110
const MALABAR_COAST = 111

const NAVY_BOX = 134
const AWARD_EUROPE = 135
const AWARD_NORTH_AMERICA = 136
const AWARD_CARIBBEAN = 137
const AWARD_INDIA = 138
const GLOBAL_DEMAND_SPACE = 139
const INITIATIVE_SPACE = 140
const TURN_1_SPACE = 141
const WAR_WSS_SPACE = 142
const TURN_2_SPACE = 143
const TURN_3_SPACE = 144
const WAR_WAS_SPACE = 145
const TURN_4_SPACE = 146
const WAR_7YW_SPACE = 147
const TURN_5_SPACE = 148
const WAR_AWI_SPACE = 149
const TURN_6_SPACE = 150
const GENERAL_RECORDS_NEGATIVE_7 = 151
const GENERAL_RECORDS_0 = 158
const FRANCE_ADVANTAGES = 195
const FRANCE_MINISTRIES = 196
const FRANCE_SQUADRONS = 197
const FRANCE_BASIC_WAR_TILES = 198
const FRANCE_BONUS_WAR_TILES = 199
const BRITAIN_ADVANTAGES = 200
const BRITAIN_MINISTRIES = 201
const BRITAIN_SQUADRONS = 202
const BRITAIN_BASIC_WAR_TILES = 203
const BRITAIN_BONUS_WAR_TILES = 204
const AVAILABLE_INVESTMENT_1 = 205
const AVAILABLE_INVESTMENT_2 = 206
const AVAILABLE_INVESTMENT_3 = 207
const AVAILABLE_INVESTMENT_4 = 208
const AVAILABLE_INVESTMENT_5 = 209
const AVAILABLE_INVESTMENT_6 = 210
const AVAILABLE_INVESTMENT_7 = 211
const AVAILABLE_INVESTMENT_8 = 212
const AVAILABLE_INVESTMENT_9 = 213
const INVESTMENT_TILE_STACK = 214
const USED_INVESTMENT_TILES = 215
const DRAW_PILE = 216
const DISCARD_PILE = 217
const PLAYED_EVENTS = 218

/* TILES & CARDS */


function player_has_advantage(p, a) {
	for (var s of data.advantages.req)
		if (G.flags[s] !== p)
			return false
	return true
}

function update_advantages() {
	for (var i = 0; i < NUM_ADVANTAGES; i++) {
		if (player_has_advantage(FRANCE, i))
			G.advantages[i] = FRANCE
		else if (player_has_advantage(BRITAIN, i))
			G.advantages[i] = BRITAIN
		else
			G.advantages[i] = NONE
	}
}

function beginning_of_era() {
	return ([PEACE_TURN_1, PEACE_TURN_3, PEACE_TURN_5].includes(G.turn))
}

function current_era() {
	if (G.turn < PEACE_TURN_3) return SUCCESSION_ERA
	if (G.turn < PEACE_TURN_5) return EMPIRE_ERA
	return REVOLUTION_ERA
}

/* 3.8 - CONFLICT MARKERS */

const CONFLICT_NONE = 0
const CONFLICT_NORMAL = 1
const CONFLICT_PLUS_ONE = 2

function get_conflict_marker(s) {
	return map_get(G.conflicts, s, 0)
}

function set_conflict_marker(s, n = 1) {
	if (n === 0)
		map_delete(G.conflicts, s)
	else
		map_set(G.conflicts, s, n)
}

function remove_conflict_marker(s) {
	map_delete(G.conflicts, s)
}

/* 4.0 - GAME SEQUENCE */

P.main = script (`
	for G.turn in 0 to 9 {
		if (data.turns[G.turn].war) {
			call war_turn
		} else {
			call peace_turn
		}
	}
`)

const PEACE_TURN_1 = 0
const PEACE_TURN_3 = 3
const PEACE_TURN_5 = 7
const PEACE_TURN_6 = 9

const WAR_TURN_AWI = 8

P.peace_turn = script (`
	if (G.turn === PEACE_TURN_3 || G.turn === PEACE_TURN_5) {
		call deck_phase
		call debt_limit_increase_phase
	}
	call award_phase
	call global_demand_phase
	call reset_phase
	call deal_cards_phase
	call ministry_phase
	if (G.turn !== PEACE_TURN_1) {
		call initiative_phase
	}
	call action_phase
	call reduce_treaty_points_phase
	call resolve_remaining_powers
	call scoring_phase
	call victory_check_phase
	if (G.turn === PEACE_TURN_6) {
		call final_scoring
	}
`)

P.war_turn = script (`
	call war_resolution_phase
	call victory_check_phase
	call reset_phase
	if (G.turn <  WAR_TURN_AWI) {
		call war_layout_phase
	}
`)

/* 4.1.1 - DECK PHASE */

P.deck_phase = function () {

	if (beginning_of_era() && current_era() === EMPIRE_ERA) {
		for (var card = SUCCESSION_ERA_CARDS + 1; i <= EMPIRE_ERA_CARDS; i++)
			G.deck.push(i);
		log("=Deck Phase")
		log ("Empire Era events added to Event Deck")
		log ("Shuffling Event Deck")
		shuffle(G.deck)
	}

	if (beginning_of_era() && current_era() === REVOLUTION_ERA) {
		log("=Deck Phase")

		log ("Succession Era events REMOVED from Event Deck")
		for (var index = G.deck.length - 1; index >= 0; index--) {
			if (data.cards[index].era === SUCCESSION_ERA) {
				G.deck.delete(index);
			}
		}

		for (var card = EMPIRE_ERA_CARDS + 1; i <= REVOLUTION_ERA_CARDS; i++)
			G.deck.push(i);
		log ("Revolution Era events added to Event Deck")
		log ("Shuffling Event Deck")
		shuffle(G.deck)
	}
	end()
}

/* 4.1.2 - DEBT LIMIT INCREASE PHASE */

P.debt_limit_increase_phase = function () {
	if (beginning_of_era() && (current_era() !== SUCCESSION_ERA)) {
		log("=Debt Limit Increase Phase")
		log ("French DEBT LIMIT increased by 4")
		log ("British DEBT LIMIT increased by 4")
		G.debt_limit[FRANCE]  += 4
		G.debt_limit[BRITAIN] += 4
	}
	end()
}

/* 4.1.3 - AWARD PHASE */

P.award_phase = function () {
	log("=Award Phase")

	// Really it should either be 0 or it should be NUM_REGIONS or NUM_REGIONS*2
	if (G.award_chits.length < NUM_REGIONS) {
		for (var i = 0; i < NUM_AWARD_TILES; i++) {
			G.award_chits.push(i)
		}
		shuffle(G.award_chits)
	}

	// Deal one per region
	for (var i = 0; i < NUM_REGIONS; i++) {
		var chit = G.award_chits.pop()
		G.awards[i] = chit
		log(data.awards[chit].name + " -> " + data.regions[i].name)
	}

	end()
}

/* 4.1.4 - GLOBAL DEMAND PHASE */

P.global_demand_phase = function () {
	log("=Global Demand Phase")

	var global_demand_chits = []
	for (var i = 0; i < NUM_DEMANDS; i++)
		global_demand_chits.push(i)
	shuffle(global_demand_chits)

	G.global_demand = []
	for (var i = 0; i < 3; i++) {
		var chit = global_demand_chits.pop()
		log(data.demands[chit].name)
		G.global_demand.push(chit)
	}

	end()
}

/* 4.1.5 - RESET PHASE */

P.reset_phase = function () {
	if (G.turn !== PEACE_TURN_1) {
		log("=Global Demand Phase")
		log ("All exhausted advantages refreshed")
		log ("All exhausted ministries refreshed")
		log ("Remaining investments from previous turn moved to Used Investments")
	}

	// remove exhausted from advantage and ministry cards
	G.exhausted_advantage = []
	G.exhausted_ministry = []

	// move investments to used
	for (var i of G.available_investments)
		G.used_investments.push(i)
	G.available_investments = []

	end()
}

/* 4.1.6 - DEAL CARDS PHASE */

P.deal_cards_phase = function () {
	log("=Deal Cards Phase")

	while (G.available_investments.length < 9) {
		if (G.investment_tile_stack.length === 0) {
			log("Reshuffled investment tiles")
			G.investment_tile_stack = G.used_investments
			G.used_investments = []
			shuffle(G.investment_tile_stack)
		}
		G.available_investments.push(G.investment_tile_stack.pop())
	}

	if ((current_era() === REVOLUTION_ERA) && beginning_of_era()) {
		var any = false
		for (var who = FRANCE; who <= BRITAIN; who++) {
			for (var index = G.hand[who].length - 1; index >= 0; index--) {
				if (data.cards[G.hand[who][index]].era === SUCCESSION_ERA) {
					G.hand[who][index].delete()
                    any = true
				}
			}
		}
		if (any) {
			log ("Succession Era cards in players' hands removed from the game (see 4.1.6).")
		}
	}

	// Deal 3 event cards to each player. If we run out of cards, reshuffle any discards. Show # cards dealt in a way that documents who got "reshuffles" if anyone
	for (who = FRANCE; who <= BRITAIN; who++) {
		var dealt = 0;
		for (var i = 0; i < 3; ++i) {
			if (G.deck.length === 0) {
				if (dealt > 0) {
					log (dealt + " cards dealt to " + data.flags[who].name)
				}
				log ("Discard Pile shuffled to form new Event Deck")
				G.deck = G.discard_pile
				shuffle(G.deck)
			}
			if (G.deck.length > 0) {
				G.hand[who].push(G.deck.pop())
				dealt++
			} else {
				log ("Event deck is EMPTY.")
				break;
			}
		}
		if (dealt > 0) {
			log (dealt + " cards dealt to " + data.flags[who].name)
		}
	}

	G.active = [ FRANCE, BRITAIN ]
	goto("deal_cards_discard")
}

P.deal_cards_discard = {
	_begin() {
		L.discarded = [ [], [] ]
	},
	prompt() {
		if (G.hand[R].length > 3) {
			V.prompt = "Deal Cards Phase: Discard down to three Event cards."
			for (var c of G.hand[R])
				action_event_card(c)
		} else {
			V.prompt = "Deal Cards Phase: Review newly drawn Event cards."
			button("confirm")
		}
		if (L.discarded[R].length > 0)
			button("undo")
	},
	event_card(c) {
		array_delete_item(G.hand[R], c)
		L.discarded[R].push(c)
	},
	undo() {
		G.hand[R].push(L.discarded[R].pop())
	},
	confirm() {
		set_delete(G.active, R)
		if (G.active.length === 0) {
			// Only when both players are finished do we "reveal" the cards discarded (which are now public information). We also need to maintain a discard pile because it occasionally reshuffles late in the game
			for (var who = FRANCE; who <= BRITAIN; who++) {
				G.discard_pile.push(L.discarded[who]);
			}
			end()
		}
	},
}

/* 4.1.7 - MINISTRY PHASE */

P.ministry_phase = function () {
	if (!beginning_of_era()) {
		goto ("replace_ministry_cards")
	} else {
		G.ministry          = [ [], [] ]
		G.ministry_revealed = [ [], [] ]
		G.active            = [ FRANCE, BRITAIN ]
		goto("choose_ministry_cards")
	}
}

P.choose_ministry_cards = {
	prompt() {
		V.prompt = "Ministry Phase: Choose two ministry cards."
		V.all_ministries = []
		for (var m of data.ministries) {
			if (m.side === R && !G.ministry[R].includes(m.num)) {
				if (m.era.includes(current_era())) {
					V.all_ministries.push(m.num)
					if (G.ministry[R].length < 2)
						action_ministry_card(m.num)
				}
			}
		}
		if (G.ministry[R].length > 0)
			button("undo")
		if (G.ministry[R].length === 2)
			button("confirm")
	},
	ministry_card(c) {
		G.ministry[R].push(c)
		G.ministry_revealed[R].push(false)
	},
	undo() {
		G.ministry[R].pop()
		G.ministry_revealed[R].pop()
	},
	confirm() {
		set_delete(G.active, R)
		if (G.active.length === 0)
			end()
	},
}

P.replace_ministry_cards = {
	prompt() {
		if (!G.ministry_revealed[R].includes(false)) {
			V.prompt = "Ministry Phase: No ministries eligible for mid-era replacement (see 4.1.7)."
			button("confirm")
		}
		else {
			//TODO: allow replacement of ministries mid-era
			V.prompt = "Ministry Phase: Select any unrevealed ministries you wish to replace. (TODO! For now, just suck it)"
			button("confirm")
		}
	},
	confirm() {
		set_delete(G.active, R)
		if (G.active.length === 0)
			end()
	},
}

/* 4.1.8 - INITIATIVE PHASE */

P.initiative_phase = function () {
	log("=Initiative Phase")
	if ((G.vp < 15) || (G.turn === PEACE_TURN_1)) {
		log("France has the initiative")
		G.initiative = FRANCE
	} else if (G.vp > 15) {
		log("Britain has the initiative")
		G.initiative = BRITAIN
	} else {
		if (G.initiative === FRANCE) {
			log("France retains the initiative")
		}
		else {
			log ("Britain retains the initiative")
		}
	}
	end()
}

/* 4.1.9 - ACTION PHASE */

P.action_phase = script (`
	log ("=Action Phase")
	set G.active G.initiative
	call choose_first_player
	for L.round in 1 to 4 {
		call action_round
		set G.active (1-G.active)
		call action_round
		set G.active (1-G.active)
	}
`)

P.choose_first_player = {
	prompt() {
		V.prompt = "Initiative Phase: Choose the player to take the first action round."
		button("france")
		button("britain")
	},
	france() {
		G.active = FRANCE
		end()
	},
	britain() {
		G.active = BRITAIN
		end()
	},
}


/* 4.1.10 - ACTION PHASE */

P.reduce_treaty_points_phase = function () {
	var any = false
	if (G.treaty_points[FRANCE] > 4) {
		log ("=Reduce Treaty Points Phase")
		log ("French treaty points reduced from " + G.treaty_points[FRANCE] + " to 4.")
		G.treaty_points[FRANCE] = 4
		any = true;
	}
	if (G.treaty_points[BRITAIN] > 4) {
		if (!any) log ("=Reduce Treaty Points Phase")
		log ("British treaty points reduced from " + G.treaty_points[BRITAIN] + " to 4.")
		G.treaty_points[BRITAIN] = 4
	}
	end()
}

/* 4.1.11 - ACTION PHASE */

P.resolve_remaining_powers = function () {
	// TODO
	end()
}

/* 4.1.12 - SCORING PHASE */

P.scoring_phase = function () {
	log("=Scoring Phase")
	// TODO
	end()
}

/* 4.1.13 - VICTORY CHECK PHASE */

P.scoring_phase = function () {
	// TODO
	end()
}

/* 4.1.14 - FINAL SCORING PHASE */

P.scoring_phase = function () {
	log("=Final Scoring Phase")
	// TODO
	end()
}

/* 5.0 - ACTION ROUNDS */

P.action_round = script (`
	call select_investment_tile
	if (G.played_tile >= 0) {
		if (data.investments[G.played_tile].majorval <= 3) { // We get an event if we picked a tile with major action strength <= 3
			call may_play_event_card
		}
		eval establish_action_point_categories() // I hope I'm allowed to call this from here? 
		call may_spend_action_points
	}
	set G.played_tile -1
`)

function establish_action_point_categories()
{
	G.action_points_eligible       = []
	G.action_points_eligible_major = []
	for (var i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
		G.action_points_eligible[i]       = (G.action_points_major[i] > 0) || (G.action_points_minor[i] > 0)
		G.action_points_eligible_major[i] = (G.action_points_major[i] > 0)
	}
}

P.select_investment_tile = {
	prompt() {
		var debt_reduction = (G.debt[R] >= 2) ? 2 : (G.debt[R] >= 1) ? 1 : 0
		V.prompt = "Action Round: Select an investment tile (or pass to reduce Debt by " + debt_reduction + ")."
		for (var tile of G.available_investments)
			action_investment(tile)
		button("pass", G.debt[R] > 0)
	},
	investment(tile) {
		push_undo()
		log (data.flags[R].name + " selects investment tile: ");
		log (data.investments[tile].majorval + " " + data.action_points[data.investments[tile].majortype].name + " / " + data.investments[tile].minorval + " " + data.action_points[data.investments[tile].minortype].name)
		log ("")

		array_delete_item(G.available_investments, tile)
		G.played_tile = tile
		G.military_upgrade = data.investments[G.played_tile].majorval <= 2 // We get a military upgrade if we picked a tile w/ major action strength 2
		// Set our action point levels for the 3 types. We may get extra amounts from an event. Then we can increase our action points with debt/TRPs (but not in a category that is zero)
		G.action_points_major = [ 0, 0, 0 ]
		G.action_points_minor = [ 0, 0, 0 ]
		G.action_points_major[data.investments[G.played_tile].majortype] = data.investments[G.played_tile].majorval
		G.action_points_minor[data.investments[G.played_tile].minortype] = data.investments[G.played_tile].minorval
		establish_action_point_categories()
		end()
	},
	pass() {
		push_undo()
		var debt_reduction = (G.debt[R] >= 2) ? 2 : (G.debt[R] >= 1) ? 1 : 0
		log(data.flags[R].name + " passes to reduce debt by " + debt_reduction + ".")
		G.debt[R] = Math.max(0, G.debt[R] - 2)
		end()
	},
}

P.may_play_event_card = {
	prompt() {
		V.prompt = "Play event card or pass to skip to actions"
		for (var card of G.hand[R]) {
			action_event_card(card)
		}
		button ("pass")
	},
	event_card(c) {
		push_undo()
		log (data.flags[R].name + " plays Event: ")
		log (data.cards[c].name);
		G.played_events.push(c)
		//TODO: Here we branch to an unholy number of possible events
	},
	pass () {
		push_undo()
		log ("No event card played.")
		end()
	}
}



function action_eligible_spaces_econ(region)
{
	for (const space of data.spaces) {
		if ((region !== REGION_ALL) && (region !== space.region)) continue
		if (space.type !== MARKET) continue
		if (G.flags[space.num] === R) continue // can't shift our own spaces

		//TODO: all the connected-market rules, etc.

		action_space(space.num)
	}
}

function action_eligible_spaces_diplo(region)
{
	for (const space of data.spaces) {
		if ((region !== REGION_ALL) && (region !== space.region)) continue
		if (space.type !== POLITICAL) continue
		if (G.flags[space.num] === R) continue // can't shift our own spaces
		action_space(space.num)
	}
}

function action_eligible_spaces_mil(region)
{
	for (const space of data.spaces) {
		if ((region !== REGION_ALL) && (region !== space.region)) continue
		if ((space.type !== NAVAL) && (space.type !== FORT)) continue
		if (G.flags[space.num] === R) {
			//TODO: repair my own fort (otherwise can't do anything to a fort I already own)
			//TODO: move my existing ship
		}
		//TODO: seize damaged forts
		action_space(space.num)
	}
}

function action_eligible_spaces(type, region)
{
	switch (type) {
		case ECON:
			action_eligible_spaces_econ(region)
			break;
		case DIPLO:
			action_eligible_spaces_diplo(region)
			break;
		case MIL:
			action_eligible_spaces_mil(region)
			break;
	}
}

function action_all_eligible_spaces() {
	for (var i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
		if (!G.action_points_eligible[i]) continue
		action_eligible_spaces(i, REGION_ALL)
	}
}


P.may_spend_action_points = {
	prompt() {
		var prompt = "Spend Action Points ("
		var need_comma = false;
		for (var i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
			if (G.action_points_eligible[i]) {
				if (need_comma) {
					prompt += ", "
				}
				prompt += data.action_points[i].short + ": "
				need_comma = true;
				if (G.action_points_eligible_major[i]) {
					prompt += G.action_points_major[i] + "M"
					if (G.action_points_minor[i]) {
						prompt += "/"
					}
				}
				if (G.action_points_minor[i]) {
					prompt += G.action_points_minor[i] + "m"
				}
			}
		}
		prompt += ") or activate Advantage / Ministry"
		V.prompt = prompt;

		action_all_eligible_spaces()

		/*
        if (G.action_points_major[ECON] > 0) button("Economic (Major)")
		if (G.action_points_major[DIP] > 0) button("Diplomatic (Major)")
		if (G.action_points_major[MIL] > 0) button("Military (Major)")
		if (G.action_points_major[ECON] > 0) button("Economic (Minor)")
		if (G.action_points_major[DIP] > 0) button("Diplomatic (Minor)")
		if (G.action_points_major[MIL] > 0) button("Military (Minor)")
		*/

		// We probably won't show a face down event deck, nor unbuilt fleets, so special buttons for them
		if (G.action_points_eligible[DIPLO]) {
			button ("draw_event")
		}
		if (G.action_points_eligible[MIL]) {
			button ("construct_squadron")
		}

		// I'm presently undecided whether to have these here (or only when you try to spend extra)
		// if (G.debt[R] < G.debt_limit[R]) button ("Spend Debt")
		// if (G.treaty_points[R] > 0) button ("Spend Treaty Points")
	},
	draw_event() {
		log ("draw event!")
	},
	construct_squadron() {
		log ("construct squadron!")
	}

}

function add_next_war_bonus_tiles() {
	G.bonus_war_tiles = [ [], [] ]
	let base = G.next_war * (NUM_BONUS_WAR_TILES * 2)
	for (var i = 0; i < NUM_BONUS_WAR_TILES; i++) {
		G.bonus_war_tiles[FRANCE].push(base + i)
		G.bonus_war_tiles[BRITAIN].push(base + i + NUM_BONUS_WAR_TILES)
	}
	shuffle(G.bonus_war_tiles[FRANCE])
	shuffle(G.bonus_war_tiles[BRITAIN])
}


/* SETUP */
function on_setup(scenario, options) {
	G.active = FRANCE
	G.hand = [ [], [] ]
	G.ministry = [ [], [] ]
	G.unbuilt_squadrons = [ 7, 7 ]
	G.vp = 0
	G.turn = 0
	G.next_war = WAR_WSS
	G.initiative = FRANCE

	G.debt = []
	G.debt_limit = []
	G.treaty_points = []

	for (var i = FRANCE; i <= BRITAIN; i++) {
		G.debt_limit[i] = 6
		G.debt[i] = 0
		G.treaty_points[i] = 0
	}

	G.deck = []
	G.discard_pile = []
	G.played_events = []
	for (i = 1; i <= SUCCESSION_ERA_CARDS; ++i)
		G.deck.push(i)
	shuffle(G.deck)

	G.available_investments = []
	G.used_investments = []
	G.investment_tile_stack = []
	for (i = 0; i < NUM_INVESTMENT_TILES; i++)
		G.investment_tile_stack.push(i)
	shuffle(G.investment_tile_stack)

	G.basic_war_tiles = [ [], [] ]
	for (i = 0; i < NUM_BASE_WAR_TILES; i++) {
		G.basic_war_tiles[FRANCE].push(i)
		G.basic_war_tiles[BRITAIN].push(i + NUM_BASE_WAR_TILES)
	}
	shuffle(G.basic_war_tiles[FRANCE])
	shuffle(G.basic_war_tiles[BRITAIN])

	add_next_war_bonus_tiles()

	G.awards = []
	G.award_chits = []

	G.advantages = new Array(NUM_ADVANTAGES).fill(NONE)

	G.flags = [] // All the flags on the map
	// Set flags to their setup state (none, france, britain, or spain; no usa at start of course)
	for (i = 0; i < data.spaces.length; i++) {
		G.flags[i] = data.spaces[i].flag ?? NONE
	}

	G.conflicts = [] // map of conflict markers

	for (i = 0; i < data.spaces.length; i++) {
		if (data.spaces[i].num !== i)
			throw new Error("Space numbering is wrong for " + data.spaces[i].name)
	}

	// Unit test to confirm two-way connections
	for (i = 0; i < data.spaces.length; i++) {
		if (data.spaces[i].connects !== undefined) {
			for (const space of data.spaces[i].connects) {
				let connection = false
				if (data.spaces[space].connects !== undefined) {
					for (const space2 of data.spaces[space].connects) {
						if (space2 === i) {
							connection = true
							break
						}
					}
				}
				if (!connection) {
					console.error(
						"Space " +
							data.spaces[i].name +
							" specifies a connection to " +
							data.spaces[space].name +
							" but the reverse connection does not exist."
					)
				}
			}
		}

		if (data.spaces[i].conquest !== undefined) {
			for (const space of data.spaces[i].conquest) {
				let connection = false
				if (data.spaces[space].conquest !== undefined) {
					for (const space2 of data.spaces[space].conquest) {
						if (space2 === i) {
							connection = true
							break
						}
					}
				}
				if (!connection) {
					console.error(
						"Space " +
							data.spaces[i].name +
							" specifies a conquest line to " +
							data.spaces[space].name +
							" but the reverse conquest line does not exist."
					)
				}
			}
		}
	}

	G.navy_box = []
	G.navy_box[FRANCE] = 1
	G.navy_box[BRITAIN] = 2

	call("main")
}

/* VIEW & ACTIONS */

function on_view() {
	V.turn = G.turn
	V.vp = G.vp
	V.initiative = G.initiative

	// Player debts/TRPs always visible
	V.debt = G.debt
	V.debt_limit = G.debt_limit
	V.treaty_points = G.treaty_points

	// Current available investments, and used investment pile, are public.
	// Shuffled investment deck is not.
	V.available_investments = G.available_investments
	V.used_investments = G.used_investments

	// Flags on the board are always visible
	V.flags = G.flags
	V.conflicts = G.conflicts

	// Currently selected global demand chits are visible; shuffled chits are not
	V.global_demand = G.global_demand

	// Award tiles
	V.awards = G.awards

	// Advantage tiles
	V.advantages = G.advantages

	V.navy_box = G.navy_box
	V.unbuilt_squadrons = G.unbuilt_squadrons

	//BR// I'm not sure why this statement repeats twice w/ no overt FRANCE/BRITAIN distinction, but I have wisely/foolishly duplicated it below for the bonus war tiles
	V.basic_war_tiles = G.basic_war_tiles.map(pile => pile.length)
	V.basic_war_tiles = G.basic_war_tiles.map(pile => pile.length)

	V.bonus_war_tiles = G.bonus_war_tiles.map(pile => pile.length)
	V.bonus_war_tiles = G.bonus_war_tiles.map(pile => pile.length)

	V.played_tile = G.played_tile

	if (R === FRANCE) {
		V.hand = [
			G.hand[FRANCE],
			G.hand[BRITAIN].map(x => -1),
		]
		V.ministry = [
			G.ministry[FRANCE],
			G.ministry[BRITAIN].map(x => -1),
		]
	}
	if (R === BRITAIN) {
		V.hand = [
			G.hand[FRANCE].map(x => -1),
			G.hand[BRITAIN],
		]
		V.ministry = [
			G.ministry[FRANCE].map(x => -1),
			G.ministry[BRITAIN],
		]
	}
	if (R < 0) {
		V.hand = [
			G.hand[FRANCE].map(x => -1),
			G.hand[BRITAIN].map(x => -1),
		]
		V.ministry = [
			G.ministry[FRANCE].map(x => -1),
			G.ministry[BRITAIN].map(x => -1),
		]
	}
}

function action_event_card(c) {
	action("event_card", c)
}

function action_ministry_card(c) {
	action("ministry_card", c)
}

function action_investment(i) {
	action("investment", i)
}

function action_advantage(a) {
	action("advantage", a)
}

function action_space(s) {
	action("space", s)
}

function action_conflict(s) {
	action("conflict", s)
}

function action_navy(who) {
	action("navy", who)
}

/* FRAMEWORK */

function log(s) {
	if (s === undefined) {
		if (G.log.length > 0 && G.log[G.log.length - 1] !== "")
			G.log.push("")
	} else {
		G.log.push(s)
	}
}

function prompt(s) {
	V.prompt = s
}

function button(action, enabled = true) {
	V.actions[action] = !!enabled | 0
}

function action(action, argument) {
	if (!(action in V.actions))
		V.actions[action] = []
	set_add(V.actions[action], argument)
}

function finish(result, message) {
	G.active = -1
	G.result = ROLES[result] ?? result
	G.L = L = { message }
	log()
	log(message)
}

function call_or_goto(pred, name, env) {
	if (pred)
		call(name, env)
	else
		goto(name, env)
}

function call(name, env) {
	G.L = L = { ...env, P: name, I: 0, L: L }
	P[name]?._begin?.()
}

function goto(name, env) {
	P[L.P]?._end?.()
	G.L = L = { ...env, P: name, I: 0, L: L.L }
	P[name]?._begin?.()
}

function end(result) {
	P[L.P]?._end?.()
	G.L = L = L.L
	if (result !== undefined)
		L.$ = result
	P[L.P]?._resume?.()
}

exports.roles ??= ROLES

exports.scenarios ??= (typeof SCENARIOS !== "undefined") ? SCENARIOS : [ "Standard" ]

exports.setup = function (seed, scenario, options) {
	G = {
		active: null,
		seed,
		log: [],
		undo: [],
	}
	L = null
	R = null
	V = null

	on_setup(scenario, options)
	_run()
	_save()

	return G
}

exports.static_view = function (game) {
	var SV = null
	if (typeof on_static_view === "function") {
		G = state
		L = null
		R = role
		V = null
		_load()
		SV = on_static_view()
		_save()
	}
	return SV
}

exports.view = function (state, role) {
	G = state
	L = G.L
	R = role
	V = {
		log: G.log,
		prompt: null,
	}

	if ((Array.isArray(G.active) && G.active.includes(R)) || G.active === R) {
		_load()
		on_view()

		V.actions = {}

		if (P[L.P])
			P[L.P].prompt()
		else
			V.prompt = "TODO: " + L.P

		if (V.actions.undo === undefined)
			button("undo", G.undo?.length > 0)

		_save()
	} else {
		_load()
		on_view()
		_save()

		if (G.active === "None") {
			V.prompt = L.message
		} else {
			var inactive = P[L.P]?.inactive
			if (inactive) {
				if (Array.isArray(G.active))
					V.prompt = `Waiting for ${G.active.join(" and ")} to ${inactive}.`
				else
					V.prompt = `Waiting for ${G.active} to ${inactive}.`
			} else {
				if (Array.isArray(G.active))
					V.prompt = `Waiting for ${G.active.join(" and ")}.`
				else
					V.prompt = `Waiting for ${G.active}.`
			}
		}
	}

	return V
}

exports.action = function (state, role, action, argument) {
	G = state
	L = G.L
	R = role
	V = null

	var old_active = G.active

	_load()

	var this_state = P[L.P]
	if (this_state && typeof this_state[action] === "function") {
		this_state[action](argument)
		_run()
	} else if (action === "undo" && G.undo.length > 0) {
		pop_undo()
	} else {
		throw new Error("Invalid action: " + action)
	}

	_save()

	if (old_active !== G.active)
		clear_undo()

	return G
}

exports.finish = function (state, result, message) {
	G = state
	L = G.L
	R = null
	V = null

	_load()
	finish(result, message)
	_save()

	return G
}

exports.query = function (state, role, q) {
	G = state
	L = G.L
	R = role
	V = null

	_load()
	var result = on_query(q)
	_save()

	return result
}

exports.assert = function (state) {
	if (typeof on_assert === "function") {
		G = state
		L = G.L
		R = null
		V = null
		_load()
		on_assert()
		_save()
	}
}

function _load() {
	R = ROLES.indexOf(R)
	if (Array.isArray(G.active))
		G.active = G.active.map(r => ROLES.indexOf(r))
	else
		G.active = ROLES.indexOf(G.active)
}

function _save() {
	if (Array.isArray(G.active))
		G.active = G.active.map(r => ROLES[r])
	else
		G.active = ROLES[G.active] ?? "None"
}

function _run() {
	for (var i = 0; i < 1000 && L; ++i) {
		var prog = P[L.P]
		if (typeof prog === "function") {
			prog()
		} else if (Array.isArray(prog)) {
			if (L.I < prog.length) {
				try {
					prog[L.I++]()
				} catch (err) {
					err.message += "\n\tat P." + L.P + ":" + L.I
					throw err
				}
			} else {
				end()
			}
		} else {
			return // state
		}
	}
	if (L)
		throw new Error("runaway script")
}

function _parse(text) {
	var prog = []

	function lex(s) {
		var words = []
		var p = 0, n = s.length, m

		function lex_flush() {
			if (words.length > 0) {
				command(words)
				words = []
			}
		}

		function lex_newline() {
			while (p < n && s[p] === "\n")
				++p
			lex_flush()
		}

		function lex_semi() {
			++p
			lex_flush()
		}

		function lex_comment() {
			while (p < n && s[p] !== "\n")
				++p
		}

		function lex_word() {
			while (p < n && !" \t\n".includes(s[p]))
				++p
			words.push(s.substring(m, p))
		}

		function lex_qstring(q) {
			var x = 1
			++p
			while (p < n && x > 0) {
				if (s[p] === q)
					--x
				++p
			}
			if (p >= n && x > 0)
				throw new Error("unterminated string")
			words.push(s.substring(m, p))
		}

		function lex_bstring(a, b) {
			var x = 1
			++p
			while (p < n && x > 0) {
				if (s[p] === a)
					++x
				else if (s[p] === b)
					--x
				++p
			}
			if (p >= n && x > 0)
				throw new Error("unterminated string")
			words.push(s.substring(m, p))
		}

		while (p < n) {
			while (s[p] === " " || s[p] === "\t")
				++p
			if (p >= n) break
			m = p
			if (s[p] === "{") lex_bstring("{", "}")
			else if (s[p] === "[") lex_bstring("[", "]")
			else if (s[p] === "(") lex_bstring("(", ")")
			else if (s[p] === '"') lex_qstring('"')
			else if (s[p] === "\n") lex_newline()
			else if (s[p] === ";") lex_semi()
			else if (s[p] === "#") lex_comment()
			else if (s[p] === "/" && s[p+1] === "/") lex_comment()
			else if (s[p] === "-" && s[p+1] === "-") lex_comment()
			else lex_word()
		}

		if (words.length > 0)
			command(words)
	}

	function command(line) {
		var ix_loop, ix1, ix2
		var i, k, start, end, array, body

		switch (line[0]) {
		case "set":
			if (line.length !== 3)
				throw new Error("invalid set - " + line.join(" "))
			emit(line[1] + " = " + line[2])
			break

		case "incr":
			if (line.length !== 2)
				throw new Error("invalid incr - " + line.join(" "))
			emit("++(" + line[1] + ")")
			break

		case "decr":
			if (line.length !== 2)
				throw new Error("invalid decr - " + line.join(" "))
			emit("--(" + line[1] + ")")
			break

		case "eval":
			emit(line.slice(1).join(" "))
			break

		case "log":
			emit("log(" + line.slice(1).join(" ") + ")")
			break

		case "call":
			if (line.length === 3)
				emit("call(" + quote(line[1]) + ", " + line[2] + ")")
			else if (line.length === 2)
				emit("call(" + quote(line[1]) + ")")
			else
				throw new Error("invalid call - " + line.join(" "))
			break

		case "goto":
			if (line.length === 3)
				emit("goto(" + quote(line[1]) + ", " + line[2] + ")")
			else if (line.length === 2)
				emit("goto(" + quote(line[1]) + ")")
			else
				throw new Error("invalid goto - " + line.join(" "))
			break

		case "return":
			if (line.length === 1)
				emit(`end()`)
			else if (line.length === 2)
				emit(`end(${line[1]})`)
			else
				throw new Error("invalid return - " + line.join(" "))
			break

		case "while":
			// while (exp) { block }
			if (line.length !== 3)
				throw new Error("invalid while - " + line.join(" "))
			ix_loop = emit_jz(line[1])
			block(line[2])
			emit_jump(ix_loop)
			label(ix_loop)
			break

		case "for":
			// for i in (start) to (end) { block }
			if (line.length === 7 && line[2] === "in" && line[4] === "to") {
				i = line[1]
				start = line[3]
				end = line[5]
				body = line[6]
				emit(`${i} = ${start}`)
				ix_loop = prog.length
				block(body)
				emit(`if (++(${i}) <= ${end}) L.I = ${ix_loop}`)
				return
			}
			// for i in (array) { block }
			// NOTE: array is evaluated repeatedly so should be a constant!
			else if (line.length === 5 && line[2] === "in") {
				k = line[1]
				i = k.replace(/^G\./, "L.G_") + "_"
				array = line[3]
				body = line[4]
				emit(`${i} = 0`)
				ix_loop = emit(`if (${i} < ${array}.length) { ${k} = ${array}[${i}++] } else { delete ${i} ; L.I = % }`)
				block(body)
				emit_jump(ix_loop)
				label(ix_loop)
			} else {
				throw new Error("invalid for - " + line.join(" "))
			}
			break

		case "if":
			// if (exp) { block}
			// if (exp) { block } else { block }
			// TODO: if (exp) { block } elseif (exp) { block } else { block }
			ix1, ix2
			if (line.length === 3) {
				ix1 = emit_jz(line[1])
				block(line[2])
				label(ix1)
			} else if (line.length === 5 && line[3] === "else") {
				ix1 = emit_jz(line[1])
				block(line[2])
				ix2 = emit_jump()
				label(ix1)
				block(line[4])
				label(ix2)
			} else {
				throw new Error("invalid if - " + line.join(" "))
			}
			break

		default:
			throw new Error("unknown command - " + line.join(" "))
		}
	}

	function quote(s) {
		if ("{[(`'\"".includes(s[0]))
			return s
		return '"' + s + '"'
	}

	function emit_jz(exp, to = "%") {
		return emit("if (!(" + exp + ")) L.I = " + to)
	}

	function emit_jump(to = "%") {
		return emit("L.I = " + to)
	}

	function emit(s) {
		prog.push(s)
		return prog.length - 1
	}

	function label(ix) {
		prog[ix] = prog[ix].replace("%", prog.length)
	}

	function block(body) {
		if (body[0] !== "{")
			throw new Error("expected block")
		lex(body.slice(1, -1))
	}

	lex(text)

	return prog
}

function script(text) {
	return text
}

(function _compile() {
	var cache = {}
	for (var name in P) {
		if (typeof P[name] === "string") {
			var prog = []
			try {
				for (var inst of _parse(P[name])) {
					try {
						prog.push(cache[inst] ??= eval("(function(){" + inst + "})"))
					} catch (err) {
						err.message += "\n\tat (" + inst + ")"
						throw err
					}
				}
			} catch (err) {
				err.message += "\n\tat P." + name
				throw err
			}
			P[name] = prog
		}
	}
})()

/* LIBRARY */

function clear_undo() {
	if (G.undo) {
		G.undo.length = 0
	}
}

function push_undo() {
	var copy, k, v
	if (G.undo) {
		copy = {}
		for (k in G) {
			v = G[k]
			if (k === "undo")
				continue
			else if (k === "log")
				v = v.length
			else if (typeof v === "object" && v !== null)
				v = object_copy(v)
			copy[k] = v
		}
		G.undo.push(copy)
	}
}

function pop_undo() {
	if (G.undo) {
		var save_log = G.log
		var save_undo = G.undo
		G = save_undo.pop()
		save_log.length = G.log
		G.log = save_log
		G.undo = save_undo
	}
}

function random(range) {
	// An MLCG using integer arithmetic with doubles.
	// https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-00996-5/S0025-5718-99-00996-5.pdf
	// m = 2**35 − 31
	return (G.seed = G.seed * 200105 % 34359738337) % range
}

function random_bigint(range) {
	// Largest MLCG that will fit its state in a double.
	// Uses BigInt for arithmetic, so is an order of magnitude slower.
	// https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-00996-5/S0025-5718-99-00996-5.pdf
	// m = 2**53 - 111
	return (G.seed = Number(BigInt(G.seed) * 5667072534355537n % 9007199254740881n)) % range
}

function shuffle(list) {
	// Fisher-Yates shuffle
	var i, j, tmp
	for (i = list.length - 1; i > 0; --i) {
		j = random(i + 1)
		tmp = list[j]
		list[j] = list[i]
		list[i] = tmp
	}
}

function shuffle_bigint(list) {
	// Fisher-Yates shuffle
	var i, j, tmp
	for (i = list.length - 1; i > 0; --i) {
		j = random_bigint(i + 1)
		tmp = list[j]
		list[j] = list[i]
		list[i] = tmp
	}
}

// Fast deep copy for objects without cycles
function object_copy(original) {
	var copy, i, n, v
	if (Array.isArray(original)) {
		n = original.length
		copy = new Array(n)
		for (i = 0; i < n; ++i) {
			v = original[i]
			if (typeof v === "object" && v !== null)
				copy[i] = object_copy(v)
			else
				copy[i] = v
		}
		return copy
	} else {
		copy = {}
		for (i in original) {
			v = original[i]
			if (typeof v === "object" && v !== null)
				copy[i] = object_copy(v)
			else
				copy[i] = v
		}
		return copy
	}
}

// Fast deep object comparison for objects without cycles
function object_diff(a, b) {
	var i, key
	var a_length
	if (a === b)
		return false
	if (a !== null && b !== null && typeof a === "object" && typeof b === "object") {
		if (Array.isArray(a)) {
			if (!Array.isArray(b))
				return true
			a_length = a.length
			if (b.length !== a_length)
				return true
			for (i = 0; i < a_length; ++i)
				if (object_diff(a[i], b[i]))
					return true
			return false
		}
		for (key in a)
			if (object_diff(a[key], b[key]))
				return true
		for (key in b)
			if (!(key in a))
				return true
		return false
	}
	return true
}

// Array remove and insert (faster than splice)

function array_delete(array, index) {
	var i, n = array.length
	for (i = index + 1; i < n; ++i)
		array[i - 1] = array[i]
	array.length = n - 1
}

function array_delete_item(array, item) {
	var i, n = array.length
	for (i = 0; i < n; ++i)
		if (array[i] === item)
			return array_delete(array, i)
}

function array_insert(array, index, item) {
	for (var i = array.length; i > index; --i)
		array[i] = array[i - 1]
	array[index] = item
}

function array_delete_pair(array, index) {
	var i, n = array.length
	for (i = index + 2; i < n; ++i)
		array[i - 2] = array[i]
	array.length = n - 2
}

function array_insert_pair(array, index, key, value) {
	for (var i = array.length; i > index; i -= 2) {
		array[i] = array[i-2]
		array[i+1] = array[i-1]
	}
	array[index] = key
	array[index+1] = value
}

// Set as plain sorted array

function set_clear(set) {
	set.length = 0
}

function set_has(set, item) {
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

function set_delete(set, item) {
	var a = 0
	var b = set.length - 1
	while (a <= b) {
		var m = (a + b) >> 1
		var x = set[m]
		if (item < x)
			b = m - 1
		else if (item > x)
			a = m + 1
		else {
			array_delete(set, m)
			return
		}
	}
}

function set_toggle(set, item) {
	var a = 0
	var b = set.length - 1
	while (a <= b) {
		var m = (a + b) >> 1
		var x = set[m]
		if (item < x)
			b = m - 1
		else if (item > x)
			a = m + 1
		else {
			array_delete(set, m)
			return
		}
	}
	array_insert(set, a, item)
}

// Map as plain sorted array of key/value pairs

function map_clear(map) {
	map.length = 0
}

function map_has(map, key) {
	var a = 0
	var b = (map.length >> 1) - 1
	while (a <= b) {
		var m = (a + b) >> 1
		var x = map[m<<1]
		if (key < x)
			b = m - 1
		else if (key > x)
			a = m + 1
		else
			return true
	}
	return false
}

function map_get(map, key, missing) {
	var a = 0
	var b = (map.length >> 1) - 1
	while (a <= b) {
		var m = (a + b) >> 1
		var x = map[m<<1]
		if (key < x)
			b = m - 1
		else if (key > x)
			a = m + 1
		else
			return map[(m<<1)+1]
	}
	return missing
}

function map_set(map, key, value) {
	var a = 0
	var b = (map.length >> 1) - 1
	while (a <= b) {
		var m = (a + b) >> 1
		var x = map[m<<1]
		if (key < x)
			b = m - 1
		else if (key > x)
			a = m + 1
		else {
			map[(m<<1)+1] = value
			return
		}
	}
	array_insert_pair(map, a<<1, key, value)
}

function map_delete(map, key) {
	var a = 0
	var b = (map.length >> 1) - 1
	while (a <= b) {
		var m = (a + b) >> 1
		var x = map[m<<1]
		if (key < x)
			b = m - 1
		else if (key > x)
			a = m + 1
		else {
			array_delete_pair(map, m<<1)
			return
		}
	}
}

function map_get_set(map, key) {
	var set = map_get(map, key, null)
	if (set === null)
		map_set(map, key, (set = []))
	return set
}

function map_for_each(map, f) {
	for (var i = 0; i < map.length; i += 2)
		f(map[i], map[i+1])
}

// same as Object.groupBy
function object_group_by(items, callback) {
	var item, key
	var groups = {}
	if (typeof callback === "function") {
		for (item of items) {
			key = callback(item)
			if (key in groups)
				groups[key].push(item)
			else
				groups[key] = [ item ]
		}
	} else {
		for (item of items) {
			key = item[callback]
			if (key in groups)
				groups[key].push(item)
			else
				groups[key] = [ item ]
		}
	}
	return groups
}

// like Object.groupBy but for plain array maps
function map_group_by(items, callback) {
	var item, key, arr
	var groups = []
	if (typeof callback === "function") {
		for (item of items) {
			key = callback(item)
			arr = map_get(groups, key)
			if (arr)
				arr.push(item)
			else
				map_set(groups, key, [ item ])
		}
	} else {
		for (item of items) {
			key = item[callback]
			arr = map_get(groups, key)
			if (arr)
				arr.push(item)
			else
				map_set(groups, key, [ item ])
		}
	}
	return groups
}
