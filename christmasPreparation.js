function christmasPreparation(input) {
    let packagePaper = 5.80;
    let textile = 7.20;
    let glue = 1.20;
    let packagePaperCount = Number(input[0]);
    let textileCount = Number(input[1]);
    let glueCount = Number(input[2]);
    let percentCount = Number(input[3]);
    let packagePaperPrice = packagePaperCount * packagePaper;
    let textilePrice = textileCount * textile;
    let gluePrice = glueCount * glue;
    let allMaterialPrice = packagePaperPrice + textilePrice + gluePrice;
    let extraCount = allMaterialPrice * (1 - percentCount / 100);

    console.log(extraCount.toFixed(3));
}
christmasPreparation(["7",
"8",
"0.5",
"45"]); 