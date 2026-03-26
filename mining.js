
// Data mining

var D = { }

function report(string)
{
	console.log(string)
}

function is_digit(c) {
	return (c >= '0') && (c <= '9')
}

function data_miner()
{
	D.games             = 0 // Total games scanned (if they lasted until at least the end of turn 1)
	D.games_turn_1      = 0 // Total games discarded because they ended before the end of turn 1
	D.final_scoring     = 0 // Games that reached final scoring
	D.tie_breaker       = 0 // Games decided by tie-breaker
	D.final_tie_breaker = 0 // Games decided by final-tie breaker

	D.turn_reached    = [ 0, 0, 0, 0, 0, 0, 0 ] // Times a turn was reached

	D.first_player     = [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0] ]  // First player by turn
	D.initiative       = [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0] ]  // Initiative holder by turn
	D.init_goes_first  = [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0] ]  // Initiative holder chose to go first
	D.init_goes_second = [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0] ]  // Initiative holder chose to go second

	D.investment_picked = [ ] // How many times investment tile picked by each player  D.investment_picked[i][who]

	D.ministry_picked = [ [], [], [] ] // ministry_picked[era][m] - number of times picked in

	D.advantage_used = []	// How many times advantage used by each player  D.advantage_used[a][who]

	D.final_scoring = 0
	D.final_scoring_wins = [ 0, 0 ]
	D.tie_breaker_wins = [ 0, 0 ]
	D.tie_breaker_final_wins = 0

	D.vp_scored = [ 0, 0 ]
	D.vp_scored_era = [ [0,0], [0,0], [0,0] ]
	D.vp_prestige = [ 0, 0 ]
	D.vp_prestige_era = [ [0,0], [0,0], [0,0] ]
	D.prestige_ties = 0
	D.prestige_wins = [ 0, 0 ]
	D.prestige_wins_era = [ [0,0], [0,0], [0,0] ]
	D.prestige_ties_era = [ 0, 0, 0 ]
	D.trp_gained = [ 0, 0 ]

	D.conquest_point_spent = [] // By space
	D.vp_region = []
	D.region_wins = []
	D.region_wins_era = []
	D.region_ties = [ 0, 0, 0, 0 ]
	D.region_ties_era = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
	D.demand_ties = [ 0, 0, 0, 0, 0, 0 ]
	D.demand_ties_era = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
	D.vp_demand = []
	D.demand_wins = []
	D.demand_wins_era = []

	D.autovictories = 0
	D.autovictory = [ 0, 0 ]
	D.vp_autovictories = 0
	D.vp_autovictory = [0, 0]
	D.war_autovictories = 0
	D.war_autovictory = [0, 0]
	D.peace_autovictories = 0
	D.peace_autovictory = [0, 0]

	D.final_prestige_wins = [0, 0, 0]
	D.final_debt_wins = [0, 0, 0]
	D.final_debt_vp = [ 0, 0, 0 ]
	D.final_demand_wins = [ [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0] ]
	D.final_territory_wins = [ 0, 0, 0 ]
	D.final_territory_spaces = []

	for (let s = 0; s < NUM_SPACES; s++) {
		D.final_territory_spaces[s] = 0
	}

	for (let m = 0; m < NUM_MINISTRY_CARDS + 1; m++) {
		for (let era = 0; era < 3; era++) {
			D.ministry_picked[era][m] = 0
		}
	}

	for (let i = 0; i < NUM_INVESTMENT_TILES; i++) {
		D.investment_picked[i] = [0, 0]
	}

	D.event_played = []
	for (let e = 0; e < NUM_EVENT_CARDS + 1; e++) {
		D.event_played[e] = { }
		D.event_played[e].anyone = 0
		D.event_played[e].by = [ 0, 0 ]
		D.event_played[e].with_bonus = 0
		D.event_played[e].by_with_bonus = [ 0, 0 ]
	}

	for (let a = 0; a < NUM_ADVANTAGES; a++) {
		D.advantage_used[a] = [ 0, 0 ]
	}


	D.region_wins_era = []
	for (let r = 0; r < NUM_REGIONS; r++) {
		D.region_wins[r] = [0, 0]
		D.region_wins_era[r] = [ [0,0], [0,0], [0,0] ]
		D.vp_region[r] = [0, 0]
	}

	for (let d = 0; d < NUM_DEMANDS; d++) {
		D.demand_wins[d] = [0, 0]
		D.demand_wins_era[d] = [ [0,0], [0,0], [0,0] ]
		D.vp_demand[d] = [0, 0]
	}

	D.resigned = 0
	D.resigned_wins = [0, 0]



	const fs = require("fs")
	const sqlite3 = require("better-sqlite3")

	var db = new sqlite3("archive-is.db")

	var select_games_of_title = db.prepare("select * from games natural join game_state where title_id=?")

	for (var game of select_games_of_title.iterate("imperial-struggle")) {
		var G = JSON.parse(game.state)
		data_mine(G.log)
	}

	data_mine_victory()
	data_mine_ministries(FRANCE)
	data_mine_ministries(BRITAIN)
	data_mine_events()
	data_mine_turns()
	data_mine_investments()
	data_mine_advantages()
	data_mine_scoring()

}


