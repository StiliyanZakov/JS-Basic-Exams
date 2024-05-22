function movieDestination(input){
 let budget = Number(input[0]);
 let destination = input[1];
 let season = input[2];
 let days = Number(input[3]);

 let price = 0;

 switch(season){
    case "Winter":
        switch(destination){
            case "Dubai": price = days * 45000; break;
            case "Sofia": price = days * 17000; break;
            case "London": price = days * 24000; break;
        }
        break;
        case "Summer":
            switch(destination){
                case "Dubai": price = days * 40000; break;
                case "Sofia": price = days * 12500; break;
                case "London": price = days * 20250; break; 
 }
 break;
}
if (destination === "Dubai"){
    price *= 0.70;
}else if (destination === "Sofia"){
    price *= 1.25;
}
let diff = Math.abs(price - budget);
if (price <= budget){
    console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
}else{
    console.log(`The director needs ${diff.toFixed(2)} leva more!`)
}
}
movieDestination(['1000000', 'Dubai','Summer','5']);