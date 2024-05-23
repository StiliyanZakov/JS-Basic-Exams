function workingHours(input){
let workHour = Number(input[0]);
let dayOfWeek = input[1];

if(dayOfWeek !== "Sunday" && workHour >= 10 && workHour < 18){
      console.log("open")
}else{
    console.log("closed")
}

}
workingHours(["10","Saturday"])