function data_mine_victory() {
	report(" ")
	report(" ")
	report("=============================")
	report("= IMPERIAL STRUGGLE - STATS =")
	report("=============================")
	report(" ")

	report("DATA SET")
	report("    " + (D.games + D.games_turn_1) + " Total Games Played")
	report("    " + D.games_turn_1 + " Ended before end of turn 1 (data not used)")
	report("    " + D.games + " Lasted until at least end of turn 1 (data used)")
	report(" ")
	report("VICTORY")

	let total = 0
	for (let who = FRANCE; who <= BRITAIN; who++) {
		total += D.final_scoring_wins[who] + D.resigned_wins[who] + D.autovictory[who]
	}

	for (let who = FRANCE; who <= BRITAIN; who++) {
		report("    " + percent((D.final_scoring_wins[who] + D.resigned_wins[who] + D.autovictory[who]) / total) + " " + data.flags[who].adj + " victories (" + (D.final_scoring_wins[who] + D.resigned_wins[who] + D.autovictory[who]) + ")")
	}

	report ("")
	report("    " + percent(D.autovictories / total) + " Autovictories (" + D.autovictories + ")")
	report("        " + percent(D.vp_autovictories / total) + " Autovictories VP (" + D.vp_autovictories + ", " + percent(D.vp_autovictories / D.autovictories) + " of autovictories)")
	report("        " + percent(D.peace_autovictories / total) + " Autovictories Awards (" + D.peace_autovictories + ", " + percent(D.peace_autovictories / D.autovictories) + " of autovictories)")
	report("        " + percent(D.war_autovictories / total) + " Autovictories Wars (" + D.war_autovictories + ", " + percent(D.war_autovictories / D.autovictories) + " of autovictories)")
	report("    " + percent(D.final_scoring / total) + " Reached Final Scoring (" + D.final_scoring + ")")
	report("    " + percent(D.tie_breaker / total) + " Decided By Tie Breaker (" + D.tie_breaker + ")")
	report("    " + percent(D.final_tie_breaker / total) + " Decided By FINAL Tie Breaker (" + D.final_tie_breaker + ")")
	report("    " + percent(D.resigned / total) + " Opponent Resigned (" + D.resigned + ")")

	for (let who = FRANCE; who <= BRITAIN; who++) {
		report("")
		total = D.final_scoring_wins[who] + D.resigned_wins[who] + D.autovictory[who]
		report(data.flags[who].adj.toUpperCase() + " VICTORIES")
		report("    " + percent(D.autovictory[who] / total) + " Autovictories (" + D.autovictory[who] + ")")
		report("        " + percent(D.vp_autovictory[who] / total) + " Autovictories VP (" + D.vp_autovictory[who] + ", " + percent(D.vp_autovictory[who] / D.autovictory[who]) + " of autovictories)")
		report("        " + percent(D.peace_autovictory[who] / total) + " Autovictories Awards (" + D.peace_autovictory[who] + ", " + percent(D.peace_autovictory[who] / D.autovictory[who]) + " of autovictories)")
		report("        " + percent(D.war_autovictory[who] / total) + " Autovictories Wars (" + D.war_autovictory[who] + ", " + percent(D.war_autovictory[who] / D.autovictory[who]) + " of autovictories)")
		report("    " + percent(D.final_scoring_wins[who] / total) + " Reached Final Scoring (" + D.final_scoring_wins[who] + ")")
		report("    " + percent(D.tie_breaker_wins[who] / total) + " Decided By Tie Breaker (" + D.tie_breaker_wins[who] + ")")
		report("    " + percent((who === BRITAIN) ? (D.final_tie_breaker / total) : 0) + " Decided By FINAL Tie Breaker (" + ((who === BRITAIN) ? D.final_tie_breaker : 0) + ")")
		report("    " + percent(D.resigned_wins[who] / total) + " Opponent Resigned (" + D.resigned_wins[who] + ")")
	}
}

