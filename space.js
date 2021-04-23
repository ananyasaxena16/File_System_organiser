let fs = require("fs");

function removeBlnk (filepath){
    if(! fs.existsSync(filepath)){
        console.log("File does not exist");
        return;
    }

    let data = fs.readFileSync(filepath).toString();
    data = data.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
    console.log(data);
}

module.exports = {
    removeBlnks : removeBlnk
}