const fs = require("fs");
let score = 0;
let groupScore = 0;

fs.readFile("input.txt", "utf-8", (err, data) => {
    if(err) {console.log(err);
        return
    }
    const rucksacks = data.replace(/\r/g,"").split("\n")
    //Part 1
    rucksacks.forEach(rucksack => {
        const firstCompartment = rucksack.slice(0, rucksack.length/2)
        const secondCompartment = rucksack.slice(rucksack.length/2)

        const firstCompartmentArray = [...firstCompartment]

        firstCompartmentArray.every( char => {
            const commonChar = secondCompartment.includes(char)
            if (commonChar) {  
                if(char === char.toUpperCase()){
                    score += (char.charCodeAt(0) -38)
                } 
                else {
                    score += (char.charCodeAt(0) -96)
                }
                return false;
                } 
                return true
            })
        });
    console.log(score)

    //Part 2
    const groupBadges = []
    for(i = 0; i < rucksacks.length; i += 3) {
        firstRucksack = rucksacks[i]
        secondRucksack = rucksacks[i+1]
        thirdRucksack = rucksacks[i+2]

        groupBadge = []

        const firstRucksackArray = firstRucksack.split("")
        firstRucksackArray.forEach((char) => {
            if(secondRucksack.includes(char) && thirdRucksack.includes(char) && !groupBadge.includes(char)) {
                groupBadge.push(char)
            }
        })

        groupBadges.push(groupBadge.join(""))
    }

    groupBadges.forEach( char => {
        if( char === char.toUpperCase()) {
            groupScore += (char.charCodeAt(0) -38)
        }
        else {
            groupScore += (char.charCodeAt(0) -96)
        }        
    })
    console.log(groupScore)
});