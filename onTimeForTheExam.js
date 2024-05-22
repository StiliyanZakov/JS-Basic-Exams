function onTimeForTheExam(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = (hour * 60) + minutes
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    let hours = 0
    let minS = 0

    if (arrivalTime > examTime) {
        hours = ((Math.floor((arrivalTime - examTime) / 60))).toFixed()
        minS = (arrivalTime - examTime) - (hours * 60)
        console.log('Late')
        if (hours >= 1 && minS < 10) {
            console.log(`${hours}:0${minS} hours after the start`)
        } else if (hours >= 1 && minS >= 10) {
            console.log(`${hours}:${minS} hours after the start`)
        } else if (hours < 1) {
            console.log(`${minS} minutes after the start`)
        }
    } else if (examTime >= arrivalTime && examTime - arrivalTime <= 30) {
        hours = (Math.floor(((examTime - arrivalTime) / 60))).toFixed()
        minS = (examTime - arrivalTime)
        console.log("On time")
        if (examTime - arrivalTime > 0) {
            console.log(`${examTime - arrivalTime} minutes before the start`)
        }
    } else {
        hours = (Math.floor((examTime - arrivalTime) / 60)).toFixed()
        minS = (examTime - arrivalTime) - hours * 60
        console.log('Early')
        if (hours >= 1 && minS < 10) {
            console.log(`${hours}:0${minS} hours before the start`)
        } else if (hours >= 1 && minS >= 10) {
            console.log(`${hours}:${minS} hours before the start`)
        } else {
            console.log(`${minS} minutes before the start`)
        }
    }


}

onTimeForTheExam(["16", "00", "15", "30"])