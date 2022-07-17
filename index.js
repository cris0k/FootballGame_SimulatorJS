const lines = "=".repeat(38)

console.log(lines)

var message = "=== THE PLAYOFFs TOURNAMENT BEGINS ==="

console.log(message)
console.log(lines)



const getGoals = function() {
    return Math.floor(Math.random() *10);
}

const teams = ['Norway', 'England', 'Spain', 'Germany', 'The Netherlands', 'Switzerland', 'Finland', 'Iceland']

console.log( `The teams are:\n 
Group A: ${teams[0]} and ${teams[1]}
Group B: ${teams[2]} and ${teams[3]}
Group C: ${teams[4]} and ${teams[5]}
Group D: ${teams[6]} and ${teams[7]}
`)

/* for (let i=0 ; i < teams.length; i++){
    console.log(teams[i], getGoals())

} */
console.log( "=== The Quarter Final Stage ===\n")


console.log(`${teams[0]}`,getGoals(), "-" ,getGoals(), `${teams[3]}`)

class PlayOff {
    constructor(team1,team2){
        this.team1 = team1
        this.team2 = team2
        this.goal = function() {
            return Math.floor(Math.random() *10)
        }
    }
}

const game = new PlayOff("Norway", "Germany")

console.log(game.team1,game.goal(), "-",game.goal(), game.team2)




