function demo(input){

    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percent = Number(input[3]);

    let volume = l * w * h;
    let volumeInLiters = volume / 1000;
    let neededLiters = volumeInLiters * (1 - (percent / 100));
    console.log(neededLiters);

}
demo(["85","75","47","17"]);