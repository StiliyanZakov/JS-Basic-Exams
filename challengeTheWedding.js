function generateMeetings(input) {
  let numMen = Number(input[0]);
  let numWomen = Number(input[1]);
  let maxTables = Number(input[2]);
  let meetings = "";
  let tableCounter = 0;

  for (let m = 1; m <= numMen; m++) {
    for (let w = 1; w <= numWomen; w++) {
      meetings += `(${m} <-> ${w}) `;
      tableCounter++;
      if (tableCounter === maxTables) {
        return meetings.trim();
      }
    }
  }
  return meetings.trim();
}
console.log(generateMeetings([2, 2, 6]));
