const lines = "=".repeat(38)

console.log(lines)

var message = "=== THE PLAYOFFs TOURNAMENT BEGINS ==="

console.log(message)
console.log(lines)

const teams = ['Norway', 'England', 'Spain', 'Germany', 'The Netherlands', 'Switzerland', 'Finland', 'Iceland']

console.log( `The teams are:\n 
Group A: ${teams[0]} and ${teams[1]}
Group B: ${teams[2]} and ${teams[3]}
Group C: ${teams[4]} and ${teams[5]}
Group D: ${teams[6]} and ${teams[7]}
`)

console.log( "=== The Quarter Final Stage ===\n")

class PlayOff {
    constructor(team1,team2){
        this.team1 = team1
        this.team2 = team2
        this.goal = function (value) {
            value = Math.floor(Math.random() *10)
            return value
        }
    }

    play() {
        console.log(`${this.team1}`,this.goal(), "-",this.goal(), `${this.team2}`)
    }
}


const game1 = new PlayOff(`${teams[0]}`, `${teams[3]}`)
const game2 = new PlayOff(`${teams[1]}`, `${teams[2]}`)
const game3 = new PlayOff(`${teams[4]}`, `${teams[7]}`)
const game4 = new PlayOff(`${teams[6]}`, `${teams[5]}`)

game1.play()
game2.play()
game3.play()
game4.play()





