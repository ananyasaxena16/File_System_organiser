let helpfileobj = require("./help.js");
let viewfileobj = require("./view.js");
let organisefileobj = require("./organise.js");
let input = process.argv.slice(2);
let cmd = input[0];
switch(cmd){
    case "view" :
        viewfileobj.viewFun(input[1], input[2]);
        break;
    case "organise":
        organisefileobj.organiseFun(input[1]);
        break;
    case "help":
        helpfileobj.helpFun();
        break;
    default:
        console.log("Wrong commands enter help to see all the commands");
}
