function sumOfTwoNumbers(input) {
  let startingNum = Number(input[0]);
  let finalNum = Number(input[1]);
  let magicNum = Number(input[2]);
  let combination = 0;
  let isFound = false;
  for (i = startingNum; i <= finalNum; i++){
    for(j = startingNum; j <= finalNum; j++){
      let sum = i + j;
      combination++;
        if(sum === magicNum){
            console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
            isFound = true;
            break;
        }
    }
    if (isFound){
      break;
    }
  }
  if(!isFound){
  console.log(`${combination} combinations - neither equals ${magicNum}`);
}
}
sumOfTwoNumbers(["23","24","20"]);