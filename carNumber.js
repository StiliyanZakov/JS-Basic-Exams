function generateSpecialNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let specialNumbers = [];
  
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            for (let k = start; k <= end; k++) {
                for (let l = start; l <= end; l++) {
                    if (((i % 2 === 0 && l % 2 !== 0) || (i % 2 !== 0 && l % 2 === 0)) &&
                        i > l && (j + k) % 2 === 0) {
                        specialNumbers.push(`${i}${j}${k}${l} `);
                    }
                }
            }
        }
    }
  
    if (specialNumbers.length > 0) {
        console.log(specialNumbers.join(' '));
    }
  }
  generateSpecialNumbers([3, 5]);