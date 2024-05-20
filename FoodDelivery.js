function demo(input){

    let chikenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegyMenus = Number(input[2]);

    let chikenMenusPrice = chikenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let vegyMenusPrice = vegyMenus * 8.15;

    let allMenusPrice = chikenMenusPrice + fishMenusPrice + vegyMenusPrice;
    let dessertPrice = allMenusPrice * 0.20;
    let deliveryPrice = 2.50;

    let finalPrice = allMenusPrice + dessertPrice + deliveryPrice;
    console.log(finalPrice)
    
}
demo(["2","4","3"]);