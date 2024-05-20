function beerAndChips(input) {
    let footballFenName = input[0];
    let budget = Number(input[1]);
    let beerCount = Number(input[2]);
    let chipsCount = Number(input[3]);
    let oneBeerPrice = 1.2;
    let beerSumPrice = oneBeerPrice * beerCount;
    let oneChipsPrice = beerSumPrice * 0.45;
    let chipsSumPrice = Math.ceil(oneChipsPrice * chipsCount);
    let totalSum = beerSumPrice + chipsSumPrice;
    if(totalSum <= budget) {
        result = budget - totalSum
        console.log(`${footballFenName} bought a snack and has ${(result).toFixed(2)} leva left.`);

    }else{
        console.log(`${footballFenName} needs ${(totalSum - budget).toFixed(2)} more leva!`)
    }
    
}
beerAndChips(["George", "10", "2", "3"]);