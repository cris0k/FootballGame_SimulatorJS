const teamGroup1 = ['England','Austria','Norway', 'Northern Islands']
const teamGroup2 = ['Germany', 'Denmark','Spain','Finland']
const teamGroup3 = ['The Netherlands','Sweden','Switzerland']
const teamGroup4 = ['France','Italy','Belgium','Iceland']

const teams = [
    ...teamGroup1,
    ...teamGroup2,
    ...teamGroup3,
    ...teamGroup4
]

Array.prototype.shuffle = function () {
    var i = teams.length, j, temp;
    if (i == 0) return teams;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = teams[i];
        teams[i] = teams[j];
        teams[j] = temp;
    }
    return teams;
}
const shuffledTeams = teams.shuffle()

export const PlayOffTeams = []

for(let i = 0; i < 8; i++) {
    PlayOffTeams.push(shuffledTeams[i])
}



