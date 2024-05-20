function film(input) {
 
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let priceForSingleActor = Number(input[2]);
 
    let decorPrice = budget * 0.10;
    let allActorsPrice = actors * priceForSingleActor;
 
    if (actors > 150) {
        allActorsPrice = allActorsPrice * 0.90;
    }
    let totalExpenses = decorPrice + allActorsPrice;
 
    let moneyAfterExpenses = budget - totalExpenses;
 
    if (moneyAfterExpenses >= 0) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyAfterExpenses.toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${Math.abs(moneyAfterExpenses).toFixed(2)} leva more.`);
    }
 
}
film(["15437.62","186","57.99"])