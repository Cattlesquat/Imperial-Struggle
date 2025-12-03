const data = {}

data.demands = [
    { "num": 0, "name": "Fish" },
    { "num": 0, "name": "Furs" },
    { "num": 0, "name": "Spice" },
    { "num": 0, "name": "Sugar" },
    { "num": 0, "name": "Tobacco" },
    { "num": 0, "name": "Cotton" },
]

data.awards = [
    { "num": 0, "vp": 3, "by2": true,  "trp": 0 },
    { "num": 1, "vp": 2, "by2": true,  "trp": 0 },
    { "num": 2, "vp": 1, "by2": false, "trp": 1 },
    { "num": 3, "vp": 1, "by2": false, "trp": 1 },
    { "num": 4, "vp": 1, "by2": false, "trp": 0 },
    { "num": 5, "vp": 1, "by2": false, "trp": 0 },
    { "num": 6, "vp": 0, "by2": false, "trp": 1 },
    { "num": 7, "vp": 0, "by2": false, "trp": 1 },
]

data.cards = [
    {},
    { "num":  1, "era": 0, "name": "Carnatic War",                  "action":  3, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "Place 1 Conflict marker in India for each Local Alliance you control there.", "bonus": "Bonus: Damage an enemy Fort or shift a Cotton market in India.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  2, "era": 0, "name": "Acts of Union",                 "action":  3, "keywords": {   }, "keylabel": "BONUS: More Prestige spaces in Scotland and Ireland",                "label": "", "effect": "", "bonus": "", "britishlabel": "United Parliament reduces Scottish intrigue in Europe" "britisheffect": "1 =diplo= (unflagging in Europe only).", "britishbonus": "Bonus: Score 2 VP.", "frenchlabel": "Hapsburgs isolated", "frencheffect": "2 =diplo=", "frenchbonus": "Bonus: Unflag a Political space in Europe (not in Spain or Austria)." },
    { "num":  3, "era": 0, "name": "Tropical Diseases",             "action":  3, "keywords": { 4 }, "keylabel": "BONUS: Scholarship",                                                 "label": "", "effect": "Remove 1 enemy flag, then 1 friendly flag, from Markets in the Caribbean.", "bonus": "Bonus: Remove an additional flag from a Market in theh Caribbean.",  "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  4, "era": 0, "name": "South Sea Speculation",         "action":  3, "keywords": { 0 }, "keylabel": "BONUS: Finance",                                                     "label": "", "effect": "Unflag a Market whose removal does not Isolate any other Markets.", "bonus", "Bonus: -2=mil= to construct a new Squadron this AR. (This can result in the Construct Squadron action costing 0=mil=.)", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  5, "era": 0, "name": "War of Jenkins' Ear",           "action":  2, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "", "bonus": "", "britishlabel": "Anson returns with Spanish gold", "britisheffect": "Reduce your Debt by 2.", "britishbonus": "Bonus: Add 1 FR Debt.", "frenchlabel": "Cartagena disaster", "frencheffect": "Place a Conflict marker in a BR-flagged Market in the Caribbean", "frenchbonus": "Bonus: 1=mil=." },
    { "num":  6, "era": 0, "name": "Native American Alliances",     "action":  1, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "", "bonus": "", "britishlabel": "Four Mohawk Kings", "britisheffect": "Shift a Local Alliance in North America.", "britishbonus": "Bonus: Immediately activate an Advantage you control in North America (ignoring Exhaustion).", "frenchlabel": "Alliance with natives", "frencheffect": "2=econ= (North America only).", "frenchbonus": "Bonus: Unflag a Local Alliance in North America." },
    { "num":  7, "era": 0, "name": "Austro-Spanish Rivalry",        "action":  3, "keywords": { 2 }, "keylabel": "BONUS: Governance",                                                  "label": "", "effect": "", "bonus": "", "britishlabel": "Farnese clashes with France", "britisheffect": "Place 1 Conflict marker in Spain", "britishbonus": "Bonus: Remove a FR Bonus War tile from the next War (returning it to their pool).", "frenchlabel": "Charles VI invests in the Netherlands", "frencheffect": "Unflag a space in the Dutch Republic.", "frenchbonus": "Bonus: 2=diplo= or 2=econ= in India." },
    { "num":  8, "era": 0, "name": "Tax Reform",                    "action":  0, "keywords": { 0 }, "keylabel": "BONUS: Finance",                                                     "label": "", "effect": "Reduct your Debt by 2. If you are unable to reduce Debt, you may take 1=econ= for each Debt reduction not taken.", "bonus": "Bonus: Reduct your Debt by an additional 1.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num":  9, "era": 0, "name": "Great Northern War",            "action":  2, "keywords": { 3 }, "keylabel": "BONUS: Style",                                                       "label": "", "effect": "", "bonus": "", "britishlabel": "Hanover prestige enhanced", "britisheffect": "Shift a Political space in the German States. If both are now BR-flagged, score 2 VP.", "britishbonus": "1 =diplo=", "frenchlabel": "France brokers treaty", "frencheffect": "Shift Russia. If it's already FR-flagged, score 2 VP instead.", "frenchbonus": "Bonus: 1=diplo=." },
    { "num": 10, "era": 0, "name": "Vatican Politics",              "action":  3, "keywords": { 3 }, "keylabel": "BONUS: Style",                                                       "label": "", "effect": "", "bonus": "", "britishlabel": "Protestant states wary", "britisheffect": "2 =diplo= (must be spent in the German States, Prussia, or the Dutch Republic).", "britishbonus": "Bonus: 1=diplo= (Europe).", "frenchlabel": "Catholic unity", "frencheffect": "Shift any Spain or Austria space.", "frenchbonus": "Bonus: If there are no BR flags in Spain and Austria, score 2 VP." },
    { "num": 11, "era": 0, "name": "Calico Acts",                   "action":  0, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "", "bonus": "", "britishlabel": "Calico Act stimulates industry", "britisheffect": "2 =econ=; must be used to unflag Market(s).", "britishbonus": "Bonus: You may score Cotton (as if in Global Demand).", "frenchlabel": "Calico Act enriches smugglers", "frencheffect": "Unflag a Cotton Market.", "frenchbonus": "Bonus: Move a BR Squadron from the map to the Navy Box." },
    { "num": 12, "era": 0, "name": "Military Spending Overruns",    "action":  2, "keywords": {   }, "keylabel": "BONUS: You have more Available Debt than your opponent.",            "label": "", "effect": "Your opponent must damage a Fort, remove a Squadron (to Navy Box), or remove a Bonus War Tile from the next War (returning it to their pool).", "bonus": "Bonus: Your opponent must do so again (does not have to be the same choice).", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 13, "era": 0, "name": "Alberoni's Ambition",           "action":  3, "keywords": { 2 }, "keylabel": "BONUS: Governance",                                                  "label": "", "effect": "", "bonus": "", "britishlabel": "Not One Englishman", "britisheffect": "2 =econ=. Must be spent to flag Market(s) next to a BR-flagged Market.", "britishbonus": "Bonus: 1 =econ=, similarly restricted.", "frenchlabel": "Fleury's masterpiece", "frencheffect": "Shift an Alliance space in Austria, the Dutch Republic, or Spain.", "frenchbonus": "Bonus: If both Savoy and Sardinia are FR-flagged, score 3 VP." },
    { "num": 14, "era": 0, "name": "Famine in Ireland",             "action":  0, "keywords": {   }, "keylabel": "",                                                                   "label": "", "effect": "", "bonus": "", "britishlabel": "Famine weakens Jacobites", "britisheffect": "Unflag a FR space in Ireland or Scotland", "britishbonus": "", "frenchlabel": "Grain shipments from America", "frencheffect": "Draw one Bonus War Tile for each space you control in Ireland, and add them to the Jacobite Rebellion theater in the next War.", "frenchbonus": "" },
    { "num": 15, "era": 0, "name": "Interest Payments",             "action":  0, "keywords": { 1 }, "keylabel": "BONUS: You have more Available Debt than your opponent.",            "label": "", "effect": "Reduce your opponent's Debt Limit by one. If your opponent was at Debt Limit, reduce their Debt by one as well, then score 1 VP.", "bonus": "Bonus: Reduce your own Debt by 2.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },

    { "num": 16, "era": 1, "name": "Caribbean Slave Unrest",        "action":  3, "keywords": {   }, "keylabel": "BONUS: More total Bonus War Tiles in next War",                      "label": "Slaves desert plantations", "effect": "Place 1 Conflict marker in a Market in the Caribbean", "bonus": "Bonus: Place 1 additional Conflict marker as above", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 17, "era": 1, "name": "Pacte de Famille",              "action":  3, "keywords": { 3 }, "keylabel": "BONUS: Style",                                                       "label": "", "effect": "", "bonus": "", "britishlabel": "Bourbon-Hapsburg tension", "britisheffect": "This AR, FR-flagged spaces in Spain or Austria cost 1 less =diplo= for you to unflag.", "britishbonus": "Bonus: 1 =diplo=", "frenchlabel": "Bourbon family ties", "frencheffect": "Refresh up to two Advantages in Europe.", "frenchbonus": "Bonus: 2 =diplo= in Spain and/or Austria." },
    { "num": 18, "era": 1, "name": "Byng's Trial",                  "action":  3, "keywords": {   }, "keylabel": "",                                                                   "label": "", "effect": "", "bonus": "", "britishlabel": "Others encouraged", "britisheffect": "Place the Byng marker in any theater that counts Naval Strength in the next War.", "britishbonus": "", "frenchlabel": "Autres ne sont pas encouragés", "frencheffect": "Remove one BR Squadron from the map or the Navy Box and place it on the Turn Track (on the next peace turn). On that turn's Reset Phase, return it to the Navy Box.", "frenchbonus": "" },
    { "num": 19, "era": 1, "name": "Le Beau Monde",                 "action":  3, "keywords": { 3 }, "keylabel": "BONUS: Style",                                                       "label": "", "effect": "", "bonus": "", "britishlabel": "Huguenot refugees bring their crafts", "britisheffect": "You may put Fur or Cotton into Global Demand.", "britishbonus": "Bonus: 1 =econ=", "frenchlabel": "Dominance of fashion", "frencheffect": "1 =diplo= in Europe.", "frenchbonus": "Bonus: 2 more =diplo= in Europe." },
    { "num": 20, "era": 1, "name": "Hyder Ali",                     "action":  3, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "Take control of one Local Alliance space in India\n-- OR --\nplace 2 Conflict markers in unprotected spaces in India.", "bonus": "Bonus: 2 =econ= in India.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 21, "era": 1, "name": "Co-Hong System",                "action":  1, "keywords": { 4 }, "keylabel": "BONUS: Scholarship",                                                 "label": "Arrangement with Qing", "effect": "Draw a new Global Demand tile, then replace one of this turn's Global Demand tiles with the new one.", "bonus": "Bonus: 2 =econ= in India.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 22, "era": 1, "name": "Corsican Crisis",               "action":  1, "keywords": { 2 }, "keylabel": "BONUS: Governance",                                                  "label": "", "effect": "", "bonus": "", "britishlabel": "British intervene", "britisheffect": "Shift Sardinia or Savoy.", "britishbonus": "Bonus: Score 1 VP if France has no Squadrons in Europe.", "frenchlabel": "British vacillate", "frencheffect": "Unflag a Political space in Europe.", "frenchbonus": "Bonus: Score 1 VP if Britain has no flags in Spain." },
    { "num": 23, "era": 1, "name": "European Panic",                "action":  0, "keywords": {   }, "keylabel": "BONUS: You have at least 3 more Available Debt than your opponent.", "label": "", "effect": "For each Debt your opponent has in excess of yours (up to 4), score 1 VP.", "bonus": "Bonus: Unflag an opposing Political space in Europe.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 24, "era": 1, "name": "West African Gold Mining",      "action":  3, "keywords": {   }, "keylabel": "BONUS: You have more Available Debt than your opponent.",            "label": "", "effect": "1 =econ=", "bonus": "Bonus: 2 =econ= in the Caribbean.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 25, "era": 1, "name": "War of the Quadruple Alliance", "action":  1, "keywords": { 2 }, "keylabel": "BONUS: Governance",                                                  "label": "", "effect": "", "bonus": "", "britishlabel": "British naval prowess", "britisheffect": "Remove a BR Squadron from the map or Navy Box to score 2 VP. It returns to Navy Box on the next peace turn.", "britishbonus": "Bonus: Build a Squadron then take 1 Debt or, if you have any, lose 1 TRP.", "frenchlabel": "France advances Med interests", "frencheffect": "Shift a Spain space.", "frenchbonus": "Bonus: 1 =diplo=" },
    { "num": 26, "era": 1, "name": "Salon d'Hercule",               "action":  3, "keywords": { 3 }, "keylabel": "BONUS: Style",                                                       "label": "", "effect": "", "bonus": "", "britishlabel": "Versailles cost overruns", "britisheffect": "Increase FR Debt by 1.", "britishbonus": "Bonus: Increase FR Debt by another 2.", "frenchlabel": "Salon impresses envoys", "frencheffect": "2 =diplo= in Europe.", "frenchbonus": "Bonus: 2 additional =diplo= in Europe." },
    { "num": 27, "era": 1, "name": "Bengal Famine",                 "action":  0, "keywords": {   }, "keylabel": "",                                                                   "label": "", "effect": "Place up to 2 Conflict markers in Markets or Political spaces in India.", "bonus": "", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 28, "era": 1, "name": "Father le Loutre",              "action":  2, "keywords": { 2 }, "keylabel": "BONUS: Governance",                                                  "label": "", "effect": "", "bonus": "", "britishlabel": "Acadians expelled", "britisheffect": "Place a Conflict marker in a Fish Market.", "britishbonus": "Bonus: 2 =mil= in North America.", "frenchlabel": "Raids on Halifax", "frencheffect": "Bonus: 2 =econ= in North America.", "frenchbonus": "" },
    { "num": 29, "era": 1, "name": "War of the Polish Succession",  "action":  2, "keywords": { 0 }, "keylabel": "BONUS: Finance",                                                     "label": "", "effect": "", "bonus": "", "britishlabel": "British strengthen ties with Russia", "britisheffect": "Gain 2 TRP.", "britishbonus": "Bonus: Shift Russia.", "frenchlabel": "Lorraine secured", "frencheffect": "Score 2 VP.", "frenchbonus": "Shift Russia or Sweden." },
    { "num": 30, "era": 1, "name": "Jonathan's Coffee-House",       "action":  3, "keywords": { 0 }, "keylabel": "BONUS: Finance",                                                     "label": "", "effect": "2 =econ=.", "bonus": "Bonus: 1 additional =econ=, and reduce your Debt by 1.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },

    { "num": 31, "era": 2, "name": "Nootka Incident",               "action":  2, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "", "bonus": "", "britishlabel": "Crisis resolved", "britisheffect": "2 =diplo= or 2 =econ=", "britishbonus": "Bonus: Score 2 VP per BR-flagged alliance space in Spain, then remove those flags.", "frenchlabel": "British dispute territory with Spain", "frencheffect": "Displace a BR Squadron to Navy Box.", "frenchbonus": "Bonus: Construct a Squadron." },
    { "num": 32, "era": 2, "name": "Haitian Revolution",            "action":  3, "keywords": {   }, "keylabel": "BONUS: More total Bonus War Tiles in next War.",                     "label": "", "effect": "Place a Conflict marker in a Caribbean Sugar Market.\n\nConflict markers placed by this event cost 1 extra MP to remove.", "bonus": "Bonus: Place Conflict markers in 2 additional such Markets.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 33, "era": 2, "name": "Loge des Neuf Soeurs",          "action":  3, "keywords": { 3 }, "keylabel": "BONUS: Style",                                                       "label": "", "effect": "", "bonus": "", "britishlabel": "Debate societies infiltrated", "britisheffect": "Place 1 Conflict marker in the Northern Colonies sub-region.", "britishbonus": "Bonus: If there are more BR than FR flags in North America, score 3 VP.", "frenchlabel": "Loges energize politics", "frencheffect": "Activate an Advantage you control outside Europe (ignore Exhaustion).", "frenchbonus": "Bonus: 2 =diplo=." },
    { "num": 34, "era": 2, "name": "La Gabelle",                    "action":  1, "keywords": {   }, "keylabel": "BONUS: You have more Available Debt than your opponent.",            "label": "", "effect": "", "bonus": "", "britishlabel": "Salt tax unrest", "britisheffect": "Exhaust up to 2 Advantages (BR player's choice). They do not take effect.", "britishbonus": "Bonus: 2 =econ=", "frenchlabel": "Salt tax permanently reformed", "frencheffect": "2 =econ=", "frenchbonus": "Score 2 VP (or 3 VP, if you have the Governance keyword)." },
    { "num": 35, "era": 2, "name": "Jesuit Abolition",              "action":  3, "keywords": { 2 }, "keylabel": "BONUS: Governance",                                                  "label": "", "effect": "", "bonus": "", "britishlabel": "Jesuit haciendas dissolve", "britisheffect": "Unflag a Sugar Market.", "britishbonus": "Bonus: 3 =econ= (Caribbean only).", "frenchlabel": "Jesuit liabilities made good", "frencheffect": "Reduce your Debt by 2.", "frenchbonus": "Bonus: Score 2 VP." },
    { "num": 36, "era": 2, "name": "Wealth of Nations",             "action":  3, "keywords": { 4 }, "keylabel": "BONUS: Scholarship",                                                 "label": "", "effect": "Reduce your Debt by 2.", "bonus": "Bonus: 3 =econ=.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 37, "era": 2, "name": "Debt Crisis",                   "action":  0, "keywords": {   }, "keylabel": "BONUS: You have at least 3 more Available Debt than your opponent.", "label": "", "effect": "If you have more Available Debt than opponent, receive 3 =econ= (must be used to unflag Markets).", "bonus": "Bonus: Score 2 VP.", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 38, "era": 2, "name": "East Asia Piracy",              "action":  2, "keywords": {   }, "keylabel": "",                                                                   "label": "", "effect": "If you have more combined Squadrons, Forts, and Local Alliances in India than your opponent does, score 3 VP.", "bonus": "", "britishlabel": "", "britisheffect": "", "britishbonus": "", "frenchlabel": "", "frencheffect": "", "frenchbonus": "" },
    { "num": 39, "era": 2, "name": "Stamp Act",                     "action":  3, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "", "bonus": "", "britishlabel": "Stamp Act deters smuggling", "britisheffect": "Reduce your Debt by 2.", "britishbonus": "Bonus: 2 =econ=", "frenchlabel": "Stamp rule enrages colonists", "frencheffect": "Place 1 Conflict marker in the Northern Colonies sub-region.", "frenchbonus": "Bonus: Place 3 instead." },
    { "num": 30, "era": 2, "name": "Falklands Crisis",              "action":  1, "keywords": {   }, "keylabel": "BONUS: Mediterranean Intrigue",                                      "label": "", "effect": "", "bonus": "", "britishlabel": "Spain concedes Egmont", "britisheffect": "If there is a BR-flagged space in Spain, score 1 VP.", "britishbonus": "Bonus: Unflag a space in Spain.", "frenchlabel": "France tips balance", "frencheffect": "Receive 1 =mil= for each FR flag in Spain.", "frenchbonus": "Bonus: Remove a BR Squadron from the game." },
    { "num": 41, "era": 2, "name": "Cook and Bougainville",         "action":  3, "keywords": { 1 }, "keylabel": "BONUS: Mercantilism",                                                "label": "", "effect": "", "bonus": "", "britishlabel": "Cook maps the Pacific", "britisheffect": "1 =econ= for every 2 Squadrons you have on the map or in the Navy Box.", "britishbonus": "Bonus: Draw a Bonus War Tile.", "frenchlabel": "Bougainville's circumnavigation", "frencheffect": "Add a Squadron to the Navy Box.", "frenchbonus": "Bonus: Reduce your Debt by 2." },
]

data.ministries = [
    {},
    { "num":  1, "side": 0, "era": { 0 },       "name": "The Cardinal Ministers",      "keywords": { 2 },    "keylabel": "Governance",           "effect": "Once per turn, at the start of an Action Round in which your Investment Tile has any Diplomatic Action, that Action confers 1 extra =diplo= for each of the following you control (max 3): Savoy, Sardinia, and each Prestige space in Spain and Austria." },
    { "num":  2, "side": 0, "era": { 0 },       "name": "John Law",                    "keywords": { 0 },    "keylabel": "Finance",              "effect": "At the end of each Peace turn, reduce your Debt by 1 (or 2, if you control any spaces in Scotland)." },
    { "num":  3, "side": 0, "era": { 0 },       "name": "Court of the Sun King",       "keywords": { 3, 4 }, "keylabel": "Style, Scholarship",   "effect": "The Award for Europe is worth 1 extra VP to you." },
    { "num":  4, "side": 0, "era": { 0, 1, 2 }, "name": "Jacobite Uprisings",          "keywords": { },      "keylabel": "None",                 "effect": "Once per turn you may use =mil= to shift spaces in Scotland and/or Ireland. Once per turn, on a different Action Round, you may spend 3=mil= to score 1 VP (max 4) for each FR-flagged such space and Jacobite Victory marker. Immediately remove this card from the game after BR play of the Papacy-Hanover Negotiations Ministry card, or after a Jacobite Defeat war result." },
    { "num":  5, "side": 1, "era": { 0 },       "name": "Robert Walpole",              "keywords": { 2 },    "keylabel": "Governance",           "effect": "Once per turn, you may draw one Event card, then discard one Event card." },
    { "num":  6, "side": 1, "era": { 0 },       "name": "Jonathan Swift",              "keywords": { 3 },    "keylabel": "Style",                "effect": "Spaces in Ireland and Scotland cost you 1 less =diplo= to flag.\n\nIf you control any spaces in Ireland, your Minor Diplomatic Actions may be used to remove FR flags in Europe." },
    { "num":  7, "side": 1, "era": { 0, 1 },    "name": "East India Company",          "keywords": { 1 },    "keylabel": "Mercantilism",         "effect": "During the Scoring Phase, score 1 VP for each of the following unexhausted Advantages you control (maximum 3): Textiles, Silk, Fruit, Fur Trade, Rum." },
    { "num":  8, "side": 1, "era": { 0 },       "name": "Bank of England",             "keywords": { 0 },    "keylabel": "Finance",              "effect": "Once per turn, you may increase your Debt Limit by 1.\n\nOnce per turn, you may play an Economic event even if your selected Investment Tile does not have an Economic Major Action. (It must still have the Event symbol.)" },
    { "num":  9, "side": 0, "era": { 0 },       "name": "New World Huguenots",         "keywords": { 1 },    "keylabel": "Mercantilism",         "effect": "Once per turn, during a FR Action Round, place 1 Huguenots marker in one FR-flagged Territory in N. America or the Caribbean where there isn't one already. A Huguenots marker increases its space's CP cost by 1. It may be flipped once per game to reduce the =econ= cost of a Market in its Region by 1. It is permanently removed if its space becomes BR-flagged." },
    { "num": 10, "side": 1, "era": { 0 },       "name": "Edmond Halley",               "keywords": { 4 },    "keylabel": "Scholarship",          "effect": "Once per turn, you may spend 2=mil= to build a Squadron (instead of the usual 4).\n\nOnce per turn, if you have a Squadron in Europe, you may discard an Event card from your hand and take 1 TRP." },

    { "num": 11, "side": 0, "era": { 1 },       "name": "Choiseul",                    "keywords": { 2, 0 }, "keylabel": "Governance, Finance",  "effect": "Once per turn, when taking a Military action, you receive 1 extra =mil= that you may spend on Bonus War Tiles or deploying Squadrons (only). Once per turn, if you have a Squadron in North America, you may may 2 =mil= to construct a new Squadron (instead of the usual 4)." },
    { "num": 12, "side": 0, "era": { 1 },       "name": "Dupleix",                     "keywords": { 1 },    "keylabel": "Mercantilism",         "effect": "The Awards for India, Cotton, and Spice are worth 1 extra TRP to you." },
    { "num": 13, "side": 0, "era": { 1, 2 },    "name": "Pompadour & Du Barry",        "keywords": { 3 },    "keylabel": "Style",                "effect": "The first time each Action Round that you exhaust an Advantage in Europe, gain 1 TRP." },
    { "num": 14, "side": 0, "era": { 1, 2 },    "name": "Voltaire",                    "keywords": { 4 },    "keylabel": "Scholarship",          "effect": "When the Europe Award is given, gain 1 TRP for each multi-space country in which you control a Prestige space (max 3)." },
    { "num": 15, "side": 1, "era": { 1 },       "name": "Pitt the Elder",              "keywords": { 2 },    "keylabel": "Governance",           "effect": "Once per turn, when taking a Diplomatic action, you receive 1 extra =diplo= that you may spend on shifting non-Prestige Political spaces.\n\nOnce per turn, you may pay 2 =mil= to construct a new Squadron (instead of the usual 4)." },
    { "num": 16, "side": 1, "era": { 1 },       "name": "Charles Hanbury Williams",    "keywords": { 3 },    "keylabel": "Style",                "effect": "Once per turn, FR-flagged spaces in Prussia, German States, and Russia cost you 1 less =diplo= to unflag for one Action Round." },
    { "num": 17, "side": 1, "era": { 1, 2 },    "name": "Merchant Banks",              "keywords": { 0 },    "keylabel": "Finance",              "effect": "Ignore the first 2 Debt you take as =econ= each Peace turn, provided you use the Debt. (If this ability is available, you may use it even while at your Debt Limit.)" },
    { "num": 18, "side": 1, "era": { 1, 2 },    "name": "Samuel Johnson",              "keywords": { 4 },    "keylabel": "Scholarship",          "effect": "The Award for Europe is worth 1 extra VP to you, and 1 less VP to France (minimum 0)." },

    { "num": 19, "side": 1, "era": { 2 },       "name": "James Watt",                  "keywords": { 4 },    "keylabel": "Scholarship",          "effect": "If you are forced to take Debt in excess of your Debt Limit, your opponent scores no VP.\n\nThe first time each Action Round your opponent exhausts an Advantage, gain 1 TRP." },
    { "num": 20, "side": 1, "era": { 2 },       "name": "Papacy-Hanover Negotiations", "keywords": { 3 },    "keylabel": "Style",                "effect": "Remove the Jacobite Uprisings Ministry card from the game.\n\nOnce per turn, when taking a Diplomatic action, you receive 2 =diplo= usable only to shift spaces in Scotland and Ireland." },
    { "num": 21, "side": 1, "era": { 2 },       "name": "Townshend Acts",              "keywords": { 1 },    "keylabel": "Mercantilism",         "effect": "Once per turn, at the start of an Action Round, place the Townshend Acts marker on a commodity on the Global Demand display. You may use Minor Actions to unflag that commodity's Markets this turn." },
    { "num": 22, "side": 1, "era": { 2 },       "name": "Edmund Burke",                "keywords": { 2 },    "keylabel": "Governance",           "effect": "Major Diplomatic Actions spent entirely in Europe are worth up to 2 extra =diplo=: one for each Ireland space you control.\n\nSons of Liberty and USA spaces cost 1 less =diplo= for you to shift." },
    { "num": 23, "side": 0, "era": { 2 },       "name": "Turgot",                      "keywords": { 0, 3 }, "keylabel": "Finance, Style",       "effect": "The first Debt you take each Action Round is worth 1 extra Action Point, provided you have more Available Debt than the British." },
    { "num": 24, "side": 0, "era": { 2 },       "name": "North American Trade",        "keywords": { 1 },    "keylabel": "Mercantilism",         "effect": "If you control more Fur and Fish Markets (combined) than your opponent at the start of your Action Round, your Economic Major and Minor Actions are worth 1 extra =econ=.\n\nRefresh your Huguenots markers, if you have any on the map." },
    { "num": 25, "side": 0, "era": { 2 },       "name": "Marquis de Condorcet",        "keywords": { 2 },    "keylabel": "Governance",           "effect": "Once per turn, at the start of your Action Round, you can play an Event even if your selected Investment Tile does not have an event symbol. You must still match the Event's type, if it has one, to the Major Action on your Investment Tile." },
    { "num": 26, "side": 0, "era": { 2 },       "name": "Lavoisier",                   "keywords": { 4 },    "keylabel": "Scholarship",          "effect": "On any Action Round you play an Event with a Bonus effect, and you receive that Bonus effect, your Major and Minor Actions from Investment tiles are worth 1 extra Action Point." },
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
    { "num" : 16, "side": 1, "val":  2, "type": 0 }, // +2 tile, x3
    { "num" : 17, "side": 1, "val":  2, "type": 0 },
    { "num" : 18, "side": 1, "val":  2, "type": 0 },
    { "num" : 19, "side": 1, "val":  1, "type": 0 }, // +1 tile, x4
    { "num" : 20, "side": 1, "val":  1, "type": 0 },
    { "num" : 21, "side": 1, "val":  1, "type": 0 },
    { "num" : 22, "side": 1, "val":  1, "type": 0 },
    { "num" : 23, "side": 1, "val":  0, "type": 1 }, // 0 w/ Debt, x4
    { "num" : 24, "side": 1, "val":  0, "type": 1 },
    { "num" : 25, "side": 1, "val":  0, "type": 1 },
    { "num" : 26, "side": 1, "val":  0, "type": 1 },
    { "num" : 27, "side": 1, "val":  0, "type": 2 }, // 0 w/ Fort, x2
    { "num" : 28, "side": 1, "val":  0, "type": 2 },
    { "num" : 29, "side": 1, "val": -1, "type": 3 }, // -1 w/ Flag x3
    { "num" : 30, "side": 1, "val": -1, "type": 3 },
    { "num" : 31, "side": 1, "val": -1, "type": 3 }
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
    { "num" :  8, "side", 0, "val": 1, "type": 1, "war" : 0, "warid", "WSS", "name": "Boufflers" },             // +1, Debt
    { "num" :  9, "side", 0, "val": 1, "type": 1, "war" : 0, "warid", "WSS", "name": "de Tessé" },
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
    { "num" : 67, "side", 1, "val": 1, "type": 0, "war" : 2, "warid", "7YW", "name": "Sepoy Veterans" },
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

