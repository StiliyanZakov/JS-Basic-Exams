function generateSeats(input) {
    let lastSector = input[0];
    let numRowsFirstSector = Number (input[1]);
    let numSeatsOddRow = Number(input[2]);
    let sectorCode = 'A'.charCodeAt(0);
    let lastSectorCode = lastSector.charCodeAt(0);
    let totalSeats = 0;

    for (let i = 0; sectorCode <= lastSectorCode; i++) {
        let numRows = numRowsFirstSector + i;
        let numSeatsEvenRow = numSeatsOddRow + 2;
        
        for (let j = 1; j <= numRows; j++) {
            let numSeats = (j % 2 === 0) ? numSeatsEvenRow : numSeatsOddRow;
            let row = String.fromCharCode(sectorCode) + j;

            for (let k = 0; k < numSeats; k++) {
                console.log(row + String.fromCharCode(97 + k));
                totalSeats++;
            }
        }

        sectorCode++;
    }

    console.log(totalSeats);
}
generateSeats(['B', 3, 2]);
// generateSeats(['C', 4, 2]);