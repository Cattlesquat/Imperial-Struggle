const data = {}

data.cards = [
    {},
    { "num":  1, "era": 0, "name": "Carnatic War",               "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                     "effect": "Place 1 Conflict marker in India for each Local Alliance you control there.", "bonus": "Bonus: Damage an enemy Fort or shift a Cotton market in India.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  2, "era": 0, "name": "Acts of Union",              "keywords": {   }, "keylabel": "BONUS: More Prestige spaces in Scotland and Ireland",     "effect": "", "bonus": "", "britishlabel": "United Parliament reduces Scottish intrigue in Europe" "britisheffect": "1 =diplo= (unflagging in Europe only).", "britishbonus": "Bonus: Score 2 VP.", "frenchlabel": "Hapsburgs isolated", "frencheffect": "2 =diplo=", "frenchbonus": "Bonus: Unflag a Political space in Europe (not in Spain or Austria)." },
    { "num":  3, "era": 0, "name": "Tropical Diseases",          "keywords": { 4 }, "keylabel": "BONUS: Scholarship",                                      "effect": "Remove 1 enemy flag, then 1 friendly flag, from Markets in the Caribbean.", "bonus": "Bonus: Remove an additional flag from a Market in theh Caribbean.",  "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  4, "era": 0, "name": "South Sea Speculation",      "keywords": { 0 }, "keylabel": "BONUS: Finance",                                          "effect": "Unflag a Market whose removal does not Isolate any other Markets.", "bonus", "Bonus: -2=mil= to construct a new Squadron this AR. (This can result in the Construct Squadron action costing 0=mil=.)", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  5, "era": 0, "name": "War of Jenkins' Ear",        "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                     "effect": "", "bonus": "", "britishlabel": "Anson returns with Spanish gold", "britisheffect": "Reduce your Debt by 2.", "britishbonus": "Bonus: Add 1 FR Debt.", "frenchlabel": "Cartagena disaster", "frencheffect": "Place a Conflict marker in a BR-flagged Market in the Caribbean", "frenchbonus": "Bonus: 1=mil=." },
    { "num":  6, "era": 0, "name": "Native American Alliances",  "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                     "effect": "", "bonus": "", "britishlabel": "Four Mohawk Kings", "britisheffect": "Shift a Local Alliance in North America.", "britishbonus": "Bonus: Immediately activate an Advantage you control in North America (ignoring Exhaustion).", "frenchlabel": "Alliance with natives", "frencheffect": "2=econ= (North America only).", "frenchbonus": "Bonus: Unflag a Local Alliance in North America." },
    { "num":  7, "era": 0, "name": "Austro-Spanish Rivalry",     "keywords": { 2 }, "keylabel": "BONUS: Governance",                                       "effect": "", "bonus": "", "britishlabel": "Farnese clashes with France", "britisheffect": "Place 1 Conflict marker in Spain", "britishbonus": "Bonus: Remove a FR Bonus War tile from the next War (returning it to their pool).", "frenchlabel": "Charles VI invests in the Netherlands", "frencheffect": "Unflag a space in the Dutch Republic.", "frenchbonus": "Bonus: 2=diplo= or 2=econ= in India." },
    { "num":  8, "era": 0, "name": "Tax Reform",                 "keywords": { 0 }, "keylabel": "BONUS: Finance",                                          "effect": "Reduct your Debt by 2. If you are unable to reduce Debt, you may take 1=econ= for each Debt reduction not taken.", "bonus": "Bonus: Reduct your Debt by an additional 1.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  9, "era": 0, "name": "Great Northern War",         "keywords": { 3 }, "keylabel": "BONUS: Style",                                            "effect": "", "bonus": "", "britishlabel": "Hanover prestige enhanced", "britisheffect": "Shift a Political space in the German States. If both are now BR-flagged, score 2 VP.", "britishbonus": "1 =diplo=", "frenchlabel": "France brokers treaty", "frencheffect": "Shift Russia. If it's already FR-flagged, score 2 VP instead.", "frenchbonus": "Bonus: 1=diplo=." },
    { "num": 10, "era": 0, "name": "Vatican Politics",           "keywords": { 3 }, "keylabel": "BONUS: Style",                                            "effect": "", "bonus": "", "britishlabel": "Protestant states wary", "britisheffect": "2 =diplo= (must be spent in the German States, Prussia, or the Dutch Republic).", "britishbonus": "Bonus: 1=diplo= (Europe).", "frenchlabel": "Catholic unity", "frencheffect": "Shift any Spain or Austria space.", "frenchbonus": "Bonus: If there are no BR flags in Spain and Austria, score 2 VP." },
    { "num": 11, "era": 0, "name": "Calico Acts",                "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                     "effect": "", "bonus": "", "britishlabel": "Calico Act stimulates industry", "britisheffect": "2 =econ=; must be used to unflag Market(s).", "britishbonus": "Bonus: You may score Cotton (as if in Global Demand).", "frenchlabel": "Calico Act enriches smugglers", "frencheffect": "Unflag a Cotton Market.", "frenchbonus": "Bonus: Move a BR Squadron from the map to the Navy Box." },
    { "num": 12, "era": 0, "name": "Military Spending Overruns", "keywords": {   }, "keylabel": "BONUS: You have more Available Debt than your opponent.", "effect": "Your opponent must damage a Fort, remove a Squadron (to Navy Box), or remove a Bonus War Tile from the next War (returning it to their pool).", "bonus": "Bonus: Your opponent must do so again (does not have to be the same choice).", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 13, "era": 0, "name": "Alberoni's Ambition",        "keywords": { 2 }, "keylabel": "BONUS: Governance",                                       "effect": "", "bonus": "", "britishlabel": "Not One Englishman", "britisheffect": "2 =econ=. Must be spent to flag Market(s) next to a BR-flagged Market.", "britishbonus": "Bonus: 1 =econ=, similarly restricted.", "frenchlabel": "Fleury's masterpiece", "frencheffect": "Shift an Alliance space in Austria, the Dutch Republic, or Spain.", "frenchbonus": "Bonus: If both Savoy and Sardinia are FR-flagged, score 3 VP." },
    { "num": 14, "era": 0, "name": "Famine in Ireland",          "keywords": {   }, "keylabel": "",                                                        "effect": "", "bonus": "", "britishlabel": "Famine weakens Jacobites", "britisheffect": "Unflag a FR space in Ireland or Scotland", "britishbonus": "", "frenchlabel": "Grain shipments from America", "frencheffect": "Draw one Bonus War Tile for each space you control in Ireland, and add them to the Jacobite Rebellion theater in the next War.", "frenchbonus": "" },
    { "num": 15, "era": 0, "name": "Interest Payments",          "keywords": { 1 }, "keylabel": "BONUS: You have more Available Debt than your opponent.", "effect": "Reduce your opponent's Debt Limit by one. If your opponent was at Debt Limit, reduce their Debt by one as well, then score 1 VP.", "bonus": "Bonus: Reduce your own Debt by 2.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },

    { "num": 16, "era": 1, "name": "Jonathan's Coffee-House",    "keywords": { 0 }, "keylabel": "BONUS: Finance",                                          "effect": "2 =econ=.", "bonus": "Bonus: 1 additional =econ=, and reduce your Debt by 1.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 16, "era": 1, "name": "Jonathan's Coffee-House",    "keywords": { 0 }, "keylabel": "BONUS: Finance",                                          "effect": "", "bonus": "", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },

]

data.ministries = [
    {},
    { "num":  1, "side": 0, "era" : { 0 },       "name": "The Cardinal Ministers", "keywords": { 2 },    "keylabel": "Governance",         "effect": "Once per turn, at the start of an Action Round in which your Investment Tile has any Diplomatic Action, that Action confers 1 extra =diplo= for each of the following you control (max 3): Savoy, Sardinia, and each Prestige space in Spain and Austria." },
    { "num":  2, "side": 0, "era" : { 0 },       "name": "John Law",               "keywords": { 0 },    "keylabel": "Finance",            "effect": "At the end of each Peace turn, reduce your Debt by 1 (or 2, if you control any spaces in Scotland)." },
    { "num":  3, "side": 0, "era" : { 0 },       "name": "Court of the Sun King",  "keywords": { 3, 4 }, "keylabel": "Style, Scholarship", "effect": "The Award for Europe is worth 1 extra VP to you." },
    { "num":  4, "side": 0, "era" : { 0, 1, 2 }, "name": "Jacobite Uprisings",     "keywords": { },      "keylabel": "None",               "effect": "Once per turn you may use =mil= to shift spaces in Scotland and/or Ireland. Once per turn, on a different Action Round, you may spend 3=mil= to score 1 VP (max 4) for each FR-flagged such space and Jacobite Victory marker. Immediately remove this card from the game after BR play of the Papacy-Hanover Negotiations Ministry card, or after a Jacobite Defeat war result." },
    { "num":  5, "side": 1, "era" : { 0 },       "name": "Robert Walpole",         "keywords": { 2 },    "keylabel": "Governance",         "effect": "Once per turn, you may draw one Event card, then discard one Event card." },
    { "num":  6, "side": 1, "era" : { 0 },       "name": "Jonathan Swift",         "keywords": { 3 },    "keylabel": "Style",              "effect": "Spaces in Ireland and Scotland cost you 1 less =diplo= to flag.\n\nIf you control any spaces in Ireland, your Minor Diplomatic Actions may be used to remove FR flags in Europe." },
    { "num":  7, "side": 1, "era" : { 0, 1 },    "name": "East India Company",     "keywords": { 1 },    "keylabel": "Mercantilism",       "effect": "During the Scoring Phase, score 1 VP for each of the following unexhausted Advantages you control (maximum 3): Textiles, Silk, Fruit, Fur Trade, Rum." },
    { "num":  8, "side": 1, "era" : { 0 },       "name": "Bank of England",        "keywords": { 0 },    "keylabel": "Finance",            "effect": "Once per turn, you may increase your Debt Limit by 1.\n\nOnce per turn, you may play an Economic event even if your selected Investment Tile does not have an Economic Major Action. (It must still have the Event symbol.)" },
    { "num":  9, "side": 0, "era" : { 0 },       "name": "New World Huguenots",    "keywords": { 1 },    "keylabel": "Mercantilism",       "effect": "Once per turn, during a FR Action Round, place 1 Huguenots marker in one FR-flagged Territory in N. America or the Caribbean where there isn't one already. A Huguenots marker increases its space's CP cost by 1. It may be flipped once per game to reduce the =econ= cost of a Market in its Region by 1. It is permanently removed if its space becomes BR-flagged." },
    { "num": 10, "side": 1, "era" : { 0 },       "name": "Edmond Halley",          "keywords": { 4 },    "keylabel": "Scholarship",        "effect": "Once per turn, you may spend 2=mil= to build a Squadron (instead of the usual 4).\n\nOnce per turn, if you have a Squadron in Europe, you may discard an Event card from your hand and take 1 TRP." },


]

data.investments = [
    { "num" :  0, "majortype" : 0, "majorval": 4, "minortype" : 1, "minorval" : 2}, // 4 econ, 2 diplo
    { "num" :  1, "majortype" : 0, "majorval": 4, "minortype" : 1, "minorval" : 2},
    { "num" :  2, "majortype" : 0, "majorval": 4, "minortype" : 2, "minorval" : 2}, // 4 econ, 2 mil
    { "num" :  3, "majortype" : 0, "majorval": 4, "minortype" : 2, "minorval" : 2},
    { "num" :  4, "majortype" : 0, "majorval": 3, "minortype" : 1, "minorval" : 2}, // 3 econ, 2 diplo
    { "num" :  5, "majortype" : 0, "majorval": 3, "minortype" : 2, "minorval" : 2}, // 3 econ, 2 mil
    { "num" :  6, "majortype" : 0, "majorval": 2, "minortype" : 1, "minorval" : 2}, // 2 econ, 2 diplo
    { "num" :  7, "majortype" : 0, "majorval": 2, "minortype" : 2, "minorval" : 2}, // 2 econ, 2 mil

    { "num" :  8, "majortype" : 1, "majorval": 4, "minortype" : 0, "minorval" : 2}, // 4 diplo, 2 econ
    { "num" :  9, "majortype" : 1, "majorval": 4, "minortype" : 0, "minorval" : 2},
    { "num" : 10, "majortype" : 1, "majorval": 4, "minortype" : 2, "minorval" : 2}, // 4 diplo, 2 mil
    { "num" : 11, "majortype" : 1, "majorval": 4, "minortype" : 2, "minorval" : 2},
    { "num" : 12, "majortype" : 1, "majorval": 3, "minortype" : 0, "minorval" : 2}, // 3 diplo, 2 econ
    { "num" : 13, "majortype" : 1, "majorval": 3, "minortype" : 2, "minorval" : 2}, // 3 diplo, 2 mil
    { "num" : 14, "majortype" : 1, "majorval": 2, "minortype" : 0, "minorval" : 2}, // 2 diplo, 2 econ
    { "num" : 15, "majortype" : 1, "majorval": 2, "minortype" : 2, "minorval" : 2}, // 2 diplo, 2 mil

    { "num" : 16, "majortype" : 2, "majorval": 4, "minortype" : 1, "minorval" : 2}, // 4 mil, 2 econ
    { "num" : 17, "majortype" : 2, "majorval": 4, "minortype" : 1, "minorval" : 2},
    { "num" : 18, "majortype" : 2, "majorval": 4, "minortype" : 2, "minorval" : 2}, // 4 mil, 2 diplo
    { "num" : 19, "majortype" : 2, "majorval": 4, "minortype" : 2, "minorval" : 2},
    { "num" : 20, "majortype" : 2, "majorval": 3, "minortype" : 1, "minorval" : 2}, // 3 mil, 2 econ
    { "num" : 21, "majortype" : 2, "majorval": 3, "minortype" : 2, "minorval" : 2}, // 3 mil, 2 diplo
    { "num" : 22, "majortype" : 2, "majorval": 2, "minortype" : 1, "minorval" : 2}, // 2 mil, 2 econ
    { "num" : 23, "majortype" : 2, "majorval": 2, "minortype" : 2, "minorval" : 2}  // 2 mil, 2 diplo
]

data.basic_war_tiles = [
    // French basic war tiles
    { "num" :  0, "side": 0, "val":  2, "type": 0 }, // +2 tile, x3
    { "num" :  1, "side": 0, "val":  2, "type": 0 },
    { "num" :  2, "side": 0, "val":  2, "type": 0 },
    { "num" :  3, "side": 0, "val":  1, "type": 0 }, // +1 tile, x4
    { "num" :  4, "side": 0, "val":  1, "type": 0 },
    { "num" :  5, "side": 0, "val":  1, "type": 0 },
    { "num" :  6, "side": 0, "val":  1, "type": 0 },
    { "num" :  7, "side": 0, "val":  0, "type": 1 }, // 0 w/ Debt, x4
    { "num" :  8, "side": 0, "val":  0, "type": 1 },
    { "num" :  9, "side": 0, "val":  0, "type": 1 },
    { "num" : 10, "side": 0, "val":  0, "type": 1 },
    { "num" : 11, "side": 0, "val":  0, "type": 2 }, // 0 w/ Fort, x2
    { "num" : 12, "side": 0, "val":  0, "type": 2 },
    { "num" : 13, "side": 0, "val": -1, "type": 3 }, // -1 w/ Flag x3
    { "num" : 14, "side": 0, "val": -1, "type": 3 },
    { "num" : 15, "side": 0, "val": -1, "type": 3 },

    // British basic war tiles
    { "num" :  0, "side": 1, "val":  2, "type": 0 }, // +2 tile, x3
    { "num" :  1, "side": 1, "val":  2, "type": 0 },
    { "num" :  2, "side": 1, "val":  2, "type": 0 },
    { "num" :  3, "side": 1, "val":  1, "type": 0 }, // +1 tile, x4
    { "num" :  4, "side": 1, "val":  1, "type": 0 },
    { "num" :  5, "side": 1, "val":  1, "type": 0 },
    { "num" :  6, "side": 1, "val":  1, "type": 0 },
    { "num" :  7, "side": 1, "val":  0, "type": 1 }, // 0 w/ Debt, x4
    { "num" :  8, "side": 1, "val":  0, "type": 1 },
    { "num" :  9, "side": 1, "val":  0, "type": 1 },
    { "num" : 10, "side": 1, "val":  0, "type": 1 },
    { "num" : 11, "side": 1, "val":  0, "type": 2 }, // 0 w/ Fort, x2
    { "num" : 12, "side": 1, "val":  0, "type": 2 },
    { "num" : 13, "side": 1, "val": -1, "type": 3 }, // -1 w/ Flag x3
    { "num" : 14, "side": 1, "val": -1, "type": 3 },
    { "num" : 15, "side": 1, "val": -1, "type": 3 }
]

data.bonus_war_tiles = [
    // French WSS bonus tiles
    { "num" :  0, "side", 0, "val": 3, "type": 0, "war" : 0, "warid", "WSS", "name": "Vendôme" },               // +3
    { "num" :  1, "side", 0, "val": 3, "type": 0, "war" : 0, "warid", "WSS", "name": "de Villars" },
    { "num" :  2, "side", 0, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "Berwick" },               // +2
    { "num" :  3, "side", 0, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "Cadiz Refused" },
    { "num" :  4, "side", 0, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "d'Estrées" },
    { "num" :  5, "side", 0, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "Musketeers" },
    { "num" :  6, "side", 0, "val": 1, "type": 0, "war" : 0, "warid", "WSS", "name": "d'Artagnan" },            // +1
    { "num" :  7, "side", 0, "val": 1, "type": 0, "war" : 0, "warid", "WSS", "name": "Maison du Roi" },
    { "num" :  9, "side", 0, "val": 1, "type": 1, "war" : 0, "warid", "WSS", "name": "Boufflers" },             // +1, Debt
    { "num" :  8, "side", 0, "val": 1, "type": 1, "war" : 0, "warid", "WSS", "name": "de Tessé" },
    { "num" : 10, "side", 0, "val": 1, "type": 2, "war" : 0, "warid", "WSS", "name": "Crack Troops" },          // +1, Fort
    { "num" : 11, "side", 0, "val": 1, "type": 2, "war" : 0, "warid", "WSS", "name": "Ultima Ratio Regum" },

    // British WSS bonus tiles
    { "num" : 12, "side", 1, "val": 3, "type": 0, "war" : 0, "warid", "WSS", "name": "Marlborough" },           // +3
    { "num" : 13, "side", 1, "val": 3, "type": 0, "war" : 0, "warid", "WSS", "name": "Prince Eugene" },
    { "num" : 14, "side", 1, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "Church" },                // +2
    { "num" : 15, "side", 1, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "Galway" },
    { "num" : 16, "side", 1, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "Rooke" },
    { "num" : 17, "side", 1, "val": 2, "type": 0, "war" : 0, "warid", "WSS", "name": "Savoy Defects" },
    { "num" : 18, "side", 1, "val": 1, "type": 0, "war" : 0, "warid", "WSS", "name": "Foot Guards" },           // +1
    { "num" : 19, "side", 1, "val": 1, "type": 0, "war" : 0, "warid", "WSS", "name": "United Parliament" },
    { "num" : 20, "side", 1, "val": 1, "type": 1, "war" : 0, "warid", "WSS", "name": "Huguenot Rebels" },       // +1, Debt
    { "num" : 21, "side", 1, "val": 1, "type": 1, "war" : 0, "warid", "WSS", "name": "Prize Hunting" },
    { "num" : 22, "side", 1, "val": 1, "type": 2, "war" : 0, "warid", "WSS", "name": "Leopold" },               // +1, Fort
    { "num" : 23, "side", 1, "val": 1, "type": 2, "war" : 0, "warid", "WSS", "name": "Louis William" },

    // French WAS bonus tiles
    { "num" : 24, "side", 0, "val": 3, "type": 0, "war" : 1, "warid", "WAS", "name": "Frederick" },             // +3
    { "num" : 25, "side", 0, "val": 3, "type": 0, "war" : 1, "warid", "WAS", "name": "Saxe" },
    { "num" : 26, "side", 0, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "Bonny Prince Charlie" },  // +2
    { "num" : 27, "side", 0, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "Castries" },
    { "num" : 28, "side", 0, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "de la Bourdonnais" },
    { "num" : 29, "side", 0, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "Murray" },
    { "num" : 30, "side", 0, "val": 1, "type": 0, "war" : 1, "warid", "WAS", "name": "Contades" },              // +1
    { "num" : 31, "side", 0, "val": 1, "type": 0, "war" : 1, "warid", "WAS", "name": "O'Sullivan" },
    { "num" : 32, "side", 0, "val": 1, "type": 1, "war" : 1, "warid", "WAS", "name": "de Coigny" },             // +1, Debt
    { "num" : 33, "side", 0, "val": 1, "type": 1, "war" : 1, "warid", "WAS", "name": "Nizam's Favor" },
    { "num" : 34, "side", 0, "val": 1, "type": 2, "war" : 1, "warid", "WAS", "name": "Lowendal" },              // +1, Fort
    { "num" : 35, "side", 0, "val": 1, "type": 2, "war" : 1, "warid", "WAS", "name": "von Schwerin" },

    // British WAS bonus tiles
    { "num" : 36, "side", 1, "val": 3, "type": 0, "war" : 1, "warid", "WAS", "name": "Clive" },                 // +3
    { "num" : 37, "side", 1, "val": 3, "type": 0, "war" : 1, "warid", "WAS", "name": "Stair" },
    { "num" : 38, "side", 1, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "Boscawen" },              // +2
    { "num" : 39, "side", 1, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "Francois de Bussy" },
    { "num" : 40, "side", 1, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "Treaty of Warsaw" },
    { "num" : 41, "side", 1, "val": 2, "type": 0, "war" : 1, "warid", "WAS", "name": "Warren" },
    { "num" : 42, "side", 1, "val": 1, "type": 0, "war" : 1, "warid", "WAS", "name": "de Lorraine" },           // +1
    { "num" : 43, "side", 1, "val": 1, "type": 0, "war" : 1, "warid", "WAS", "name": "King George II" },
    { "num" : 44, "side", 1, "val": 1, "type": 1, "war" : 1, "warid", "WAS", "name": "Chaos in Bavaria" },      // +1, Debt
    { "num" : 45, "side", 1, "val": 1, "type": 1, "war" : 1, "warid", "WAS", "name": "Hungarian Enthusiasm" },
    { "num" : 46, "side", 1, "val": 1, "type": 2, "war" : 1, "warid", "WAS", "name": "Lawrence" },              // +1, Fort
    { "num" : 47, "side", 1, "val": 1, "type": 2, "war" : 1, "warid", "WAS", "name": "Seckendorff" },

    // French 7YW bonus tiles
    { "num" : 48, "side", 0, "val": 3, "type": 0, "war" : 2, "warid", "7YW", "name": "Castries" },              // +3
    { "num" : 49, "side", 0, "val": 3, "type": 0, "war" : 2, "warid", "7YW", "name": "Montcalm" },
    { "num" : 50, "side", 0, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Bougainville" },          // +2
    { "num" : 51, "side", 0, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Coureurs des bois" },
    { "num" : 52, "side", 0, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Nawabs Rally" },
    { "num" : 53, "side", 0, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Villiers" },
    { "num" : 54, "side", 0, "val": 1, "type": 0, "war" : 2, "warid", "7YW", "name": "Broglie" },               // +1
    { "num" : 55, "side", 0, "val": 1, "type": 0, "war" : 2, "warid", "7YW", "name": "Lally" },
    { "num" : 56, "side", 0, "val": 1, "type": 1, "war" : 2, "warid", "7YW", "name": "Beaujeu" },               // +1, Debt
    { "num" : 57, "side", 0, "val": 1, "type": 1, "war" : 2, "warid", "7YW", "name": "Hadik's Raid" },
    { "num" : 58, "side", 0, "val": 1, "type": 2, "war" : 2, "warid", "7YW", "name": "Chevert" },               // +1, Fort
    { "num" : 59, "side", 0, "val": 1, "type": 2, "war" : 2, "warid", "7YW", "name": "Monongahela Ambush" },

    // British 7YW bonus tiles
    { "num" : 60, "side", 1, "val": 3, "type": 0, "war" : 2, "warid", "7YW", "name": "Clive" },                 // +3
    { "num" : 61, "side", 1, "val": 3, "type": 0, "war" : 2, "warid", "7YW", "name": "Old Fritz" },
    { "num" : 62, "side", 1, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Amherst" },               // +2
    { "num" : 63, "side", 1, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Coote" },
    { "num" : 64, "side", 1, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Morta la Bestia" },
    { "num" : 65, "side", 1, "val": 2, "type": 0, "war" : 2, "warid", "7YW", "name": "Wolfe" },
    { "num" : 66, "side", 1, "val": 1, "type": 0, "war" : 2, "warid", "7YW", "name": "Granby" },                // +1
    { "num" : 67, "side", 1, "val": 1, "type": 0, "war" : 2, "warid", "7YW", "name": "Sepoy Volunteers" },
    { "num" : 68, "side", 1, "val": 1, "type": 1, "war" : 2, "warid", "7YW", "name": "Damned Audacity" },       // +1, Debt
    { "num" : 69, "side", 1, "val": 1, "type": 1, "war" : 2, "warid", "7YW", "name": "Johnson" },
    { "num" : 70, "side", 1, "val": 1, "type": 2, "war" : 2, "warid", "7YW", "name": "Bradstreet" },            // +1, Fort
    { "num" : 71, "side", 1, "val": 1, "type": 2, "war" : 2, "warid", "7YW", "name": "Monckton" },

    // French AWI bonus tiles
    { "num" : 72, "side", 0, "val": 3, "type": 0, "war" : 3, "warid", "AWI", "name": "Lafayette" },             // +3
    { "num" : 73, "side", 0, "val": 3, "type": 0, "war" : 3, "warid", "AWI", "name": "Washington" },
    { "num" : 74, "side", 0, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "Arnold" },                // +2
    { "num" : 75, "side", 0, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "East River Wind" },
    { "num" : 76, "side", 0, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "Greene" },
    { "num" : 77, "side", 0, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "von Steuben" },
    { "num" : 78, "side", 0, "val": 1, "type": 0, "war" : 3, "warid", "AWI", "name": "de Grasse" },             // +1
    { "num" : 79, "side", 0, "val": 1, "type": 0, "war" : 3, "warid", "AWI", "name": "Rochambeau" },
    { "num" : 80, "side", 0, "val": 1, "type": 1, "war" : 3, "warid", "AWI", "name": "Bunker Hill" },           // +1, Debt
    { "num" : 81, "side", 0, "val": 1, "type": 1, "war" : 3, "warid", "AWI", "name": "Castelnau" },
    { "num" : 82, "side", 0, "val": 1, "type": 2, "war" : 3, "warid", "AWI", "name": "Morgan's Rifles" },       // +1, Fort
    { "num" : 83, "side", 0, "val": 1, "type": 2, "war" : 3, "warid", "AWI", "name": "de Suffren" },

    // British AWI bonus tiles
    { "num" : 84, "side", 1, "val": 3, "type": 0, "war" : 3, "warid", "AWI", "name": "Coote" },                 // +3
    { "num" : 85, "side", 1, "val": 3, "type": 0, "war" : 3, "warid", "AWI", "name": "Rodney" },
    { "num" : 86, "side", 1, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "Anglo-Dutch Conflict" },  // +2
    { "num" : 87, "side", 1, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "Carleton" },
    { "num" : 88, "side", 1, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "Hessians" },
    { "num" : 89, "side", 1, "val": 2, "type": 0, "war" : 3, "warid", "AWI", "name": "Howe" },
    { "num" : 90, "side", 1, "val": 1, "type": 0, "war" : 3, "warid", "AWI", "name": "Cornplanter" },           // +1
    { "num" : 91, "side", 1, "val": 1, "type": 0, "war" : 3, "warid", "AWI", "name": "Cornwallis" },
    { "num" : 92, "side", 1, "val": 1, "type": 1, "war" : 3, "warid", "AWI", "name": "Brant's Volunteers" },    // +1, Debt
    { "num" : 93, "side", 1, "val": 1, "type": 1, "war" : 3, "warid", "AWI", "name": "Stuart" },
    { "num" : 94, "side", 1, "val": 1, "type": 2, "war" : 3, "warid", "AWI", "name": "André" },                 // +1, Fort
    { "num" : 95, "side", 1, "val": 1, "type": 2, "war" : 3, "warid", "AWI", "name": "Arnold's Treason" }
]

