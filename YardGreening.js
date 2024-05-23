function yardGreening(input){
 
    let squareMeter = Number (input[0]);
 
    let pricePerSquareMeter = 7.61;
    let discountPercent = 0.18;

    let price = squareMeter * pricePerSquareMeter;
    let discount = price * discountPercent;

    let finalPrice = price - discount;
 
 
 
    console.log('The final price is: '+finalPrice+' lv.')
    console.log('The discount is: '+discount+ ' lv.')
}

yardGreening(["550"]);