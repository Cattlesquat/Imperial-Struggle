"use strict"
const data = require("./data.js")

const ROLES = [ "France", "Britain" ]

var G, L, R, V, P = {}    // G = Game state, V = View, R = role of active player, L = Local, P = Procedures

/* CONSTANTS */

// TURNS
const PEACE_TURN_1 = 0
const WAR_TURN_WSS = 1
const PEACE_TURN_2 = 2
const PEACE_TURN_3 = 3
const WAR_TURN_WAS = 4
const PEACE_TURN_4 = 5
const WAR_TURN_7YW = 6
const PEACE_TURN_5 = 7
const WAR_TURN_AWI = 8
const PEACE_TURN_6 = 9

// FLAGS
const FRANCE  = 0
const BRITAIN = 1
const SPAIN   = 2
const USA     = 3
const NONE    = 4   // HO HO HO! WHAT COULD POSSIBLY GO WRONG!

// Types of Action Point
const ECON  = 0
const DIPLO = 1
const MIL   = 2
const WILD  = 3

// Magnitudes of Action
const MAJOR = 0
const MINOR = 1

// Amounts of things!
const NUM_REGIONS           = 4
const NUM_INVESTMENT_TILES  = 24
const NUM_BASE_WAR_TILES    = 16 // per side
const NUM_BONUS_WAR_TILES   = 12 // per side, per war
const NUM_WARS              = 4
const NUM_EVENT_CARDS       = 41
const NUM_MINISTRY_KEYWORDS = 5
const NUM_MINISTRY_CARDS    = 21
const NUM_MINISTRY_SLOTS    = 2
const NUM_DEMANDS           = 6
const NUM_AWARD_TILES       = 8
const NUM_ADVANTAGES 		= 22
const NUM_SPACES            = 112
const NUM_ACTION_POINTS_TYPES= 3
const NUM_SQUADRONS			= 8 // per side, counter mix limit

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
const KEYWORD_NONE = -1
const FINANCE      =  0
const MERCANTILISM =  1
const GOVERNANCE   =  2
const STYLE        =  3
const SCHOLARSHIP  =  4

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
const CARIBBEAN_SLAVE_UNREST        = 16 // EMPIRE ERA
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

// SPACES PER REGION
const NUM_SPACES_EUROPE = 30
const NUM_SPACES_NORTH_AMERICA  = 30
const NUM_SPACES_CARIBBEAN      = 30
const NUM_SPACES_INDIA = 22

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

// BIZARRO SPACES
const NAVY_BOX = 0
const AWARD_EUROPE = 1
const AWARD_NORTH_AMERICA = 2
const AWARD_CARIBBEAN = 3
const AWARD_INDIA = 4
const GLOBAL_DEMAND_SPACE = 5
const INITIATIVE_SPACE = 6
const TURN_1_SPACE = 7
const WAR_WSS_SPACE = 8
const TURN_2_SPACE = 9
const TURN_3_SPACE = 10
const WAR_WAS_SPACE = 11
const TURN_4_SPACE = 12
const WAR_7YW_SPACE = 13
const TURN_5_SPACE = 14
const WAR_AWI_SPACE = 15
const TURN_6_SPACE = 16
const GENERAL_RECORDS_NEGATIVE_7 = 17
const GENERAL_RECORDS_0 = 24
const FRANCE_ADVANTAGES = 61
const FRANCE_MINISTRIES = 62
const FRANCE_SQUADRONS = 63
const FRANCE_BASIC_WAR_TILES = 64
const FRANCE_BONUS_WAR_TILES = 65
const BRITAIN_ADVANTAGES = 66
const BRITAIN_MINISTRIES = 67
const BRITAIN_SQUADRONS = 68
const BRITAIN_BASIC_WAR_TILES = 69
const BRITAIN_BONUS_WAR_TILES = 70
const AVAILABLE_INVESTMENT_1 = 71
const AVAILABLE_INVESTMENT_2 = 72
const AVAILABLE_INVESTMENT_3 = 73
const AVAILABLE_INVESTMENT_4 = 74
const AVAILABLE_INVESTMENT_5 = 75
const AVAILABLE_INVESTMENT_6 = 76
const AVAILABLE_INVESTMENT_7 = 77
const AVAILABLE_INVESTMENT_8 = 78
const AVAILABLE_INVESTMENT_9 = 79
const INVESTMENT_TILE_STACK = 80
const USED_INVESTMENT_TILES = 81
const DRAW_PILE = 82
const DISCARD_PILE = 83
const PLAYED_EVENTS = 84

// ACTION_SUBPHASES
const BEFORE_PICKING_TILE           = 0
const PICKED_TILE_OPTION_TO_PASS    = 1
const OPTION_TO_PLAY_EVENT          = 2
const DURING_EVENT                  = 3
const BEFORE_SPENDING_ACTION_POINTS = 4
const ACTION_POINTS_ALREADY_SPENT   = 5
const NOT_ACTION_PHASE				= 6

// TRANSIENT BITFLAGS FROM EVENTS, MINISTERS, ADVANTAGES
const NUM_TRANSIENT_BITFLAGS = 32
const TRANSIENT_SOUTH_SEA_SQUADRON_DISCOUNT = 0
const TRANSIENT_JACOBITES_USED_1 = 1
const TRANSIENT_JACOBITES_USED_2 = 2


/* TILES & CARDS */

setup_procs()

function setup_procs()
{
	data.ministries[ROBERT_WALPOLE].proc = "ministry_robert_walpole"
	data.ministries[BANK_OF_ENGLAND].proc = "ministry_bank_of_england"
	data.ministries[EDMOND_HALLEY].proc = "ministry_edmond_halley"
	data.ministries[THE_CARDINAL_MINISTERS].proc = "ministry_cardinal_ministers"
	data.ministries[JACOBITE_UPRISINGS].proc = "ministry_jacobite_uprisings"

	data.cards[CARNATIC_WAR].proc = "event_carnatic_war"
	data.cards[ACTS_OF_UNION].proc = "event_acts_of_union"
	data.cards[TROPICAL_DISEASES].proc = "event_tropical_diseases"
	data.cards[SOUTH_SEA_SPECULATION].proc = "event_south_sea_speculation"
	data.cards[WAR_OF_JENKINS_EAR].proc = "event_war_of_jenkins_ear"
	data.cards[NATIVE_AMERICAN_ALLIANCES].proc = "event_native_american_alliances"
	data.cards[AUSTRO_SPANISH_RIVALRY].proc = "event_austro_spanish_rivalry"
	data.cards[TAX_REFORM].proc = "event_tax_reform"
	data.cards[GREAT_NORTHERN_WAR].proc = "event_great_northern_war"
	data.cards[VATICAN_POLITICS].proc = "event_vatican_politics"
	data.cards[CALICO_ACTS].proc = "event_calico_acts"
	data.cards[MILITARY_SPENDING_OVERRUNS].proc = "event_military_spending_overruns"
	data.cards[ALBERONIS_AMBITION].proc = "event_alberonis_ambition"
	data.cards[FAMINE_IN_IRELAND].proc = "event_famine_in_ireland"
	data.cards[INTEREST_PAYMENTS].proc = "event_interest_payments"

	data.advantages[BALTIC_TRADE].proc = "advantage_baltic_trade"
	data.advantages[ALGONQUIN_RAIDS].proc = "advantage_place_conflict"
	data.advantages[IROQUOIS_RAIDS].proc = "advantage_place_conflict"
	data.advantages[PATRIOT_AGITATION].proc = "advantage_place_conflict"
	data.advantages[WHEAT].proc = "advantage_unflag_discount"
	data.advantages[FUR_TRADE].proc = "advantage_unflag_discount"
	data.advantages[RAIDS_AND_INCURSIONS].proc = "advantage_place_conflict"
	data.advantages[SEPARATIST_WARS].proc = "advantage_place_conflict"
	data.advantages[POWER_STRUGGLE].proc = "advantage_place_conflict"
	data.advantages[LETTERS_OF_MARQUE].proc = "advantage_place_conflict"
	data.advantages[PIRATE_HAVENS].proc = "advantage_place_conflict"
	data.advantages[MEDITERRANEAN_INTRIGUE].proc = "advantage_place_conflict"
	data.advantages[CENTRAL_EUROPE_CONFLICT].proc = "advantage_place_conflict"
	data.advantages[RUM].proc = "advantage_unflag_discount"
	data.advantages[FRUIT].proc = "advantage_unflag_discount"
	data.advantages[TEXTILES].proc = "advantage_unflag_discount"
	data.advantages[SILK].proc = "advantage_unflag_discount"
	data.advantages[GERMAN_DIPLOMACY].proc = "advantage_unflag_discount"
	data.advantages[SILESIA_NEGOTIATIONS].proc = "advantage_unflag_discount"
	data.advantages[ITALY_INFLUENCE].proc = "advantage_unflag_discount"
	data.advantages[NAVAL_BASTION].proc = "advantage_naval_bastion"
	data.advantages[SLAVING_CONTRACTS].proc = "advantage_slaving_contracts"
}

/* SETUP */
function on_setup(scenario, options) {
	// Usually this is an integer containing the id of the active player (i.e. FRANCE or BRITAIN).
	// But *sometimes*, horrifyingly, it's actually an *array* that we fill with both player IDs for multiactive phases.
	// And then we delete player ids from the array as players individually complete the phase.
	G.active = FRANCE

	// Each player's current hand of event cards.
	// <br><b>
	// G.hand[BRITAIN][0] contains an index into data.cards[]
	G.hand = [[], []]

	// The current ministers chosen by each player.
	// <br><b>
	// G.ministry[FRANCE][0] contains an index into data.ministries[]
	G.ministry = [[], []]

	// Global VP count (tug-of-war). Notionally 0 to 30 but values above and below that range are explicitly legal.
	G.vp = 15

	// Current turn. CAUTION: index does *not* match turn "number" because of war turns. Use the constants provided.
	// <br><b>
	// PEACE_TURN_1, WAR_TURN_WSS, PEACE_TURN_2, PEACE_TURN_3, WAR_TURN_WAS, PEACE_TURN_4, WAR_TURN_7YW, PEACE_TURN_5, WAR_TURN_AWI, PEACE_TURN_6
	G.turn = 0

	// The next war coming up (WAR_WSS, etc)
	G.next_war = WAR_WSS

	// Which player holds the initiative and gets to decide who goes first
	G.initiative = FRANCE

	// Current debt for each player
	// <br><b>
	// G.debt[BRITAIN]
	G.debt = []

	// Current debt limit for each player
	// <br><b>
	// G.debt_limit[BRITAIN]
	G.debt_limit = []

	// Current treaty points for each player
	// <br><b>
	// G.treaty_points[FRANCE]
	G.treaty_points = []

	// The Investment tiles that each player has chosen this turn, pushed in action round order. Contains an index into data.investments[]
	// <br><b>
	// G.played_tiles[FRANCE][0] has the tile played on France's first action round
	G.played_tiles = [[], []]

	for (var i = FRANCE; i <= BRITAIN; i++) {
		G.debt_limit[i] = 6
		G.debt[i] = 0
		G.treaty_points[i] = 0
	}

	// Transient flags for tracking events, advantages, etc.
	// <br><b>
	// has_transient(who, TRANSIENT_WHATEVER)
	G.transient_bitflags = [[], []]
	for (i = FRANCE; i <= BRITAIN; i++) {
		G.transient_bitflags[i] = bit_init(NUM_TRANSIENT_BITFLAGS)
	}

	// The current shuffled event card deck. Contains event card indices into data.cards[]
	G.deck = []

	// The event discard. Contains event card indices into data.cards[]
	G.discard_pile = []

	// All the events ever played (distinct from discard pile, as played events are removed from the game)
	G.played_events = []

	// The Event (card index) played this action round
	G.played_event  = 0

	for (i = 1; i <= SUCCESSION_ERA_CARDS; ++i)
		G.deck.push(i)
	shuffle(G.deck)

	// Investments available this action round
	G.available_investments = []

	// Investments that have already been claimed this action round
	G.played_investments = []

	// Used investments from previous turns
	G.used_investments = []

	// Shuffled face-down stack of investment tiles, from which G.available_investments is dealt each turn
	G.investment_tile_stack = []
	for (i = 0; i < NUM_INVESTMENT_TILES; i++)
		G.investment_tile_stack.push(i)
	shuffle(G.investment_tile_stack)

	// These are the face-down stocks of war tiles the players draw from
	// <br><b>
	// if (G.basic_war_tiles[who].length < 1) return
	G.basic_war_tiles = [ [], [] ]

	// These are the face-down stocks of war tiles the players draw from
	// <br><b>
	// if (G.bonus_war_tiles[who].length < 1) return
	G.bonus_war_tiles = [ [], [] ]

	// These are the war tiles sent to the current war. There are 4 theaters (1-4), and 0 means tile has been drawn but not yet assigned a theater (display on upper row of war mat)
	// <br><b>
	// G.theater_basic_war_tiles[player][theater][0-n]
	G.theater_basic_war_tiles = [[[], [], [], [], []], [[], [], [], [], []]]

	// These are the war tiles sent to the current war. There are 4 theaters (1-4), and 0 means tile has been drawn but not yet assigned a theater (display on upper row of war mat)
	// <br><b>
	// G.theater_bonus_war_tiles[player][theater][0-n]
	G.theater_bonus_war_tiles = [[[], [], [], [], []], [[], [], [], [], []]]

	// "Sets" -- keeps track of which individual basic war tiles have been revealed to the opponent, by tile index.
	// <br><b>
	// set_has(G.basic_war_tile_revealed[who], tile)
	G.basic_war_tile_revealed = [[], []]

	// "Sets" -- keeps track of which individual basic war tiles have been revealed to the opponent, by tile index.
	// <br><b>
	// set_has(G.bonus_war_tile_revealed[who], tile)
	G.bonus_war_tile_revealed = [[], []]

	// Limit of 2 bonus war tiles may be *purchased* per action round (can get more with events, etc)
	G.bonus_war_tiles_bought_this_round = 0

	war_layout_reshuffle_basic_war_tiles(true)
	add_next_war_bonus_tiles()

	war_layout_basic_war_tiles()
	draw_bonus_war_tile(FRANCE, 1) // France starts the game with one bonus war tile

	/* */

	// Award chit index for each region
	// <br><b>
	// G.awards[REGION_EUROPE] </b> contains an index into data.awards[]
	G.awards = []

	// The stack of available (but not currently active) award chits
	G.award_chits = []

	// For each advantage, tells which player owns it
	// <br><b>
	// G.advantage[a] === who
	G.advantages = new Array(NUM_ADVANTAGES).fill(NONE)

	// Simple bitflag, set if advantage has changed hands this turn
	// <br><b>
	// G.advantages_newly_acquired & (1<<a)
	G.advantages_newly_acquired  = 0

	// Simple bitflag, set if advantage presently exhausted
	// <br><b>
	// is_advantage_exhausted(who,a)
	// <br>
	// G.advantages_exhausted & (1<<a)
	// <br>
	// G.advantages_exhausted |= (1<<a)
	G.advantages_exhausted       = 0

	// Integer: the number of advantages the G.active player has already used this turn
	G.advantages_used_this_round  = 0

	// All the flags on the map by space: G.flags[space]
	// <br><b>
	// if (G.flags[IRELAND_1] === FRANCE) { ... }
	G.flags = []

	// Any changes to indexed space since last investment tile? If so, highlight them!
	// ALSO! Use to check if a navy has already deployed this action round.
	// <br><b>
	// set_has(G.dirty, s)
	G.dirty = []

	// Which player made the most recent changes to spaces
	G.dirty_who = FRANCE

	// Set flags to their setup state (none, france, britain, or spain; no usa at start of course)
	for (i = 0; i < data.spaces.length; i++) {
		G.flags[i] = data.spaces[i].flag ?? NONE
		if ((G.flags[i] === SPAIN) && !rules_spanish_empire()) G.flags[i] = NONE
	}

	// Map of conflict markers by space
	// <br><b>
	// set_has(G.conflicts, s)
	G.conflicts = []

	// Map of damaged forts by space
	// <br><b>
	// set_has(G.damaged_forts, s)
	G.damaged_forts = []

	// List of territories with Huguenots
	// <br><b>
	// for (const h of G.huguenots) { assert (data.spaces[h].type === TERRITORY) }
	G.huguenots = []

	// List of territories with *spent* Huguenots (such territories will *also* be part of G.huguenots)
	// <br><b>
	// for (const h of G.huguenots_spent) { assert (G.huguenots.includes(h)) }
	G.huguenots_spent = []

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

	// How many squadrons left in each player's navy box. For *unbuilt* squadrons see G.unbuilt_squadrons[who] instead.
	// <br><b>
	// G.navy_box[who]
	G.navy_box = []
	G.navy_box[FRANCE] = 1
	G.navy_box[BRITAIN] = 2

	// How many squadrons a player has left unbuilt (total supply per player is 8). For squadrons *in the Navy Box* see G.navy_box[who] instead.
	// <br><br>
	// G.unbuilt_squadrons[who]
	G.unbuilt_squadrons = []
	for (let who = FRANCE; who <= BRITAIN; who++) {
		G.unbuilt_squadrons[who] = NUM_SQUADRONS - G.navy_box[who]
	}

	// Flag counts for each player, by region. Updated whenever flags or conflict changes. Used for scoring regions.
	// <br><b>
	// G.flag_count[who][region]
	G.flag_count = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

	// Total prestige flag count for each player. Updated whenever flags or conflict changes. Used for prestige scoring.
	// <br><b>
	// G.prestige_flags[who]
	G.prestige_flags = [ 0, 0 ]

	// Total flag count for each player, by each of the 6 global demand commodities. Updated whenever flags or conflict changes. Used for scoring demands.
	// <br><b>
	// G.demand_flag_count[who][demand]
	// <br><b>
	// G.demand_flag_count[FRANCE][COTTON]
	G.demand_flag_count = [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ]

	// Number of USA flags placed in the game
	G.usa_flags = 0

	update_advantages(true)
	advantages_acquired_last_round_now_available()

	update_flag_counts()

	// There are distinct periods within "an action round" during which certain actions are allowed or not. For example
	// you must select an investment tile before you can play an event or spend action points, but certain ministries can be
	// activated *before* even picking a tile. Some ministries can *only* be used *before* spending any action points, but
	// other ministries and advantages can be used throughout the round. This field tracks how long-in-the-tooth the current
	// action round has gotten.
	// <br><b>
	// BEFORE_PICKING_TILE				<br>
	// PICKED_TILE_OPTION_TO_PASS		<br>
	// OPTION_TO_PLAY_EVENT				<br>
	// DURING_EVENT						<br>
	// BEFORE_SPENDING_ACTION_POINTS	<br>
	// ACTION_POINTS_ALREADY_SPENT		<br>
	// NOT_ACTION_PHASE					<br>
	G.action_round_subphase = NOT_ACTION_PHASE

	// When asking player about whether to flip ministers, expend advantages and abilities, etc, this header
	// can be populated with a reminder of what the main action the player is trying to do (e.g. "UNFLAG IRELAND: ")
	G.action_header = ""

	// Internal for tracking if a log box is going
	G.log_box = null

	// During scoring reviews (which otherwise would generate an overwhelming amount of logging all at once), we hide
	// parts of the log and let each player step through at their own pace. -1 means not hiding any part of the log; otherwise
	// an index means hide anything after that index
	G.log_hide_after = [-1, -1]

	call("main")
}

/* VIEW & ACTIONS */


// Items that we keep current even when we're in "review mode" looking at an old view
function absolute_view() {
	V.active         = G.active
	V.log_hide_after = G.log_hide_after
	V.log_length     = G.log.length       // Footgun alert: the only place in rules.js that "log_length" with underscore should ever appear!
}

function on_view() {
	if (G.temp_view) {
		if (G.temp_view[R]) {
			V = G.temp_view[R]
			absolute_view()
			return
		}
	}

	absolute_view()

	V.turn = G.turn
	V.vp = G.temp_vp ?? G.vp
	V.initiative = G.initiative

	// Player debts/TRPs always visible
	V.debt = G.temp_debt ?? G.debt
	V.debt_limit = G.debt_limit
	V.treaty_points = G.temp_trp ?? G.treaty_points

	// Discard pile and played event pile are both public. Shuffled event deck is not.
	V.discard_pile = G.discard_pile
	V.played_events = G.played_events
	V.played_event = G.played_event

	// Current available investments, and used investment pile, are public.
	// Shuffled investment deck is not.
	V.available_investments = G.available_investments
	V.played_investments = G.played_investments
	V.used_investments = G.used_investments

	// Flags on the board are always visible
	V.flags = G.flags
	V.dirty = G.dirty
	V.dirty_who = G.dirty_who
	V.conflicts = G.conflicts
	V.damaged_forts = G.damaged_forts

	// Currently selected global demand chits are visible; shuffled chits are not
	V.global_demand = G.global_demand

	// Award tiles
	V.awards = G.awards

	// Advantage tiles
	V.advantages = G.advantages
	V.advantages_exhausted = G.advantages_exhausted

	V.navy_box = G.navy_box
	V.unbuilt_squadrons = G.unbuilt_squadrons

	V.played_tile  = G.played_tile
	V.played_tiles = G.played_tiles

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

	V.ministry_exhausted = G.ministry_exhausted
	V.ministry_revealed = G.ministry_revealed

	V.next_war = G.next_war
	V.theater_basic_war_tiles = [ [], [] ] // [player][theater][0-n]
	V.theater_bonus_war_tiles = [ [], [] ] // [player][theater][0-n]

	for (var who = FRANCE; who <= BRITAIN; who++) {
		for (var theater = 0; theater <= data.wars[G.next_war].theaters; theater++) { //NB: intentionally start at 0 (no-theater-yet) and then also theaters 1-X
			// -1 means opponent hasn't seen the tile yet
			V.theater_basic_war_tiles[who][theater] = G.theater_basic_war_tiles[who][theater].map(tile =>
				((who === R) || set_has(G.basic_war_tile_revealed[who], tile)) ? tile : -1
			)
			V.theater_bonus_war_tiles[who][theater] = G.theater_bonus_war_tiles[who][theater].map(tile =>
				((who === R) || set_has(G.bonus_war_tile_revealed[who], tile)) ? tile : -1
			)
		}
	}

	V.basic_war_tile_revealed = G.basic_war_tile_revealed
	V.bonus_war_tile_revealed = G.bonus_war_tile_revealed

	// Current flag counts are public
	V.demand_flag_count = G.demand_flag_count
	V.flag_count        = G.flag_count
	V.prestige_flags    = G.prestige_flags

	V.huguenots = G.huguenots
	V.huguenots_spent = G.huguenots_spent

	V.action_points_major = G.action_points_major
	V.action_points_minor = G.action_points_minor
	V.action_points_eligible = G.action_points_eligible
	V.action_points_eligible_major = G.action_points_eligible_major
	V.action_points_committed_bonus = G.action_points_committed_bonus
	V.action_points_contingent = G.action_points_contingent
	V.action_round_subphase = G.action_round_subphase
}


function rules_spanish_empire()
{
	return false
}

function rules_military_planning()
{
	return false
}