function say_eras(array, front = "")
{
	return (" (" + front + "Era 1: " + array[0] + ", Era 2: " + array[1] + ", Era 3: " + array[2] + ")")
}


function say_eras_percent(array, era_total, front = "")
{
	return (" (" + front + "Era 1: " + percent(array[0]/era_total[0]) + ", Era 2: " + percent(array[1]/era_total[1]) + ", Era 3: " + percent(array[2]/era_total[2]) + ")")
}

function say_eras_who(array, who, front = "")
{
	return (" (" + front + "Era 1: " + array[0][who] + ", Era 2: " + array[1][who] + ", Era 3: " + array[2][who] + ")")
}

function say_eras_who_percent(array, era_total, who, front = "")
{
	return (" (" + front + "Era 1: " + percent(array[0][who] / era_total[0]) + ", Era 2: " + percent(array[1][who] / era_total[1]) + ", Era 3: " + percent(array[2][who]/era_total[2]) + ")")
}


function data_mine_scoring()
{
	report("")
	report("SCORING")
	report("    " + D.vp_scored[FRANCE] + " VP total scored by France (Era 1: " + D.vp_scored_era[0][FRANCE] + ", Era 2: " + D.vp_scored_era[1][FRANCE] + ", Era 3: " + D.vp_scored_era[2][FRANCE] + ")")
	report("    " + D.vp_scored[BRITAIN] + " VP total scored by Britain (Era 1: " + D.vp_scored_era[0][BRITAIN] + ", Era 2: " + D.vp_scored_era[1][BRITAIN] + ", Era 3: " + D.vp_scored_era[2][BRITAIN] + ")")
	report("")

	let total = D.prestige_wins[FRANCE] + D.prestige_wins[BRITAIN] + D.prestige_ties
	let era_total     = [ ]
	for (let era = 0; era <= 2; era++) {
		era_total[era] = D.prestige_wins_era[era][FRANCE] + D.prestige_wins_era[era][BRITAIN] + D.prestige_ties_era[era]
	}
	report("    PRESTIGE Scoring")
	for (let who = FRANCE; who <= BRITAIN; who++) {
		report("        " + percent(D.prestige_wins[who] / total) + " Prestige wins for " + data.flags[who].name + say_eras_who_percent(D.prestige_wins_era, era_total, who))
	}
	report("        " + percent(D.prestige_ties/total) + " Ties " + say_eras_percent(D.prestige_ties_era, era_total))

	for (let r = 0; r < NUM_REGIONS; r++) {
		report ("")
		report ("    " + data.regions[r].name.toUpperCase() + " Scoring")
		let total = D.region_wins[r][FRANCE] + D.region_wins[r][BRITAIN] + D.region_ties[r]
		let era_total     = [ ]
		for (let era = 0; era <= 2; era++) {
			era_total[era] = D.region_wins_era[r][era][FRANCE] + D.region_wins_era[r][era][BRITAIN] + D.region_ties_era[r][era]
		}
		for (let who = FRANCE; who <= BRITAIN; who++) {
			report ("        " + percent(D.region_wins[r][who] / total) + " wins for " + data.flags[who].name + say_eras_who_percent(D.region_wins_era[r], era_total, who))
		}
		report ("        " + percent(D.region_ties[r]/total) + " ties " + say_eras_percent(D.region_ties_era[r], era_total))
	}

	for (let d = 0; d < NUM_DEMANDS; d++) {
		report ("")
		report ("    " + data.demands[d].name.toUpperCase() + " Scoring")
		let total = D.demand_wins[d][FRANCE] + D.demand_wins[d][BRITAIN] + D.demand_ties[d]
		let era_total     = [ ]
		for (let era = 0; era <= 2; era++) {
			era_total[era] = D.demand_wins_era[d][era][FRANCE] + D.demand_wins_era[d][era][BRITAIN] + D.demand_ties_era[d][era]
		}
		for (let who = FRANCE; who <= BRITAIN; who++) {
			report("        " + percent(D.demand_wins[d][who]/total) + " wins for " + data.flags[who].name + say_eras_who_percent(D.demand_wins_era[d], era_total, who, "Wins "))
		}
		report ("        " + percent(D.demand_ties[d]/total) + " ties " + say_eras_percent(D.demand_ties_era[d], era_total))
	}
}


