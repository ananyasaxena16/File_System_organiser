let fs = require("fs");
function nonBlank(filepath){
    if( !fs.existsSync(filepath)){
        console.log("File not found");
        return;
    }

    let data = fs.readFileSync(filepath).toString().split("\n");
    let count = 1;
    

    for(let i = 0 ; i < data.length ; i++ ){
        if(data[i].length > 1){
            data[i] = count + ". " + data[i];
            count++;
        }
    }

    console.log(data.join("\n"));
}

module.exports = {
    nonBlanks : nonBlank
}