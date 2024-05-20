function easterEggsBattle(input){
   let index = 0;
   let eggsPlayerOne = Number(input[index]);
   index++;
   let eggsPlayerTwo = Number(input[index]);
   index++;

   let command = input[index];
   index++;

   let isOutOfEggs = false;

   while (command !== "End"){
    switch (command){
        case "one": eggsPlayerTwo--;
        break;
        case "two": eggsPlayerOne--;
        break;
    }
    if(eggsPlayerOne === 0){
        isOutOfEggs = true;
        console.log(`Player one is out of eggs. Player two has ${eggsPlayerTwo} eggs left.`);
        break;
    }else if (eggsPlayerTwo === 0){
        isOutOfEggs = true;
        console.log(`Player two is out of eggs. Player one has ${eggsPlayerOne} eggs left.`);
        break;
    }
    command = input[index];
    index++;
   }
 if (command === "End"){
    console.log(`Player one has ${eggsPlayerOne} eggs left.`);
    console.log(`Player two has ${eggsPlayerTwo} eggs left.`);
 }

}
easterEggsBattle(['2','6','one','two','two'])