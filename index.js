import {PlayOffTeams} from "./teams.js"

const lines = "=".repeat(38)

console.log(lines)
console.log("=== THE PLAYOFFs TOURNAMENT BEGINS ===")
console.log(lines)

console.log( `The PlayOffTeams are:\n 
Group A: ${PlayOffTeams[0]} and ${PlayOffTeams[1]}
Group B: ${PlayOffTeams[2]} and ${PlayOffTeams[3]}
Group C: ${PlayOffTeams[4]} and ${PlayOffTeams[5]}
Group D: ${PlayOffTeams[6]} and ${PlayOffTeams[7]}
`)

console.log( "===== The Quarter Final Stage =====\n")

class PlayOff {
    constructor(team1,team2){
        this.team1 = team1
        this.team2 = team2
    }
    goal() { 
        return Math.floor(Math.random() *10);

    }
    play() {

        let team1Goals = this.goal()
        let team2Goals = this.goal()

        while (team1Goals === team2Goals) {
            team1Goals = this.goal()
            team2Goals = this.goal()
        }

        const result = {
            winner: team1Goals > team2Goals ? this.team1 : this.team2,
            loser: team1Goals < team2Goals ? this.team1 : this.team2,
        };

        console.log(`${this.team1}`, team1Goals, "-",team2Goals, `${this.team2}`,"=>", result.winner,'\n')
        
        return result;

    }
    
}

const game1 = new PlayOff(`${PlayOffTeams[0]}`, `${PlayOffTeams[3]}`)
const game2 = new PlayOff(`${PlayOffTeams[1]}`, `${PlayOffTeams[2]}`)
const game3 = new PlayOff(`${PlayOffTeams[4]}`, `${PlayOffTeams[7]}`)
const game4 = new PlayOff(`${PlayOffTeams[6]}`, `${PlayOffTeams[5]}`)

let QFinalWinners = [];

QFinalWinners.push(game1.play().winner)
QFinalWinners.push(game2.play().winner)
QFinalWinners.push(game3.play().winner)
QFinalWinners.push(game4.play().winner)

console.log("\n========= Semifinal Stage =========\n")

const semiGame1 = new PlayOff(`${QFinalWinners[0]}`, `${QFinalWinners[2]}`)
const semiGame2 = new PlayOff(`${QFinalWinners[1]}`, `${QFinalWinners[3]}`)

let semiFinalWinners = []
let semiFinalLosers = []

const semiGame1Result = semiGame1.play()
const semiGame2Result = semiGame2.play()

semiFinalWinners.push(semiGame1Result.winner)
semiFinalWinners.push(semiGame2Result.winner)

semiFinalLosers.push(semiGame1Result.loser)
semiFinalLosers.push(semiGame2Result.loser)

console.log("========= 3rd and 4th Place =========\n")

const thirdFourth = new PlayOff(`${semiFinalLosers[0]}`, `${semiFinalLosers[1]}`)

thirdFourth.play().winner

console.log("========= THE FINAL =========\n")

const final = new PlayOff(`${semiFinalWinners[0]}`, `${semiFinalWinners[1]}`)

const FinalResult = final.play()

console.log(lines)
console.log(`${FinalResult.winner}`, "is the Euro Women's Cup WINNER !")
console.log(lines)







