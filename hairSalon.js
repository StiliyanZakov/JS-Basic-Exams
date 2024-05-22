function hairSalon(input) {
    let target = Number(input.shift());
    let totalMoney = 0;
  
    while (true) {
        let command = input.shift();
        if (command === "closed") {
            break;
        }
  
        let service = command;
        let price = 0;
  
        if (service === "haircut") {
            let type = input.shift();
            switch (type) {
                case "mens": price = 15; break;
                case "ladies": price = 20; break;
                case "kids": price = 10; break;
            }
        } else if (service === "color") {
            let type = input.shift();
            switch (type) {
                case "touch up": price = 20; break;
                case "full color": price = 30; break;
            }
        }
  
        totalMoney += price;
  
        if (totalMoney >= target) {
            console.log("You have reached your target for the day!");
            console.log(`Earned money: ${totalMoney}lv.`);
            return;
        }
    }
  
    let neededMoney = target - totalMoney;
    console.log(`Target not reached! You need ${neededMoney}lv. more.`);
    console.log(`Earned money: ${totalMoney}lv.`);
  }
  hairSalon(["300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed" 
  ]);
  