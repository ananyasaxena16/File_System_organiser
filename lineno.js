let fs = require("fs");
function lineNumber(filepath){
    if( !fs.existsSync(filepath)){
        console.log("File not found");
        return;
    }

    let data = fs.readFileSync(filepath).toString().split("\n");

    let count = 1;

    for(let i = 0 ; i < data.length ; i++ ){
        data[i] = count + ". " + data[i];
        count++;        
    }

    console.log(data.join("\n"));
}

module.exports = {
    lineNo : lineNumber
}
