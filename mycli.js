//view --tree, --flat
// organize-> samefolder, multiple folder
// help
//[node, mycli.js, vire,dirName,mode]
//node mycli.js organize -/foldername
//node mycli.js help

let helpFnObj=require("./commands/help");
let organizeFnObj=require("./commands/organize");
let viewFnObj = require("./commands/view");

let input = process.argv.slice(2);
let cmd = input[0];
switch(cmd){
    case "view":
        viewFnObj.viewFn(input[1], input[2]);
        break;
    case "organize":
        organizeFnObj.organizeFn(input[1]);
        break;
    case "help":
        helpFnObj.helpFn();
        break;
    default:
        console.log("Wrong command. Enter help to see list of commands");

}

// function view( dirName, mode){
//     if(mode == "tree"){
//         viewTree(dirName);
//     }else if(mode =="flat"){
//         viewFlat(dirName);
//     }else{
//         console.log("Wrong mode");
//     }
// }