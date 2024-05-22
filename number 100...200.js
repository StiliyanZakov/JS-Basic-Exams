function Number100To200(input){
 let Num = (input[0]);

 if (Num < 100){

 console.log("Less than 100");

 } else if( Num >= 100 && Num <= 200 ){

    console.log("Between 100 and 200");

 } else {

 console.log("Greater than 200"); 
} 
 
}

 Number100To200(["210"]);