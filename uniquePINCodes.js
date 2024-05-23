function uniquePINCodes(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
    for (let i = 2; i <= a; i += 2) {
        for (let j = 2; j <= b; j++) {
            for (let k = 2; k <= c; k += 2) {
                if (i % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7) && k % 2 === 0) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

uniquePINCodes(["3", "5", "5"]);
