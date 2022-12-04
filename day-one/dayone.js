const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    if(err) {console.log(err);
        return
    }
    const groupedData = data.split( "\n\n" ).map( group => {
        return group.split("\n").reduce((partialSum, a) => partialSum + parseInt(a), 0)
    })
    console.log(Math.max(...groupedData))

    function compareNumbers(a, b) {
        return b - a;
    } 
    groupedData.sort(compareNumbers)
    
    console.log(groupedData[0] + groupedData[1] + groupedData[2])
});