function data_mine_advantages()
{
	report("")
	report("ADVANTAGES")
	for (let a = 0; a < NUM_ADVANTAGES; a++) {
		let f = D.advantage_used[a][FRANCE]
		let b = D.advantage_used[a][BRITAIN]
		report("    " + (f + b) + " (" + f + " France, " + b + " Britain): " + data.advantages[a].name)
	}
}


function data_mine_investments()
{
	report("")
	report("INVESTMENT TILES")
	for (let i = 0; i < NUM_INVESTMENT_TILES; i++) {
		let f = D.investment_picked[i][FRANCE]
		let b = D.investment_picked[i][BRITAIN]
		if (data.investments[i].majorval === 4) {
			i++ // whee!!!!
			f += D.investment_picked[i][FRANCE]
			b += D.investment_picked[i][BRITAIN]
		}
		report ("    " + (f + b) + " " + ((data.investments[i].majorval === 4) ? "(2 tiles)" : "(1 tile)" ) + ": " + data.investments[i].name + "  (" + f + " France, " + b + " Britain)" )
	}
}

function data_mine_turns()
{
	D.initiative[1][FRANCE] = D.games
	D.initiative[1][BRITAIN] = 0


	report("")
	report("TURNS & INITIATIVE")
	for (let t = 1; t <= 6; t++) {
		report ("    Turn " + t + ": ")
		report ("        Reached in " + percent(D.turn_reached[t] / D.games) + " of games (" + D.turn_reached[t] + ")")
		let itotal = D.initiative[t][FRANCE] + D.initiative[t][BRITAIN]
		let ftotal = D.first_player[t][FRANCE] + D.first_player[t][BRITAIN]
		report ("        Initiative: " + percent(D.initiative[t][FRANCE] / itotal) + " France, " + percent(D.initiative[t][BRITAIN] / itotal) + " Britain")
		report ("        First Player: " + percent(D.first_player[t][FRANCE] / ftotal) + " France, " + percent(D.first_player[t][BRITAIN] / ftotal) + " Britain")
		report ("        France w/ Initiative: " + percent(D.init_goes_first[t][FRANCE] / (D.init_goes_first[t][FRANCE] + D.init_goes_second[t][FRANCE])) + " Goes First, " + percent(D.init_goes_second[t][FRANCE] / (D.init_goes_first[t][FRANCE] + D.init_goes_second[t][FRANCE])) + " Goes Last" )
		if (t !== 1) {
			report("        Britain w/ Initiative: " + percent(D.init_goes_first[t][BRITAIN] / (D.init_goes_first[t][BRITAIN] + D.init_goes_second[t][BRITAIN])) + " Goes First, " + percent(D.init_goes_second[t][BRITAIN] / (D.init_goes_first[t][BRITAIN] + D.init_goes_second[t][BRITAIN])) + " Goes Last")
		}
	}

	let init = 0
	let first = 0
	let go_first = 0
	let go_second = 0
	for (let who = FRANCE; who <= BRITAIN; who++) {
		D.initiative[7][who] = 0
		D.first_player[7][who] = 0
		D.init_goes_first[7][who] = 0
		D.init_goes_second[7][who] = 0
		for (let t = 1; t <= 6; t++) {
			D.initiative[7][who] += D.initiative[t][who]
			D.first_player[7][who] += D.first_player[t][who]
			D.init_goes_first[7][who] += D.init_goes_first[t][who]
			D.init_goes_second[7][who] += D.init_goes_second[t][who]
			init += D.initiative[t][who]
			first += D.first_player[t][who]
			go_first += D.init_goes_first[t][who]
			go_second += D.init_goes_second[t][who]
		}
	}

	report ("    Overall")
	report ("        Initiative: " + percent(D.initiative[7][FRANCE] / (D.initiative[7][FRANCE] + D.initiative[7][BRITAIN])) + " France, " + percent(D.initiative[7][BRITAIN] / (D.initiative[7][FRANCE] + D.initiative[7][BRITAIN])) + " Britain")
	report ("        Go First: " + percent(D.first_player[7][FRANCE] / (D.first_player[7][FRANCE] + D.first_player[7][BRITAIN])) + " France, " + percent(D.first_player[7][BRITAIN] / (D.first_player[7][FRANCE] + D.first_player[7][BRITAIN])) + " Britain")
	report ("        Initiative player chose to go first " + percent(go_first / (go_first + go_second)) + " of the time overall.")
}



