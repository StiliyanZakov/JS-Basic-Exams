function tradeConditions(input) {
    let town = input[0];
    let tradeVolume = input[1];
 
    if (tradeVolume <= 500 && tradeVolume >= 0) {
        switch (town) {
            case 'Sofia':
                console.log((tradeVolume * 0.05).toFixed(2)); break;
            case 'Varna':
                console.log((tradeVolume * 0.045).toFixed(2)); break;
            case 'Plovdiv':
                console.log((tradeVolume * 0.055).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else if (tradeVolume > 500 && tradeVolume <= 1000) {
        switch (town) {
            case 'Sofia':
                console.log((tradeVolume * 0.07).toFixed(2)); break;
            case 'Varna':
                console.log((tradeVolume * 0.075).toFixed(2)); break;
            case 'Plovdiv':
                console.log((tradeVolume * 0.08).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else if (tradeVolume > 1000 && tradeVolume <= 10000) {
        switch (town) {
            case 'Sofia':
                console.log((tradeVolume * 0.08).toFixed(2)); break;
            case 'Varna':
                console.log((tradeVolume * 0.1).toFixed(2)); break;
            case 'Plovdiv':
                console.log((tradeVolume * 0.12).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else if (tradeVolume > 10000) {
        switch (town) {
            case 'Sofia':
                console.log((tradeVolume * 0.12).toFixed(2)); break;
            case 'Varna':
                console.log((tradeVolume * 0.13).toFixed(2)); break;
            case 'Plovdiv':
                console.log((tradeVolume * 0.145).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else {
        console.log('error')
    }
}
tradeConditions(["Kaspichan", "-50"])