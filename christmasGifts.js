function christmasGifts(input){
    let index = 0;
    let command = input[index];
    let kids = 0;
    let adults = 0;
    let toyMoney = 0;
    let sweeatersMoney = 0;

    while (command !== "Christmas"){
      let  age = Number (input[index]);
      index++;
      if(age <= 16){
        kids++;
        toyMoney += 5;
      }else{
        adults++;
        sweeatersMoney += 15;
      }
      command = input[index];
    }
    console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${toyMoney}`);
  console.log(`Money for sweaters: ${sweeatersMoney}`);

}
christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);