function data_mine_ministries(who)
{
	report (" ")
	report (data.flags[who].adj + " Ministries")
	for (let era = 0; era <= 2; era++) {
		report ("    Era " + (era + 1))
		let total = D.turn_reached[era*2 + 1]

		for (let m = 1; m <= NUM_MINISTRY_CARDS; m++) {
			if (data.ministries[m].side !== who) continue
			if (!D.ministry_picked[era][m]) continue
			let percent = Math.round(((D.ministry_picked[era][m] * 100)) / total)
			let msg = "        " + D.ministry_picked[era][m] + " (" + percent + "%) " + data.ministries[m].name
			report (msg)
		}
	}
}


function percent(v)
{
	return Math.round(v * 100) + "%"
}

function data_mine_events()
{
	report ("")
	report ("EVENT CARDS")
	for (let era = 0; era <= 2; era++) {
		if (era) report("")
		report("    Era " + (era + 1))
		for (let e = 1; e < NUM_EVENT_CARDS; e++) {
			if (data.cards[e].era !== era) continue
			let subset = D.games
			let limit = 1
			let msg = ")"

			if (era === 1) {
				limit = 3
				subset = D.turn_reached[3]
				msg = ", " + percent(D.event_played[e].anyone / subset) + " of games reaching turn " + limit + ")"
			} else if (era === 2) {
				limit = 5
				subset = D.turn_reached[5]
				msg = ", " + percent(D.event_played[e].anyone / subset) + " of games reaching turn " + limit + ")"
			}

			report ("        " + data.cards[e].name + "   " + D.event_played[e].anyone + " plays (" + percent(D.event_played[e].anyone / D.games) + " of all games" + msg)
			report ("            " + D.event_played[e].by[FRANCE] + " France, " + percent(D.event_played[e].by_with_bonus[FRANCE] / D.event_played[e].by[FRANCE]) + " with bonus.")
			report ("            " + D.event_played[e].by[BRITAIN] + " Britain, " + percent(D.event_played[e].by_with_bonus[BRITAIN] / D.event_played[e].by[BRITAIN]) + " with bonus.")
		}
	}

}


function score(who, p, e = -1)
{
	D.vp_scored[who] += p
	if (e >= 0) D.vp_scored_era[e][who] += p
}

