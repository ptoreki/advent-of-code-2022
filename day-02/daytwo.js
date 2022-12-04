const fs = require("fs");
//Part 1
const resultMapping = {
    "A X" : 4,
    "A Y" : 8,
    "A Z" : 3,
    
    "B X" : 1,
    "B Y" : 5,
    "B Z" : 9,

    "C X" : 7,
    "C Y" : 2,
    "C Z" : 6
}
//Part 2
const secondResultMapping = {
    "A X" : 3,
    "A Y" : 4,
    "A Z" : 8,
    
    "B X" : 1,
    "B Y" : 5,
    "B Z" : 9,

    "C X" : 2,
    "C Y" : 6,
    "C Z" : 7
}

fs.readFile("input.txt", "utf-8", (err, data) => {
    if(err) {console.log(err);
        return
    } //Part 1
    const roundData = data.split("\n").map( round => {
        return resultMapping[round]
    })//Part 2
    const secondRoundData = data.split("\n").map( round => {
        return secondResultMapping[round]
    })
    console.log(roundData.reduce((partialSum, a) => partialSum + a, 0))
    console.log(secondRoundData.reduce((partialSum, a) => partialSum + a, 0))
});