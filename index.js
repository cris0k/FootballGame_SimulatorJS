const lines = "=".repeat(38)

console.log(lines)

var message = "=== THE PLAYOFFs TOURNAMENT BEGINS ==="

console.log(message)
console.log(lines)

const getGoals = function() {
    return Math.floor(Math.random() *10);
}

const teams = ['Norway', 'England', 'Spain', 'Germany', 'TheNetherlands', 'Switzerland', 'Finland', 'Iceland']

for (let i=0 ; i < teams.length; i++){
    console.log(teams[i], getGoals())

}



