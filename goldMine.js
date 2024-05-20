function goldMine(locationsData) {
  let numLocations = Number(locationsData.shift());

  while(numLocations > 0) {
    let totalMined = 0;
    let expectedAverage = parseFloat(locationsData.shift());
    let daysToWork = Number(locationsData.shift());

    for (let g = 0; g < daysToWork; g++) {
      let mined = locationsData.shift();
      totalMined += parseFloat(mined);
    }
    let avrageMined = totalMined / daysToWork;

    if (avrageMined >= expectedAverage) {
      console.log(`Good job! Average gold per day: ${avrageMined.toFixed(2)}.`);
        numLocations--
    } else {
      console.log(`You need ${(expectedAverage - avrageMined).toFixed(2)} gold.`);
      numLocations--
    }
  }
}



// reshenie na chata 

// function goldMine(locationsData) {
//     let numLocations = Number(locationsData.shift());
  
//     for (let i = 0; i < numLocations; i++) {
//       let expectedAverage = parseFloat(locationsData.shift());
//       let daysToWork = Number(locationsData.shift());
//       let totalMined = 0;
  
//       for (let j = 0; j < daysToWork; j++) {
//         totalMined += parseFloat(locationsData.shift());
//       }
  
//       let averageMined = totalMined / daysToWork;
  
//       if (averageMined >= expectedAverage) {
//         console.log(
//           `Good job! Average gold per day: ${averageMined.toFixed(2)}.`
//         );
//       } else {
//         console.log(
//           `You need ${(expectedAverage - averageMined).toFixed(
//             2
//           )} gold.`
//         );
//       }
//     }
//   }

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
console.log('----------------------------------');
goldMine(['1',
    "5",
    '3',
    '10',
    '1',
    '3'])