function rules_tougher_forts()
{
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

function pay_debt(who, amount) {
	G.debt[who] += amount
	//TODO handle going over the debt limit
}

function pay_treaty_points(who, amount) {
	if (amount > G.treaty_points[who]) {
		console.error("Paid more treaty points than had available. Who: " + who + "  Avail: " + G.treaty_points[who] + "  Paid " + amount)
		amount = G.treaty_points[who]
	}
	G.treaty_points[who] -= amount
}


function reduce_debt(who, amount)
{
	amount = Math.min(amount, G.debt[who])
	if (amount > 0) {
		G.debt[who] -= amount
		log(say_spending(data.flags[who].adj + " Debt", who) + " reduced by " + amount + " -- more spending available.")
	}
}

function increase_debt(who, amount) {
	let penalty = 0
	if (amount > available_debt(who)) {
		penalty = amount - available_debt(who)
		amount -= penalty
	}
	if (amount > 0) {
		G.debt[who] += amount
		log (say_spending(data.flags[who].adj + " Debt", who) +  " increased by " + amount + " -- less spending available.") //+ "(Available: " + available_debt(who) + ")")
	}
	if (penalty > 0) {
		award_vp(who, -penalty, false, "Debt Limit overrun")
		//log (bold(data.flags[who].name + " loses " + penalty + " VP for Debt Limit overrun. VP Marker: " + G.VP))
	}
}

function add_treaty_points(who, amount)
{
	G.treaty_points[who] += amount
	if (amount > 0) {
		log (data.flags[who].name + " gains " + say_spending(amount + " Treaty Point" + s(amount), who) + ".")
	}
}


function award_vp(who, amount, silent = false, reason = null)
{
	let true_delta = (who === FRANCE) ? amount : 0 - amount

	G.vp += true_delta

	if (!silent) {
		let msg = data.flags[who].name + ((amount >= 0) ? " gains " : " loses ") + amount + " VP"
		if (reason) msg += " " + parens(reason)
		msg += "."
		log (bold(msg))
		msg = "VP: " + G.vp
		log (bold(msg))
	}
}

function has_advantage(who, a) {
	for (var s of data.advantages[a].req)
		if (G.flags[s] !== who)
			return false
	return true
}

function is_advantage_conflicted(a)
{
	for (var s of data.advantages[a].req) {
		if (has_conflict_marker(s)) return true
	}
	return false
}


function is_advantage_exhausted(a)
{
	return !!(G.advantages_exhausted & (1 << a))
}

function exhaust_advantage(a, close_box, reason = "", silent = false)
{
	G.advantages_exhausted |= (1 << a)
	if (!silent) {
		let msg = "ADVANTAGE Used"
		msg += "\n" + say_advantage(a, G.advantages[a])

		log_box_begin(G.advantages[a], msg, LOG_BOX_ADVANTAGE)
		if (reason !== "") log(reason)
		if (close_box) log_box_end(LOG_BOX_ADVANTAGE)
	}
}

function refresh_advantage(a)
{
	G.advantages_exhausted &= ~(1 << a)
}


/* 8.0 - Advantages */
function has_advantage_eligible(who, a, ignore_exhaustion = false)
{
	if (!has_advantage(who, a)) return false				                     // 8.1 - control all the connected spaces
	if (G.advantages_newly_acquired & (1 << a)) return false                     // 8.0 - Can only be used the round *after* control is gained
	if ((G.advantages_exhausted & (1 << a)) && !ignore_exhaustion) return false	 // 8.1 - Exhausted when used
	if (is_advantage_conflicted(a)) return false		                         // 8.1 - can't be used if any conflict markers, but remains "controlled"
	if (G.advantages_used_this_round >= 2) return false                          // 8.2 - Can only use 2 advantages per action round
	return true
}

/* 8.0 - Advantages */
function update_advantages(silent = false) {
	for (var a = 0; a < NUM_ADVANTAGES; a++) {
		var old = G.advantages[a]
		if (has_advantage(FRANCE, a))
			G.advantages[a] = FRANCE
		else if (has_advantage(BRITAIN, a))
			G.advantages[a] = BRITAIN
		else
			G.advantages[a] = NONE

		if (old !== G.advantages[a]) {
			G.advantages_newly_acquired |= (1 << a)
			if (!silent) {
				if (G.advantages[a] !== NONE) {
					let msg = "ADVANTAGE Gained"
					msg += "\n" + say_advantage(a, G.advantages[a])
					log_box_begin(G.advantages[a], msg, LOG_BOX_ADVANTAGE)
					//log(data.flags[G.advantages[a]].name + " GAINS " + data.advantages[a].name + " Advantage")
					log_box_end(LOG_BOX_ADVANTAGE)
				} else {
					let msg = "ADVANTAGE Lost"
					msg += "\n" + say_advantage(a, G.advantages[a])
					log_box_begin(G.advantages[a], msg, LOG_BOX_ADVANTAGE)
					log(data.flags[old].name + " loses Advantage")
					log_box_end(LOG_BOX_ADVANTAGE)
				}
			}
		}
	}
}

function advantages_acquired_last_round_now_available() // a sort of awkward name, but otherwise hard to distinguish from "exhausted"/refreshed advantage state
{
	G.advantages_newly_acquired = 0
}


function beginning_of_era() {
	return ([PEACE_TURN_1, PEACE_TURN_3, PEACE_TURN_5].includes(G.turn))
}

function current_era() {
	if (G.turn < PEACE_TURN_3) return SUCCESSION_ERA
	if (G.turn < PEACE_TURN_5) return EMPIRE_ERA
	return REVOLUTION_ERA
}

/* 7.6 and Setup - BONUS WAR TILE LAYOUT */
function add_next_war_bonus_tiles() {
	G.bonus_war_tiles = [ [], [] ]
	let base = (G.next_war - 1) * (NUM_BONUS_WAR_TILES * 2)
	for (var i = 0; i < NUM_BONUS_WAR_TILES; i++) {
		G.bonus_war_tiles[FRANCE].push(base + i)
		G.bonus_war_tiles[BRITAIN].push(base + i + NUM_BONUS_WAR_TILES)
	}
	shuffle(G.bonus_war_tiles[FRANCE])
	shuffle(G.bonus_war_tiles[BRITAIN])
}


function draw_basic_war_tile(who, theater) {
	if (G.basic_war_tiles[who].length < 1) return -1
	let tile = G.basic_war_tiles[who].pop()
	G.theater_basic_war_tiles[who][theater].push(tile)
	return tile
}

function draw_bonus_war_tile(who, theater) {
	if (G.bonus_war_tiles[who].length < 1) return -1
	let tile = G.bonus_war_tiles[who].pop()
	G.theater_bonus_war_tiles[who][theater].push(tile)
	return tile
}

/* 3.8 - CONFLICT MARKERS */

const CONFLICT_NONE = 0
const CONFLICT_NORMAL = 1
const CONFLICT_PLUS_ONE = 2

function has_conflict_marker(s) {
	return get_conflict_marker(s) > 0
}

function get_conflict_marker(s) {
	return map_get(G.conflicts, s, 0)
}

function set_conflict_marker(s, n = 1) {
	if (n === 0) {
		remove_conflict_marker(s)
	} else {
		map_set(G.conflicts, s, n)
		log ("Conflict added at " + data.spaces[s].name)
	}
	update_flag_counts()
}

function remove_conflict_marker(s) {
	if (has_conflict_marker(s)) log ("Conflict removed at " + data.spaces[s].name)
	map_delete(G.conflicts, s)
	update_flag_counts()
}


function can_have_conflict_marker(s) {
	return (data.spaces[s].type === MARKET) || (data.spaces[s].type === POLITICAL)
}


/* 3.2.5 DAMAGED FORTS */
function is_damaged_fort(s) {
	return set_has(G.damaged_forts, s)
}

function set_damaged_fort(s, damage = true)
{
	if (!damage) {
		set_delete(G.damaged_forts, s)
		//log ("Fort repaired at " + data.spaces[s].name)
		//TODO - distinguish repaired/seized
	} else {
		set_add(G.damaged_forts, s)
		log ("Fort damaged at " + data.spaces[s].name)
	}
}

/* New World Huguenots */

function has_huguenots(s)
{
	return G.huguenots.includes(s)
}

function has_spent_huguenots(s)
{
	return G.huguenots_spent.includes(s)
}

function has_fresh_huguenots(s)
{
	return has_huguenots(s) && !has_spent_huguenots(s)
}

function add_huguenots(s)
{
	if (data.spaces[s].type !== TERRITORY) {
		throw new Error("Tried to add Huguenots to a space that isn't a territory: " + data.spaces[s].name)
	}
	if ((data.spaces[s].region !== REGION_NORTH_AMERICA) && (data.spaces[s].region !== REGION_CARIBBEAN)) {
		throw new Error("Tried to add Huguenots outside of North America and Caribbean")
	}
	if (has_huguenots(s)) {
		console.error("Tried to add Huguenots to a space that already has them: " + data.spaces[s].name)
		return
	}
	if (G.flags[s] !== FRANCE) {
		throw new Error("Tried to add Huguenots to a space that isn't FR-flagged: " + data.spaces[s].name)
	}

    G.huguenots.push(s)
}

function remove_huguenots(s)
{
	array_delete_item(G.huguenots, s)
	array_delete_item(G.huguenots_spent, s)
}

function expend_huguenots(s)
{
	if (!has_huguenots(s)) {
		throw new Error("Tried to spend Huguenots from a space that doesn't contain any: " + data.spaces[s].name)
	}
	if (has_spent_huguenots(s)) {
		throw new Error("Tried to spend Huguenots from a space where they're already spent: " + data.spaces[s].name)
	}

	G.huguenots_spent.push(s)
}

function any_huguenots_in_region(region) {
	for (let s = data.regions[region].first_space; s < data.regions[region].first_space + data.regions[region].spaces; s++) {
		if (has_fresh_huguenots(s)) return true
	}
	return false
}

function refresh_huguenots() {
	if (G.huguenots_spent.length > 0) {
		log(bold("New World Huguenots refreshed"))
	}
	G.huguenots_spent = []
}

function is_space_eligible_for_huguenots(s)
{
	if (data.spaces[s].type !== TERRITORY) return false
	if ((data.spaces[s].region !== REGION_NORTH_AMERICA) && (data.spaces[s].region !== REGION_CARIBBEAN)) return false
	if (has_huguenots(s)) return false
	return G.flags[s] === FRANCE;
}



/* 5.4.1 Isolated Market flags */
function is_isolated_market(s) {
	return set_has (G.isolated_markets, s)
}

function set_isolated_market(s, isolated = true)
{
	if (!isolated) {
		set_delete(G.isolated_markets, s)
	} else {
		set_add(G.isolated_markets, s)
	}

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


// Start a beginning-of-turn log-review stack
function review_begin()
{
	review_end()

	G.review_index = []
	G.review_phase = []
	G.review_view  = []
	G.review_step  = [ 0, 0 ]
}

// Push another phase name onto the beginning of turn log-review stack (but only if something happened in the log that phase)
function review_push(phase)
{
	if ((G.review_index.length === 0) || (G.review_index.slice(-1).pop() < G.log.length - 1)) {
		G.review_index.push(G.log.length - 1)
		G.review_phase.push(phase)
		if (V) {
			on_view() // Get absolute latest view information before storing it
		}
		G.review_view.push(V)
	}
}

function review_step(step, who)
{
	if (step < G.review_index.length) {
		G.log_hide_after[who] = G.review_index[step]
		if (G.temp_view === undefined) G.temp_view = [undefined, undefined]
		G.temp_view[R] = G.review_view[step]
	} else {
		G.log_hide_after[who] = -1
		if (G.temp_view !== undefined) {
			G.temp_view[R] = undefined
		}
	}
}

function review_end() {
	G.log_hide_after = [ -1, -1 ]  // Clear any log-hiding
	G.temp_view = undefined        // Clear any temporary view
	G.review_view = []             // Clear any stored views
}

function start_of_peace_turn() {
	log ("#TURN " + data.turns[G.turn].id + "\n" + data.turns[G.turn].dates)
	review_begin()
	review_push("START OF TURN " + data.turns[G.turn].id)
}

/* 4.1 - PEACE TURNS */

P.peace_turn = script (`
	eval { start_of_peace_turn()  }
	
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

		for (var who = FRANCE; who <= BRITAIN; who++) {
			for (var index = G.hand[who].length - 1; index >= 0; index--) {
				if (data.cards[G.hand[who][index]].era === SUCCESSION_ERA) {
					log ("Succession Era event discarded from " + data.flags[who].adj + " hand: " + say_event(G.hand[who][index], who) + " (see 4.1.1)")
					G.hand[who][index].delete()
				}
			}
		}

		// Removed this as it technically is done a card at a time while drawing during Deal Cards Phase (4.1.6)
		/*
		log ("Succession Era events REMOVED from Event Deck")
		for (var index = G.deck.length - 1; index >= 0; index--) {
			if (data.cards[index].era === SUCCESSION_ERA) {
				G.deck.delete(index);
			}
		}
		*/

		for (var card = EMPIRE_ERA_CARDS + 1; i <= REVOLUTION_ERA_CARDS; i++)
			G.deck.push(i);
		log ("Revolution Era events added to Event Deck")
		log ("Shuffling Event Deck")
		shuffle(G.deck)
	}

	review_push("DECK PHASE")
	end()
}

/* 4.1.2 - DEBT LIMIT INCREASE PHASE */

P.debt_limit_increase_phase = function () {
	if (beginning_of_era() && (current_era() !== SUCCESSION_ERA)) {
		log("=Debt Limit Increase Phase")
		log ("French " + say_spending("DEBT LIMIT", FRANCE) + " increased by 4")
		log ("British " + say_spending("DEBT LIMIT", BRITAIN) + " increased by 4")
		G.debt_limit[FRANCE]  += 4
		G.debt_limit[BRITAIN] += 4
	}
	review_push ("DEBT LIMIT INCREASE PHASE")
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
		log(say_award_tile(data.regions[i].name + " -> " + data.awards[chit].name, chit))
	}

	review_push ("AWARD PHASE")
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
		log(say_demand(chit))
		//log(data.demands[chit].name)
		G.global_demand.push(chit)
	}
	review_push ("GLOBAL DEMAND PHASE")
	end()
}


/* 4.1.5 - RESET PHASE */

P.reset_phase = function () {
	if (G.turn !== PEACE_TURN_1) {
		log("=Reset Phase")
		log ("All exhausted advantages refreshed")
		log ("All exhausted ministries refreshed")
		log ("Remaining investments from previous turn moved to Used Investments")
	}

	// remove exhausted from advantage and ministry cards
	G.advantages_exhausted = 0 // Bitflags

	// Tracks exhaustion markers for ministries. Some ministries have more than one exhaustible sub-ability, indexed 0, 1
	// <br><b>
	// set_has(G.ministry_exhausted, idx + (ability * NUM_MINISTRY_CARDS))
	G.ministry_exhausted   = [ ]

	// move investments to used
	for (var i of G.available_investments)
		G.used_investments.push(i)
	G.available_investments = []
	G.played_investments = []

	G.played_tiles = [ [], [] ]

	review_push("RESET PHASE")
	end()
}


function log_dealt(dealt) {
	for (let whom = FRANCE; whom <= BRITAIN; whom++) {
		if (dealt[whom] > 0) log (dealt[whom] + " cards dealt to " + data.flags[whom].name)
	}
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

	// Deal 3 event cards to each player. If we run out of cards, reshuffle any discards. Show # cards dealt in a way that documents who got "reshuffles" if anyone
	var dealt = [0, 0]
	for (var i = 0; i < 3; ++i) {
		for (let who = FRANCE; who <= BRITAIN; who++) {
			let smelt_it_dealt_it = false
			do {
				if (G.deck.length === 0) {
					log_dealt(dealt)
					dealt = [0, 0]
					log (bold("Discard Pile shuffled to form new Event Deck"))
					G.deck = G.discard_pile
					shuffle(G.deck)
				}

				// I don't think this should actually ever happen, but this is how we'd move on from that situation if it did
				if (G.deck.length === 0) {
					log_dealt(dealt)
					log (bold("Event deck is EMPTY."))
					G.active = [ FRANCE, BRITAIN ]
					goto ("deal_cards_discard")
					return
				}

				let c = G.deck.pop()
				if ((data.cards[c].era === SUCCESSION_ERA) && (current_era() === REVOLUTION_ERA)) {
					log ("Succession Era event card removed from game: " + say_event(c, NONE))
				} else {
					smelt_it_dealt_it = true
					G.hand[who].push(c)
					dealt[who]++
				}
			} while (!smelt_it_dealt_it)
		}
	}
	log_dealt(dealt)

	G.active = [ FRANCE, BRITAIN ]
	goto("deal_cards_discard")
}

P.deal_cards_discard = {
	_begin() {
		L.discarded = [ [], [] ]
		review_step(0, FRANCE)
		review_step(0, BRITAIN)
	},
	prompt() {
		console.log ("Log Step: " + G.review_step[R] + "  Number of steps: " + G.review_index.length)
		if (G.review_step[R] < G.review_index.length) {
			V.prompt = say_action_header(G.review_phase[G.review_step[R]] + ": Done.")
			button ("done")
		} else if (G.hand[R].length > 3) {
			V.prompt = say_action_header("DEAL CARDS PHASE: ") + say_action("Discard down to three Event cards.")
			for (var c of G.hand[R])
				action_event_card(c)
		} else {
			V.prompt = say_action_header("DEAL CARDS PHASE: ") + say_action("Review newly drawn Event cards.")
			var any = false
			for (const c of G.hand[R]) {
				if (any) {
					V.prompt += ", "
				} else {
					V.prompt += " ("
				}
				V.prompt += say_event(c)
				any = true
			}
			if (any) V.prompt += ")"

			button("confirm")
		}
		if (G.review_step[R] > 0) button ("undo")
	},
	event_card(c) {
		array_delete_item(G.hand[R], c)
		L.discarded[R].push(c)
	},
	done() {
		review_step(++G.review_step[R], R)
	},
	undo() {
		if (L.discarded[R].length > 0) {
			G.hand[R].push(L.discarded[R].pop())
		} else if (G.review_step[R] > 0) {
			review_step(--G.review_step[R], R)
		}
	},
	confirm() {
		set_delete(G.active, R)
		if (G.active.length === 0) {
			review_end()
			// Only when both players are finished do we "reveal" the cards discarded (which are now public information). We also need to maintain a discard pile because it occasionally reshuffles late in the game
			for (var who = FRANCE; who <= BRITAIN; who++) {
				for (let c of L.discarded[who]) {
					log(data.flags[who].name + " discards " + say_event(c, who))
				}
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
		G.ministry           = [ [], [] ]

		// For each player, a flag whether the ministry in the specific ministry slot has been revealed
		// <br><b>
		// G.ministry_revealed[FRANCE][0] </b> is true if the ministry in France's first slot has been revealed
		G.ministry_revealed  = [ [], [] ]

		// Tracks exhaustion markers for ministries. Some ministries have more than one exhaustible sub-ability, indexed 0, 1
		// <br><b>
		// set_has(G.ministry_exhausted, idx + (ability * NUM_MINISTRY_CARDS))
		G.ministry_exhausted = [ ]

		G.active             = [ FRANCE, BRITAIN ]
		goto("choose_ministry_cards")
	}
}

P.choose_ministry_cards = {
	prompt() {
		if (G.ministry[R].length < 2) {
			V.prompt = say_action_header("MINISTRY PHASE: ") + say_action("Choose two ministry cards.")
		} else {
			V.prompt = say_action_header("MINISTRY PHASE: ") + say_action("Confirm choice of ministers: ")
			var any = false
			var list = ""
			for (const i of G.ministry[R]) {
				if (any) list += ", ";
				list += say_ministry(i)
				any = true;
			}
			if (any) list += "."
			V.prompt += say_action(list)
		}
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
	_begin() {
		G.active = [ FRANCE, BRITAIN ]
	},
	prompt() {
		if (!G.ministry_revealed[R].includes(false)) {
			V.prompt = say_action_header("MINISTRY PHASE: ") + say_action("No ministries eligible for mid-era replacement (see 4.1.7).")
			button("confirm")
		}
		else {
			//TODO: allow replacement of ministries mid-era
			V.prompt = say_action_header("MINISTRY PHASE: ") + say_action("Select any unrevealed ministries you wish to replace. (TODO! TODO! TODO! For now, just suck it)")
			button("confirm")
		}
	},
	confirm() {
		set_delete(G.active, R)
		if (G.active.length === 0)
			end()
	},
}

// Ministry is active if it's one of the player's ministry cards AND it has been revealed
function has_active_ministry(who, m)
{
	if (!G.ministry[who].includes(m)) return false
	let idx = G.ministry[who].indexOf(m)
	return G.ministry_revealed[who][idx]
}

// True if this is one of the specified player's ministries (possibly still face down)
function has_ministry(who, m, require_face_up = false)
{
	return require_face_up ? has_active_ministry(who, m) : G.ministry[who].includes(m)
}

// True if the player has a ministry keyword somewhere in his ministry. Possibly face down.
function has_keyword(who, k)
{
	if (k === KEYWORD_NONE) return true
	for (const m of G.ministry[who]) {
		for (const keyword of data.ministries[m].keywords) {
			if (keyword === k) return true
		}
	}
	return false
}


// True if the player has the ministry keyword on an *active* (face up) ministry
function has_active_keyword(who, k)
{
	if (k === KEYWORD_NONE) return true
	for (const m of G.ministry[who]) {
		let index = G.ministry[who].indexOf(m)
		if (!G.ministry_revealed[who][index]) continue
		for (const keyword of data.ministries[m].keywords) {
			if (keyword === k) return true
		}
	}
	return false
}


// Used to figure out which (if any) of a player's ministers he could flip to gain the specified keyword
function get_minister_for_keyword(who, k)
{
	if (k === KEYWORD_NONE) return -1
	for (const m of G.ministry[who]) {
		for (const keyword of data.ministries[m].keywords) {
			if (keyword === k) return m
		}
	}
	return -1
}


// True if specified player has the specified ministry AND it is currently still hidden
function has_inactive_ministry (who, m)
{
	if (!G.ministry[who].includes(m)) return false
	let idx = G.ministry[who].indexOf(m)
	return !G.ministry_revealed[who][idx]
}


// Player can expend an advantage to enable (or improve) the action he is trying to do. Give him the choice.
function require_advantage(who, a, why, optional = false)
{
	// True if the player chose to activate the advantage requested
	G.used_required_advantage = false
	if (!has_advantage_eligible(who, a)) return // If we got here w/o eligibility for the advantage, then fail out

	// The specific advantage tile we're currently dealing with
	G.advantage = a

	// String reason why the player might want to expend the advantage
	G.advantage_required_because = why

	// True if player can still accomplish his desired action w/o expending the advantage
	G.advantage_optional = optional
	call ("advantage_is_required")
}

P.advantage_is_required = script (`
    call confirm_use_advantage
    eval {
    	G.used_required_advantage = !has_advantage_eligible(R, G.advantage)
    }
`)



P.confirm_use_advantage = {
	_begin() {
		if (!has_advantage_eligible(R, G.advantage)) end()
	},
	prompt() {
		V.prompt = say_action_header() + say_action("Use " + data.advantages[G.advantage].name + " Advantage?")
		if ((G.advantage_required_because !== undefined) && (G.advantage_required_because !== "")) V.prompt += " (" + G.advantage_required_because + ")"
		V.prompt += say_action_points()
		action("use_advantage")
		if (G.advantage_optional) action("dont_use_advantage")
	},
	use_advantage() {
		push_undo()
		exhaust_advantage(G.advantage, true, G.advantage_required_because)
		end()
	},
	dont_use_advantage() {
		push_undo()
		end()
	}
}


P.ask_about_huguenots = {
	prompt() {
		V.prompt = say_action_header() + say_action("Flip a Huguenot in same region to reduce action cost by 1, or pass.") + say_action_points()
		let region = data.spaces[G.active_space].region
		for (let s = data.regions[region].first_space; s < data.regions[region].first_space + data.regions[region].spaces; s++) {
			if (!has_fresh_huguenots(s)) continue
			action("huguenots", s)
		}
		button("pass")
	},
	huguenots(s) {
		push_undo()
		expend_huguenots(s)
		log (italic("France flips Huguenots at " + data.spaces[s].name + " to reduce cost of " + data.spaces[G.active_space].name + " by 1."))
		end()
	},
	pass() {
		push_undo()
		G.eligible_for_huguenots = false
		end()
	}
}


// Player needs to flip a hidden ministry to qualify for what he wants to do. Give him the choice...
// "optional" means the player could still execute the action (perhaps more expensively) without it, so a "Don't Reveal" option is given; otherwise must either Reveal or Undo
function require_ministry(who, m, why, optional = false, prompt_to_exhaust = false)
{
	// True if the player (now) has the requested/required ministry revealed and thus active
	G.has_required_ministry = undefined
	if (has_active_ministry(who, m)) {
		G.has_required_ministry = true
		G.ministry_already_revealed = true
	}
	else {
		if (!has_ministry(who, m)) {
			G.has_required_ministry = false
		}
		G.ministry_already_revealed = false
	}

	// "m" card id of the ministry card being used (e.g. John Law is 2)
	G.ministry_id = m

	// Which of the player's two minister cards is being used (always 0 or 1)
	G.ministry_index = G.ministry[who].indexOf(m)

	// String reason ministry is required or helpful in current action
	G.ministry_required_because = why

	// True if player can conceivably accomplish current action without revealing the ministry
	G.ministry_optional = optional

	// True if, finding the ministry already revealed, we should prompt the player whether he wants to exhaust the ministry now
	G.prompt_to_exhaust = prompt_to_exhaust

	call ("ministry_is_required")
}


function require_ministry_unexhausted(who, m, why, ability = 0, optional = false, prompt_to_exhaust = false)
{
	if (is_ministry_exhausted(who, m, ability)) {
		G.has_required_ministry = false
		return
	}
	G.ministry_ability = ability
	require_ministry(who, m, why, optional, prompt_to_exhaust)
}


P.ministry_is_required = script (`
    call confirm_reveal_ministry
    eval {
    	if (G.prompt_to_exhaust && !is_ministry_exhausted(R, G.ministry_id, G.ministry_ability)) {
    		G.has_required_ministry = false
    	} else {    
    		G.has_required_ministry = G.ministry_revealed[R][G.ministry_index]
    	}
    }
`)

// True if ministry is presently exhausted
// Some ministries have more than one separately exhaustible ability (in which case can pass a different "ability" number)
function is_ministry_exhausted (who, m, ability = 0)
{
	if (!G.ministry[who].includes(m)) return false
	var idx = G.ministry[who].indexOf(m)
	return set_has(G.ministry_exhausted, idx + (ability * NUM_MINISTRY_CARDS))
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


// Exhausts the specific ability of a ministry
function exhaust_ministry (who, m, ability = 0)
{
	if (!G.ministry[who].includes(m)) return
	var idx = G.ministry[who].indexOf(m)
    set_add(G.ministry_exhausted, idx + (ability * NUM_MINISTRY_CARDS))

	log_br()
	let msg = "Ministry Exhausted: " + say_ministry(m, who)
	if (data.ministries[m].abilities > 1) {
		msg += " (Ability #" + (ability + 1) + ")"
	}
	log(msg)
	log_br()
}


// Refreshes a ministry (or ministry sub-ability)
function refresh_ministry (who, m, ability = 0)
{
	if (!G.ministry[who].includes(m)) return
	var idx = G.ministry[who].indexOf(m)
	set_delete(G.ministry_exhausted, idx + (ability * NUM_MINISTRY_CARDS))
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

function start_action_phase() {
	//console.log ("START ACTION PHASE")
}

/* 4.1.9 - ACTION PHASE */

P.action_phase = script (`
	log ("=Action Phase")
	eval { start_action_phase() }
	set G.active G.initiative
	call choose_first_player
	call confirm_first_player
	for G.round in 1 to 4 {
		call action_round
		set G.active (1-G.active)
		call action_round
		set G.active (1-G.active)
	}
`)

function tell_first_player_choice()
{
	log ("First player: " + data.flags[G.first_player].name)
}

P.choose_first_player = {
	prompt() {
		V.prompt = say_action_header("INITIATIVE PHASE: ") + say_action("Choose the player to go first in each action round this turn.")
		button("france")
		button("britain")

		//BR// An idea... maybe too distracting when thinking about the decision though
		//for (let s = 0; s < NUM_SPACES; s++) {
		//	if ((G.flags[s] === FRANCE) || (G.flags[s] === BRITAIN)) action_space(s)
		//}
	},
	france() {
		push_undo()
		G.first_player = FRANCE
		tell_first_player_choice()
		end()
	},
	britain() {
		push_undo()
		G.first_player = BRITAIN
		tell_first_player_choice()
		end()
	},
	space(s) {
		push_undo()
		G.first_player = G.flags[s]
		tell_first_player_choice()
		end()
	},
}

P.confirm_first_player = {
	_begin() {
		// Don't need a confirmation step if player picks himself - head straight into his turn
		if (G.first_player === R) {
			G.active = G.first_player
			end()
		}
	},
	prompt() {
		V.prompt = say_action_header("INITIATIVE PHASE: ") + say_action("Confirm choice of first player: " + data.flags[G.first_player].name + ".")
		button("confirm")
	},
	confirm() {
		push_undo() //... just going to get cleared anyway?
		G.active = G.first_player
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
	let announced = false

	if (has_active_ministry(FRANCE, JOHN_LAW)) {
		let debt_reduction = 1
		if ((G.flags[SCOTLAND_1] === FRANCE) || (G.flags[SCOTLAND_2] === FRANCE)) debt_reduction++
		debt_reduction = Math.min(debt_reduction, G.debt[FRANCE])
		if (debt_reduction > 0) {
			G.debt[FRANCE] -= debt_reduction

			if (!announced) {
				announced = true
				log("=Resolve Remaining Powers Phase")
			}
			log (bold(say_ministry(JOHN_LAW, FRANCE) + " ministry reduces " + say_spending("French debt", FRANCE) + " by " + debt_reduction + "."))
		}
	}

	// TODO - any other "remaining powers"

	end()
}


function get_winner(france, britain)
{
	if (france > britain) return FRANCE
	if (britain > france) return BRITAIN
	return NONE
}

function region_flag_winner(region) {
	return get_winner(G.flag_count[FRANCE][region], G.flag_count[BRITAIN][region])
}

function region_flag_delta(region) {
	return Math.abs(G.flag_count[FRANCE][region] - G.flag_count[BRITAIN][region])
}

function prestige_winner() {
	return get_winner(G.prestige_flags[FRANCE], G.prestige_flags[BRITAIN])
}

function prestige_flag_delta() {
	return Math.abs(G.prestige_flags[FRANCE] - G.prestige_flags[BRITAIN])
}

function demand_flag_winner(demand) {
	return get_winner(G.demand_flag_count[FRANCE][demand], G.demand_flag_count[BRITAIN][demand])
}

function demand_flag_delta(demand) {
	return Math.abs(G.demand_flag_count[FRANCE][demand] - G.demand_flag_count[BRITAIN][demand])
}


function adjust_scoring_view_prestige() {
	G.temp_trp = G.scoring_start_trp
	if (L.score_prestige < 0) {
		G.temp_vp = G.scoring_start_vp
	} else if (L.score_prestige === 0) {
		G.temp_vp = G.scoring_prestige_vp
	}
}

// Causes the VP/TRP/Debt markers to be shown in adjusted positions (from mid-points in scoring phase)
function adjust_scoring_view_region() {
	// Show VP markers temporarily at intermediate positions (during scoring phase)
	G.temp_vp   = G.scoring_region_vp[L.region_ticker[R]]

	// Show TRP markers temporarily at intermediate positions (during scoring phase)
	G.temp_trp  = G.scoring_region_trp[L.region_ticker[R]]

	// Show Debt markers temporarily at intermediate positions (during scoring phase)
	G.temp_debt = G.debt
}


function adjust_scoring_view_demand() {
	G.temp_vp   = G.scoring_demand_vp[L.demand_ticker[R]]
	G.temp_trp  = G.scoring_demand_trp[L.demand_ticker[R]]
	G.temp_debt = G.scoring_demand_debt[L.demand_ticker[R]]
}


// Stop showing temporary VP/TRP/Debt values and revert to the true current ones
function close_scoring_view() {
	G.temp_vp   = undefined
	G.temp_trp  = undefined
	G.temp_debt = undefined
}


// Each player now can review the scoring step by step (region by region, demand by demand). Each player clicks
// once for each step, and we reveal that part of the log to him. Neither player is blocked until they get to the end of all
// the scoring -- only then do they have to wait for the other player to catch up.
P.scoring_review = {
	_begin() {
		G.active = [ FRANCE, BRITAIN ]
		L.score_prestige = 0 // 0 = not done prestige, 1 = done prestige, -1 = backed up to very beginning of round *before* prestige
		L.region_ticker  = [0, 0] // How many regions each player has progressed through region scoring
		L.demand_ticker  = [0, 0] // How many regions each player has progressed through demand scoring

		adjust_scoring_view_prestige()
	},
	prompt() {
		let msg = say_action_header("SCORING PHASE: ")

		if (L.score_prestige < 0) {
			msg += say_action("Beginning of Scoring")
		} else if (L.score_prestige === 0) {
			msg += say_action("Review scoring for Prestige")
		} else if (L.region_ticker[R] < NUM_REGIONS) {
			msg += say_action("Review region scoring for " + data.regions[L.region_ticker[R]].name)
		} else if (L.demand_ticker[R] < G.global_demand.length) {
			msg += say_action("Review demand scoring for " + data.demands[L.demand_ticker[R]].name)
		} else {
			msg += say_action("Review additional bonus scoring")
		}
		msg += "."

		V.prompt = msg
		button("done")
		if (L.score_prestige >= 0) button("undo")
	},
	done() {
		// Advance the appropriate ticker
		if (L.score_prestige < 1) {
			L.score_prestige++
		} else if (L.region_ticker[R] < NUM_REGIONS) {
			L.region_ticker[R]++
		} else if (L.demand_ticker[R] < G.global_demand.length) {
			L.demand_ticker[R]++
		} else {
			close_scoring_view()
		}

		// Update which part of the log we are hiding (and check if this player is done with this phase)
		let done = false
		if (L.score_prestige === 0) {
			G.log_hide_after[R] = G.scoring_prestige_index
			adjust_scoring_view_prestige()
		} else if (L.region_ticker[R] < NUM_REGIONS) {
			G.log_hide_after[R] = G.scoring_region_indices[L.region_ticker[R]]
			adjust_scoring_view_region()
		} else if (L.demand_ticker[R] < G.global_demand.length) {
			G.log_hide_after[R] = G.scoring_demand_indices[L.demand_ticker[R]]
			adjust_scoring_view_demand()
		} else {
			close_scoring_view()
			if (G.log_hide_after[R] === G.scoring_extra_index) { // This step may not even happen if nothing got written to the log in that step
				done = true
			} else {
				G.log_hide_after[R] = G.scoring_extra_index
			}
		}

		if (done) {
			set_delete(G.active, R)
			if (G.active.length === 0) {
				G.log_hide_after = [-1, -1] // Stop hiding any part of the log
				end()
			}
		}
	},
	undo() {
		if (L.demand_ticker[R] > 0) {
			L.demand_ticker[R]--
			G.log_hide_after[R] = G.scoring_demand_indices[L.demand_ticker[R]]
			adjust_scoring_view_demand()
		} else if (L.region_ticker[R] > 0) {
			L.region_ticker[R]--
			G.log_hide_after[R] = G.scoring_region_indices[L.region_ticker[R]]
			adjust_scoring_view_region()
		} else if (L.score_prestige > -1) {
			L.score_prestige--
			if (L.score_prestige === 0) {
				G.log_hide_after[R] = G.scoring_prestige_index
			} else {
				G.log_hide_after[R] = G.scoring_start_index
			}
			adjust_scoring_view_prestige()
		}
	}
}

/* 4.1.12 - SCORING PHASE */

P.scoring_phase = function () {
	log("=Scoring Phase")

	G.won_all_scorings = -1

	G.scoring_start_index    = G.log.length - 1
	G.scoring_start_vp       = G.vp
	G.scoring_start_trp      = G.treaty_points.slice()
	G.scoring_region_indices = []
	G.scoring_demand_indices = []
	G.scoring_region_vp   = []
	G.scoring_region_trp  = []
	G.scoring_demand_vp   = []
	G.scoring_demand_trp  = []
	G.scoring_demand_debt = []

	// Prestige awards are sort notionally done alongside the Europe award, so we go first with that.
	let winner = prestige_winner()
	if (winner !== NONE) {
		log_box_begin(winner, "Scoring: PRESTIGE" + "\n" + data.flags[winner].name + " +" + prestige_flag_delta() + " flags")

		award_vp(winner, 2)

		// Tracking if anybody won ALL the scorings
		if (G.won_all_scorings < 0) {
			G.won_all_scorings = winner
		} else if (winner !== G.won_all_scorings) {
			G.won_all_scorings = NONE
		}
	} else {
		log_box_begin(NONE, "Scoring: PRESTIGE " + "\n" + "TIE! No score.")
		G.won_all_scorings = NONE
	}
	log_box_end()

	G.scoring_prestige_vp    = G.vp
	G.scoring_prestige_index = G.log.length - 1

	for (let region = 0; region < NUM_REGIONS; region++) {
		let award = G.awards[region]
		let winner = region_flag_winner(region)
		if (data.awards[award].by2 && region_flag_delta(region) < 2) winner = NONE

		//TODO - probably go region by region with both players confirming the results from each region and demand

		if (winner !== NONE) {
			log_box_begin(winner, "Scoring: " + data.regions[region].name.toUpperCase() + "\n" + data.flags[winner].name + " +" + region_flag_delta(region) + " flags")
			let vp = data.awards[award].vp
			let trp = data.awards[award].trp
			if (region === REGION_EUROPE) {
				if (has_active_ministry(winner, COURT_OF_THE_SUN_KING)) {
					log(say_ministry(COURT_OF_THE_SUN_KING, winner) + COURT_OF_THE_SUN_KING + " increases VP value of Europe award by +1.")
					vp++
				}
			}

			award_vp(winner, vp)
			add_treaty_points(winner, trp)

			// Tracking if anybody won ALL the scorings
			if (G.won_all_scorings < 0) {
				G.won_all_scorings = winner
			} else if (winner !== G.won_all_scorings) {
				G.won_all_scorings = NONE
			}
		} else {
			log_box_begin(NONE, "Scoring: " + data.regions[region].name.toUpperCase() + "\n" +
				(!region_flag_delta(region) ? "TIE! No score." : "NO WINNER: " + data.flags[region_flag_winner(region)].name + " +" + region_flag_delta(region) + " Insufficient."))
			G.won_all_scorings = NONE
		}
		log_box_end()

		G.scoring_region_indices.push(G.log.length - 1) // Bookmark in log how much to display when reviewing this score
		G.scoring_region_vp.push(G.vp)
		G.scoring_region_trp.push(G.treaty_points.slice())
	}

	for (const d of G.global_demand) {
		let winner = demand_flag_winner(d)
		if (winner !== NONE) {
			log_box_begin(winner, "Scoring: " + data.demands[d].name.toUpperCase() + "\n" + data.flags[winner].name + " +" + demand_flag_delta(d) + " flags")
			let vp = data.demands[d].awards[current_era()].vp
			let trp = data.demands[d].awards[current_era()].trp
			let debt = data.demands[d].awards[current_era()].debt

			award_vp(winner, vp)
			add_treaty_points(winner, trp)
			if (debt < 0) {
				reduce_debt(winner, Math.abs(debt))
			} else if (debt > 0) {
				increase_debt(winner, debt)
			}

			// Tracking if anybody won ALL the scorings
			if (G.won_all_scorings < 0) {
				G.won_all_scorings = winner
			} else if (winner !== G.won_all_scorings) {
				G.won_all_scorings = NONE
			}
		} else {
			log_box_begin(winner, "Scoring: " + data.demands[d].name.toUpperCase() + "\n" + "TIE! No score.")
			G.won_all_scorings = NONE
		}
		log_box_end()

		G.scoring_demand_indices.push(G.log.length - 1) // Bookmark in log how much to display when reviewing this score
		G.scoring_demand_vp.push(G.vp)
		G.scoring_demand_trp.push(G.treaty_points.slice())
		G.scoring_demand_debt.push(G.debt.slice())
	}

	if (has_active_ministry(BRITAIN, EAST_INDIA_COMPANY)) {
		let vp = 0
		for (const a of [ TEXTILES, SILK, FRUIT, FUR_TRADE, RUM]) {
			if (has_advantage(BRITAIN, a) && !is_advantage_conflicted(a)) {
				vp++
			}
		}
		vp = Math.min(vp, 3)
		log_box_begin((vp > 0) ? BRITAIN : NONE, bold("Bonus Scoring") + "\n" + say_ministry(EAST_INDIA_COMPANY, BRITAIN))
		//log ( + " adds +" + vp + " VP for Britain")
		award_vp(BRITAIN, vp)
		log_box_end()
	}

	G.scoring_extra_index = G.log.length - 1 // Bookmark in log how much to display when reviewing bonus scoring (NB: in this case just to know IF we have a bonus step with any content since the last bookmark)
	G.log_hide_after = [ G.scoring_prestige_index, G.scoring_prestige_index ] // We start by hiding all of the scoring part of the log except for the Prestige scoring

	goto ("scoring_review")
}

/* 4.1.13 - VICTORY CHECK PHASE */

P.victory_check_phase = function () {
	log ("=Victory Check Phase")
	if ((G.won_all_scorings !== NONE) && (G.won_all_scorings >= 0)) {
		let msg = bold(data.flags[G.won_all_scorings].name + " wins the game by winning all regional and demand scorings!")
		log (msg)
		finish (G.won_all_scorings, msg)
	} else if (G.vp <= 0) {
		let msg = bold("Britain wins the game: VP 0 or fewer!")
		log(msg)
		finish(BRITAIN, msg)
	} else if (G.vp >= 30) {
		let msg = bold("France wins the game: VP 30 or greater!")
		log(msg)
		finish(FRANCE, msg)
	} else {
		log ("No automatic victory.")
	}
	end()
}

/* 4.1.14 - FINAL SCORING PHASE */

P.final_scoring_phase = function () {
	log("=Final Scoring Phase")
	// TODO
	// TODO - USA flags count as FR flags during final scoring

	log ("=Game Over")
	if (G.vp >= 16) {
		let msg = bold("France wins! VP marker at " + G.vp + "!")
		finish (FRANCE, msg)
	} else if (G.vp <= 14) {
		let msg = bold("Britain wins! VP marker at " + G.vp + "!")
		finish (BRITAIN, msg)
	} else {
		let msg = bold("Victory points tied at 15.")
		log (msg)
		if (available_debt(FRANCE) > available_debt(BRITAIN)) {
			msg = bold("France wins! Tie-breaker: more available debt!")
			log (msg)
			finish (FRANCE, msg)
		} else if (available_debt(BRITAIN) > available_debt(FRANCE)) {
			msg = bold("Britain wins! Tie-breaker: more available debt!")
			log (msg)
			finish (BRITAIN, msg)
		} else {
			msg = bold("Available debt tied at " + available_debt(FRANCE) + ".")
			log (msg)
			msg = bold("Britain wins! Final tie-breaker!")
			log (msg)
			finish (BRITAIN, msg)
		}
	}

	end()
}

/* 5.0 - ACTION ROUNDS */

P.action_round = script (`
    eval {
        start_action_round()	// This is the official "start of action round" per the "Play Note" on p. 10 (beneath 5.1)
    }
	call select_investment_tile
	call action_round_core
	call before_end_of_action_round
	call end_of_action_round
	set G.played_tile -1
`)

function start_action_round() {
	G.action_round_subphase = BEFORE_PICKING_TILE

	// Certain effects care if we controlled particular spaces from beginning of action round
	// <br><b>
	// set_has(G.controlled_start_of_round, space)
	G.controlled_start_of_round = []
	for (var s = 0; s < NUM_SPACES; s++) {
		if (G.flags[s] !== G.active) continue
		set_add(G.controlled_start_of_round, s)
	}

	find_isolated_markets() // Markets are isolated for the whole action around if-and-only-if they're isolated at the beginning of the round

	// Advantages we acquired last round now "age in" and are available to be used. Any we acquire *after* this point won't be available until the following round
	update_advantages()
	advantages_acquired_last_round_now_available()
	G.advantages_used_this_round = 0

	G.bonus_war_tiles_bought_this_round = 0

	// Clear all the transient ability flags
	for (let ab = 0; ab < NUM_TRANSIENT_BITFLAGS; ab++) {
		set_transient(G.active, ab, false)
	}
}


function mark_dirty(s) {
	set_add(G.dirty, s)
}

function clear_dirty() {
	set_clear(G.dirty)
}



function check_if_market_isolated(market)
{
	let who = G.flags[market]
	if ((who !== FRANCE) && (who !== BRITAIN)) return false // Ignore unflagged markets, Spain, etc.

	let connection_queue  = [ market ]
	let already_traversed = [ market ]
	let connected       = false

	while (!connected && connection_queue.length > 0) {
		var s = connection_queue.pop()
		if ((data.spaces[s].type === NAVAL) || (data.spaces[s].type === TERRITORY)) {
			if (G.flags[s] === who) connected = true
		}
		else if (data.spaces[s].type === FORT) {
			if (is_damaged_fort(s)) continue
			if (G.flags[s] === who) connected = true
		}
		else if (data.spaces[s].type === MARKET) {
			if (G.flags[s] !== who) continue                           // Only trace through our own flagged markets
			if ((s !== market) && has_conflict_marker(s)) continue     // Can't trace through conflict marker, but original starting point can have conflict
			for (const connection of data.spaces[s].connects) {
				if (already_traversed.includes(connection)) continue   // Don't traverse things twice
				already_traversed.push(connection)
				connection_queue.unshift(connection)
			}
		}
	}

	return !connected
}



// Checks if a specified market (space) qualifies as isolated per 5.4.1
function check_and_mark_if_market_isolated(market)
{
    if (check_if_market_isolated(market)) {
		set_isolated_market(market)
	}
}

/* 5.4.1 - Identify Isolated Markets, and flag them for the Action Round */
function find_isolated_markets()
{
	// Set of isolated_market spaces, for the purposes of 5.4.1
	// <br><b>
	// set_has(G.isolated_markets, space)
	G.isolated_markets = []

	for (var s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== MARKET) continue
		check_and_mark_if_market_isolated(s)
	}
}

function is_action_phase()
{
	return G.action_round_subphase !== NOT_ACTION_PHASE
}


const RULE_UNFLAG_EUROPE        = "Unflagging in Europe only"
const RULE_NORTH_AMERICA        = "North America only"
const RULE_INDIA                = "India only"
const RULE_GERMAN_PRUSSIA_DUTCH = "German States, Prussia, or the Dutch Republic"
const RULE_EUROPE               = "Europe only"
const RULE_UNFLAG_MARKETS       = "Unflagging markets only"
const RULE_MARKET_MARKET        = "Flag markets next to a BR-flagged market"

const SHORT_UNFLAG_EUROPE       = "Unflag Europe"
const SHORT_NORTH_AMERICA       = "N. Amer"
const SHORT_INDIA               = "India"
const SHORT_GERMAN_PRUSSIA_DUTCH= "Ge/Pr/Du"
const SHORT_EUROPE              = "Europe"
const SHORT_UNFLAG_MARKETS      = "Unflag Mkts"
const SHORT_MARKET_MARKET       = "Flg Mkt near BR-Mkt"

// Returns a list of presently-active contingent action point rules for which the specified space *qualifies* under the specified type
function space_rules(s, type)
{
	let qualified_rules = []

	if ((s >= 0) && (type === space_action_type(s))) {
		for (let rule of active_rules()) {
			switch (rule) {
				case RULE_UNFLAG_EUROPE:
					if (data.spaces[s].region === REGION_EUROPE) {
						if (G.flags[s] !== NONE) {
							qualified_rules.push(rule)
						}
					}
					break
				case RULE_NORTH_AMERICA:
					if (data.spaces[s].region === REGION_NORTH_AMERICA) {
						qualified_rules.push(rule)
					}
					break
				case RULE_INDIA:
					if (data.spaces[s].region === REGION_INDIA) {
						qualified_rules.push(rule)
					}
					break
				case RULE_GERMAN_PRUSSIA_DUTCH:
					if ([ GERMAN_STATES_1, GERMAN_STATES_2, PRUSSIA_1, PRUSSIA_2, PRUSSIA_3, PRUSSIA_4, DUTCH_1, DUTCH_2 ].includes(s)) {
						qualified_rules.push(rule)
					}
					break
				case RULE_EUROPE:
					if (data.spaces[s].region === REGION_EUROPE) {
						qualified_rules.push(rule)
					}
					break
				case RULE_UNFLAG_MARKETS:
					if (G.flags[s] !== NONE) {
						qualified_rules.push(rule)
					}
					break
				case RULE_MARKET_MARKET: // Alberoni's Ambition -- flag markets next to a BR-flagged market
					if ((G.flags[s] === NONE) && (data.spaces[s].connects !== undefined))  {
						for (const s2 of data.spaces[s].connects) {
							if (data.spaces[s2].type !== MARKET) continue
							if (G.flags[s2] !== BRITAIN) continue
							qualified_rules.push(rule)
							break
						}
					}
					break
			}
		}
	}

	return qualified_rules
}


// Returns a list of all presently-active contingent action point rules
function active_rules() {
	let rules = []
	for (const contingency of G.action_points_contingent) {
		rules.push(contingency.rule)
	}
	return rules
}


// For one type of action points (ECON, DIPLO, MIL), add an amount of contingent points subject to a specific rule
function add_contingent(type, amount, rule, short) {
	let contingent = { "type": type, "amount": amount, "rule": rule, "short": short }
	G.action_points_contingent.push(contingent)
	log ("+" + amount + " " + data.action_points[type].name + " action point" + s(amount) + " (" + rule +")")
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

// Use up contingent action points matching a specific rule, to the extent available. Returns amount that wasn't satisfied from contingent points (still to be paid)
function use_contingent(amount, type, rule)
{
	for (let i = 0; i < G.action_points_contingent.length; i++) {
		if (G.action_points_contingent[i].type !== type) continue
		if (G.action_points_contingent[i].rule !== rule) continue
		if (G.action_points_contingent[i].amount <= 0) continue
		while ((amount > 0) && (G.action_points_contingent[i].amount > 0)) {
			amount--
			G.action_points_contingent[i].amount--
		}
	}

	return amount
}

// Adds unrestricted major action points of the specified type
function add_action_points(type, amount)
{
	G.action_points_major[type] += amount
	G.action_points_eligible[type] = true
	G.action_points_eligible_major[type] = true
	log ("+" + amount + " " + data.action_points[type].name + " action point" + s(amount))
}


// Active player has picked an investment tile.
function selected_a_tile(tile)
{
	advance_action_round_subphase(PICKED_TILE_OPTION_TO_PASS)

	log (((G.active === FRANCE ? "=fr" : "=br") + "Action Round " + G.round + " (" + data.flags[G.active].adj + ")"))
	log (data.flags[G.active].name + " selects investment tile: ");
	log (say_investment_tile(data.investments[tile].majorval + " " + data.action_points[data.investments[tile].majortype].name + " / " + data.investments[tile].minorval + " " + data.action_points[data.investments[tile].minortype].name, tile))
	var major = data.investments[tile].majorval

	//BR// Maybe we'll copy the "dagger" and "snake" icons the actual tiles use? But for now at least...
	if (major === 3) {
		log ("Event allowed")
	} else if (major === 2) {
		log ("Event allowed + Military Upgrade")
	}

	clear_dirty() // Clear highlights of opponent's previous round actions
	G.dirty_who = G.active

	G.played_event = -1 // Haven't played an event so far

	G.played_investments.push(tile)             //BR// We leave it in available_investments but mark it played
	G.played_tiles[G.active][G.round-1] = tile  //BR// Mark the tile we played, the round we played it
	G.played_tile = tile
	G.military_upgrade = major <= 2      // We get a military upgrade if we picked a tile w/ major action strength 2

	if (G.military_upgrade && (G.turn === PEACE_TURN_6)) {
		G.military_upgrade = false;
		log (data.flags[G.active].name + " gains " + say_spending("1 Treaty Point", G.active) + " for having a Military Upgrade symbol on Turn 6 (see 5.3.3).")
		add_treaty_points(G.active, 1)
	}

	// Major action point levels for the 3 types (ECON, DIPLO, MIL). We may get extra amounts from an event. Then we can increase our action points with debt/TRPs (but not in a category that is zero)
	G.action_points_major = [ 0, 0, 0 ]

	// Minor action point levels for the 3 types (ECON, DIPLO, MIL). We may get extra amounts from an event. Then we can increase our action points with debt/TRPs (but not in a category that is zero)
	G.action_points_minor = [ 0, 0, 0 ]

	G.action_points_major[data.investments[G.played_tile].majortype] = data.investments[G.played_tile].majorval
	G.action_points_minor[data.investments[G.played_tile].minortype] = data.investments[G.played_tile].minorval
	G.action_minor_type = data.investments[G.played_tile].minortype // Easier to remember

	// Bonus points (ECON, DIPLO, MIL) committed during the current specific action (e.g. a bonus military point for Choiseul)
	G.action_points_committed_bonus = [ 0, 0, 0 ]

	// Contingent action points (e.g. restricted to an area)
	G.action_points_contingent = []

	//TODO: ministries might increase our amounts right away

	/* Action point eligibility */

	// We're eligible for a class of action if we had at least 1 point of it.
	// This controls whether we're allowed to use this category at all.
	// Initially set to what our tile gives us, but event cards could add other categories
	// <br><b>
	// if (G.action_points_eligible[DIPLO]) ...
	G.action_points_eligible       = []

	// We're eligible for major action in an action point class if we had at least 1 point of major, either from our investment tile or from an event/ministry
	// <br><b>
	// if (G.action_points_eligible_major[ECON]) ...
	G.action_points_eligible_major = []
	for (var i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
		G.action_points_eligible[i]       = (G.action_points_major[i] > 0) || (G.action_points_minor[i] > 0)
		G.action_points_eligible_major[i] = (G.action_points_major[i] > 0)
	}

	// For each flavor of action points (though we only care about ECON and DIPLO), track how many different regions we've spent that flavor of points on during this tile.
	// This is for charging the "region switching" action point penalty
	// <br><b>
	// G.action_point_regions[ECON][...] </b> gets pushed all the regions we've spent ECON points in this round
	G.action_point_regions = [ [], [], [] ]
}

// Player is picking an investment tile
P.select_investment_tile = {
	_begin() {
		push_undo() // It was backing out from later points all the way to back to initiative?!
	},
	_resume() {
		log_box_end()
	},
	prompt() {
		V.prompt = say_action_header("ACTION ROUND " + G.round + ": ") + say_action("Select an investment tile or activate a minister.")
		for (var tile of G.available_investments) {
			if (G.played_investments.includes(tile)) continue
			action_investment(tile)
		}
		action_eligible_ministries()
	},
	investment(tile) {
		push_undo()
		selected_a_tile(tile)
		end()
	},
	ministry_card(m) {
		push_undo()
		handle_ministry_card_click(m)
	},
}


// Player selects an event card to play
function handle_event_card_click(c) {
	G.played_event = c
	G.action_header = "PLAY EVENT: "

	if (data.cards[c].action !== WILD) {
		if (data.cards[c].action !== data.investments[G.played_tile].majortype) {
			if (has_ministry(R, BANK_OF_ENGLAND) && (data.cards[c].action === ECON) && !is_ministry_exhausted(R, BANK_OF_ENGLAND, 1)) {
				exhaust_ministry(R, BANK_OF_ENGLAND, 1)
			} else {
				console.error("Mismatched event play allowed without use of Bank of England ministry: " + data.cards[c].name)
			}
		}
	}

	if (data.investments[G.played_tile].majorval > 3) {
		if (has_ministry(R, MARQUIS_DE_CONDORCET) && !is_ministry_exhausted(R, MARQUIS_DE_CONDORCET)) {
			exhaust_ministry(R, MARQUIS_DE_CONDORCET)
		} else {
			console.error("Allowed play of event without an event symbol on investment tile")
		}
	}

	//if ((data.cards[c].action === WILD) || (data.cards[c].action === data.investments[G.played_tile].majortype) ||
	//	(has_ministry(R, BANK_OF_ENGLAND) && (data.cards[c].action === ECON))) {
		//action_event_card(c)
	//}

	call ("event_flow")
}

function begin_event_play(c) {
	advance_action_round_subphase(DURING_EVENT)
	G.played_events.push(c)
	array_delete_item(G.hand[R], c)

	let msg = ""
	if (G.qualifies_for_bonus) {
		msg += "EVENT (with Bonus)"
	} else if (G.card_has_bonus) {
		msg += "EVENT (no Bonus)"
	} else {
		msg += "EVENT"
	}
	msg += "\n" + say_event(c, R, true)

	log_box_begin(R, msg, LOG_BOX_EVENT)
}


function end_event_play(c)
{
	advance_action_round_subphase(BEFORE_SPENDING_ACTION_POINTS)
	G.action_header = ""
	log_box_end(LOG_BOX_EVENT)
}


function check_event_bonus_requirements(who) {
	// True if the event card played this turn has a bonus available on it
	G.card_has_bonus         = false

	// True if we qualified for the bonus on the played event card
	G.qualifies_for_bonus    = false

	// If there's a ministry the player needs to flip in order to gain an event bonus or ministry discount, it is identified here by "m" value
	G.needs_to_flip_ministry = -1

	let keyword = data.cards[G.played_event].keyword
	if (keyword !== KEYWORD_NONE) {
		G.card_has_bonus = true
		if (has_active_keyword(who, keyword)) {
			G.qualifies_for_bonus = true
		} else if (has_keyword(who, keyword)) {
			G.needs_to_flip_ministry = get_minister_for_keyword(who, keyword)
		}
	}

	if ([INTEREST_PAYMENTS, MILITARY_SPENDING_OVERRUNS, WEST_AFRICAN_GOLD_MINING, LA_GABELLE].includes(G.played_event)) {
		G.card_has_bonus = true
		G.qualifies_for_bonus = available_debt(who) > available_debt(1 - who)     // "You have more Available Debt than your opponent"
	}

	if ([DEBT_CRISIS, EUROPEAN_PANIC].includes(G.played_event)) {
		G.card_has_bonus = true
		G.qualifies_for_bonus = available_debt(who) > available_debt(1 - who) + 2 // "You have at least 3 more Available Debt than your opponent"
	}

	if ([CARIBBEAN_SLAVE_UNREST, HAITIAN_REVOLUTION].includes(G.played_event)) {
		G.card_has_bonus = true
		if (G.turn < PEACE_TURN_6) {
			var tiles = [ 0, 0 ]
			for (let whom = FRANCE; whom <= BRITAIN; whom++) {
				for (let theater = 0; theater <= data.wars[G.next_war].theaters; theater++) { //NB intentionally from 0 to theaters, inclusive
					tiles[whom] += G.theater_bonus_war_tiles[whom][theater]
				}
			}

			G.qualifies_for_bonus = tiles[who] > tiles [1 - who] // "More total Bonus War Tiles in next War"
		}
		else {
			G.qualifies_for_bonus = false // There IS no next war
		}
	}

	if (G.played_event === ACTS_OF_UNION) {
		G.card_has_bonus = true
		var prestige = [ ]
		for (let whom = FRANCE; whom <= BRITAIN; whom++) {
			prestige[whom] = ((G.flags[IRELAND_2] === whom) ? 1 : 0) + ((G.flags[SCOTLAND_2] === whom) ? 1 : 0)
		}
		G.qualifies_for_bonus = prestige[who] > prestige[1 - who] // "More Prestige spaces in Scotland and Ireland"
	}

	if (G.played_event === FALKLANDS_CRISIS) {
		G.qualifies_for_bonus = has_advantage(who, MEDITERRANEAN_INTRIGUE) // "Mediterranean Intrigue"
	}

	G.qualifies_for_bonus = true // Uncomment for testing //TODO comment back out!!!
}

P.event_flow = script (`
    if (data.investments[G.played_tile].majorval > 3) {
        eval {
        	require_ministry_unexhausted(R, MARQUIS_DE_CONDORCET, "Required to play event with a non-event Investment Tile")
        }
        if (!G.has_required_ministry) {
        	eval { pop_undo() } 
        	return
		}
    }

    if ((data.cards[G.played_event].action !== WILD) && (data.cards[G.played_event].action !== data.investments[G.played_tile].majortype)) {
        eval {
        	require_ministry_unexhausted(R, BANK_OF_ENGLAND, "Required to play an economic event without an economic major action", 1)
        }
        if (!G.has_required_ministry) {
        	eval { pop_undo() }
        	return
		}
    }
    
    eval {
    	check_event_bonus_requirements(R)
    }
    
    if (G.needs_to_flip_ministry >= 0) {
    	eval {
    		require_ministry(R, G.needs_to_flip_ministry, "To unlock bonus keyword: " + data.keywords[data.cards[G.played_event].keyword].name, true)    		
    	}
    	
    	eval {
	    	check_event_bonus_requirements(R) // Re-evaluate if we now qualify for the bonus	    	
    	}
    }
    
    eval { 
    	begin_event_play(G.played_event) 
    }
    
    // Here we branch to an unholy number of possible events 
	if (data.cards[G.played_event].proc !== undefined) {
		call (data.cards[G.played_event].proc)
		eval { end_event_play(G.played_event) }
		return
	} 
				 		
    call event_not_implemented
    eval { end_event_play(G.played_event) }
`)


function event_prompt(who, c, string1, string2 = "", even_if_no_bonus = false) {
	var header = say_event(c, -1, true) + ": "

	var prompt = ""
	if ((string2 === "") || (string2 === null) || (!G.qualifies_for_bonus && !even_if_no_bonus)) {
		prompt += string1 + "."
	}
	else if (string1 === null) {
		prompt += string2 + "."
	}
	else {
		prompt += strike(string1, false)
		prompt += " AND "
		prompt += strike(string2, false)
		prompt += "."
	}
	return bold(header) + say_action(prompt)
}


P.event_not_implemented = {
	prompt() {
		let msg = "Event not yet implemented."
		V.prompt = event_prompt(R, G.played_event, msg)
		button ("pass")
	},
	pass() {
		push_undo()
		end()
	}
}

function carnatic_conflicts(who) {
	let alliances = 0
	for (let s = data.regions[REGION_INDIA].first_space; s < data.regions[REGION_INDIA].first_space + data.regions[REGION_INDIA].spaces; s++) {
		if (data.spaces[s].type !== POLITICAL) continue
		if (G.flags[s] !== who) continue
		alliances++
	}
	return alliances
}

// "Place 1 Conflict marker in India for each Local Alliance you control there. BONUS: Damage an enemy Fort or shift a Cotton market in India."
P.event_carnatic_war = {
	_begin() {
		L.conflicts_placed = 0     // Progress trackers
		L.done_bonus       = false
		L.cant_do_bonus    = false
		L.space            = -1
		L.deciding         = false // Unfortunately "cotton markets in India" can qualify for both parts of the event, meaning player needs to decide which when clicking on them
	},
	prompt() {
		if (L.deciding) {
			V.prompt = event_prompt(R, G.played_event, "Choose shift market or place conflict marker for " + data.spaces[L.space].name)
			button("shift_market")
			button("place_conflict_marker")
		} else {
			var any_conflictable = false
			for (let s = data.regions[REGION_INDIA].first_space; s < data.regions[REGION_INDIA].first_space + data.regions[REGION_INDIA].spaces; s++) {
				if (!can_have_conflict_marker(s)) continue
				if (has_conflict_marker(s)) continue
				if (L.conflicts_placed < carnatic_conflicts(R)) {
					action_space(s)
				}
				any_conflictable = true
			}

			let gauge = any_conflictable ? L.conflicts_placed + "/" + carnatic_conflicts(R) : "DONE"
			V.prompt = event_prompt(R, G.played_event, "Place conflict markers in India (" + gauge + ")", "damage an enemy fort or shift a Cotton market in India")

			var any_damageable = false
			if (G.qualifies_for_bonus && !L.done_bonus && !L.cant_do_bonus) {
				for (let s = data.regions[REGION_INDIA].first_space; s < data.regions[REGION_INDIA].first_space + data.regions[REGION_INDIA].spaces; s++) {
					if ((data.spaces[s].type === MARKET) && (data.spaces[s].market === COTTON)) {
						if (G.flags[s] !== R) {
							action_space(s, INCLUDE_CONFLICT)
							any_damageable = true
						}
					}
					if (data.spaces[s].type === FORT) {
						if ((G.flags[s] === 1 - R) && !is_damaged_fort(s)) {
							action_space(s)
							any_damageable = true
						}
					}
				}
				if (!any_damageable) L.cant_do_bonus = true
			}

			if ((!any_conflictable || (L.conflicts_placed >= carnatic_conflicts(R))) && !any_damageable) {
				V.prompt = event_prompt(R, G.played_event, "Done")
				button("done")
			}
		}
	},
	conflict(s) {
		this.space(s)
	},
	space(s) {
		push_undo()
		L.space = s
		// This first horrible "if" detects if the space qualifies under *both* the regular condition *and* the bonus condition, in a situation when the player is presently entitled to do either and hasn't used up quota of either
		if (can_have_conflict_marker(s) && !has_conflict_marker(s) && (L.conflicts_placed < carnatic_conflicts(R)) &&
			G.qualifies_for_bonus && !L.done_bonus && !L.cant_do_bonus && (data.spaces[s].type === MARKET) && (data.spaces[s].market === COTTON) && (G.flags[s] !== R)) {
			L.deciding = true
		} else if ((can_have_conflict_marker(s) && !has_conflict_marker(s)) && (L.conflicts_placed < carnatic_conflicts(R))) {
			set_conflict_marker(s)
			L.conflicts_placed++
		} else if ((data.spaces[s].type === MARKET) && (data.spaces[s].market === COTTON) && (G.flags[s] !== R)) {
			reflag_space(s, (G.flags[s] === NONE) ? G.active : NONE)
			L.done_bonus = true
		} else if ((data.spaces[s].type === FORT) && (G.flags[s] === 1 - R) && !is_damaged_fort(s)) {
			set_damaged_fort(s, true)
			L.done_bonus = true
		}
	},
	place_conflict_marker() {
		push_undo()
		set_conflict_marker(L.space)
		L.conflicts_placed++
		L.deciding = false
	},
	shift_market() {
		push_undo()
		reflag_space(L.space, (G.flags[L.space] === NONE) ? G.active : NONE)
		L.done_bonus = true
		L.deciding = false
	},
	done() {
		push_undo()
		end()
	}
}



// BR: 1 Diplo (unflagging in Europe only), Bonus: Score 2 VP
// FR: 2 Diplo. Bonus: Unflag a political space in Europe (not in Spain or Austria)
P.event_acts_of_union = {
	_begin() {
		if (R === BRITAIN) {
			log ("+1 Diplomatic point (unflagging in Europe only)")
			add_contingent(DIPLO, 1, RULE_UNFLAG_EUROPE, SHORT_UNFLAG_EUROPE)
			if (G.qualifies_for_bonus) {
				award_vp(BRITAIN, 2, false, "Event Bonus")
			}
		} else {
			add_action_points(DIPLO, 2)
		}
	},
	prompt() {
		if (R === BRITAIN) {
			V.prompt = event_prompt(R, G.played_event, "Confirm event play to gain unflag-in-Europe action", "score 2 VP")
			button("confirm")
		} else if (!G.qualifies_for_bonus) {
			V.prompt = event_prompt(R, G.played_event, "Confirm event play to gain 2 diplomatic points.")
			button("confirm")
		} else {
			V.prompt = event_prompt(R, G.played_event, "Unflag a political space in Europe (not in Spain or Austria)")
			let any = false
			for (let s = 0; s < NUM_SPACES; s++) {
				if (data.spaces[s].region !== REGION_EUROPE) continue
				if (data.spaces[s].type !== POLITICAL) continue
				if ((s >= SPAIN_1) && (s <= SPAIN_4)) continue
				if ((s >= AUSTRIA_1) && (s <= AUSTRIA_4)) continue
				if (G.flags[s] !== 1 - R) continue // It's "unflag" which means it can't be a friendly flag
				action_space(s)
				any = true
			}
			if (!any) {
				V.prompt = event_prompt(R, G.played_event, "Confirm event play to gain 2 diplomatic points. No bonus possible, no spaces available to unflag.")
				button("confirm")
			}
		}
	},
	space(s) {
		push_undo()
		reflag_space(s, NONE)
	},
	confirm() {
		push_undo()
		end()
	}
}


// Remove 1 enemy flag, then 1 friendly flag, from Markets in the Caribbean. Bonus: Remove an additional enemy flag from a Market in the Caribbean
P.event_tropical_diseases = {
	_begin() {
		L.enemy_done    = 0
		L.enemy_to_do   = 1 + (G.qualifies_for_bonus ? 1 : 0)
		L.friendly_done = 0
	},
	prompt() {
		let any_friendly = false
		let any_enemy = false
		for (let s = 0; s < NUM_SPACES; s++) {
			if (data.spaces[s].region !== REGION_CARIBBEAN) continue
			if (data.spaces[s].type !== MARKET) continue
			if (G.flags[s] === R) {
				any_friendly = true
				if (L.friendly_done === 0) action_space(s)
			} else if (G.flags[s] === 1 - R) {
				any_enemy = true
				if (L.enemy_done < L.enemy_to_do) action_space(s)
			}
		}
		let gauge = ((any_enemy || (L.enemy_done >= L.enemy_to_do)) ? L.enemy_done + "/" + L.enemy_to_do : "DONE")
		let gauge2 = ((any_friendly || (L.friendly_done > 0)) ? L.friendly_done + "/1" : "DONE")
		V.prompt = event_prompt(R, G.played_event, "Remove " + L.enemy_to_do + " enemy flag" + s(L.enemy_to_do) + " from " + ((L.enemy_to_do !== 1) ? "markets" : "a market") + " in the Caribbean " + parens(gauge), "remove 1 friendly flag from a market in the Caribbean " + parens(gauge2), true)

		if (!any_enemy || (L.enemy_done >= L.enemy_to_do)) {
			if (!any_friendly || (L.friendly_done > 0)) {
				button ("done")
			}
		}
	},
	space(s) {
		push_undo()

		if (G.flags[s] === R) {
			L.friendly_done++
		} else if (G.flags[s] === 1 - R) {
			L.enemy_done++
		}

		reflag_space(s, NONE)

		if ((L.friendly_done > 0) && (L.enemy_done >= L.enemy_to_do)) {
			end()
		}
	},
	done() {
		push_undo()
		end()
	}
}


function apply_south_sea_bonus()
{
	log ("Bonus: -2 military cost of next squadron constructed this round")
	set_transient(R, TRANSIENT_SOUTH_SEA_SQUADRON_DISCOUNT)
}


// Unflag a Market whose removal does not Isolate any other Markets. Bonus: -2 Mil to construct a new Squadron this AR (This can result in the Construct Squadron action costing 0 Mil)
P.event_south_sea_speculation = {
	_begin() {
		L.unflagged = false
	},
	prompt() {
	    if (!L.unflagged) {
			V.prompt = event_prompt(R, G.played_event, "Unflag a market whose removal does not isolate any other markets")

			let any = false
			for (let s = 0; s < NUM_SPACES; s++) {
				if (data.spaces[s].type !== MARKET) continue
				if (G.flags[s] !== 1 - R) continue

				let okay = true
				for (const s2 of data.spaces[s].connects) {
					if (data.spaces[s2].type !== MARKET) continue
					if (G.flags[s2] !== 1 - R) continue

					if (check_if_market_isolated(s2)) continue // If connected market is *already* isolated, then removing target flag by definition doesn't *cause* it to become isolated

					G.flags[s] = NONE // temporarily unflag our target space
					let now_isolated = check_if_market_isolated(s2) // check if it isolates this adjacent space
					G.flags[s] = 1 - R // set target space back

					if (now_isolated) {
						okay = false
						break
					}
				}

				if (okay) {
					action_space(s)
					any = true
				}
			}

			if (!any) {
				V.prompt = event_prompt(R, G.played_event, "Unflag a market whose removal does not isolate any other markets (None Possible)")
				button("done")
			}
		} else if (G.qualifies_for_bonus) {
			V.prompt = event_prompt(R, G.played_event, "-2 military cost to construct a squadron this action round (you may construct immediately or pass until later in the round)")
			if (action_points_eligible(MIL, active_rules())) button("construct_squadron_now")
			button("defer")
		}
	},
	space(s) {
		push_undo()
		reflag_space(s, NONE)
		L.unflagged = true
		if (G.qualifies_for_bonus) {
			apply_south_sea_bonus()
		} else {
			end()
		}
	},
	construct_squadron_now() {
		push_undo()
		advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)
		action_cost_setup(-1, MIL)
		G.action_string = "to construct a squadron"
		G.action_header = "CONSTRUCT SQUADRON: "
		G.prepicked_ministry = -1
		G.prepicked_advantage = -1
		goto ("construct_squadron_flow")
	},
	done() {
		push_undo()
		if (L.unflagged) {
			end()
		} else {
			L.unflagged = true
			if (G.qualifies_for_bonus) {
				apply_south_sea_bonus()
			} else {
				end()
			}
		}
	},
	defer() {
		push_undo()
		end()
	}
}


// BR: Reduce your Debt by 2. Bonus: Add 1 FR Debt.
// FR: Place a conflict marker in a BR-flagged Market in the Caribbean. Bonus: 1 Diplo
P.event_war_of_jenkins_ear = {
	_begin() {
		if (R === BRITAIN) {
			reduce_debt(BRITAIN, 2)
			if (G.qualifies_for_bonus) increase_debt(FRANCE, 1)
			L.finished = true
		} else {
			L.conflicts_placed = 0
			L.finished = false
			L.doing_bonus = false
		}
	},
	prompt() {
		if (R === BRITAIN) {
			V.prompt = event_prompt(R, G.played_event, "British debt reduced", "French debt increased")
			button("done")
		} else {
			if ((L.conflicts_placed <= 0) && !L.doing_bonus) {
				let msg = "Place a conflict marker in a BR-flagged market in the Caribbean"
				let any = false
				for (let s = 0; s < NUM_SPACES; s++) {
					if (data.spaces[s].region !== REGION_CARIBBEAN) continue
					if (data.spaces[s].type !== MARKET) continue
					if (has_conflict_marker(s)) continue
					if (G.flags[s] !== BRITAIN) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button ("done")
				}
				V.prompt = event_prompt(R, G.played_event, msg)
			} else {
				V.prompt = event_prompt (R, G.played_event, "+1 Diplomatic action point")
				button ("done")
			}
		}
	},
	space(s) {
		push_undo()
		set_conflict_marker(s)
		L.conflicts_placed++
	},
	done() {
		push_undo()
		if (!L.finished && !L.doing_bonus && G.qualifies_for_bonus) {
			L.doing_bonus = true
		} else {
			if ((R === FRANCE) && G.qualifies_for_bonus) {
				add_action_points(DIPLO, 1)
			}
			end()
		}
	}
}


// BR: Shift a local alliance in North America. Bonus: Immediately activate an advantage you control in North America (ignoring Exhaustion)
// FR: 2 Econ (North America only). Bonus: Unflag a Local Alliance in North America.
P.event_native_american_alliances = {
	_begin() {
		L.done_alliance = false
		L.done_action_points = false
	},
	prompt() {
		if (R === BRITAIN) {
			if (!L.done_alliance) {
				let msg = "Shift a local alliance in North America"
				let any = false
				for (let s = 0; s < NUM_SPACES; s++) {
					if (data.spaces[s].region !== REGION_NORTH_AMERICA) continue
					if (data.spaces[s].type !== POLITICAL) continue
					if (data.spaces[s].era > current_era()) continue // Some diplomatic spaces are era-locked
					if (((s === USA_1) || (s === USA_2)) && !G.usa_flags) continue // USA flags only if USA exists
					if (G.flags[s] === R) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
				V.prompt = event_prompt(R, G.played_event, msg)
			} else {
				let msg = "Immediately activate an advantage you control in North America, ignoring exhaustion"
				let any = false
				for (let a of [ ALGONQUIN_RAIDS, FUR_TRADE, IROQUOIS_RAIDS, PATRIOT_AGITATION, WHEAT ]) {
					if (!has_advantage_eligible(R, a, true)) continue
					action_advantage(a)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				} else {
					button("pass") //BR// Among other things, we might have an advantage that is available but doesn't have any valid targets, so the activation will fail and player will have to undo back to here (and needs a way out of the flow)
				}
				V.prompt = event_prompt(R, G.played_event, msg)
			}
		} else {
			if (!L.done_action_points) {
				V.prompt = "+2 Economic action points in North America only"
				button("done")
			} else {
				let msg = "Unflag a local alliance in North America"
				let any = false
				for (let s = 0; s < NUM_SPACES; s++) {
					if (data.spaces[s].region !== REGION_NORTH_AMERICA) continue
					if (data.spaces[s].type !== POLITICAL) continue
					if (G.flags[s] !== 1 - R) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
				V.prompt = event_prompt(R, G.played_event, msg)
			}
		}
	},
	space(s) {
		push_undo()
		if (G.flags[s] === NONE) {
			reflag_space(s, R)
		} else {
			reflag_space(s, NONE)
		}
		L.done_alliance = true
		if (R === BRITAIN) {
			if (!G.qualifies_for_bonus) end()
		} else {
			end()
		}
	},
	advantage(a) {
		push_undo()
		G.active_advantage = a
		G.advantages_used_this_round++
		G.advantage_already_exhausted = false
		goto ("advantage_flow")
	},
	pass() {
		push_undo()
		end()
	},
	done() {
		push_undo()
		if (R === BRITAIN) {
			if (L.done_alliance || !G.qualifies_for_bonus) {
				end()
			} else {
				L.done_alliance = true
			}
		} else {
			if (L.done_action_points || !G.qualifies_for_bonus) {
				end()
			} else {
				add_contingent(ECON, 2, RULE_NORTH_AMERICA, SHORT_NORTH_AMERICA)
				L.done_action_points = true
			}
		}
	},
}


// BR: Place one Conflict marker in Spain. Bonus: Remove a FR Bonus War tile from the next War (returning it to their pool)
// FR: Unflag a space in the Dutch Republic. Bonus: 2 Diplo or 2 Econ in India
P.event_austro_spanish_rivalry = {
	_begin() {
		if (R === BRITAIN) {
			L.conflicts_placed = 0
			L.picked_bonus_tile = -1
			L.theater = 0
		} else {
			L.unflagged = 0
		}
	},
	prompt() {
		if (R === BRITAIN) {
			let msg = ""
			if (!L.conflicts_placed) {
				msg = "Place 1 conflict marker in Spain"
				let any = false
				for (let s of [ SPAIN_1, SPAIN_2, SPAIN_3, SPAIN_4] ) {
					if (has_conflict_marker(s)) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
			} else if (L.theater <= 0) {
				msg  = "Remove a French bonus war tile from the next war, returning it to their pool"
				let any= false
				for (let theater = 1; theater <= data.wars[G.next_war].theaters; theater++) { // 1 through theaters inclusive is correct
					if (G.theater_bonus_war_tiles[FRANCE][theater].length < 1) continue;
					any = true
					action_theater(theater)
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
			} else {
				msg = "Confirm removal of French bonus tile from theater " + L.theater + ": " + data.wars[G.next_war].theater_names[L.theater] + "? (CANNOT BE UNDONE!)"
				button("confirm")
			}
			V.prompt = event_prompt(R, G.played_event, msg)
		} else {
			let msg = ""
			if (!L.unflagged) {
				msg = "Unflag a space in the Dutch Republic"
				let any = false
				for (let s of [DUTCH_1, DUTCH_2]) {
					if (G.flags[s] !== 1 - R) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
			} else {
				msg = "Choose +2 Diplomatic or +2 Economic action points in India"
				button ("diplomatic2")
				button ("economic2")
			}
			V.prompt = event_prompt(R, G.played_event, msg)
		}
	},
	space(s) {
		push_undo()
		if (R === BRITAIN) {
			set_conflict_marker(s)
			L.conflicts_placed++
			if (!G.qualifies_for_bonus) end()
		} else {
			reflag_space(s, NONE)
			L.unflagged++
			if (!G.qualifies_for_bonus) end()
		}
	},
	theater(t) {
		push_undo()
		L.theater = t
	},
	confirm() {
		clear_undo() // No going back once we've effectively revealed a war tile

		log ("French bonus war tile removed from theater " + L.theater + ": " + data.wars[G.next_war].theater_names[L.theater])

		// Randomize the choice without disrupting owner's present tile order
		let choices = G.theater_basic_war_tiles[1 - G.active][L.theater].slice()
		shuffle(choices)

		L.picked_bonus_tile = choices[0]
		array_delete_item(G.theater_basic_war_tiles[1 - G.active][L.theater], L.picked_bonus_tile)
		G.bonus_war_tiles[1 - G.active].push(L.picked_bonus_tile)
		shuffle(G.bonus_war_tiles[1 - G.active])
		end()
	},
	diplomatic2() {
		push_undo()
		add_contingent(DIPLO, 2, RULE_INDIA, SHORT_INDIA)
		end()
	},
	economic2() {
		push_undo()
		add_contingent(ECON, 2, RULE_INDIA, SHORT_INDIA)
		end()
	},
	done() {
		push_undo()
		if (R === BRITAIN) {
			if (!L.conflicts_placed) {
				L.conflicts_placed++
				if (!G.qualifies_for_bonus) end()
			} else {
				end()
			}
		} else {
			end()
		}
	}
}

// Reduce your debt by 2. Bonus: Reduce your debt by an additional 1.
// If you are unable to reduce debt, you make take 1 Econ for each debt reduction not taken.
P.event_tax_reform = {
	_begin() {
		L.reduction_amount = G.qualifies_for_bonus ? 3 : 2
		if (L.reduction_amount <= G.debt[R]) {
			L.economic_points = 0
		} else {
			L.economic_points  = L.reduction_amount - G.debt[R]
			L.reduction_amount = G.debt[R]
		}
	},
	prompt() {
		let msg = ""
		if (L.reduction_amount === 0) {
			msg = "Confirm award of +" + L.economic_points + " Economic action points in lieu of debt reduction"
		} else if (L.economic_points === 0) {
			msg = "Confirm debt reduction of " + L.reduction_amount
		} else {
			msg = "Confirm debt reduction of " + L.reduction_amount + " and +" + L.economic_points + " Economic action point" + s(L.economic_points)
		}
		V.prompt = event_prompt(R, G.played_event, msg)
		button ("confirm")
	},
	confirm() {
		push_undo()
		if (L.reduction_amount > 0) reduce_debt(R, L.reduction_amount)
		if (L.economic_points > 0) add_action_points(ECON, L.economic_points)
		end()
	}
}


function score_northern_war()
{
	if ((G.flags[GERMAN_STATES_1] === BRITAIN) && (G.flags[GERMAN_STATES_2] === BRITAIN)) {
		award_vp(BRITAIN, 2, false, "German States all BR-flagged")
	}
}


// BR: Shift a politicial space in the German States. If both are now BR-flagged, score 2 VP. Bonus: 1 Diplo
// FR: Shift Russia. If it's already FR-flagged, score 2 VP instead. Bonus: 1 Diplo
P.event_great_northern_war = {
	_begin() {
		L.shifted_space = false
	},
	prompt() {
		let msg = ""
		if (R === BRITAIN) {
			if (!L.shifted_space) {
				msg = "Shift a political space in the German States. If both are now BR-flagged, score 2 VP"
				let any = false
				for (let s of [ GERMAN_STATES_1, GERMAN_STATES_2 ]) {
					if (G.flags[s] === BRITAIN) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (Both spaces already BR-flagged)"
					button("done")
				}
			} else {
				msg = "Bonus: +1 Diplomatic action point"
				button("done")
			}
		} else {
			if (!L.shifted_space) {
				msg = "Shift Russia. If it's already FR-flagged, score 2 VP instead"
				if (G.flags[RUSSIA] === FRANCE) {
					msg += " (Already FR-flagged)"
					button("done")
				} else {
					action_space(RUSSIA)
					button("done")
				}
			} else {
				msg = "Bonus: +1 Diplomatic action point"
				button("done")
			}
		}
		V.prompt = event_prompt(R, G.played_event, msg)
	},
	space(s) {
		push_undo()
		if (R === BRITAIN) {
			L.shifted_space = true
			if (G.flags[s] === NONE) {
				reflag_space(s, BRITAIN)
			} else {
				reflag_space(s, NONE)
			}
			score_northern_war()
			if (!G.qualifies_for_bonus) end()
		} else {
			L.shifted_space = true
			if (G.flags[RUSSIA] === NONE) {
				reflag_space(RUSSIA, FRANCE)
			} else {
				reflag_space(RUSSIA, NONE)
			}
			if (!G.qualifies_for_bonus) end()
		}
	},
	done() {
		push_undo()
		if (R === BRITAIN) {
			if (!L.shifted_space) {
				L.shifted_space = true
				score_northern_war()
				if (!G.qualifies_for_bonus()) end()
			} else {
				add_action_points(DIPLO, 1)
				end()
			}
		} else {
			if (!L.shifted_space) {
				L.shifted_space = true
				if (G.flags[RUSSIA] === FRANCE) {
					award_vp(FRANCE, 2, false, "Russia already FR-flagged")
				} else if (G.flags[RUSSIA] === NONE) {
					reflag_space(RUSSIA, FRANCE)
				} else {
					reflag_space(RUSSIA, NONE)
				}
				if (!G.qualifies_for_bonus) end()
			} else {
				add_action_points(DIPLO, 1)
				end()
			}
		}
	}
}


function score_vatican_politics() {
	let any = false
	for (let s of [ SPAIN_1, SPAIN_2, SPAIN_3, SPAIN_4, AUSTRIA_1, AUSTRIA_2, AUSTRIA_3, AUSTRIA_4 ]) {
		if (G.flags[s] !== BRITAIN) continue
		any = true
		break
	}

	if (!any) {
		award_vp(FRANCE, 2, false, "No BR flags in Spain or Austria")
	}
}

// BR: 2 Diplo (must be spent in the German States, Prussia, or the Dutch Republic). Bonus: 1 Diplo (Europe)
// FR: Shift any Spain or Austria space. Bonus: If there are no BR flags in Spain and Austria, score 2 VP.
P.event_vatican_politics = {
	_begin() {
		L.shifted_space = false
	},
	prompt() {
		if (R === BRITAIN) {
			V.prompt = event_prompt(R, G.played_event, "+2 Diplomatic action points (German States, Prussia, Dutch Republic)", "+1 Diplomatic action point (Europe)")
			button ("done")
		} else {
			if (!L.shifted_space) {
				V.prompt = event_prompt(R, G.played_event, "Shift any Spain or Austria space", "if there are afterwards no BR flags in Spain and Austria, score 2 VP")
				let any = false
				for (let s of [ SPAIN_1, SPAIN_2, SPAIN_3, SPAIN_4, AUSTRIA_1, AUSTRIA_2, AUSTRIA_3, AUSTRIA_4 ]) {
					if (G.flags[s] === FRANCE) continue // already friendly flagged
					action_space(s)
					any = true
				}
				if (!any) {
					V.prompt = event_prompt(R, G.played_event, "No Spain or Austria spaces remain to be shifted", "score 2 VP for no BR flags in the region")
					button("done")
				}
			}
		}
	},
	space(s) {
		push_undo()
		if (G.flags[s] === NONE) {
			reflag_space(s, FRANCE)
		} else {
			reflag_space(s, NONE)
		}
		if (G.qualifies_for_bonus) {
			score_vatican_politics()
		}
		end()
	},
	done() {
		push_undo()
		if (R === BRITAIN) {
			add_contingent(DIPLO, 2, RULE_GERMAN_PRUSSIA_DUTCH, SHORT_GERMAN_PRUSSIA_DUTCH)
			if (G.qualifies_for_bonus) add_contingent(DIPLO, 1, RULE_EUROPE, SHORT_EUROPE)
			end()
		} else {
			if (G.qualifies_for_bonus) score_vatican_politics()
			end()
		}
	}
}


// BR: 2 Econ (must be used to unflag markets). Bonus: You may score Cotton (as if in Global Demand)
// FR: Unflag a Cotton Market. Bonus: Move a BR Squadron from the map to the Navy Box.
P.event_calico_acts = {
	_begin() {
		L.unflagged_markets = false
	},
	prompt() {
		let msg = ""
		if (R === BRITAIN) {
			if (!L.unflagged_markets) {
				msg = "+2 Economic action points; must be used to unflag markets"
				button("done")
			} else {
				msg = "You may score Cotton (as if in Global Demand)"
				button("scorecotton")
				button("pass")
			}
		} else {
			if (!L.unflagged_markets) {
				msg = "Unflag a Cotton market"
				let any = false
				for (let s = 0; s < NUM_SPACES; s++) {
					if (data.spaces[s].type !== MARKET) continue
					if (data.spaces[s].market !== COTTON) continue
					if (G.flags[s] !== 1 - R) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
			} else {
				msg = "Move a British squadron from the map to the Navy Box"
				let any = false
				for (let s = 0; s < NUM_SPACES; s++) {
					if (data.spaces[s].type !== NAVAL) continue
					if (G.flags[s] !== 1 - R) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
			}
		}
		V.prompt = event_prompt(R, G.played_event, msg)
	},
	space(s) {
		push_undo()
		if (!L.unflagged_markets) {
			L.unflagged_markets = true
			reflag_space(s, NONE)
			if (!G.qualifies_for_bonus) end()
		} else {
			reflag_space (s, NONE, true)
			G.navy_box[BRITAIN]++

			let msg = data.flags[G.active].adj + " player moves British squadron from " + data.spaces[s].name + " to Navy Box."
			log (msg)

			log (say_navy_box())

			end()
		}
	},
	scorecotton() {
		push_undo()

		//TODO possibly have a function for this, once the rest of scoring is more solidified
		log ("Scoring: COTTON")
		let winner = demand_flag_winner(COTTON)
		if (winner !== NONE) {
			let vp = data.demands[COTTON].awards[current_era()].vp
			let trp = data.demands[COTTON].awards[current_era()].trp
			let debt = data.demands[COTTON].awards[current_era()].debt

			log ("  Winner: " + data.flags[winner].name)
			if (vp > 0) log ("  VP: +" + vp)
			if (trp > 0) log ("  TRP: +" + trp)
			if (debt > 0) log ("  Debt: +" + debt)
			if (debt < 0) log ("  Debt: " + debt)

			award_vp(winner, vp)
			add_treaty_points(winner, trp)
			if (debt < 0) {
				reduce_debt(winner, Math.abs(debt))
			} else if (debt > 0) {
				increase_debt(winner, debt)
			}
		} else {
			log ("  Winner: NONE")
		}
		end()
	},
	done() {
		push_undo()
		if (R === BRITAIN) {
			L.unflagged_markets = true
			add_contingent(ECON, 2, RULE_UNFLAG_MARKETS, SHORT_UNFLAG_MARKETS)
			if (!G.qualifies_for_bonus) end()
		} else {
			if (!L.unflagged_markets) {
				L.unflagged_markets = true
				if (!G.qualifies_for_bonus) end()
			} else {
				end()
			}
		}
	},
	pass() {
		push_undo()
		log("British player decides NOT to score Cotton.")
		end()
	}
}


P.event_military_spending_overruns = {
	prompt() {
		V.prompt = event_prompt(R, G.played_event, "Confirm opponent to damage a fort, remove a squadron, or remove a bonus war tile" + (G.qualifies_for_bonus ? " (x2)" : "") + " (CANNOT BE UNDONE!)")
		button("confirm")
	},
	confirm() {
		push_undo() // Just going to get cleared anyway?
		G.active = 1 - R
		goto ("do_military_spending_overruns")
	}
}

// Your opponent must damage a fort, remove a squadron (to Navy Box), or remove a Bonus War Tile from the next war (returning it to their pool). Bonus: Your opponent must do so again (does not have to be the same choice)
P.do_military_spending_overruns = {
	_begin() {
		L.removals_done = 0
		L.removals_required = 1 + (G.qualifies_for_bonus ? 1 : 0)
	},
	prompt() {
		let any = false
		for (let s = 0; s < NUM_SPACES; s++) {
			if (G.flags[s] !== G.active) continue
			if ((data.spaces[s].type === NAVAL) ||
				((data.spaces[s].type === FORT) && !is_damaged_fort(s))) {
				action_space(s)
				any = true
			}
		}
		for (let theater = 1; theater <= data.wars[G.next_war].theaters; theater++) { // 1 to theaters, inclusive
			for (let t of G.theater_bonus_war_tiles[G.active][theater]) {
				any = true
				action_bonus_war_tile(t)
			}
		}

		let gauge = (any || (L.removals_done >= L.removals_required)) ? (L.removals_done + "/" + L.removals_required) : "DONE"
		V.prompt = event_prompt(G.active, G.played_event, "Damage a fort, remove a squadron, or remove a bonus war tile from the next war " + parens(gauge))

		if (!any && (L.removals_done === 0)) {
			V.prompt = event_prompt(G.active, G.played_event, "No forts, squadrons, or bonus war tiles available.")
			button ("confirm")
		} else if (L.removals_done >= L.removals_required) {
			V.prompt = event_prompt(G.active, G.played_event, "Confirm choices")
			button ("confirm")
		} else if (!any) {
			button ("confirm")
		}
	},
	space(s) {
		push_undo()
		L.removals_done++
		if (data.spaces[s].type === FORT) {
			set_damaged_fort(s)
		} else {
			reflag_space (s, NONE, true)
			G.navy_box[G.active]++

			let msg = data.flags[G.active].adj + " player removes squadron from " + data.spaces[s].name + " to Navy Box."
			log (msg)

			log (say_navy_box())
		}
	},
	bonus_war(t) {
		push_undo()
		L.removals_done++
		let theater = get_theater_from_bonus_war_tile(G.active, t)
		array_delete_item(G.theater_bonus_war_tiles[G.active][theater], t)
		G.bonus_war_tiles[G.active].push(t)
		shuffle(G.bonus_war_tiles[G.active])
		log(data.flags[G.active].name + " returns a bonus war tile from theater " + theater + ": " + data.wars[G.next_war].theater_names[theater])
	},
	confirm() {
		push_undo()  // Probably just gets cleared?
		G.active = 1 - G.active
		end()
	}
}

// BR: 2 Econ. Must be spent to flag market(s) next to a BR-flagged market. Bonus: 1 Econ, similarly restricted.
// FR: Shift an Alliance space in Austria, the Dutch Republic, or Spain. Bonus: if both Savoy and Sardinia are FR-flagged, score 3 VP.
P.event_alberonis_ambition = {
	_begin() {
		if (R === BRITAIN) {
			L.econ_amount = G.qualifies_for_bonus ? 3 : 2
		} else {
			L.shifted_alliance = false
			L.savoy_sardinia = ((G.flags[SAVOY] === FRANCE) && (G.flags[SARDINIA] === FRANCE))
		}
	},
	prompt() {
		if (R === BRITAIN) {
			V.prompt = event_prompt(R, G.played_event, "+" + L.econ_amount + " Economic action points (must be spent to flag markets next to a British-flagged market.")
			button("done")
		} else {
			if (!L.shifted_alliance) {
				let msg = "Shift an Alliance space in Austria, the Dutch Republic, or Spain"
				let any = false
				for (let s of [ SPAIN_1, SPAIN_3, AUSTRIA_1, AUSTRIA_3, DUTCH_1 ]) {
					if (G.flags[s] === R) continue
					action_space(s)
					any = true
				}
				if (!any) {
					msg += " (None Possible)"
					button("done")
				}
				V.prompt = event_prompt(R, G.played_event, msg, "if both Savoy and Sardinia are FR-flagged, score 3 VP")
			} else {
				V.prompt = event_prompt(R, G.played_event, L.savoy_sardinia ? "+3 VP for flags in both Savoy and Sardinia" : "No VP bonus as France does not have flags in both Savoy and Sardinia")
				button("done")
			}
		}
	},
	space(s) {
		push_undo()
		reflag_space(s, (G.flags[s] === NONE) ? R : NONE)
		L.shifted_alliance = true
		if (!G.qualifies_for_bonus) end()
	},
	done() {
		push_undo()
		if (R === BRITAIN) {
			add_contingent(ECON, L.econ_amount, RULE_MARKET_MARKET, SHORT_MARKET_MARKET)
		} else {
			if (!L.shifted_alliance) {
				L.shifted_alliance = true
				if (!G.qualifies_for_bonus) end()
			}
			if (L.savoy_sardinia) {
				award_vp(FRANCE, 3, false, "France has flags in both Savoy and Sardinia")
			} else {
				log ("No VP Bonus: France does not have flags in both Savoy and Sardinia.")
			}
		}
		end()
	}
}

// BR: Unflag a FR space in Ireland or Scotland
// FR: Draw one Bonus War Tile for each space you control in Ireland, and add them to the Jacobite Rebellion theater in the next war
P.event_famine_in_ireland = {
	_begin() {
		if (R === FRANCE) {
			L.tiles_to_draw = 0
			L.drawn_tiles = false
			L.placing_displaced_tile = false
			if (G.flags[IRELAND_1] === FRANCE) L.tiles_to_draw++
			if (G.flags[IRELAND_2] === FRANCE) L.tiles_to_draw++

			L.already = num_bonus_tiles_in_play(R)
		}
	},
	prompt() {
		if (R === BRITAIN) {
			let msg = "Unflag a French space in Ireland or Scotland"
			let any = false
			for (let s of [ IRELAND_1, IRELAND_2, SCOTLAND_1, SCOTLAND_2 ] ) {
				if (G.flags[s] !== FRANCE) continue
				action_space(s)
				any = true
			}
			if (!any) {
				button ("done")
				msg += " (None Possible)"
			}
			V.prompt = event_prompt(R, G.played_event, msg)
		} else {
			if (!L.drawn_tiles) {
				let msg = ""
				if (G.turn >= PEACE_TURN_4) {
					msg = "No Jacobite Rebellion theater in next war. No war tiles drawn."
					button("done")
				} else if (L.tiles_to_draw === 0) {
					msg = "France controls no spaces in Ireland. No war tiles drawn."
					button("done")
				} else if (L.already >= data.wars[G.next_war].theaters * 2) {
					msg = "You cannot draw any bonus war tiles, as all theaters in the next war already contain the maximum 2 bonus war tiles"
					button("done")
				} else if ((L.tiles_to_draw === 2) && (L.already >= (data.wars[G.next_war].theaters * 2) - 1)) {
					msg = "Confirm drawing only ONE bonus war tile even though you have TWO spaces in Ireland, as you have room for only one more on the war mat (CANNOT BE UNDONE!)"
					button("confirm")
				} else {
					msg = "Confirm draw of " + L.tiles_to_draw + " bonus war tile" + s(L.tiles_to_draw) + " to Jacobite Rebellion theater (CANNOT BE UNDONE!)"
					button("confirm")
				}
				V.prompt = event_prompt(R, G.played_event, msg)
			} else {
				if (!L.placing_displaced_tile) {
					for (let index = 0; index < G.theater_bonus_war_tiles[R][4].length; index++) {
						if ((L.displaced_a_new_one || (L.tiles_to_displace === 1)) && (index >= 2)) continue // If we only drew one tile, don't displace that one. If we displaced a new one the first time, we can't do it on a second time.
						action_bonus_war_tile(G.theater_bonus_war_tiles[R][4][index])
					}
					V.prompt = event_prompt(R, G.played_event, "Theater has more than 2 bonus war tiles. Select a tile to displace to a different theater")
				} else {
					for (let theater of free_theaters(R)) {
						action_theater(theater)
					}
					V.prompt = event_prompt(R, G.played_event, "Select a new theater for " + say_bonus_war_tile(L.displaced_tile) + " tile")
				}
			}
		}
	},
	space(s) {
		push_undo()
		reflag_space(s, NONE)
		end()
	},
	bonus_war(t) {
		L.placing_displaced_tile = true
		L.displaced_tile = t
		if (G.theater_bonus_war_tiles[FRANCE][4].indexOf(t) >= 2) L.displaced_a_new_one = true
	},
	theater(theater) {
		array_delete_item(G.theater_bonus_war_tiles[FRANCE][4], L.displaced_tile)
		G.theater_bonus_war_tiles[FRANCE][theater].push(L.displaced_tile)
		let msg = "France displaces a bonus war tile from Jacobite Rebellion theater to theater " + theater + ": " + data.wars[G.next_war].theater_names[theater] + "."

		if (G.theater_bonus_war_tiles[R][4].length <= 2) { // We're done if Jacobite theater only has two bonus war tiles
			end()
		} else {
			L.placing_displaced_tile = false // Loop back for another displacement if we need to
		}
	},
	confirm() {
		clear_undo()
		let oops = (L.tiles_to_draw === 2) && ((L.already >= (data.wars[G.next_war].theaters * 2) - 1))
		if (oops) L.tiles_to_draw = 1
		let msg = "France draws " + L.tiles_to_draw + " bonus war tile" + s(L.tiles_to_draw) + " to Jacobite Rebellion theater"
		if (oops) msg += " (theaters only had room for 1 more tile)"
		msg += "."
		log (msg)
		L.new_tiles = []
		for (let i = 0; i < L.tiles_to_draw; i++) {
			L.new_tiles.push(draw_bonus_war_tile(R, 4))
		}
		L.drawn_tiles = true

		if (G.theater_bonus_war_tiles[R][4].length <= 2) {
			end()
		} else {
			L.tiles_to_displace = G.theater_bonus_war_tiles[R][4].length - 2
			L.displaced_a_new_one = false
			L.placing_displaced_tile = false
		}
	},
	done() {
		push_undo()
		end()
	}
}

// Reduce your opponent's debt limit by one. If your opponent was at debt limit, reduce their debt by one as well, then score 1 VP. Bonus: reduce your own debt by 2.
P.event_interest_payments = {
	_begin() {
		L.penalty = available_debt(1 - R) < 1
		L.debt_reduction = Math.min(2, G.debt[R])
	},
	prompt() {
		let msg = "Reduces your opponent's Debt Limit by one"
		if (L.penalty) msg += ". This also reduces their debt by one and you will score 1 VP"
		V.prompt = event_prompt(R, G.played_event, msg, "reduces your own debt by " + L.debt_reduction)
		button("done")
	},
	done() {
		push_undo()
		G.debt_limit[1 - R]--
		log (bold(data.flags[1 - R].adj + " debt limit reduced by 1."))
		if (L.penalty) {
			G.debt[1 - R]--
			award_vp(R, 1, false, "Britsh Debt Limit overrun")
		}
		if (G.qualifies_for_bonus && (L.debt_reduction > 0)) {
			reduce_debt(R, L.debt_reduction)
		}
		end()
	}
}


function handle_ministry_card_click(m)
{
	// The *index* into the player's ministry i.e. G.ministry[R][G.ministry_index] of the ministry card clicked on (distinct from the actual ministr" id)
	// <br><b>
	// G.ministry[R][G.ministry_index] </b> contains card id (m) the card the player clicked on
	G.ministry_index = G.ministry[R].indexOf(m)

	// The ministry id (m) of the card the player clicked on - an index into data.ministries[...]
	G.ministry_id = m

	// True player flips up the ministry while doing the current action
	G.just_revealed = false

	G.ministry_already_revealed  = false
	G.ministry_prompt_to_exhaust = false

	G.ministry_manually_clicked  = true

	G.has_required_ministry = undefined
	// String reason we are requesting/suggesting the player flip up a ministry
	G.ministry_required_because = ""

	if (G.ministry_index >= 0) {
		call ("ministry_card_flow")
	}
}

P.ministry_card_flow = script (`	
    if (!G.ministry_revealed[R][G.ministry_index]) {
    	call confirm_reveal_ministry
    	eval { G.just_revealed = true }
    	if (G.ministry_manually_clicked && !ministry_useful_this_phase(G.ministry_id, G.action_round_subphase)) {
    		return // If we manually revealed the minister, but he can't do anything right now, don't proceed into the you-can't-use-him-right-now part
    	}
    }
    
    eval { 
    	if (!G.log_box) log_box_begin(G.active, say_ministry(G.ministry_id, R, false), LOG_BOX_MINISTRY) 
    }
    
    if (G.ministry_revealed[R][G.ministry_index]) {
		if (data.ministries[G.ministry_id].proc !== undefined) {
			call (data.ministries[G.ministry_id].proc)
		} else {
			if (!ministry_has_activatable_abilities(G.ministry_id)) {
				call ministry_not_activatable
			} else {		 		
				call ministry_not_implemented
			}
		}
    }
    
    eval {
    	G.ministry_manually_clicked = false
    	log_box_end(LOG_BOX_MINISTRY)     // only end it if it's a Ministry box, not if we're embedded in somebody else's box
    } 
`)


function ministry_has_activatable_abilities(m)
{
	return ![JONATHAN_SWIFT, EAST_INDIA_COMPANY, MARQUIS_DE_CONDORCET, JOHN_LAW, COURT_OF_THE_SUN_KING, MERCHANT_BANKS, SAMUEL_JOHNSON, JAMES_WATT, EDMUND_BURKE, TURGOT, VOLTAIRE, POMPADOUR_AND_DU_BARRY, DUPLEIX, LAVOISIER, NORTH_AMERICAN_TRADE].includes(m);
}

// Is there something the player could conceivably accomplish by clicking on this ministry right now (based on how long-in-the-tooth the current action phase has gotten)
function ministry_useful_this_phase(m, subphase)
{
	switch (subphase) {
		case BEFORE_PICKING_TILE:
			return [ BANK_OF_ENGLAND, ROBERT_WALPOLE, TOWNSHEND_ACTS ].includes(m)

		case OPTION_TO_PLAY_EVENT:
		case DURING_EVENT:
		case BEFORE_SPENDING_ACTION_POINTS:
		case ACTION_POINTS_ALREADY_SPENT:
		default:

			if (subphase > OPTION_TO_PLAY_EVENT) {
				return ![ THE_CARDINAL_MINISTERS ].includes(m) // Ministries which can't be activated after playing an event or spending action points
			}

			return true
	}
}


function say_navy_box() {
	return italic("Navy Box (France: " + G.navy_box[FRANCE] + ", Britain: " + G.navy_box[BRITAIN] + ")")
}


function say_stuff(key, id, who, all_caps)
{
	let msg = key
	if (all_caps) msg += key
	if (who >= 0) msg += (who === FRANCE) ? "F" : "B"
	msg += id
	return msg
}

function say_advantage(a, who = -1, all_caps = false)
{
	return say_stuff("A", a, who, all_caps)
}

function say_event(e, who = -1, all_caps = false)
{
	return say_stuff("E", e, who, all_caps)
}

function say_ministry(m, who = -1, all_caps = false)
{
	return say_stuff("M", m, who, all_caps)
}

function say_demand(d, who = -1, all_caps = false) {
	return say_stuff("D", d, who, all_caps)
}

function say_spending(msg, who = -1) {
	return "[S" + ((who >= 0) ? ((who === FRANCE) ? "F" : "B") : "X") + msg + "]"
}

function say_award_tile(msg, t, who = -1) {
	return "[A" + ((who >= 0) ? ((who === FRANCE) ? "F" : "B") : "X") + "0" + t + msg + "]"
}

function say_investment_tile(msg, t, who = -1) {
	let say = "[I" + ((who >= 0) ? ((who === FRANCE) ? "F" : "B") : "X")
	if (t < 10) say += "0" // Because advantage tile names start with a digit, need to make sure we pad out to the maximum 2 digits that the escape_square_brackets function checks
	say += t
	say += msg + "]"
	return say
}


function say_ministry_header()
{
	return say_action_header(say_ministry(G.ministry_id, -1, true) + ": ")
}

function ministry_prompt(who, m, string1, string2 = "") {
	var header = data.ministries[m].name.toUpperCase() + ": "

	var prompt = ""
	if ((G.action_round_subphase === BEFORE_PICKING_TILE) && !ministry_useful_this_phase(m, G.action_round_subphase)) {
		prompt += "You must pick an investment tile before you can use this ministry's abilities."
	}
	else if ((G.action_round_subphase > OPTION_TO_PLAY_EVENT) && !ministry_useful_this_phase(m, G.action_round_subphase)) {
		prompt += "This ministry can only be activated at the beginning of your action round."
	}
	else if (is_ministry_fully_exhausted(who, m) || (is_ministry_partially_exhausted(who, m) && ((string1 == null) || (string2 == null)))) {
		prompt += "Ministry Exhausted."
	}
	else {
		if ((string2 === "") || (string2 === null)) {
			prompt += string1 + "."
		}
		else if (string1 === null) {
			prompt += string2 + "."
		}
		else {
			prompt += strike(string1, is_ministry_exhausted(who, m, 0))
			if (is_ministry_exhausted(who, m, 0)) prompt += " (exhausted)"
			prompt += " OR "
			prompt += strike(string2, is_ministry_exhausted(who, m, 1))
			if (is_ministry_exhausted(who, m, 1)) prompt += " (exhausted)"
			prompt += "."
		}
	}
	return say_ministry_header() + say_action(prompt)
}

function reveal_ministry(who, index) {
	if (index < 0) return

	let m = G.ministry[who][index]
	G.ministry_revealed[who][index] = true
	log ("Ministry Revealed: \n" + say_ministry(m, who, false))

	//TODO: effects right when ministry is revealed, if applicable, like pooching off Jacobites if we're the Pope
}


P.confirm_reveal_ministry = {
	_begin() {
		if (G.has_required_ministry === false) end()
		if (G.ministry_revealed[R][G.ministry_index] && !G.prompt_to_exhaust) end()
	},
	prompt() {
		if (!G.ministry_revealed[R][G.ministry_index]) {
			V.prompt = say_action_header() + say_action("Reveal " + say_ministry(G.ministry[R][G.ministry_index]) + " Ministry Card?")
			action("reveal_ministry")
			if (G.ministry_optional) action("dont_reveal_ministry")
		} else {
			V.prompt = say_action_header() + say_action("Exhaust " + say_ministry(G.ministry[R][G.ministry_index]) + " Ministry Card Ability?")
			action ("exhaust_ministry")
			if (G.ministry_optional) action("dont_exhaust_ministry")
		}
		if ((G.ministry_required_because !== undefined) && (G.ministry_required_because !== "")) V.prompt += say_action(" (" + G.ministry_required_because + ")")

		if (G.ministry_manually_clicked && !ministry_useful_this_phase(G.ministry_id, G.action_round_subphase)) {
			V.prompt += say_action(" (NOTE: abilities cannot activate yet -- e.g. must pick investment tile, or must be beginning of round, or similar reason)")
		}

		V.prompt += say_action_points()
	},
	reveal_ministry() {
		push_undo()
		if (G.ministry_manually_clicked && !G.log_box) {
			log_box_begin(R, say_ministry(G.ministry_id, R, false), LOG_BOX_MINISTRY) // If we manually click on a minister to reveal him, don't reveal his name into the log until he's confirmed to be getting revealed (otherwise would leak information)
		}
		reveal_ministry(R, G.ministry_index)
		end()
	},
	dont_reveal_ministry() {
		push_undo()
		end()
	},
	exhaust_ministry() {
		push_undo()
		exhaust_ministry(R, G.ministry_id, G.ministry_ability)
	},
	dont_exhaust_ministry() {
		push_undo()
		end()
	}
}

P.ministry_not_activatable = {
	prompt() {
		let msg = "This ministry does not require manual activation. It takes effect automatically at the appropriate time."
		V.prompt = ministry_prompt(R, G.ministry_id, msg)
		button ("pass")
	},
	pass() {
		push_undo()
		end()
	}
}

P.ministry_not_implemented = {
	prompt() {
		let msg = "Ministry not yet implemented."
		V.prompt = ministry_prompt(R, G.ministry_id, msg)
		button ("pass")
	},
	pass() {
		push_undo()
		end()
	}
}


P.ministry_robert_walpole = {
	_begin() {
		L.drawn_extra = false
	},
	prompt() {
		if (L.drawn_extra) {
			V.prompt = say_ministry_header() + say_action("You must now click an event card to discard.") + say_action_points()
			for (var c of G.hand[R]) {
				action_event_card(c)
			}
		} else {
			V.prompt = ministry_prompt(R, ROBERT_WALPOLE, "You may draw an event card (and then discard one).") + say_action_points()
			button("draw_event")
			button("pass")
		}
	},
    draw_event() {
		clear_undo() // Because we're drawing a new event card

		exhaust_ministry(R, ROBERT_WALPOLE)

		if (G.deck.length === 0) {
			log ("Discard Pile shuffled to form new Event Deck")
			G.deck = G.discard_pile
			shuffle(G.deck)
		}

		if (G.deck.length > 0) {
			G.hand[R].push(G.deck.pop())
			L.drawn_extra = true
			log (data.flags[R].name + " draws new event card")
		} else {
			log ("Event deck is EMPTY. Cannot an draw event card.")
		}

		// No end() - we stay in this state. I think that's okay?
	},
	event_card(c) {
		log (data.flags[R].name + " discards event: E" + c)
		// Discard the old card
		array_delete_item(G.hand[R], c)
		G.discard_pile.push(c)
		end()
	},
	pass() {
		push_undo()
		end()
	}
}


P.ministry_bank_of_england = {
	prompt() {
		V.prompt = ministry_prompt(R, BANK_OF_ENGLAND, "You may increase your debt limit by one", null) + say_action_points()
		if (ministry_useful_this_phase(BANK_OF_ENGLAND, G.action_round_subphase)) {
			button("increase_debt_limit", !is_ministry_exhausted(R, BANK_OF_ENGLAND, 0))
		}
		button("pass")
	},
	increase_debt_limit() {
		push_undo()
		exhaust_ministry(R, BANK_OF_ENGLAND)
		G.debt_limit[R]++
		log_br()
		log(bold(data.flags[R].name + " Debt Limit +1"))
		log_br()
		end()
	},
	pass() {
		push_undo()
		end()
	}
}


P.ministry_edmond_halley = {
	prompt() {
		V.prompt = ministry_prompt(R, EDMOND_HALLEY, "Build discounted squadron", "discard an event to gain 1 Treaty Point") + say_action_points()
		if (ministry_useful_this_phase(EDMOND_HALLEY, G.action_round_subphase)) {
			if (!is_ministry_exhausted(R, EDMOND_HALLEY, 1)) {
				for (var card of G.hand[R]) {
					action_event_card(card)
				}
				L.any = true
			}

			button("build_squadron", !is_ministry_exhausted(R, EDMOND_HALLEY, 0) && (G.action_round_subphase >= PICKED_TILE_OPTION_TO_PASS) && G.action_points_eligible[MIL])
		}
		button("pass")
	},
	build_squadron() {
		push_undo()
		advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)
		action_cost_setup(-1, MIL)
		G.action_string = "to construct a squadron"
		G.prepicked_ministry = EDMOND_HALLEY
		G.prepicked_advantage = -1
		goto ("construct_squadron_flow")
	},
	event_card(c) {
		push_undo()
		exhaust_ministry(R, EDMOND_HALLEY,1)

		// Discard the old card
		array_delete_item(G.hand[R], c)
		G.discard_pile.push(c);
		log (data.flags[R].name + " discards event: E" + c)

		G.treaty_points[R]++
		log (data.flags[R].name + " gains " + say_spending("1 Treaty Point", R))
		end()
	},
	pass() {
		push_undo()
		end()
	}
}

function cardinal_ministers_value()
{
	let raw_value = ((G.flags[SAVOY] === FRANCE) ? 1 : 0) + ((G.flags[SARDINIA] === FRANCE) ? 1 : 0) + ((G.flags[AUSTRIA_2] === FRANCE) ? 1 : 0) + ((G.flags[AUSTRIA_4] === FRANCE) ? 1 : 0) + ((G.flags[SPAIN_2] === FRANCE) ? 1 : 0) + ((G.flags[SPAIN_4] === FRANCE) ? 1 : 0)
	return Math.min(raw_value, 3)
}


P.ministry_cardinal_ministers = {
	prompt() {
		V.prompt = ministry_prompt(R, THE_CARDINAL_MINISTERS, "Confirm use of ministry to gain " + cardinal_ministers_value() + " diplomatic action points") + say_action_points()
		if (cardinal_ministers_value() < 1) V.prompt = say_ministry_header() + say_action("You do not control any of the necessary spaces to gain a bonus.")
		if (ministry_useful_this_phase(THE_CARDINAL_MINISTERS, G.action_round_subphase) && !G.action_points_eligible[DIPLO]) V.prompt = say_ministry_header() + say_action("Your investment tile does not confer any Diplomatic action points.")
		if (ministry_useful_this_phase(THE_CARDINAL_MINISTERS, G.action_round_subphase) && (cardinal_ministers_value() > 0) && G.action_points_eligible[DIPLO] && !is_ministry_exhausted(R, THE_CARDINAL_MINISTERS)) {
			button("confirm")
		}
		button ("pass")
	},
	confirm() {
		push_undo()
		exhaust_ministry(R, THE_CARDINAL_MINISTERS)

		if (G.action_points_major[DIPLO] > 0) {
			G.action_points_major[DIPLO] += cardinal_ministers_value()
		} else {
			G.action_points_minor[DIPLO] += cardinal_ministers_value()
		}
		log (bold(data.flags[FRANCE].name + " gains " + cardinal_ministers_value() + " Diplomatic action points" + ((G.action_points_major[DIPLO] <= 0) ? " (Minor)" : "")))
		end()
	}
}


function jacobite_vp_value()
{
	let vp = 0
	for (const s of [ IRELAND_1, IRELAND_2, SCOTLAND_1, SCOTLAND_2 ]) {
		if (G.flags[s] === FRANCE) vp++
	}

	//TODO: Add VP for Jacobite Victory markers

	vp = Math.min(4, vp)
	return vp
}

function do_award_jacobite_vp()
{
	award_vp(FRANCE, jacobite_vp_value(), false, "Jacobite Uprisings")
}

P.jacobite_vp_flow = script (`
    call decide_how_and_whether_to_spend_action_points	
	eval { G.action_header = "" } 
    if (!G.paid_action_cost) {
    	return
    }
       
    eval { do_award_jacobite_vp() }    
`)

P.jacobite_space_flow = script (`
    call decide_how_and_whether_to_spend_action_points	
	eval { G.action_header = "" } 
    if (!G.paid_action_cost) {
    	return
    }
       
    eval { do_reflag_space() }    
`)

// TODO remove card from game when Papacy/Hanover
// TODO remove card from the game when Jacobite Defeat
P.ministry_jacobite_uprisings = {
	prompt() {
		V.prompt = ministry_prompt(R, JACOBITE_UPRISINGS, "Shift spaces in Scotland/Ireland with military action points", "score " + jacobite_vp_value() + " VP for 3 military action points" ) + say_action_points()
		if (ministry_useful_this_phase(JACOBITE_UPRISINGS, G.action_round_subphase)) {
			if (G.action_points_eligible[MIL]) {
				if (!has_transient(R, TRANSIENT_JACOBITES_USED_2)) {
					if (!is_ministry_exhausted(R, JACOBITE_UPRISINGS, 0)) {
						for (const s of [IRELAND_1, IRELAND_2, SCOTLAND_1, SCOTLAND_2]) {
							if (G.flags[s] !== FRANCE) {
								if ((G.flags[s] === NONE) || action_points_eligible_major(MIL, space_rules(s, MIL))) { // If we're unflagging, can't use minor action
									action_space(s, INCLUDE_CONFLICT)
								}
							}
						}
					}
				}

				if (!is_ministry_exhausted(R, JACOBITE_UPRISINGS, 1)) {
					button("jacobite_vp", !has_transient(R, TRANSIENT_JACOBITES_USED_1))
				}
			} else {
				V.prompt = say_ministry_header() + say_action("This ministry requires military action points to activate.")
			}
		}
		button("pass")
	},
	jacobite_vp() {
		push_undo()
		set_transient(R, TRANSIENT_JACOBITES_USED_1)
		advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)
		action_cost_setup(-1, MIL)
		G.action_cost = 3
		G.action_string = "to score " + jacobite_vp_value() + " VP with " + say_ministry(JACOBITE_UPRISINGS)
		G.action_header = say_ministry_header()
		goto ("jacobite_vp_flow")
	},
	conflict(s) {
		this.space(s)
	},
	space(s) {
		push_undo()
		set_transient(R, TRANSIENT_JACOBITES_USED_2)
		advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)
		action_cost_setup(s, MIL)
		G.action_cost   = action_point_cost(R, s, DIPLO) //NB: we use the political space-shifting cost, but charge the player military points
		G.action_string = "to shift " + data.spaces[s].name + " space"
		G.action_header = say_ministry_header()
		goto ("jacobite_space_flow")
	},
	pass() {
		push_undo()
		end()
	}
}



function advantage_prompt(who, a, string1 = "") {
	var header = say_advantage(a, -1, true) + ": "

	var prompt = ""
	if (G.action_round_subphase === BEFORE_PICKING_TILE) {
		prompt += "You must pick an investment tile before you can activate advantages."
	}
	else if (G.advantage_already_exhausted) {
		prompt += "Advantage Exhausted."
	}
	else {
		prompt += string1
	}
	return say_action_header(header) + say_action(prompt)
}



function handle_advantage_click(a)
{
	G.active_advantage = a
	G.advantages_used_this_round++
	G.advantage_already_exhausted = is_advantage_exhausted(a)
	call ("advantage_flow")
}


P.advantage_flow = script (`  
	eval { 
		if (!G.advantage_already_exhausted) {
			exhaust_advantage(G.active_advantage, false) //NB: This also begins a log box with LOG_BOX_ADVANTAGE
		} else {
			log_box_begin(R, say_advantage(G.active_advantage, R), LOG_BOX_ADVANTAGE)
		} 
	}

	if (data.advantages[G.active_advantage].proc !== undefined) {
		call (data.advantages[G.active_advantage].proc)
	} else {
		
		//if (!advantage_activatable_now(G.active_advantage)) {
		//	call advantage_not_activatable
		//}
				
		call advantage_not_implemented
	}
	
	eval { log_box_end(LOG_BOX_ADVANTAGE) }
`)


// Should never get here anymore
P.advantage_not_implemented = {
	prompt() {
		let msg = "Advantage not yet implemented."
		V.prompt = advantage_prompt(R, G.active_advantage, msg)
		button ("pass")
	},
	pass() {
		push_undo()
		end()
	}
}

P.advantage_baltic_trade = {
	prompt() {
		if (G.debt[R] <= 0) {
			V.prompt = advantage_prompt(R, G.active_advantage, "You currently have no debt.")
		} else {
			let amount = Math.min(2, G.debt[R])
			V.prompt = advantage_prompt(R, G.active_advantage, "Use advantage to reduce debt by " + amount + "?")
			if (amount === 1) V.prompt += " (You currently have only 1 debt)"
			action ("use_advantage")
		}
	},
	use_advantage() {
		push_undo()
		reduce_debt(R, Math.min(2, G.debt[R]))
		end()
	}
}


P.advantage_slaving_contracts = function() {
	advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)
	action_cost_setup(-1, MIL)
	G.action_string = "to construct a squadron"
	G.prepicked_advantage = SLAVING_CONTRACTS
	G.prepicked_ministry = -1
	goto ("construct_squadron_flow")
}


P.advantage_naval_bastion = {
	_begin() {
		action_cost_setup(-1, MIL)
	},
	prompt() {
		if (!G.action_points_eligible[MIL]) {
			V.prompt = advantage_prompt(R, G.active_advantage, "You need an available Military action to use this advantage.")
		} else {
			let any = false;
			for (let s = 0; s < NUM_SPACES; s++) {
				if (data.spaces[s].type !== NAVAL) continue
				if (G.flags[s] !== 1 - R) continue
				action_space(s)
				any = true
			}

			if (any) {
				V.prompt = advantage_prompt(R, G.active_advantage, "Select opposing squadron to return to Navy Box for 1 military action point.")
			} else {
				V.prompt = advantage_prompt(R, G.active_advantage, "Your opponent has no deployed squadrons.")
			}
		}
	},
	space(s) {
		push_undo()
		G.navy_box[1 - R]++
		reflag_space(s, NONE, true)

		log (bold(data.flags[1-R].adj + " squadron returned to Navy Box."))

		log (say_navy_box())

		end()
	}
}

P.advantage_place_conflict = {
	_begin() {
		let a = G.active_advantage
		L.adv_region = -1
		L.adv_market_only = false
		L.adv_market_type = -1
		switch (a) {
			case RAIDS_AND_INCURSIONS:
				L.adv_string = "in a market in India."
				L.adv_market_only = true
				L.adv_region = REGION_INDIA
				break;
			case SEPARATIST_WARS:
				L.adv_string = "in a Cotton market."
				L.adv_market_only = true
				L.adv_market_type = COTTON
				break;
			case POWER_STRUGGLE:
				L.adv_string = "in a Carnatic Coast market."
				L.adv_region = REGION_INDIA
				L.adv_market_only = true
				// unique code for Carnatic Coast specifically
				break;
			case LETTERS_OF_MARQUE:
			case PIRATE_HAVENS:
				L.adv_string = "in an unprotected Caribbean market."
				L.adv_market_only = true
				L.adv_region = REGION_CARIBBEAN
				// unique code for unprotected
				break;
			case PATRIOT_AGITATION:
				L.adv_string = "in North America."
				L.adv_region = REGION_NORTH_AMERICA
				break;
			case IROQUOIS_RAIDS:
			case ALGONQUIN_RAIDS:
				L.adv_string = "in a Fur Market."
				L.adv_market_only = true
				L.adv_market_type = FURS
				break;
			case MEDITERRANEAN_INTRIGUE:
				L.adv_string = "in Spain or Austria."
				// unique code
				break;
			case CENTRAL_EUROPE_CONFLICT:
				L.adv_string = "in an alliance space in Europe."
				L.adv_region = REGION_EUROPE
				// unique code for alliance
				break;
		}
	},
	prompt() {
		V.prompt = advantage_prompt(R, G.active_advantage, "Place a Conflict " + L.adv_string)
		let any = false
		for (let s = 0; s < NUM_SPACES; s++) {
			if (L.adv_market_only || (data.spaces[s].type !== POLITICAL)) {
				if (data.spaces[s].type !== MARKET) continue
			}
			if ((L.adv_market_type >= 0) && (data.spaces[s].market !== L.adv_market_type)) continue
			if ((L.adv_region >= 0) && (data.spaces[s].region !== L.adv_region)) continue
			if (data.spaces[s].era > current_era()) continue // Some diplomatic spaces are era-locked
			if (((s === USA_1) || (s === USA_2)) && !G.usa_flags) continue // USA flags only if USA exists

			switch (G.active_advantage) {
				case POWER_STRUGGLE:
					if (data.spaces[s].subreg !== SUBREGION_CARNATIC_COAST) continue;
					break;

				case LETTERS_OF_MARQUE:
				case PIRATE_HAVENS:
					if (is_protected(s)) continue;
					break;

				case MEDITERRANEAN_INTRIGUE:
					if (![SPAIN_1, SPAIN_2, SPAIN_3, SPAIN_4, AUSTRIA_1, AUSTRIA_2, AUSTRIA_3, AUSTRIA_4].includes(s)) continue
					break;

				case CENTRAL_EUROPE_CONFLICT:
					if (data.spaces[s].alliance.length <= 0) continue
					break;
			}

			if (has_conflict_marker(s)) continue
			action_space(s)
			any = true
		}
		if (!any) V.prompt += " (None eligible)"
	},
	space(s) {
		push_undo()
		set_conflict_marker(s)
		end()
	}
}

P.advantage_unflag_discount = {
	_begin() {
		let a = G.active_advantage
		L.adv_region = -1
		L.adv_market = true
		L.adv_market_type = -1
		L.adv_for_one = false
		switch (a) {
			case FUR_TRADE:
				L.adv_string = "market in North America"
				L.adv_plural = "markets in North America"
				L.adv_region = REGION_NORTH_AMERICA
				L.adv_market = true
				L.adv_for_one = true
				break;
			case WHEAT:
				L.adv_string = "market in North America"
				L.adv_plural = "markets in North America"
				L.adv_region = REGION_NORTH_AMERICA
				L.adv_market = true
				break;
			case TEXTILES:
			case SILK:
				L.adv_string = "market in India"
				L.adv_plural = "markets in India"
				L.adv_region = REGION_INDIA
				L.adv_market = true
				break;
			case RUM:
			case FRUIT:
				L.adv_string = "market in the Caribbean"
				L.adv_plural = "markets in the Caribbean"
				L.adv_region = REGION_CARIBBEAN
				L.adv_market = true
				break
			case GERMAN_DIPLOMACY:
				L.adv_string = "space in Russia, Silesia, or Bavaria"
				L.adv_plural = "spaces in Russia, Silesia, or Bavaria"
				L.adv_region = REGION_EUROPE
				L.adv_market = true
				L.adv_for_one = true
				break
			case SILESIA_NEGOTIATIONS:
				L.adv_string = "space in Prussia or the German States"
				L.adv_plural = "spaces in Prussia or the German States"
				L.adv_region = REGION_EUROPE
				L.adv_market = true
				L.adv_for_one = true
				break
			case ITALY_INFLUENCE:
				L.adv_string = "space in Spain or Austria"
				L.adv_plural = "spaces in Spain or Austria"
				L.adv_region = REGION_EUROPE
				L.adv_market = true
				L.adv_for_one = true
				break
		}
	},

	prompt() {
		let msg = "Pick a " + L.adv_string + " to unflag " + (L.adv_for_one ? "for 1 action point." : "for one fewer action points.")
		let type = L.adv_market ? ECON : DIPLO
		let space_type = L.adv_market ? MARKET : POLITICAL
		if (!G.action_points_eligible[type] ) {
			if (type === ECON) {
				msg = "You must have an Economic action available to unflag markets."
			} else {
				msg = "You must have a Diplomatic action available to unflag political spaces."
			}
		} else {
			let any = false
			let any_flagged = false
			let any_non_conflict = false
			for (let s = 0; s < NUM_SPACES; s++) {
				if (data.spaces[s].region !== L.adv_region) continue
				if (data.spaces[s].type !== L.space_type) continue
				if (G.flags[s] !== 1 - G.active) continue
				any_flagged = true
				if (!allowed_to_shift_market(s, R)) continue
				if (!has_conflict_marker(s)) any_non_conflict = true
				if (!action_points_eligible_major(type, space_rules(s, type)) && !eligible_for_minor_action(s, R)) continue
				action_space(s)
				any = true
			}
			if (!any_flagged) {
				msg = "There are no enemy-flagged " + L.adv_plural + " right now."
			} else if (any_non_conflict && G.action_points_minor[type] > 0) {
				msg = "With a minor action you can only unflag spaces that have a conflict marker."
			} else if (!any) {
				msg = "You do not have eligible connections to any " + L.adv_plural + "."
			}
		}
		V.prompt = advantage_prompt(R, G.active_advantage, msg)
	},
	space(s) {
		push_undo()
		action_cost_setup(s, L.adv_market ? ECON : DIPLO)
		if (L.adv_for_one) {
			G.action_cost = 1
		} else {
			G.action_cost = G.action_cost - 1
		}
		goto ("space_flow")
	}
}


/* 5.4.1 - In order to shift a Market, that Market must be connected to a Territory, Fort, or Naval space the player controls, or be connected to another Market the player controls that does not contain a Conflict marker, is not Isolated, and did not change control during the current Action Round. */
function allowed_to_shift_market(s, who)
{
	for (const link of data.spaces[s].connects) {
		if (G.flags[link] !== who) continue
		if ([ FORT, NAVAL, TERRITORY ].includes(data.spaces[link].type)) return true // Can always shift if adjacent to friendly fort/navy/territory
		if (data.spaces[link].type === MARKET) {
			if (has_conflict_marker(link)) continue						// Not if conflict
			if (is_isolated_market(link)) continue						// Not if isolated
			if (!set_has(G.controlled_start_of_round, link)) continue       // Can't "daisy chain" from market we shifted THIS round
			return true
		}
	}
	return false
}

/* 5.3.2 "Minor Actions may not be used to remove opposing flags or Squadrons, unless the space has a Conflict Marker." Returns true if eligible for a minor action in the space (enemy spaces can only be unflagged if a conflict marker is present, or the Jonathan Swift ministry exception) */
function eligible_for_minor_action(s, who)
{
	if ((s >= 0) && (G.flags[s] !== NONE) && (G.flags[s] !== who)) {
		if (!has_conflict_marker(s)) {
			// Other nations flags can only be removed w/ presence of a conflict marker
			// ... except European diplomatic spaces with Jonathan Swift ministry active and at least one space in Ireland
			if (!((data.spaces[s].region === REGION_EUROPE) && has_active_ministry(who, JONATHAN_SWIFT) && ((G.flags[IRELAND_1] === who) || (G.flags[IRELAND_2] === who)))) {
				return false
			}
		}
		if ([ FORT, NAVAL ].includes(data.spaces[s].type)) return false // Can't pop enemy forts or squadrons
	}
	return true
}


// Returns true if eligible for an action of this type (minor or major), checking the optional list of rules for potential contingent points
function action_points_eligible(type, rules = []) {
	return G.action_points_eligible[type] || any_contingent(type, rules)
}


// Returns true if eligible for a major action of this type, checking the optional list of rules for potential contingent points
function action_points_eligible_major(type, rules = []) {
	return G.action_points_eligible_major[type] || any_contingent(type, rules)
}


// Returns the number of major action points available of the type, checking the optional list of rules for potential contingent points
function action_points_major(type, rules = []) {
	return G.action_points_major[type] + get_contingent(type, rules)
}


function action_points_available(who, s, type, allow_debt_and_trps, rules = [])
{
	if (!action_points_eligible(type, rules)) return 0

	var eligible_minor = eligible_for_minor_action(s, who)
	if (!action_points_eligible_major(type, rules) && !eligible_minor) return 0

	return action_points_major(type, rules) + G.action_points_committed_bonus[type] + (allow_debt_and_trps ? available_debt_plus_trps(who) : 0) + (eligible_minor ? G.action_points_minor[type] : 0)
}

// True if we're legally allowed to shift the space (includes minor action rules). NOTE: also returns false if there's no conceivable way we could currently afford it
function is_shift_allowed_and_affordable(s, who, allow_debt_and_trps, rules = [])
{
	var type = space_action_type(s)

	if (!action_points_eligible(type, rules)) return false

	var eligible_minor = eligible_for_minor_action(s, who)
	if (!action_points_eligible_major(type, rules) && !eligible_minor) return false

	var cost = action_point_cost(who, s, type)
    var avail = action_points_available(who, s, type, allow_debt_and_trps, rules)
	//TODO forts and navies different behaviors

	return (avail >= cost)
}


function action_eligible_spaces_econ(region)
{
	for (const space of data.spaces) {
		if ((region !== REGION_ALL) && (region !== space.region)) continue
		if (space.type !== MARKET) continue
		if (G.flags[space.num] === R) continue // can't shift our own spaces
		if (!allowed_to_shift_market(space.num, R)) continue // the connected-market rules, etc.
		if (!action_points_eligible_major(ECON, space_rules(space.num, ECON))) { // We either need eligibility for major action *at this space*, or else we need to have non-zero minor action points remaining
			if (!G.action_points_minor[ECON]) continue
		}
		if (!action_points_eligible(ECON, space_rules(space.num, ECON))) continue
		if (!is_shift_allowed_and_affordable(space.num, R, true, space_rules(space.num, ECON))) continue

		action_space(space.num, INCLUDE_CONFLICT)
	}
}

function action_eligible_spaces_diplo(region)
{
	for (const space of data.spaces) {
		if ((region !== REGION_ALL) && (region !== space.region)) continue
		if (space.type !== POLITICAL) continue
		if (G.flags[space.num] === R) continue // can't shift our own spaces
		if (data.spaces[space.num].era > current_era()) continue // Some diplomatic spaces are era-locked
		if (((space.num === USA_1) || (space.num === USA_2)) && !G.usa_flags) continue // USA flags only if USA exists
		if (!action_points_eligible_major(DIPLO, space_rules(space.num, DIPLO))) { // We either need eligibility for major action *at this space*, or else we need to have non-zero minor action points remaining
			if (!G.action_points_minor[DIPLO]) continue
		}
		if (!is_shift_allowed_and_affordable(space.num, R, true, space_rules(space.num, DIPLO))) continue
		action_space(space.num, INCLUDE_CONFLICT)
	}
}

function action_eligible_spaces_mil(region)
{
	for (const space of data.spaces) {
		if ((region !== REGION_ALL) && (region !== space.region)) continue
		if (G.flags[space.num] === R) {
			/* 5.6.4 - Repair a fort */
			if (space.type === FORT) {
				if (!is_damaged_fort(space.num)) continue
			}

			/* Move my existing ship */
			if (space.type === NAVAL) {
				if (set_has(G.dirty, space.num)) continue /* A given Squadron can only deploy once per action round */
			}
		}
		else {
			if (space.type === FORT) {
				if (G.flags[space.num] === NONE) {
					/* 5.6.3 - Build a fort */
					var allowed_to_build_fort = false
					for (const link of space.connects) {
						if (G.flags[link] !== R) continue
						if (![ TERRITORY, NAVAL, MARKET ].includes(data.spaces[link].type)) continue // Need a friendly fort, territory, or market
						if (!set_has(G.controlled_start_of_round, link)) continue                    // Need it since start of action round
						allowed_to_build_fort = true
						break
					}
					if (!allowed_to_build_fort) continue
				}
				else {
					/* 5.6.4 - Seize ('repair') an enemy fort  */
					if (!is_damaged_fort(space.num)) continue                              // Must be damaged
					var allowed_to_seize_fort = false
					for (const link of space.connects) {
						if (G.flags[link] !== R) continue
						if (![ NAVAL , MARKET ].includes(data.spaces[link].type)) continue // Need a fort, territory, or market (but don't care if since start of action round apparently)
						allowed_to_seize_fort = true
						break
					}
					if (!allowed_to_seize_fort) continue
				}
			}
		}

		if ((space.type !== NAVAL) && (space.type !== FORT)) {
			if (!has_conflict_marker(space.num)) continue
			action_conflict(space.num)
		}
		else {
			action_space(space.num, INCLUDE_CONFLICT | INCLUDE_DAMAGED)
		}
	}
}

function action_territories_debug() {
	for (const space of data.spaces) {
		if (space.type !== TERRITORY) continue
		action_space(space.num)
	}
}

function action_eligible_spaces(type, region)
{
	if (!action_points_eligible_major(type, active_rules()) && (G.action_points_minor[type] <= 0)) return
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
		if (!action_points_eligible(i, active_rules())) continue
		action_eligible_spaces(i, REGION_ALL)
	}
}

function action_eligible_ministries() {
	for (var index = 0; index < G.ministry[R].length; index++) {

		if (G.ministry_revealed[R][index]) {
			if (is_ministry_fully_exhausted(R, index)) continue

			//BR// Removing this for now - for flexibility, allow players to flip ministries at any notionally legal time, even if ministry isn't technically "useful" right at that second.
			//if (!ministry_useful_this_phase(G.ministry[R][index], G.action_round_subphase)) continue
		}
		action_ministry_card(G.ministry[R][index])
	}
}

function action_eligible_advantages() {
	if (G.advantages_used_this_round >= 2) return
	for (var a = 0; a < NUM_ADVANTAGES; a++) {
		if (has_advantage_eligible(R, a)) action_advantage(a)
	}
}


function space_action_type(s) {
	if (data.spaces[s].type === POLITICAL) return DIPLO
	if (data.spaces[s].type === MARKET) return ECON
	return MIL
}


/* Purchases in multiple regions - 5.3.4 - does NOT apply to military */
function charge_region_switching_penalty(type, region) {
	if (type === MIL) return false
	if (set_has(G.action_point_regions[type], region)) return false // We've already spent this type of points in this region, so don't charge again

	for (var r = 0; r < NUM_REGIONS; r++) {
		if (r === region) continue
		if (set_has(G.action_point_regions[type], r)) return true   // We've spent this type of points in a different region this round, so the region-switching penalty applies
	}

	return false // This is the first region we've spent points on this time, so no charge
}


function squadrons_in_region(who, region) {
	var squadrons = 0
	for (let s = data.regions[region].first_space; s < data.regions[region].first_space + data.regions[region].spaces; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		if (G.flags[s] !== who) continue
		squadrons++
	}
	return squadrons
}


function has_transient(who, t) {
	//return G.transient_bitflags[who][t]
	return !!bit_get(G.transient_bitflags[who], t)
}

function set_transient(who, t, on = true) {
	//G.transient_bitflags[who][t] = on
	bit_set(G.transient_bitflags[who], t, on)
}

function cost_to_build_squadron(who, check_minimum = false, info = {})
{
	var cost = 4

	// Choiseul - require the ministry & a squadron in North America. Works once per turn.
	if ((who === FRANCE) && has_ministry(who, CHOISEUL, !check_minimum) && !is_ministry_exhausted(who, CHOISEUL, 1) && (squadrons_in_region(who, REGION_NORTH_AMERICA) > 0)) {
		cost = 2
		info.ministry = CHOISEUL
		info.ministry_ability = 1
	}
	if (who === BRITAIN) {
		if (has_ministry(who, EDMOND_HALLEY, !check_minimum) && !is_ministry_exhausted(who, EDMOND_HALLEY, 0)) {
			cost = 2
			info.ministry = EDMOND_HALLEY
			info.ministry_ability = 0
		}
		if (has_ministry(who, PITT_THE_ELDER, !check_minimum) && !is_ministry_exhausted(who, PITT_THE_ELDER, 1)) {
			cost = 2
			info.ministry = PITT_THE_ELDER
			info.ministry_ability = 1
		}
	}

    if (has_advantage_eligible(who, SLAVING_CONTRACTS) && check_minimum) {
		cost = 2
		info.advantage = SLAVING_CONTRACTS
	}

	if (has_transient(who, TRANSIENT_SOUTH_SEA_SQUADRON_DISCOUNT)) {
		info.ability = true
		cost -= 2
	}

	return cost
}


function handle_construct_squadron_button() {
	advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)
	action_cost_setup(-1, MIL)
	G.action_string = "to construct a squadron"
	G.action_header = "CONSTRUCT SQUADRON: "
	G.prepicked_ministry = -1
	G.prepicked_advantage = -1
	call ("construct_squadron_flow")
}


P.no_military_action_squadron = {
	prompt() {
		V.prompt = say_action_header() + say_action("You need a military action available to construct a squadron.")
	}
}

P.noff_noff_money_squadron = {
	prompt() {
		V.prompt = say_action_header() + say_action("You don't have enough debt, treaty points, and action points to construct a squadron.")
	}
}

P.noff_noff_squadrons = {
	prompt() {
		V.prompt = say_action_header() + say_action("You already have the maximum 8 squadrons in play.")
	}
}


P.construct_squadron_flow = script(`
    eval {
    	G.action_cost = cost_to_build_squadron(G.active, false)
        L.info = {}
    	L.min_cost = cost_to_build_squadron(G.active, true, L.info)
    	L.flipped_something = false
    }        
    if (!G.action_points_eligible[MIL]) {
    	call no_military_action_squadron
    	return
    }
    if (G.action_points_available_debt < L.min_cost) {
    	call noff_noff_money_squadron
    	return // If we can't even afford it w/ debt and trps, we shouldn't be here
    }    
    if (G.unbuilt_squadrons[G.active] <= 0) {
    	call noff_noff_squadrons
    	return // If we don't have any available squadrons
    }
    
    // Possible option to flip relevant ministry
    if ((L.info.ministry !== undefined) && (G.prepicked_advantage === -1)) {
        eval {
        	if (G.prepicked_ministry === L.info.ministry) {
        		G.has_required_ministry = true
        	} else {
        		require_ministry_unexhausted(R, L.info.ministry, "To reduce cost of squadron by 2", L.info.ministry_ability, G.action_points_available_debt >= G.action_cost)
        	}
        }
        if (G.has_required_ministry) {
        	eval { 
        		G.action_cost = (L.info.ability !== undefined) ? 0 : 2
        		L.flipped_something  = true        		
        		exhaust_ministry(R, L.info.ministry, L.info.ministry_ability)
        	} 	
		} 
		if (!G.has_required_ministry && (G.action_points_available_debt < L.min_cost)) {
			return // If it's now impossible to afford cost because we didn't flip the ministry		    
		}
    }

	// Possible option to use advantage
	if ((L.info.advantage !== undefined) && !L.flipped_something && (G.prepicked_advantage === -1)) {
		eval {
			require_advantage(R, L.info.advantage, "To reduce cost of squadron by 2", G.action_points_available_debt >= G.action_cost)
		}
		if (G.used_required_advantage) {
			eval {
				G.action_cost = (L.info.ability !== undefined) ? 0 : 2
				L.flipped_something = true
			}
		}
		if (!G.used_required_advantage && (G.action_points_available_debt < L.min_cost)) {
			return // If it's now impossible to afford cost because we didn't use the advantage		    
		}
	} else {
		if (G.prepicked_advantage >= 0) {
			eval { G.action_cost = (L.info.ability !== undefined) ? 0 : 2 }
		}
	}  
	        
  	call decide_how_and_whether_to_spend_action_points	
    if (!G.paid_action_cost) {
    	return
    }
       
    eval { do_construct_squadron(G.active) }
`)

function do_construct_squadron(who) {
	if (G.unbuilt_squadrons[who] <= 0) return // Can't construct a squadron if there aren't any left to build

	G.unbuilt_squadrons[who] -= 1
	G.navy_box[who]++

	log_br()
	log(data.flags[who].name + " constructs a squadron")
	log_br()
}


/* 3.2.8 and 5.6.2 - protected spaces: adjacent to friendly squadron or undamaged fort */
function is_protected(s)
{
	var whose = G.flags[s]
	if (whose === NONE) return false
	for (const adjacent of data.spaces[s].connects) {
		if (G.flags[adjacent] === whose) {
			if (data.spaces[s].type === NAVAL) return true
			if (data.spaces[s].type === FORT) {
				if (!is_damaged_fort(s)) return true
			}
		}
	}
	return false
}

function action_point_cost (who, s, type)
{
	var cost = data.spaces[s].cost

	// General Rule: Apply all reductions before any increases (5.4.2, 5.5.2)

	if (type === MIL) {
		if ((data.spaces[s].type === FORT) && is_damaged_fort()) {
			if (G.flags[s] === G.active) { //BR// hmmm... should I be passing "who" as a parameter, or do I only ever need for active player? For now I *think* the latter.
				cost -= 1 // Repairing friendly fort costs one less than strength
			} else {
				cost += 1 // Seizing enemy fort costs one more than strength
			}
		}

		//TODO handle naval spaces, probably elsewhere
	}
	else {
		//TODO apply discounts from event cards, advantages, etc

		if (has_active_ministry(who, JONATHAN_SWIFT)) {
			if ([IRELAND_1, IRELAND_2, SCOTLAND_1, SCOTLAND_2].includes(s)) { // Ireland & Scotland
				if (G.flags[s] === NONE) {                                    // Jonathan Swift discount only works for *flagging* spaces, not unflagging
					cost -= 1
				}
			}
		}

		if (cost < 1) cost = 1 // Can't be reduced below 1 (5.4.2)

		if (has_conflict_marker(s)) cost = 1 // Both political costs & market flagging costs are reduced to 1 by a conflict marker (5.4.2, 5.5.2)
		if (type === ECON) {
			if (is_isolated_market(s)) cost = 1 // Isolated markets cost 1 to shift
			if (is_protected(s)) cost++   // Protected markets cost +1 to shift
		}
	}

	return cost
}

function update_flag_counts()
{
	G.prestige_flags    = [ 0, 0 ]                                       // G.flag_count[who]
	G.flag_count        = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]             // G.flag_count[who][region]
	G.demand_flag_count = [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ] // G.demand_flag_count[who][demand]

	for (let s = 0; s < NUM_SPACES; s++) {
		let who = G.flags[s]
		if ((who !== FRANCE) && (who !== BRITAIN)) continue
		if (has_conflict_marker(s)) continue
        G.flag_count[who][data.spaces[s].region]++
		if (data.spaces[s].prestige > 0) G.prestige_flags[who]++
		if (data.spaces[s].type === MARKET) {
			G.demand_flag_count[who][data.spaces[s].market]++
		}
	}
}


function say_basic_war_tile(t) {
	let val = data.basic_war_tiles[t].val
	let msg = "\"" + ((val >= 0) ? "+" + val : val)
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
	msg += "\""
	return msg
}


function say_bonus_war_tile(t) {
	let name = data.bonus_war_tiles[t].name
	let val = data.bonus_war_tiles[t].val
	let msg = "\"" + name + " (+" + val
	switch (data.bonus_war_tiles[t].type) {
		case WAR_DEBT:
			msg += " with Debt"
			break
		case WAR_FORT:
			msg += " with Fort/Fleet"
			break
	}
	msg += ")\""
	return msg
}


function handle_military_upgrade(t)
{
	G.upgrading_basic_tile = t
	call ("military_upgrade_decisions")
}


function get_theater_from_basic_war_tile(who, tile) {
	for (let theater = 0; theater <= data.wars[G.next_war].theaters; theater++) { //NB 0 through theaters is intentional
		if (G.theater_basic_war_tiles[who][theater].includes(tile)) return theater
	}
	console.error ("Could not find theater for basic war tile. Who: " + who + "  Tile: " + tile)
	return 1
}


function get_theater_from_bonus_war_tile(who, tile) {
	for (let theater = 0; theater <= data.wars[G.next_war].theaters; theater++) { //NB 0 through theaters is intentional
		if (G.theater_bonus_war_tiles[who][theater].includes(tile)) return theater
	}
	console.error ("Could not find theater for bonus war tile. Who: " + who + "  Tile: " + tile)
	return 1
}



P.military_upgrade_decisions = {
	_begin() {
		L.confirmed = false
		L.picked_one_to_keep = false
		L.theater = get_theater_from_basic_war_tile(G.active, G.upgrading_basic_tile)
	},
	prompt() {
		let msg = say_action_header("MILITARY UPGRADE: ")

		if (!L.confirmed) {
			//TODO - optional rule would allow choice of swap or draw
			if (G.basic_war_tiles[G.active].length < 1) {
				msg += say_action("You do not have any war tiles left to draw an upgrade from.")
				button ("done")
			} else {
				msg += say_action("Confirm upgrade draw for " + say_basic_war_tile(G.upgrading_basic_tile) + " tile in theater " + L.theater + ": " + data.wars[G.next_war].theater_names[L.theater] + "? (CANNOT BE UNDONE!)")
				button("confirm")
			}
		} else if (!L.picked_one_to_keep) {
			msg += say_action("Choose which tile to keep")
			action_basic_war_tile(L.new_tile)
			action_basic_war_tile(G.upgrading_basic_tile)
		} else {
			msg += say_action("Return " + say_basic_war_tile(L.get_rid_of_tile) + " tile to the pool or remove it from the game?")
			button("return_to_pool")
			button("remove_from_game")
		}

		V.prompt = msg
	},
	confirm() {
		clear_undo() // Drew a tile - so there's no going back!
		L.confirmed = true
		L.new_tile = draw_basic_war_tile(G.active, L.theater)
		G.military_upgrade = false // No longer eligible for a military upgrade
		log(data.flags[G.active].name + " takes a military upgrade in theater " + L.theater + ": " + data.wars[G.next_war].theater_names[L.theater])
	},
	basic_war(t) {
		push_undo()
		L.get_rid_of_tile = (t === G.upgrading_basic_tile) ? L.new_tile : G.upgrading_basic_tile
		array_delete_item(G.theater_basic_war_tiles[G.active][L.theater], L.get_rid_of_tile)
        L.picked_one_to_keep = true
	},
	return_to_pool() {
		push_undo()
		G.basic_war_tiles[G.active].push(L.get_rid_of_tile) // Put the other tile back in the stock
		shuffle(G.basic_war_tiles[G.active])
		log(data.flags[G.active].name + " returns a basic war tile to the pool.")
		end()
	},
	remove_from_game() {
		push_undo()
		log(data.flags[G.active].name + " removes a basic war tile from the game: " + say_basic_war_tile(L.get_rid_of_tile))
		end()
	},
	done() {
		push_undo()
		G.military_upgrade = false // In the rare case where the player doesn't have enough tiles to even take an upgrade, just check it off his to-do list
		end()
	},

}

// Returns an array of theater numbers where the player currently has fewer than the maximum 2 bonus war tiles
function free_theaters(who) {
	let theaters = []
	for (let theater = 1; (theater <= data.wars[G.next_war].theaters); theater++) { //NB: this one is intentionally *1* through <= theaters
		if (G.theater_bonus_war_tiles[who][theater].length >= 2) continue
		theaters.push(theater)
	}
	return theaters
}


// Returns the total number of bonus war tiles a player already has on the next war mat
function num_bonus_tiles_in_play(who) {
    let num = 0
	for (let theater = 1; (theater <= data.wars[G.next_war].theaters); theater++) { //NB: this one is intentionally *1* through <= theaters
		num += G.theater_bonus_war_tiles[who][theater].length
	}
	return num
}


function handle_buy_bonus_war_tile()
{
	action_cost_setup(-1, MIL)
	G.action_header = "BUY BONUS WAR TILE: "
	G.action_cost   = 2

	if (free_theaters(G.active).length < 1) {
		call ("no_room_at_the_inn")
	} else if (G.bonus_war_tiles_bought_this_round >= 2) {
		call ("no_time_for_love_dr_jones")
	} else {
		call ("buy_bonus_war_tile_flow")
	}
}

P.no_room_at_the_inn = { // Player required to click "undo"
	prompt() {
		V.prompt = say_action_header() + say_action("All theaters have 2 bonus war tiles. No room to buy any more.")
	},
}

P.no_time_for_love_dr_jones = { // Player required to click "undo"
	prompt() {
		V.prompt = say_action_header() + say_action("You have already purchased the maximum allowed number of bonus war tiles this action round (2).")
	},
}


function use_choiseul()
{
	G.action_points_committed_bonus[MIL]++
	log ("Choiseul provides 1 extra military action point")
}


P.buy_bonus_war_tile_flow = script(`
	eval {
		require_ministry_unexhausted(R, CHOISEUL, "For an extra military action point", 0, true, true)
	}
	if (G.has_required_ministry) {
		eval { use_choiseul() }
	}

    call decide_how_and_whether_to_spend_action_points
	if (!G.paid_action_cost) {
		eval { G.action_header = "" }         
		return
	}

    goto bonus_war_tile_decisions    	
`)


P.bonus_war_tile_decisions = {
	_begin() {
		L.confirmed      = false
		L.theater        = 0
		L.displaced_tile = -1
	},
	prompt() {
		let msg = say_action_header()

		if (!L.confirmed) {
			if (G.bonus_war_tiles[G.active].length < 1) {
				msg += say_action("You do not have any bonus war tiles left to draw from.")
				button ("done")
			} else {
				msg += say_action("Confirm drawing tile for 2 military action points? (CANNOT BE UNDONE!)" + say_action_points())
				button("confirm")
			}
		} else if (L.theater <= 0) {
			msg = say_action_header()
			msg += "Select theater for " + say_bonus_war_tile(L.new_tile) + " tile."
			action_all_theaters()
		} else if (L.displaced_tile < 0) {
			msg += "Theater had two bonus tiles already. Select a bonus tile to displace."
			for (const t of G.theater_bonus_war_tiles[G.active][L.theater]) {
				if (t === L.new_tile) continue
				action_bonus_war_tile(t)
			}
		} else {
			msg += "Select new theater for " + say_bonus_war_tile(L.displaced_tile) + " tile."
			for (const t of free_theaters(G.active)) {
				action_theater(t)
			}
		}

		V.prompt = msg
	},
	confirm() {
		clear_undo() // Drew a tile - so there's no going back!
		L.confirmed = true
		L.new_tile = draw_bonus_war_tile(G.active, 0)
	},
	theater(t) {
		push_undo()
		if (L.theater <= 0) {
			L.theater = t
			G.theater_bonus_war_tiles[G.active][L.theater].push(L.new_tile)
			array_delete_item(G.theater_bonus_war_tiles[G.active][0], L.new_tile) // Remove from the "just drawn tiles" list
			G.bonus_war_tiles_bought_this_round++
			log(data.flags[G.active].name + " draws a bonus war tile into theater " + L.theater + ": " + data.wars[G.next_war].theater_names[L.theater])
			if (G.theater_bonus_war_tiles[G.active][L.theater].length <= 2) {
				end() // If we don't need to displace another tile, we're done
			}
		} else {
			G.theater_bonus_war_tiles[G.active][t].push(L.displaced_tile)
			log(data.flags[G.active].name + " moves a bonus war tile into theater " + t + ": " + data.wars[G.next_war].theater_names[t])
			end()
		}
	},
	bonus_war(t) {
		push_undo()
		L.displaced_tile = t
		array_delete_item(G.theater_bonus_war_tiles[G.active][L.theater], t)
	},
}


function handle_navy_box()
{
	G.navy_from_navy_box = true
	G.navy_to = -1
	G.navy_from = -1
	G.navy_displace = false
	call ("naval_decisions")
}


function handle_naval_space(s)
{
	G.navy_from_navy_box = false;
	G.navy_displace = false

	if (G.flags[s] === G.active) {
		G.navy_from = s
		G.navy_to = -1
	}
	else {
		G.navy_from = -1
		G.navy_to = s

		if (G.flags[s] !== NONE) {
			G.navy_displace = true
		}

		// If there simply aren't any other available squadrons on the map, autopick the Navy Box
		if (num_available_squadrons(G.active) < 1) {
			if (G.navy_box[G.active] > 0) {
				G.navy_from_navy_box = true
				call ("naval_flow")
				return
			}
		}
	}

	call ("naval_decisions")
}


function num_available_squadrons(who) {
	let avail = 0
	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		if (G.flags[s] !== G.active) continue
		if (set_has(G.dirty, s)) continue
		avail++
	}
	return avail
}

function action_naval_sources()
{
	if (G.navy_box[G.active] > 0) action_navy_box()

	let avail = 0
	// Naval spaces containing our own naval units, except ones we've already moved this round
	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		if (G.flags[s] !== G.active) continue
		if (set_has(G.dirty, s)) continue
		action_space(s)
		avail++
	}

	return avail
}

function action_naval_destinations()
{
	let avail = 0

	// Naval spaces that are either empty or contain an enemy squadron (which we could therefore displace)
	for (let s = 0; s < NUM_SPACES; s++) {
		if (data.spaces[s].type !== NAVAL) continue
		if (G.flags[s] === G.active) continue
		action_space(s)
		avail++
	}

	return avail
}


P.naval_decisions = {
	_begin() {
		action_cost_setup(-1, MIL)
	},
	prompt() {
		let header = ""
		let msg = ""
		if (G.navy_displace) {
			header = "DISPLACE SQUADRON: "
		} else {
			if (G.navy_from_navy_box) {
				header = "DEPLOY SQUADRON: "
			} else if (G.navy_from >= 0) {
				header = "MOVE SQUADRON: "
			} else {
				header = "DEPLOY SQUADRON: "
			}
		}

		if (G.navy_to >= 0) {
			msg = "Select squadron to move to " + data.spaces[G.navy_to].name + " (from map or Navy Box)."
			action_naval_sources()

			if ((G.navy_box[G.active] < 1) && num_available_squadrons(G.active) < 1) {
				msg = "You have no available squadrons to move there."
			}
		} else if (G.navy_from_navy_box || (G.navy_from >= 0)) {
			msg = "Select target naval space."
			let avail = action_naval_destinations()
			if (avail < 1) {
				msg = "There are no naval spaces available for you to deploy to." // I'm not sure this can actually happen
			}
		} else {
			msg = "Select a naval space and/or squadron."
			action_naval_sources()
			action_naval_destinations()
		}

		V.prompt = say_action_header(header) + say_action(msg) + say_action_points()
	},
	space(s) {
		push_undo()
		if (G.navy_to >= 0) {
			G.navy_from = s
		} else {
			G.navy_to = s
		}
		if ((G.navy_to >= 0) && ((G.navy_from >= 0) || G.navy_from_navy_box)) {
			goto ("naval_flow")
		}
	},
	navy_box() {
		push_undo()
		G.navy_from_navy_box = true
		if (G.navy_to >= 0) goto ("naval_flow")
	}
}

function get_naval_cost()
{
	if (G.flags[G.navy_to] === NONE) return 1
	return G.navy_from_navy_box ? 3 : 2
}

P.naval_flow = script(`
    eval {
    	G.action_cost = get_naval_cost()
    	require_ministry_unexhausted(R, CHOISEUL, "For an extra military action point", 0, true, true)
    }
	if (G.has_required_ministry) {
		eval { use_choiseul() }
	}

    call decide_how_and_whether_to_spend_action_points
	if (!G.paid_action_cost) {
		eval { G.action_header = "" }         
		return
	}

    eval { execute_naval_move() }    	
`)

function execute_naval_move()
{
	// If we're displacing an enemy fleet, send it back to the Navy Box
	if (G.navy_displace && (G.navy_to >= 0)) {
		let whom = 1 - G.active
		G.navy_box[whom]++
	}

	// If we're moving from the Navy Box, subtract it
	if (G.navy_from_navy_box) {
		if (G.navy_box[G.active] < 1) {
			throw new Error("Allowed move from Navy Box when no " + data.flags[G.active].adj + " squadrons were there!")
		} else {
			G.navy_box[G.active]--
		}
	}

	// If we're moving from a space on the board, remove the navy from it
	if (G.navy_from >= 0) {
		reflag_space (G.navy_from, NONE, true)
	}

	// Check if we somehow didn't move a navy from *anywhere*
	if (!G.navy_from_navy_box && (G.navy_from < 0)) {
		throw new Error("Naval move with no source! G.navy_to: " + G.navy_to)
	}

	// Put a navy in the space we're moving to
	if (G.navy_to >= 0) {
		reflag_space (G.navy_to, G.active, true)
	} else {
		throw new Error("Naval move with no destination! G.navy_from: " + G.navy_from)
	}

	// Log the result
	let msg = data.flags[G.active].name + " "
	if (G.navy_displace) {
		msg += " DISPLACES " + data.flags[1 - G.active].adj + " squadron at " + data.spaces[G.navy_to].name
		if (G.navy_from_navy_box) {
			msg += " with a squadron from the Navy Box."
		} else {
			msg += " with its squadron from " + data.spaces[G.navy_from].name + "."
		}
	} else if (G.navy_from_navy_box) {
		msg += " deploys a squadron from the Navy Box to " + data.spaces[G.navy_to].name + "."
	} else {
		msg += " moves its squadron from " + data.spaces[G.navy_from].name + " to " + data.spaces[G.navy_to].name + "."
	}
	log (msg)

	if (G.navy_from_navy_box || G.navy_displace) {
		log (say_navy_box())
	}
}


function reflag_space(s, who, silent = false) {
	var former = G.flags[s]
	if (former !== who) {
		G.flags[s] = who
		//if (!silent) log(data.spaces[s].name + ": " + data.flags[former].name + " -> " + data.flags[G.flags[s]].name)
		if (!silent) {
			let msg = data.spaces[s].name + " "
			if (who === NONE) {
				msg += "unflagged"
			} else {
				msg += "flagged " + data.flags[G.flags[s]].adj
			}
			msg += "."
			log(bold(msg))
		}
	}

	mark_dirty(s) // We've now changed this space. Highlight it until next investment tile.

	if ((who === BRITAIN) && has_huguenots(s)) {
		remove_huguenots(s)
	}

	remove_conflict_marker(s) // Reflagging a space removes any conflict marker

	update_advantages() // This could change the ownership of an advantage
	//update_flag_counts()  //BR// NB:Updating flag counts is implicit in removing conflict marker above
}


function eligible_to_play_event()
{
	return ((data.investments[G.played_tile].majorval <= 3) || has_ministry(R, MARQUIS_DE_CONDORCET))
}

function advance_action_round_subphase(subphase)
{
	if (G.action_round_subphase >= subphase) return
    let prior_phase = G.action_round_subphase
	G.action_round_subphase = subphase

	if ((subphase >= BEFORE_SPENDING_ACTION_POINTS) && (prior_phase <= OPTION_TO_PLAY_EVENT) && eligible_to_play_event()) {
		log_box_begin(G.active, "NO EVENT PLAYED", LOG_BOX_EVENT)
		log_box_end(LOG_BOX_EVENT)
		//log ("\nNo Event played.")
	}
}

// Set up our tracking of an impending "How would you like to pay for this, Sir?" situation
function action_cost_setup(s, t) {

	// The space we're checking, if any (could be -1)
	G.active_space = s

	// Flavor of action we're trying to perform (i.e. ECON, DIPLO, MIL)
	G.action_type = t

	// Have we committed to a minor action
	G.action_minor = false

	// Is this action eligible to be a minor one (e.g. not removing enemy flag, and we have minor action points available)
	G.eligible_minor = eligible_for_minor_action(s, G.active) && (G.action_points_minor[G.action_type] > 0)

	// How many action points (of the active flavor) are immediately available (without taking debt, spending TRP, or otherwise invoking an ability to gain more)
	G.action_points_available_now  = action_points_available(G.active, G.active_space, G.action_type, false, space_rules(G.active_space, G.action_type))

	// How many action points (of the active flavor) would we have total, if we took all possible debt and spent all our TRP. Our notional absolute maximum w/o needing an ability/advantage.
	G.action_points_available_debt = action_points_available(G.active, G.active_space, G.action_type, true, space_rules(G.active_space, G.action_type))

	// Clause to remind player why he might be wanting to cough up enough debt or whatever (e.g. "... to unflag Denmark")
	G.action_string = ""

	// Header to remind player of main action he might want to be paying for
	G.action_header = ""

	// Have we wpent any debt on the current action
	G.debt_spent = 0

	// Have we spent any TRP on the current action
	G.treaty_points_spent = 0

	// Do we need to flip a ministry in order to get a discount or be able to do the action (if so, this is the card id of the ministry)
	G.needs_to_flip_ministry = -1

	// Eligible to use Huguenots discount?
	G.eligible_for_huguenots = false
}

// Player has clicked a space during action phase, so we're probably reflagging it (but we might be removing conflict or deploying navies)
function handle_space_click(s, force_type = -1)
{
	action_cost_setup(s, (force_type > 0) ? force_type : space_action_type(s))

	if (data.spaces[s].type === NAVAL) {
		handle_naval_space(s)
		return
	}

	G.action_cost = action_point_cost(G.active, s, G.action_type)

	if (G.action_type !== MIL) {
		if (G.flags[s] === NONE) {
			G.action_string = "to flag " + data.spaces[G.active_space].name
			G.action_header = "FLAG " + data.spaces[G.active_space].name + ": "
		}
		else {
			G.action_string = "to unflag " + data.spaces[G.active_space].name
			G.action_header = "UNFLAG " + data.spaces[G.active_space].name + ": "
		}
	} else {
		if (has_conflict_marker(s)) {
			G.action_string = "to remove conflict at " + data.spaces[G.active_space].name
			G.action_header = "REMOVE CONFLICT: "
		} else if (data.spaces[s].type === FORT) {
			if (G.flags[s] === NONE) {
				G.action_string = "to build a fort at " + data.spaces[G.active_space].name
				G.action_header = "BUILD FORT: "
			} else if (is_damaged_fort(s)) {
				if (G.flags[s] === G.active) {
					G.action_string = "to repair fort at " + data.spaces[G.active_space].name
					G.action_header = "REPAIR FORT: "
				} else {
					G.action_string = "to seize fort at " + data.spaces[G.active_space].name
					G.action_header = "SEIZE FORT: "
				}
			}
		}
	}

	//TODO - ministries and stuff that might give discounts

	G.needs_to_flip_ministry = -1
	if ((G.action_type === DIPLO) && [ IRELAND_1, IRELAND_2, SCOTLAND_1, SCOTLAND_2 ].includes(s) && (G.flags[s] === NONE)) {
		if (has_inactive_ministry(G.active, JONATHAN_SWIFT)) {
			G.needs_to_flip_ministry = JONATHAN_SWIFT
		}
	}

	call("space_flow")
}

P.space_flow = script(`

	eval { mark_dirty(G.active_space) } // Mark our space dirty -- so that it will be highlighted as our current action. //TODO - maybe a different highlight?

    if (G.needs_to_flip_ministry >= 0) {
    	eval { 
    		require_ministry(R, G.needs_to_flip_ministry, "For an action point discount", true)    		
    	    G.action_cost = action_point_cost(G.active, G.action_space, G.action_type)
    	}	    	
    }
    
    // These advantages reduce the cost of unflagging a *market* in *north america* to 1 econ point.
    if ((G.action_type === ECON) && (data.spaces[G.active_space].region === REGION_NORTH_AMERICA) && (G.flags[G.active_space] === (1 - G.active)) && (G.action_cost > 1)) {
    	eval { require_advantage(R, FUR_TRADE, "To reduce action cost to 1", true) }
    	if (G.used_required_advantage) {
    		eval { G.action_cost = 1 }
    	}
    }
    
    // These advantages reduce the cost of unflagging a *market* in *north america* BY 1 action point
    if ((G.action_type === ECON) && (data.spaces[G.active_space].region === REGION_NORTH_AMERICA) && (G.flags[G.active_space] === (1 - G.active)) && (G.action_cost > 1)) {
    	eval { require_advantage(R, WHEAT, "To reduce action cost by 1", true) }
    	if (G.used_required_advantage) {
    		eval { G.action_cost = G.action_cost - 1 }
    	}
    }
    
    // These advantages reduce the cost of unflagging a *market* in *india* BY 1 action point
    if ((G.action_type === ECON) && (data.spaces[G.active_space].region === REGION_INDIA) && (G.flags[G.active_space] === (1 - G.active)) && (G.action_cost > 1)) {
    	eval { require_advantage(R, TEXTILES, "To reduce action cost by 1", true) }
    	if (G.used_required_advantage) {
    		eval { G.action_cost = G.action_cost - 1 }
    	}
    	if ((G.action_cost > 1) && (G.advantages_used_this_turn < 2)) {
			eval { require_advantage(R, SILK, "To reduce action cost by 1", true) }
			if (G.used_required_advantage) {
				eval { G.action_cost = G.action_cost - 1 }
			}
		}
    }
    
    // These advantages reduce the cost of unflagging a *market* in *the caribbean* BY 1 action point
    if ((G.action_type === ECON) && (data.spaces[G.active_space].region === REGION_CARIBBEAN) && (G.flags[G.active_space] === (1 - G.active)) && (G.action_cost > 1)) {
    	eval { require_advantage(R, RUM, "To reduce action cost by 1", true) }
    	if (G.used_required_advantage) {
    		eval { G.action_cost = G.action_cost - 1 }
    	}
    	if ((G.action_cost > 1) && (G.advantages_used_this_turn < 2)) {
			eval { require_advantage(R, RUM, "To reduce action cost by 1", true) }
			if (G.used_required_advantage) {
				eval { G.action_cost = G.action_cost - 1 }
			}
		}
    }
    
    // European reduce-cost-to-1 unflagging advantages
    if ((G.action_type === DIPLO) && (data.spaces[G.active_space].region === REGION_EUROPE) && (G.flags[G.active_space] === (1 - G.active)) && (G.action_cost > 1)) {
    	if ((G.active_space === RUSSIA) || (G.active_space === SWEDEN) || (G.active_space === BAVARIA)) {
    	    eval { require_advantage(R, GERMAN_DIPLOMACY, "To reduce action cost to 1", true) }
    		if (G.used_required_advantage) {
    			eval { G.action_cost = 1 }
    		}
    	} else {
			if (((G.active_space >= PRUSSIA_1) && (G.active_space <= PRUSSIA_4)) || (G.active_space === GERMAN_STATES_1) || (G.active_space === GERMAN_STATES_2)) {
				eval { require_advantage(R, SILESIA_NEGOTIATIONS, "To reduce action cost to 1", true) }
				if (G.used_required_advantage) {
					eval { G.action_cost = 1 }
				}
			} else {
				if (((G.active_space >= SPAIN_1) && (G.active_space <= SPAIN_4)) || ((G.active_space >= AUSTRIA_1) && (G.active_space <= AUSTRIA_4))) {
					eval { require_advantage(R, ITALY_INFLUENCE, "To reduce action cost to 1", true) }
					if (G.used_required_advantage) {
						eval { G.action_cost = 1 }
					}    	
				}
			}
		}
    }
    
    eval {
    	G.eligible_for_huguenots = (G.active === FRANCE) && (G.action_type === ECON) && any_huguenots_in_region(data.spaces[G.active_space].region) && (G.action_cost > 1)
    }
    
    if (G.eligible_for_huguenots) {
    	call ask_about_huguenots
    	if (G.eligible_for_huguenots) {
    		eval { G.action_cost -= 1 }
    	}
    }

	call decide_how_and_whether_to_spend_action_points	
	eval { G.action_header = "" } 
    if (!G.paid_action_cost) {
    	return
    }
       
    eval { do_reflag_space() }
`)


P.decide_how_and_whether_to_spend_action_points = script(`
	eval { 	G.paid_action_cost = false }
	
    if (G.eligible_minor) {
    	if (G.action_points_available_debt < G.action_cost + 2) {
        	eval { G.action_minor = true }  // If the only way we can do this is as a minor action, we don't need to make a choice
        }
        if (!action_points_eligible_major(G.action_type, space_rules(G.active_space, G.action_type))) { 
			eval { G.action_minor = true }  // If we're not eligible for a major action in this category, we don't need to make a choice    
        }
    }
    
    // If we could do *either* major or minor action, make our choice
    if (G.eligible_minor && !G.action_minor) {
    	call choice_use_minor_action
    	eval {
    		if (!G.action_minor) {
    			G.eligible_minor = false
    			G.action_points_available_debt -= G.action_points_minor[G.action_type]
    			G.action_points_available_now  -= G.action_points_minor[G.action_type]
    		}
    	}  	
    }
    
    // If it is going to cost debt or TRPs, then see if player wants to spend them
    if (G.action_points_available_now < G.action_cost) {
    	call confirm_spend_debt_or_trps
    	if (G.action_points_available_now < G.action_cost) {
    		return // If we didn't decide to spend enough, we're done
    	}
    }
    
    eval { pay_action_cost() }
`)


// Returns an "s" if the amount is anything but 1; returns "" if amount is one
function s(amount) {
	if (amount !== 1) return "s"
	return ""
}

function pay_action_cost() {
	advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)

	G.paid_action_cost = true

	let msg = G.action_cost + " " + data.action_points[G.action_type].name + " action point" + s(G.action_cost) + " spent."
	if (action_points_eligible_major(G.action_type, space_rules(G.active_space, G.action_type)) && G.action_points_minor[G.action_type] > 0) {
		if (G.action_minor) {
			msg += " (Minor action)"
		} else {
			msg += " (Major action)"
		}
	}
	log(italic(msg))

	G.action_cost -= G.action_points_committed_bonus[G.action_type] // Spend any committed bonus points first

	if (G.action_minor) {
		// Minor actions always zero out the minor action points (even if the cost was less)
		G.action_points_minor[G.action_type] = 0
		G.action_cost = Math.max(0, G.action_cost - 2)
	}

	// Spent contingent points, if available
	for (let rule of space_rules(G.active_space, G.action_type)) {
		G.action_cost = use_contingent(G.action_cost, G.action_type, rule)
	}

	if (G.action_points_major[G.action_type] >= G.action_cost) {
		G.action_points_major[G.action_type] -= G.action_cost
		G.action_cost = 0
	}
	else {
		// Bad. Somehow we got in here without enough action points to pay for the cost
		console.error("ERROR: Reached paying action costs without enough action points (" + G.action_points_major[G.action_type] + ") to repay the remaining cost (" + G.action_cost + ")!")
		G.action_points_major[G.action_type] = 0
		G.action_cost = 0
	}
}

function do_reflag_space(repair_if_damaged = true) {
	let whom = (G.flags[G.active_space] === NONE) ? G.active : NONE

	if ((data.spaces[G.active_space].type === FORT) && repair_if_damaged) {
		if (is_damaged_fort(G.active_space)) {
			set_damaged_fort(G.active_space, false)
			if (G.flags[G.active_space] === G.active) {
				log ("Fort repaired at " + data.spaces[G.active_space].name)
			}
			else {
				log ("Damaged fort seized at " + data.spaces[G.active_space].name)
				whom = G.active // We go all the way to our team, no stop at neutral
			}
		}
	}

	reflag_space(G.active_space, whom)
	set_add(G.action_point_regions[G.action_type], data.spaces[G.active_space].region) // We've now used this flavor of action point in this region
}


P.choice_use_minor_action = {
	prompt() {
		V.prompt = say_action_header() + say_action("Use major or minor action" + ((G.action_string !== "") ? " " + G.action_string : "") + "?") + say_action_points()
		action ("major")
		action ("minor")
	},
	major() {
		push_undo()
		G.action_minor = false
		end()
	},
	minor() {
		push_undo()
		G.action_minor = true
		end()
	}
}

function add_action_point()
{
	G.action_points_available_now++
	if (G.action_minor) {
		G.action_points_minor[G.action_type]++
	} else {
		G.action_points_major[G.action_type]++
	}
}

// Player needs to spend debt or action points to do the thing he wants to do. See if that's okay with him
P.confirm_spend_debt_or_trps = {
	prompt() {
		if (!action_points_eligible_major(G.action_type, space_rules(G.active_space, G.action_type)) && (G.action_points_minor[G.action_type] <= 0)) {
			V.prompt = say_action_header()
			if (G.action_type === G.action_minor_type) {
				V.prompt += say_action("You cannot conduct another action using " + data.action_points[G.action_type].name + " points, as you have already conducted a minor action. ")
			} else { // Probably/Hopefully can't get here, but if you do you have to hit Undo
				V.prompt += say_action("You aren't eligible to conduct an action using " + data.action_points[G.action_type].name + " points.")
			}
		} else if (G.action_points_available_now < G.action_cost) {
			V.prompt = say_action_header()
			V.prompt += say_action(("Pay remaining action point costs (" + G.action_points_available_now + "/" + G.action_cost + " " + data.action_points[G.action_type].short + ")" + ((G.action_string !== "") ? " " + G.action_string : ""))) + ". (Available Debt: " + available_debt(R) + ((G.treaty_points[R] > 0) ? " / Treaty Points: " + G.treaty_points[R] : "") + ")"
			V.prompt += say_action_points()
			if (available_debt(R) > 0) {
				action("paydebt")
			}
			if (G.treaty_points[R] > 0) {
				action("paytrp")
			}
		}
		else {
			V.prompt = say_action_header()
			if ((G.debt_spent > 0) && (G.treaty_points_spent === 0)) {
				V.prompt += say_action("Confirm spending " + G.debt_spent + " debt")
			} else if ((G.treaty_points_spent > 0) && (G.debt_spent === 0)) {
				V.prompt += say_action("Confirm spending " + G.treaty_points_spent + " treaty_points")
			} else {
				V.prompt += say_action("Confirm spending " + G.debt_spent + " debt and " + G.treaty_points_spent + " treaty_points")
			}
			V.prompt += say_action(((G.action_string !== "") ? " " + G.action_string : "") + "?")
			V.prompt += say_action_points()
			action("confirm")
		}
	},
	paydebt() {
		push_undo()
		pay_debt(R, 1)
		G.debt_spent++
		add_action_point()
	},
	paytrp() {
		push_undo()
		pay_treaty_points(R, 1)
		G.treaty_points_spent++
		add_action_point()
	},
	confirm() {
		push_undo()
		if (G.debt_spent > 0) {
			log (data.flags[R].name + " spends " + say_spending(G.debt_spent + " debt.", R))
			//log (data.flags[R].adj + " Debt: " + (G.debt[R] - G.debt_spent) + " -> " + G.debt[R])
		}
		if (G.treaty_points_spent > 0) {
			log (data.flags[R].name + " spends " + say_spending(G.treaty_points_spent + " treaty point" + s(G.treaty_points_spent) + ".", R))
			//log (data.flags[R].adj + " Treaty Points: " + (G.treaty_points[R] + G.treaty_points_spent) + " -> " + G.treaty_points[R])
		}
		end()
	}
}

function say_action_header(msg = null)
{
	if (msg !== null) return bold(msg)
	return bold(G.action_header?.toUpperCase() ?? "")
}

function say_action(msg)
{
	return bold (msg)
}

function say_action_points() {
	return "[P]"
}



/* 5.0 Action Rounds - This is the main place player makes choices during his action round. */
P.action_round_core = {
	//_begin() {
	//	push_undo() // Possibly keep it from backing straight out of e.g. "Confirm reveal ministry?" all the way back to the select-investment-tile step? If I undo from "confirm reveal ministry" I want to be back where I was when I clicked the ministry
	//},
	_resume() {
		log_box_end()
	},
	prompt() {
		var header = "ACTION ROUND " + G.round + ": "
		var prompt = ""

		let any = false

		if (G.action_round_subphase <= OPTION_TO_PLAY_EVENT) {
			if ((data.investments[G.played_tile].majorval <= 3) || has_ministry(R, MARQUIS_DE_CONDORCET)) { // Eligible for event if our tiles major base value was <= 3
				if (any) prompt += ", "
				prompt += "Play Event"
				any = true

				for (var card of G.hand[R]) {
					// Only events that either match=our major action or be "wild" events (the ones that don't show a symbol)
					if ((data.cards[card].action === WILD) || (data.cards[card].action === data.investments[G.played_tile].majortype) ||
						(has_ministry(R, BANK_OF_ENGLAND) && (data.cards[card].action === ECON))) {
						action_event_card(card)
					}
				}
			}
		}

		if (any) prompt += ", "
		prompt += "Spend Action Points or activate Advantage / Ministry. "
		V.prompt = say_action_header(header) + say_action(prompt) + say_action_points();

		action_eligible_advantages()
		action_eligible_ministries()
		action_all_eligible_spaces()

		//action_territories_debug()

		// We probably won't show a face down event deck, nor unbuilt fleets, so special buttons for them
		if (G.action_points_eligible[DIPLO]) {
			button ("draw_event")
		}
		if (G.action_points_eligible[MIL]) {
			if (G.navy_box[G.active] > 0) action_navy_box()
			button ("construct_squadron", (G.unbuilt_squadrons[R] > 0) && (action_points_available(G.active, -1, MIL, true) >= cost_to_build_squadron(R, true)))
			button ("buy_bonus_war_tile")
		}

		//Maybe here "for visibility", or probably better click just the tile you're upgrading on your war sheet (and have warning if you try to end w/o doing it, so you then you remember to go look)
		if (G.military_upgrade) {
			// button ("military_upgrade") // Maybe a button "for visibility" or probably better click just the tile you're upgrading on your war sheet (and have warning if you try to end w/o doing it, so you then you remember to go look)
			for (let theater = 0; theater <= data.wars[G.next_war].theaters; theater++) { //NB: intentionally start at 0 (no-theater-yet) and then also theaters 1-X
				for (var t of G.theater_basic_war_tiles[G.active][theater]) {
					action_basic_war_tile(t)
				}
			}
		}

		// TODO: *possibly* let you click debt/TRP counters to directly spend some in advance of an action
		// if (G.debt[R] < G.debt_limit[R]) button ("Spend Debt")
		// if (G.treaty_points[R] > 0) button ("Spend Treaty Points")

		var left = 0
		for (var i = 0; i < NUM_ACTION_POINTS_TYPES; i++) {
			left += G.action_points_major[i] + G.action_points_minor[i]
		}
		if (G.action_round_subphase === PICKED_TILE_OPTION_TO_PASS) {
			button("confirm_pass_to_reduce_debt")
		} else {
			button((left > 0) ? "confirm_end_action_round" : G.military_upgrade ? "confirm_no_military_upgrade" : "end_action_round")
		}
	},
	draw_event() {
		push_undo()
		advance_action_round_subphase(ACTION_POINTS_ALREADY_SPENT)
		log ("draw event!")
	},
	construct_squadron() {
		push_undo()
		handle_construct_squadron_button()
	},
	basic_war(t) {
		push_undo()
		handle_military_upgrade(t)
	},
	navy_box() {
		push_undo()
		handle_navy_box()
	},
	buy_bonus_war_tile() {	// buy a bonus war tile, and deploy it into the next war
		push_undo()
		handle_buy_bonus_war_tile()
	},
	buy_political_points() { // TBD: Turn 6 only, spend 2 mil to buy 1 diplo. Can't buy both diplo & econ in same turn.

	},
	buy_economic_points() { // TBD: Turn 6 only, spend 2 mil to buy 1 econ. Can't buy both diplo & econ in same turn

	},
	confirm_pass_to_reduce_debt() {
		push_undo()
		var debt_reduction = (G.debt[R] >= 2) ? 2 : (G.debt[R] >= 1) ? 1 : 0
		log(data.flags[R].name + " passes to " + say_spending("reduce debt by " + debt_reduction, R) + ".")
		G.debt[R] = Math.max(0, G.debt[R] - 2)
		end()
	},
	confirm_end_action_round() {
		this.end_action_round()
	},
	confirm_no_military_upgrade() {
		this.end_action_round()
	},
	end_action_round() {
		push_undo()
		end()
	},
	conflict(s) {
		// Usually clicking conflict just resolves as clicking the space, but if we have military points available *and* the other type for this space then clicking the conflict is explicitly to remove the conflict and clicking the space is to take the regular flag action for the space (w/ conflict discount)
		if (!G.action_points_eligible[MIL] || !has_conflict_marker(s)) {
			this.space(s)
		} else {
			push_undo()
			handle_space_click(s, MIL)
		}
	},
	damaged(s) {
		this.space(s)
	},
	space(s) {
		push_undo()
		handle_space_click(s)
	},
	ministry_card(m) {
		push_undo()
		handle_ministry_card_click(m)
	},
	advantage(a) {
		push_undo()
		advance_action_round_subphase(BEFORE_SPENDING_ACTION_POINTS) // Can't play an event after using an advantage
		handle_advantage_click(a)
	},
	event_card(c) {
		push_undo()
		handle_event_card_click(c)
	},
	frenchify() {
		push_undo()
		flagify(FRANCE)
	},
	britify() {
		push_undo()
		flagify(BRITAIN)
	},
	cheatrefresh() {
		push_undo()
		debug_log("Advantages Refreshed")
		advantages_acquired_last_round_now_available()
		G.advantages_used_this_round = 0
	},
	cheat_huguenots() {
		push_undo()
		add_huguenots(QUEBEC_AND_MONTREAL)
		add_huguenots(ACADIA)
		expend_huguenots(ACADIA)
		add_huguenots(LOUISIANA)
		add_huguenots(ST_DOMINGUE)
		add_huguenots(GUADELOUPE)
	},
	cheat_conflict() {
		cheat_conflict_flag = !cheat_conflict_flag
		for (let s = 0; s < NUM_SPACES; s++) {
			if (!can_have_conflict_marker(s)) continue
			if (cheat_conflict_flag) {
				set_conflict_marker(s)
			} else {
				remove_conflict_marker(s)
			}
		}
	},
	cheat_damage() {
		cheat_damage_flag = !cheat_damage_flag
		for (let s = 0; s < NUM_SPACES; s++) {
			if (data.spaces[s].type !== FORT) continue
			if (cheat_damage_flag) {
				set_damaged_fort(s, true)
			} else {
				set_damaged_fort(s, false)
			}
		}
	},
	cheat_cheat() { // Whatever random debug code I want to inject right now

		push_undo()
		G.hand[BRITAIN][0] = ALBERONIS_AMBITION
		G.hand[BRITAIN][1] = FAMINE_IN_IRELAND
		G.hand[BRITAIN][2] = INTEREST_PAYMENTS

		G.hand[FRANCE][0] = ALBERONIS_AMBITION
		G.hand[FRANCE][1] = FAMINE_IN_IRELAND
		G.hand[FRANCE][2] = INTEREST_PAYMENTS

		G.flags[NIAGARA] = FRANCE
	}
}

var cheat_conflict_flag = false
var cheat_damage_flag = false


P.before_end_of_action_round = script(`
	eval { G.action_round_subphase = NOT_ACTION_PHASE }
		
	if (G.round < 4) {
		return // Only need to do the below reminders on the player's last action round of the turn 
	}
	
	if (has_inactive_ministry(R, COURT_OF_THE_SUN_KING)) {
		eval { require_ministry(R, COURT_OF_THE_SUN_KING, "Last chance to flip in time for scoring phase", true) }
	}
	
	if (has_inactive_ministry(R, EAST_INDIA_COMPANY)) {
		eval { require_ministry(R, EAST_INDIA_COMPANY, "Last chance to flip in time for scoring phase", true) }
	}
	
	if (has_inactive_ministry(R, JOHN_LAW)) {
		eval { require_ministry(R, JOHN_LAW, "Last chance to flip in time to reduce debt at end of turn", true) }		
	}
	
	//TODO any other flip-before-scoring reminders
`)


P.end_of_action_round = {
	prompt() {
		V.prompt = say_action_header("ACTION ROUND " + G.round + ": ") + say_action("End of Action Round.")
		button("done")
	},
	done() {
		push_undo()
		end()
	}
}


/* 7.0 WAR TURNS */

P.war_turn = script (`
	call war_resolution_phase
	call war_victory_check_phase
	call war_reset_phase
	if (G.turn < WAR_TURN_AWI) {
		call war_layout_phase
	}
`)



function conquest_point_cost(s)
{
	return has_huguenots(s) ? 2 : 1
}



P.war_theater_review = {
	_begin() {
		G.active = [ FRANCE, BRITAIN ]
	},
	prompt() {
		let msg = say_action_header("WAR TURN: ")
		msg += say_action("Not Yet Implemented")
		V.prompt = msg
		button("done")
	},
	done() {
		set_delete(G.active, R)
		if (G.active.length === 0) {
			end()
		}
	}
}

/* 7.1 - WAR RESOLUTION PHASE */

P.war_resolution_phase = function() {
	log ("#" + data.wars[G.next_war].name + "\n" + data.turns[G.turn].dates)
	log ("=War Resolution Phase")
	goto ("war_theater_review")
	//TODO One theater at a time, in numberical order:
	//TODO   Flip up all war tiles for both players in that theater
	//TODO   Display initial Total Theater Strength
	//TODO   Apply "war tile effects" (e.g. damage-a-fleet, unflag-a-space) - order is exotic, see 7.1.2 - updating Total Theater Strength
	//TODO	 Resolve "Theater Spoils" 7.2
}


/* 7.4 - WAR RESOLUTION PHASE */

P.war_victory_check_phase = function() {
	log ("=War Victory Check Phase")
	//TODO If one player won all theaters by maximum level, they immediately win the game
	end()
}


/* 7.5 - WAR RESET PHASE */

P.war_reset_phase = function () {
	log ("=War Reset Phase")
	//TODO remove all the current bonus war tiles
	//TODO remove any conflict markers that generated strength in this war
	end()
}


function war_layout_reshuffle_basic_war_tiles(new_game) {
	if (new_game) {
		// For a new game we shuffle all the war tiles together
		G.basic_war_tiles = [[], []]
		for (var i = 0; i < NUM_BASE_WAR_TILES; i++) {
			G.basic_war_tiles[FRANCE].push(i)
			G.basic_war_tiles[BRITAIN].push(i + NUM_BASE_WAR_TILES)
		}
	} else {
		// When moving to next war, we return the basic tiles left from the last war to the stock. We *don't* remake the stock from scratch because player may have removed some from the game with military upgrades.
		for (let who = FRANCE; who <= BRITAIN; who++) {
			for (let theater = 0; theater <= data.wars[G.next_war].theaters; theater++) { //NB 0 through <= theaters is intentional
				for (const t in G.theater_basic_war_tiles[who][theater]) {
					G.basic_war_tiles[who].push(t)
				}
			}
		}
	}
	shuffle(G.basic_war_tiles[FRANCE])
	shuffle(G.basic_war_tiles[BRITAIN])

	// Turn them all back face down
	G.bonus_war_tile_revealed = [ [], [] ]
	G.basic_war_tile_revealed = [ [], [] ]
}


/* 7.6 - War layout - each side gets one basic war tile per theater to start out */
function war_layout_basic_war_tiles()
{
	for (var who = FRANCE; who <= BRITAIN; who++) {
		for (var i = 0; i < data.wars[G.next_war].theaters; i++) {
			draw_basic_war_tile(who, rules_military_planning() ? 0 : i + 1)
		}
	}
}

/* 7.6 - WAR LAYOUT PHASE */

P.war_layout_phase = function () {

	let current_war_bonus_tiles = [ 0, 0 ]
	for (var who = FRANCE; who <= BRITAIN; who++) {
		for (var theater = 1; theater <= data.wars[G.next_war].theaters; theater++) {
			current_war_bonus_tiles[who] += G.theater_bonus_war_tiles[who][theater].length
			G.theater_bonus_war_tiles[who][theater] = [] // We just delete the old bonus war tiles, because we're getting a whole new set for the next war
		}
	}

	G.next_war++;
	log ("=War Layout Phase")
	war_layout_reshuffle_basic_war_tiles(false)
	add_next_war_bonus_tiles()
	war_layout_basic_war_tiles()
	log (data.wars[G.next_war].name + " mat and Bonus War Tiles added")

	if (G.next_war === WAR_7YW) {
		for (who = FRANCE; who <= BRITAIN; who++) {
			let amount = Math.min(current_war_bonus_tiles[who], 3)
			if (amount > 0) {
				log(data.flags[who].name + " receives " + amount + " bonus war tiles for Seven Years War.")
				for (var i = 0; i < amount; i++) {
					draw_bonus_war_tile(who, 0)
				}
			}
		}
	}

	//TODO On their respective first action rounds of Turn 4, players place their bonus war tiles into the theaters

	end()
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


const INCLUDE_CONFLICT = 0x01
const INCLUDE_DAMAGED = 0x02

function action_space(s, include = 0) {
	action("space", s)
	if ((include & INCLUDE_CONFLICT) && has_conflict_marker(s)) action_conflict(s)
	if ((include & INCLUDE_DAMAGED) && is_damaged_fort(s)) action_damaged(s)
}

function action_conflict(s) {
	action("conflict", s)
}

function action_damaged(s) {
	action("damaged", s)
}


function action_navy(who) {
	action("navy", who)
}


function action_navy_box()
{
	action("navy_box", 0)
}

function action_theater(t)
{
	action("theater", t)
}

function action_all_theaters() {
	for (let t = 1; t <= data.wars[G.next_war].theaters; t++) { //NB 1 to theaters, inclusive
		action_theater(t)
	}
}

function action_basic_war_tile(t) {
	action("basic_war", t)
}

function action_bonus_war_tile(t) {
	action("bonus_war", t)
}


function debug_log(s) {
	console.log(s)
	log(s)
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


const LOG_BOX_MINISTRY	= 1
const LOG_BOX_EVENT	= 2
const LOG_BOX_ADVANTAGE= 3
const LOG_BOX_MISC     = 4		// Used in other situations -- scoring, wars, etc.

function log_box_begin(who, header, type = LOG_BOX_MISC) {
	if (!G.log_box) {
		G.log_box = []
	}
	if (who > BRITAIN) who = 2 // Turns e.g. NONE into "both"
	G.log_box.push({ "type": type, "who": who })
	log("{" + who + header)
}

function log_box_end(type = 0) {
	if (!G.log_box) return
	if ((type !== 0) && (G.log_box.slice(-1)[0].type !== type)) return // If we were asked to *only* cancel log box if we're currently inside a particular type
	log ("}")
	G.log_box.pop()
	if (G.log_box.length <= 0) G.log_box = null // Null is falsey
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

function flagify(who) {
	for (let s = 0; s < NUM_SPACES; s++) {
		G.flags[s] = who
	}
	update_flag_counts()
	update_advantages(true)
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
				throw new Error("unterminated quote string " + a + b)
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
				throw new Error("unterminated bracket string " + a + b)
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
			throw new Error("expected block (" + body + ")")
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


function discard_undo() {
	if (G.undo) G.undo.pop()
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


// Bit flags. bits = "array" of dwords e.g. G.my_bits. index = which bit are we setting, bool_value = true or false
function bit_set(bits, index, bool_value) {
	var w = index >> 5
	var b = index & 31
	var m = 1 << b
	if (bool_value) {
		bits[w] |= m
	} else {
		bits[w] &= ~m
	}
}

function bit_get(bits, index)
{
	var w = index >> 5
	var b = index & 31
	return ((bits[w] >> b) & 1) > 0
}

// Initializes bitflag field, given the maximum number of bits possible
function bit_init(total_bits) {
	return new Array((total_bits + 31) >> 5).fill(0)
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


// === Log Helpers ===

function log_br() {
	if (G.log.length > 0 && G.log[G.log.length-1] !== "")
		log("")
}

function logi(msg) {
	log(">" + msg)
}
function logii(msg) {
	log(">>" + msg)
}

function log_h1(msg) {
	log_br()
	log(".h1 " + msg)
	log_br()
}

function log_h1(msg) {
	log_br()
	log(".h1 " + msg)
	log_br()
}

function log_h2(msg) {
	log_br()
	log(".h2 " + msg)
	log_br()
}

function log_h3(msg) {
	log_br()
	log(".h3 " + msg)
	log_br()
}



function pad(s, condition = true) {
	if (!condition) return s
	return " " + s + " "
}

function parens(s, condition = true) {
	if (!condition) return s
	return "(" + s + ")"
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
	//return "<span style=\"text-decoration: line-through;\">" + s + "</span>"
}
