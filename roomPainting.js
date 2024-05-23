function roomPainting(input) {
    let paintCount = Number(input[0]);
    let wallPapersCount = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);
    let singlePaintPrice = 21.50;
    let singleWallPaperPrice = 5.20;
    let glovesCount = Math.ceil(wallPapersCount * 0.35);
    let neededBrushCount = Math.floor(paintCount * 0.48);
    let paintPrice = singlePaintPrice * paintCount;
    let wallPaperPrice = singleWallPaperPrice * wallPapersCount;
    let sumGlovesPrice = glovesCount * glovesPrice;
    let sumBrushPrice = neededBrushCount * brushPrice;
    let result = (paintPrice + wallPaperPrice + sumGlovesPrice + sumBrushPrice) / 15;
    console.log(`This delivery will cost ${result.toFixed(2)} lv.`)

}
roomPainting(["10", "8", "2.2", "5"])