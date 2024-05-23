function demo(input){

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let pensTotalSum = pens * 5.80;
    let markersTotalSum = markers * 7.20;
    let litersTotalSum = liters * 1.20;
    let totalSum = pensTotalSum + markersTotalSum + litersTotalSum;

    let discountPrice = totalSum * discount / 100;
    let sumAfterDiscount = totalSum - discountPrice;
    console.log(sumAfterDiscount);

}
demo(["2","3","4","25"]);