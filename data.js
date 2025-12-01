const data = {}

data.cards = [
    {},
    {
        "num": 1,
    }
]

data.ministries = [
    {},
    {
        "num": 1,
        "faction": "fr",
    }
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

