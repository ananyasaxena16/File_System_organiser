let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function dirCreator(dirpath)
{
    if(fs.existsSync(dirpath)==false){
        fs.mkdirSync(dirpath);
    }
}
function organisefn(opath){
    let directoryPath = path.join(opath, "organised_files");
    dirCreator(directoryPath);
    for(let key in types){
        let subdirPath = path.join(directoryPath, key);
        dirCreator(subdirPath);
    }
    let otherPath = path.join(directoryPath, "Others");
    dirCreator(otherPath);
    orgFiles(opath, directoryPath);
    
}
function IsFileOrNot(dirpath){
    return fs.lstatSync(dirpath).isFile();

}
function listContent(dirpath){
    return fs.readdirSync(dirpath);
}
function getfoldername(dirpath){
    let strArr = dirpath.split(".");
    let ext = strArr.pop();
    for(let key in types){
        for(let i = 0; i<types[key].length; i++){
            if(types[key][i]==ext){
                return key;
            }
        }
    }
    return "others";
}
function copytodest(dirpath, dest_folder_path){
    let originalname = path.basename(dirpath);
    let destfilepath = path.join(dest_folder_path, originalname);
    fs.copyFileSync(dirpath, destfilepath);

}
function orgFiles(dirpath, directoryPath)
{
    let isfile = IsFileOrNot(dirpath);
    if(isfile==true){
        let dest_folder = getfoldername(dirpath);
        console.log(dirpath,"->",dest_folder);
        let dest_folder_path = path.join(directoryPath, dest_folder);
        copytodest(dirpath, dest_folder_path);

    }else{
        console.log(path.basename(dirpath));
        //recursion
        let content = listContent(dirpath);
        for(let i = 0; i<content.length; i++){
            let childpath = path.join(dirpath, content[i]);
            orgFiles(childpath, directoryPath); 
        }
        

    }

}


module.exports={
            organiseFun:organisefn
        }