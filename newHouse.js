function newHouse(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    switch (flowerType) {
        case "Roses":
            totalSum = flowerCount * 5;

            if (flowerCount > 80) {
                totalSum *= 0.9;
            }
            break;
        case "Dahlias":
            totalSum = flowerCount * 3.80;

            if (flowerCount > 90) {
                totalSum *= 0.85;
            }
            break;
        case "Tulips":
            totalSum = flowerCount * 2.80;

            if (flowerCount > 80) {
                totalSum *= 0.85;
            }
            break;
        case "Narcissus":
            totalSum = flowerCount * 3;

            if (flowerCount < 120) {
                totalSum *= 1.15;
            }
            break;
        case "Gladiolus":
            totalSum = flowerCount * 2.50;

            if (flowerCount < 80) {
                totalSum *= 1.20;
            }
            break;
    }
    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
    }

}
newHouse(["Tulips","88","260"])