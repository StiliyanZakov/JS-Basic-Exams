function aNDProcessors(input){
let procesorsCount = Number(input[0]);
let employesCount = Number(input[1]);
let workingDays = Number(input[2]);
let workingHours = employesCount * workingDays * 8;
let total = Math.floor(workingHours / 3);
 if (total < procesorsCount){
    result = procesorsCount - total;
    console.log(`Losses: -> ${(result * 110.10).toFixed(2)} BGN`);
 }else{
    result = total - procesorsCount
    console.log(`Profit: -> ${(result * 110.10).toFixed(2)} BGN`)
 }
}
aNDProcessors(["150", "7", "18"])