const lines = "=".repeat(38)

console.log(lines)
console.log("=== THE PLAYOFFs TOURNAMENT BEGINS ===")
console.log(lines)

const teams = ['Norway', 'England', 'Spain', 'Germany', 'The Netherlands', 'Switzerland', 'Finland', 'Iceland']

console.log( `The teams are:\n 
Group A: ${teams[0]} and ${teams[1]}
Group B: ${teams[2]} and ${teams[3]}
Group C: ${teams[4]} and ${teams[5]}
Group D: ${teams[6]} and ${teams[7]}
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

        console.log(`${this.team1}`, team1Goals, "-",team2Goals, `${this.team2}`,"=>", result.winner)
        console.log(result)
        return result;

    }
    
}

const game1 = new PlayOff(`${teams[0]}`, `${teams[3]}`)
const game2 = new PlayOff(`${teams[1]}`, `${teams[2]}`)
const game3 = new PlayOff(`${teams[4]}`, `${teams[7]}`)
const game4 = new PlayOff(`${teams[6]}`, `${teams[5]}`)

let QFinalWinners = [];

QFinalWinners.push(game1.play().winner)
QFinalWinners.push(game2.play().winner)
QFinalWinners.push(game3.play().winner)
QFinalWinners.push(game4.play().winner)

console.log(QFinalWinners)

console.log("\n========= Semifinal Stage =========\n")

const semiGame1 = new PlayOff(`${QFinalWinners[0]}`, `${QFinalWinners[2]}`)
const semiGame2 = new PlayOff(`${QFinalWinners[1]}`, `${QFinalWinners[3]}`)

let semiFinalWinners = []
let semiFinalLosers = []

semiFinalWinners.push(semiGame1.play().winner)
semiFinalWinners.push(semiGame2.play().winner)

semiFinalLosers.push(semiGame1.play().loser)
semiFinalLosers.push(semiGame2.play().loser)

console.log(semiFinalWinners)
console.log(semiFinalLosers)

console.log("\n========= 3rd and 4th Place =========\n")

const thirdFourth = new PlayOff(`${semiFinalLosers[0]}`, `${semiFinalLosers[1]}`)

thirdFourth.play().winner





