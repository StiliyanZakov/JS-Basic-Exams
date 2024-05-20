function fishingBoat(input) {
 
    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);
 
    let boatRentPrice = 0;
 
    switch (season) {
        case 'Spring': boatRentPrice = 3000; break;
        case 'Summer':
        case 'Autumn': boatRentPrice = 4200; break;
        case 'Winter': boatRentPrice = 2600; break;
    }
 
    if (people <= 6) {
        boatRentPrice *= 0.9;
    } else if (people <= 11) {
        boatRentPrice *= 0.85;
    } else {
        boatRentPrice *= 0.75;
    }
 
    if (people % 2 === 0 && season !== 'Autumn') {
        boatRentPrice *= 0.95
    }
 
    if (budget >= boatRentPrice) {
        console.log(`Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget - boatRentPrice).toFixed(2)} leva.`);
    }
 
 
}
fishingBoat(["3000", "Summer", "11"])