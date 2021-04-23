"use strict";

let fs = require("fs");// fs reads the file content
let p = require("path"); 
function IsFileOrNot(dirpath){
    return fs.lstatSync(dirpath).isFile(); 
}
function listContent(dirpath){
    return fs.readdirSync(dirpath); 
}
function viewFlat(dirpath)
{
    let isfile = IsFileOrNot(dirpath);
    if(isfile==true){
        console.log(p.basename(dirpath) + "*");

    }else{
        console.log(p.basename(dirpath));
        //recursion
        let content = listContent(dirpath);
        for(let i = 0; i<content.length; i++){
            let childpath = p.join(dirpath, content[i]);
            viewFlat(childpath); 
        }
        

    }

}
function viewTree(dirpath, indent)
{
    let isfile = IsFileOrNot(dirpath);
    if(isfile==true){
        console.log(indent, p.basename(dirpath) + "*");

    }else{
        console.log(indent, p.basename(dirpath));
        //recursion
        let content = listContent(dirpath);
        for(let i = 0; i<content.length; i++){
            let childpath = p.join(dirpath, content[i]);
            viewTree(childpath, indent + "\t"); 
        }
        

    }

}
let input = process.argv.slice(2);

//viewFlat(input[0]);
viewTree(input[0], "")