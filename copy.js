let fs = require("fs");
let path = require("path");
let input = process.argv.slice(2);
fs.copyFileSync(input[0], path.join(input[1], "sample.js"));//copy file doesnt copy file... it just copies the content inside the file
//dest path___-> filepath
console.log("file copied");
