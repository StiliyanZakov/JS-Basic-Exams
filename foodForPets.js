function foodForPets(input){
    let index = 0;
    let days = Number (input[index]);
    index++;
    let totalFood = Number (input[index]);
    index++;

    let totalEatenFood = 0;
    let dogEatenFood = 0;
    let catEatenFood = 0;
    let biscuits = 0;

    for (let i = 1; i <= days; i++){
        let dogFood = Number (input[index]);
        index++;
        let catFood =  Number(input[index]);
        index++;

        dogEatenFood += dogFood;
        catEatenFood += catFood;
        let sum = dogFood + catFood;
        totalEatenFood += sum;
        if (i % 3 === 0){
         biscuits += sum * 0.10
        }
    }
    let totalEatenFoodP = totalEatenFood / totalFood * 100;
    let totalDogFood = dogEatenFood / totalEatenFood * 100;
    let totalCatFood = catEatenFood / totalEatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${totalEatenFoodP.toFixed(2)}% of the food has been eaten.`);
    console.log(`${totalDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalCatFood.toFixed(2)}% eaten from the cat.`)
}
foodForPets(['3','1000','300','20','100', '30','110','40'])