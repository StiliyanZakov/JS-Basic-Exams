function generatePasswords(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxCombinations = Number(input[2]);
    let A = 35;
    let B = 64;
    let count = 0;
    let passwords = "";

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            let password = `${String.fromCharCode(A)}${String.fromCharCode(B)}${i}${j}${String.fromCharCode(B)}${String.fromCharCode(A)}`;
            passwords += password + "|";

            count++;
            if (count >= maxCombinations) {
                break;
            }

            A++;
            if (A > 55) {
                A = 35;
                
            }

            B++;
            if (B > 96) {
                B = 64;
            
            }

            if (count >= maxCombinations) { 
                break;
            }
        }
        if (count >= maxCombinations) {
            break;
        }
    }
    console.log(passwords.slice(0, -1) + "|");

}
generatePasswords([2, 3, 10]);
 // generatePasswords([20, 50, 10]);
