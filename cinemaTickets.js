function cinemaTickets(input){

    let index = 0;
    let command = input[index];
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;
    let totalTickets = 0;

    while(command !== "Finish"){
    let name = command;
    index++;
    let freeSpaces = Number(input[index]);
    index++;
    let ticketType = input[index];
    let ticketCounter = 0;

    while(ticketType !== 'End'){
        ticketCounter++;

        switch(ticketType){
            case 'standard':standartTickets++; break;
            case 'student':studentTickets++; break;
                case 'kid':kidsTickets++; break;

        }
        if(ticketCounter >= freeSpaces){
        break;
        }
        index++;
        ticketType = input[index];
    }
    totalTickets += ticketCounter;

    let resultSingleFilm = ticketCounter / freeSpaces * 100;
    
    console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`);
    index++;
    command = input[index];
}
console.log(`Total tickets: ${totalTickets}`);
console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
console.log(`${(standartTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets (["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);