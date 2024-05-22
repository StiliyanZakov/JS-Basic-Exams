function numberPyramid(input){
 let current = 1;
 let isBigger = false;
 let printCurrentLine = "";
 let i = Number(input[0]);

 for (let rows = 1; rows <= i; rows++){
    for (let cols = 1; cols <= rows; cols++){
        if(current > i){
            isBigger = true;
            break;
        }
        printCurrentLine += current + " ";
        current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger){
        break;
    }
 }
}
numberPyramid(["7"]);