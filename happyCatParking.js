function calculateParkingCost(input) {
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let totalCost = 0;

    for (let i = 1; i <= days; i++) {
        let dayCost = 0;
        for (let j = 1; j <= hoursPerDay; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                dayCost += 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                dayCost += 1.25;
            } else {
                dayCost += 1;
            }
        }
        console.log(`Day: ${i} - ${dayCost.toFixed(2)} leva`);
        totalCost += dayCost;
    }

    console.log(`Total: ${totalCost.toFixed(2)} leva`);
}
calculateParkingCost([2, 5]);