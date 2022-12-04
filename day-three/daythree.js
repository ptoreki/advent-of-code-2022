const fs = require("fs");
let score = 0;

fs.readFile("input.txt", "utf-8", (err, data) => {
    if(err) {console.log(err);
        return}
        const stringArray = data.split("\n")

        stringArray.forEach(line => {
            const firstHalf = line.slice(0, line.length/2)
            const secondHalf = line.slice(line.length/2)

            const firstHalfArray = [...firstHalf];

            firstHalfArray.every( char => {
                const commonChar = secondHalf.includes(char)
                if (commonChar) {  
                    console.log("Found common char " + char + " for line " + line);              
                    if(char === char.toUpperCase()){
                        score += (char.charCodeAt(0) -38)
                        console.log("it was uppercase, adding " + (char.charCodeAt(0) - 38) + " to it");
                    } else {
                        score += (char.charCodeAt(0) -96)
                        console.log("it was lowercase, adding " + (char.charCodeAt(0) - 96) + " to it");
                    }
                    return false;
                } 
                return true
            })
        });
        console.log(score)
});
