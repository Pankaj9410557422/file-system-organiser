let fs = require("fs");
let path = require("path"); //good practice instead of using a backslah or forward slash
function isFileChecker(dirPath){
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath){
    return fs.readdirSync(dirPath);
}
function viewFlat(dirPath){
    let isFile = isFileChecker(dirPath);
    if(isFile == true){
        console.log(dirPath +"*");
    }else{
        //directory
        //console.log
        //print path
        console.log(dirPath);
        //get children
        let children = readContent(dirPath);
        //call for viewFlat
        for(let i=0; i<children.length;i++){
            viewFlat(path.join(dirPath,children[i]),"");
        }
    }
}

function viewTree(dirPath,indent){
    let isFile = isFileChecker(dirPath);
    if(isFile == true){
        console.log(indent, path.basename(dirPath) +"*");
    }else{
        //directory
        //console.log
        //print path
        console.log(indent, path.basename(dirPath));
        //get children
        let children = readContent(dirPath);
        //call for viewFlat
        for(let i=0; i<children.length;i++){
            viewTree(path.join(dirPath,children[i]),indent+"\t");
        }
    }
}

function viewExecutor( dirName, mode){
    if(mode == "tree"){
        viewTree(dirName,"");
    }else if(mode =="flat"){
        viewFlat(dirName,"");
    }else{
        console.log("Wrong mode");
    }
}

module.exports = {
    viewFn : viewExecutor
};