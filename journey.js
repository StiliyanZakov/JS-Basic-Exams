function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let expenses = 0;
 
    if (budget <= 100) {
        console.log('Somewhere in Bulgaria');
 
        if (season === 'summer') {
            expenses = budget * 0.7;
            console.log(`Camp - ${(budget - expenses).toFixed(2)}`);
        } else if (season === 'winter') {
            expenses = budget * 0.3;
            console.log(`Hotel - ${(budget - expenses).toFixed(2)}`);
        }
 
    } else if (budget <= 1000) {
        console.log('Somewhere in Balkans');
 
        if (season === 'summer') {
            expenses = budget * 0.6;
            console.log(`Camp - ${(budget - expenses).toFixed(2)}`);
        } else if (season === 'winter') {
            expenses = budget * 0.2;
            console.log(`Hotel - ${(budget - expenses).toFixed(2)}`);
        }
 
    } else if (budget > 1000) {
        console.log('Somewhere in Europe');
 
        expenses = budget * 0.1;
        console.log(`Hotel - ${(budget - expenses).toFixed(2)}`);
 
    }
 
}
journey(["678.53", "winter"]);