function puppyCare(input){
let totalFood = Number(input[0]) * 1000;
let index = 1;
let result = 0;
while (input[index] !== "Adopted"){
result += Number(input[index]);
index++;
}
if (totalFood >= result){
    let a = result - totalFood
console.log(`Food is enough! Leftovers: ${totalFood - result} grams.`)
}else{
    console.log(`Food is not enough. You need ${result - totalFood} grams more.`)
}
}
puppyCare(["4","130","345","400","180","230","120","Adopted"])