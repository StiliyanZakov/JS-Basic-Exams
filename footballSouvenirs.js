function footballSouvenirs(input) {
  let team = input[0];
  let typeSuvenirs = input[1];
  let suvenirsCount = Number(input[2]);

  let result = 0;

  switch (team) {
    case "Argentina":
      switch (typeSuvenirs) {
        case "flags":
          result = suvenirsCount * 3.25;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "caps":
          result = suvenirsCount * 7.2;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "posters":
          result = suvenirsCount * 5.1;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "stickers":
          result = suvenirsCount * 1.25;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)

          break;
        default:
         console.log("Invalid stock!");
      }
      break;
    case "Brazil":
      switch (typeSuvenirs) {
        case "flags":
          result = suvenirsCount * 4.2;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "caps":
          result = suvenirsCount * 8.5;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "posters":
          result = suvenirsCount * 5.35;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "stickers":
          result = suvenirsCount * 1.2;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;

        default:
         console.log("Invalid stock!"); 
      }
      break;
    case "Croatia":
      switch (typeSuvenirs) {
        case "flags":
          result = suvenirsCount * 2.75;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "caps":
          result = suvenirsCount * 6.9;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "posters":
          result = suvenirsCount * 4.95;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "stickers":
          result = suvenirsCount * 1.1;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;

        default:
            console.log("Invalid stock!");
          
      }
      break;
    case "Denmark":
      switch (typeSuvenirs) {
        case "flags":
          result = suvenirsCount * 3.10;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "caps":
          result = suvenirsCount * 6.5;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "posters":
          result = suvenirsCount * 4.8;
          console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;
        case "stickers":
          result = suvenirsCount * 0.9;
         console.log(`Pepi bought ${suvenirsCount} ${typeSuvenirs} of ${team} for ${(result).toFixed(2)} lv.`)
          break;

        default:
          console.log("Invalid stock!");
      }
      break;
      default:
      console.log("Invalid country!")
  }
   
}
footballSouvenirs(["Denmark", "caps", "8"]);
