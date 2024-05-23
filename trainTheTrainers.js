function trainTheTrainers(input){
    
    let judges = Number(input[0]);
    let index = 1;
    let currentRow = input[index];
    let sumGrades = 0;
    let counter = 0;

    while(currentRow !== "Finish"){

       let name = currentRow;
       let tempSumGrades = 0;

       for(let i = 1; i <= judges; i++){
        counter++;
        index++;
        let grade = Number(input[index]);
        tempSumGrades += grade;

       }
       let tempAvgGrade = tempSumGrades / judges;
       sumGrades += tempSumGrades;
       console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
       index++;
       currentRow = input[index];
    }
    let avgGrades = sumGrades / counter;
    console.log(`Student's final assessment is ${avgGrades.toFixed(2)}.`);

}
trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);