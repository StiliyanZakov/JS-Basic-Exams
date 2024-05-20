function examPreparation(input) {
   let failedGradesCounter = Number(input[0]);
   let index = 1;
   let examName = input[index];
   let grade = Number(input[index + 1]);
   let averageCounter = 0;
   let failedGradesCounter1 = 0;
   let sumOfAllGrades = 0;
   let finalExam = "";

     while (examName !== "Enough") {
      finalExam = examName;
      averageCounter++;
      sumOfAllGrades += grade;
      if (grade <= 4) {
         failedGradesCounter1++;
      }
       if (failedGradesCounter1 === failedGradesCounter) {
         console.log(`You need a break, ${failedGradesCounter1} poor grades.`);
         break;
      }
      index += 2;
      examName = input[index];
      grade = Number(input[index + 1]);
   }
     if (examName === "Enough") {
      console.log(`Average score: ${(sumOfAllGrades / averageCounter).toFixed(2)}`);
      console.log(`Number of problems: ${averageCounter}`);
      console.log(`Last problem: ${finalExam}`);
   }

}
examPreparation(["3", "Money", "6", "Story", "4", "SpringTime", "5", "Bus", "6", "Enough"]);