function profit(input) {
    let oneLev = Number(input[0]);
    let twoLev = Number(input[1]);
    let fiveLev = Number(input[2]);
    let totalSum = Number(input[3]);

    for (let one = 0; one <= oneLev; one++) {
        for (let two = 0; two <= twoLev; two++) {
            for (let five = 0; five <= fiveLev; five++) {
                let sum = one * 1 + two * 2 + five * 5;
                if (sum === totalSum) {
                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${totalSum} lv.`);
                }
            }
        }
    }
}

profit([5, 3, 1, 7]);
