const fs = require("fs");
let score = 0;

fs.readFile("test.txt", "utf-8", (err, data) => {
    if(err) {console.log(err);
        return
    }
    const rucksacks = data.split("\n")

    rucksacks.forEach(rucksack => {
        const firstCompartment = rucksack.slice(0, rucksack.length/2)
        const secondCompartment = rucksack.slice(rucksack.length/2)

        const firstCompartmentArray = [...firstCompartment]

        firstCompartmentArray.every( char => {
            const commonChar = secondCompartment.includes(char)
            if (commonChar) {  
                //console.log("Found common char " + char + " for line " + rucksack);              
                if(char === char.toUpperCase()){
                    score += (char.charCodeAt(0) -38)
                    //console.log("it was uppercase, adding " + (char.charCodeAt(0) - 38) + " to it");
                } 
                else {
                    score += (char.charCodeAt(0) -96)
                    //console.log("it was lowercase, adding " + (char.charCodeAt(0) - 96) + " to it");
                }
                return false;
                } 
                return true
            })
        });
        console.log(score)

        //TODO: Part 2
});