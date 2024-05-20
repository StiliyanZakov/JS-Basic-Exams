function demo(input){

    let tax = Number(input[0]);

    let shoes = tax * 0.60;
    let apparel = shoes * 0.80;
    let ball = apparel / 4;
    let extraStuff = ball / 5;

    let total = tax + shoes + apparel + ball + extraStuff;

    console.log(total);
}
demo(["365"]);