function demo(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint * 1.1) * 14.5;
    let thinnerSum = thinner * 5;
    let bagsSum = 0.40;

    let totalSumMaterials = nylonSum + paintSum + thinnerSum + bagsSum;
    let workersSum = totalSumMaterials * 0.3 * hours;
    let finalSum = workersSum + totalSumMaterials;

    console.log(finalSum);

}
demo(["10","11","4","8"]);