function data_mine(log)
{
	let turn = 0
	let awards = [ 0, 0, 0, 0 ]
	let demands
	let initiative = FRANCE
	let first
	let era = 0
	let final_scoring = false

	let lasted_through_turn_1 = false
	for (let idx = 0; idx < log.length; idx++) {
		let l = log[idx]

		if (l.startsWith("=Scoring Phase")) {
			lasted_through_turn_1 = true
			break
		}
	}

	// Throw away (mostly) games that ended before the end of turn 1
	if (!lasted_through_turn_1) {
		D.games_turn_1++
		return
	}

	D.games++

	for (let idx = 0; idx < log.length; idx++) {
		let l = log[idx]
		let ll

		if (l.startsWith("#TURN ")) {
			turn = l[6] - '0'
			D.turn_reached[turn]++

			if (turn <= 2) {
				era = 0
			} else if (turn <= 4) {
				era = 1
			} else {
				era = 2
			}
		}

		if (l.startsWith("=Award Phase")) {
			ll = log[idx+1]
			for (let region = 0; region < NUM_REGIONS; region++) {
				let a = ll[2 + region] - '0'
				awards[region] = a
			}
		}

		if (l.startsWith("=Global Demand Phase")) {
			ll = log[idx + 1]
			demands = []
			for (let i2 = 0; i2 < 3; i2++) {
				let d = ll[2 + i2] - '0'
				demands.push(d)
			}
		}

		if (l.startsWith("First player")) {
			first = (l.includes("France")) ? FRANCE : BRITAIN

			D.first_player[turn][first]++
			if (first === initiative) {
				D.init_goes_first[turn][initiative]++
			} else {
				D.init_goes_second[turn][initiative]++
			}
		}

		if (l.startsWith("=Initiative Phase")) {
			ll = log[idx+1]
			initiative = ll.includes("France") ? FRANCE : BRITAIN
			D.initiative[turn][initiative]++
		}

		// Ministry
		if (l.includes("Ministry Revealed")) {
			ll = log[idx-1]
			let matches = ll.match(/\d+$/)
			if (matches) {
				let m = parseInt(matches[0])
				D.ministry_picked[era][m]++
			}
		}

		// Investment tile
		//if (l.slice(1,3) === "i")
		if (l.startsWith("[iX0")) {
			ll = log[idx-1]
			let who = ll.includes("France") ? FRANCE : BRITAIN
			let inv = ((l[4] - '0') * 10) + (l[5] - '0')
			D.investment_picked[inv][who]++
		}

		// Event played
		if (l.startsWith("{02EVENT") || l.startsWith("{12EVENT")) {
			let bonus = l.includes("with Bonus")
			let e = l[12] - '0'
			if (is_digit(l[13])) {
				e = e * 10 + (l[13] - '0')
			}

			let who = (l[1] === '0') ? FRANCE : BRITAIN

			D.event_played[e].anyone++
			if (bonus) D.event_played[e].with_bonus++
			D.event_played[e].by[who]++
			if (bonus) D.event_played[e].by_with_bonus[who]++
		}

		if (l.includes("ADVANTAGE Used")) {
			let who = (l[1] === '0') ? FRANCE : BRITAIN
			let matches = l.match(/\d+$/)
			if (matches) {
				let a = parseInt(matches[0])
				D.advantage_used[a][who]++
			}
		}

		if (l.includes("Britain gained 1 VP")) score(BRITAIN, 1, era)
		if (l.includes("Britain gained 2 VP")) score(BRITAIN, 2, era)
		if (l.includes("Britain gained 3 VP")) score(BRITAIN, 3, era)
		if (l.includes("Britain gained 4 VP")) score(BRITAIN, 4, era)
		if (l.includes("Britain gained 5 VP")) score(BRITAIN, 5, era)
		if (l.includes("France lost 1 VP")) score(BRITAIN, 1, era)
		if (l.includes("France lost 2 VP")) score(BRITAIN, 2, era)
		if (l.includes("France lost 3 VP")) score(BRITAIN, 3, era)
		if (l.includes("France lost 4 VP")) score(BRITAIN, 4, era)

		if (l.includes("France gained 1 VP")) score(FRANCE, 1, era)
		if (l.includes("France gained 2 VP")) score(FRANCE, 2, era)
		if (l.includes("France gained 3 VP")) score(FRANCE, 3, era)
		if (l.includes("France gained 4 VP")) score(FRANCE, 4, era)
		if (l.includes("France gained 5 VP")) score(FRANCE, 5, era)
		if (l.includes("Britain lost 1 VP")) score(FRANCE, 1, era)
		if (l.includes("Britain lost 2 VP")) score(FRANCE, 2, era)
		if (l.includes("Britain lost 3 VP")) score(FRANCE, 3, era)
		if (l.includes("Britain lost 4 VP")) score(FRANCE, 4, era)

		if (l.includes("Final Scoring")) {
			if (!final_scoring) {
				final_scoring = true
				D.final_scoring++
			}
		}

		if (!final_scoring) {
			if (l.includes ("Scoring: PRESTIGE")) {
				ll = log[idx+1]
				if (ll.includes("gained")) {
					let who = ll.includes("France") ? FRANCE : BRITAIN
					D.prestige_wins[who]++
					D.prestige_wins_era[era][who]++
				} else {
					D.prestige_ties++
					D.prestige_ties_era[era]++
				}
			}

			for (let region = 0; region < NUM_REGIONS; region++) {
				let caps = data.regions[region].name.toUpperCase()
				if (l.includes("Scoring: " + caps)) {
					ll = log[idx+1]
					if (ll.includes("gained") && ll.includes("VP")) {
						let who = ll.includes("France") ? FRANCE : BRITAIN
						D.region_wins[region][who]++
						D.region_wins_era[region][era][who]++

						let matches = ll.match(/\d+/);
						if (matches) {
							let vp = parseInt(matches[0])
							D.vp_region[region][who] += vp
						}
					} else {
						D.region_ties[region]++
						D.region_ties_era[region][era]++
					}
				}
			}

			for (let d = 0; d < NUM_DEMANDS; d++) {
				let caps = data.demands[d].name.toUpperCase()
				if (l.includes("Scoring: " + caps)) {
					ll = log[idx+1]
					if (ll.includes("gained") && ll.includes("VP")) {
						let who = ll.includes("France") ? FRANCE : BRITAIN
						D.demand_wins[d][who]++
						D.demand_wins_era[d][era][who]++

						let matches = ll.match(/\d+/);
						if (matches) {
							let vp = parseInt(matches[0])
							D.vp_demand[d][who] += vp
						}
					} else {
						D.demand_ties[d]++
						D.demand_ties_era[d][era]++
					}
				}
			}
		} else {
			if (l.includes ("Final Scoring: PRESTIGE")) {
				let who = l.includes("France") ? FRANCE : l.includes("Britain") ? BRITAIN: 2
				D.final_prestige_wins[who]++
			}

			if (l.includes ("Final Scoring: DEBT")) {
				let who = l.includes("France") ? FRANCE : l.includes("Britain") ? BRITAIN: 2
				D.final_debt_wins[who]++
				if (who !== 2) {
					let matches = l.match(/\d+/)
					if (matches) {
						let vp = parseInt(matches[0])
						D.final_debt_vp[who] += vp
					}
				}
			}

			for (let d = 0; d < NUM_DEMANDS; d++) {
				let caps = data.demands[d].name.toUpperCase()
				if (l.includes("Final Scoring: " + caps)) {
					let who = l.includes("France") ? FRANCE : l.includes("Britain") ? BRITAIN: 2
					D.final_demand_wins[d][who]++
				}
			}

			if (l.includes("2 VP (Control of")) {
				let who = l.includes("France") ? FRANCE : l.includes("Britain") ? BRITAIN: 2
				D.final_territory_wins[who]++
				let matches = l.match(/\d+/g)
				if (matches) {
					let s = parseInt(matches[0])
					D.final_territory_spaces[s]++
				}
			}

			if (l.includes("France wins!") || l.includes("Britain wins!")) {
				let who = l.includes("France") ? FRANCE : BRITAIN
				D.final_scoring_wins[who]++
				if (l.includes ("Tie-breaker")) {
					D.tie_breaker++
					D.tie_breaker_wins[who]++
					if (l.includes("Final tie-breaker")) {
						D.tie_breaker_final_wins++
					}
				}
			}
		}

		if (l.includes("France resigned") || l.includes("Britain resigned")) {
			let who = l.includes("France") ? FRANCE : BRITAIN
			D.resigned++
			D.resigned_wins[1-who]++
		}

		if (l.includes("wins the game")) {
			let who = l.includes("France") ? FRANCE : BRITAIN
			D.autovictories++
			D.autovictory[who]++

			if (l.includes("VP")) {
				D.vp_autovictories++
				D.vp_autovictory[who]++
			} else if (l.includes("theaters")) {
				D.war_autovictories++
				D.war_autovictory[who]++
			} else if (l.includes("all regional and demand scorings")) {
				D.peace_autovictories++
				D.peace_autovictory[who]++
			}
		}
	}
}

