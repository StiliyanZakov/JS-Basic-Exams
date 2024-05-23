function findPassword(input) {
    let controlValue = Number(input[0]);
    let validPasswords = [];

    for (let a = 1; a <= 9; a++) {
        for (let b = a + 1; b <= 9; b++) {
            for (let c = 9; c >= 1; c--) {
                for (let d = c - 1; d >= 1; d--) {
                    if (a * b + c * d === controlValue) {
                        validPasswords.push(`${a}${b}${c}${d}`);
                    }
                }
            }
        }
    } 
    if (validPasswords.length > 0) {
        validPasswords.sort(); 
        console.log(validPasswords.join(" "));
       
        console.log(`Password: ${validPasswords[3]}`);
    
    } else{
        console.log("No!")
    }
}
    findPassword([110]);