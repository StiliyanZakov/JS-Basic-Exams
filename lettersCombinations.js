function printCombinations(input) {
    let start = input[0];
    let end = input[1];
    let skipLetter = input[2];
  
    let combinations = [];
    let count = 0;
  
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        for (let j = start.charCodeAt(0); j <= end.charCodeAt(0); j++) {
            for (let k = start.charCodeAt(0); k <= end.charCodeAt(0); k++) {
                let combination = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
                if (!combination.includes(skipLetter)) {
                    combinations.push(combination);
                    count++;
                }
            }
        }
    }
  
    console.log(combinations.join(' ') + ' ' + count);
  }
  printCombinations(["a", "c", "b"]);