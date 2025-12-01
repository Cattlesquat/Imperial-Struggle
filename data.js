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

