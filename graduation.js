function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let count = 1;
    let totalGrade = 0;
    let excluded = 0;
    let isExcluded = 0;
    while(count <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade >= 4.00) {
            count++;
            totalGrade += grade;
        } else if (grade <= 4.00) {
            excluded++;
        }

        if (excluded === 2) {
            isExcluded = true;
        }
        if (isExcluded) {
            console.log(`${name} has been excluded at ${count} grade`);
            return;
        }
    }
    let averageGrade = totalGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);