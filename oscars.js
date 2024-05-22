function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgeCount = Number(input[2]);

    let totalPoints = 0;

    for (let i = 3; i < input.length; i++) {

        let judgeName = input[i++];

        let pointsFromJudge = Number(input[i]);

        let judgeNameSize = Number(judgeName.length);

        totalPoints = academyPoints + (judgeNameSize * pointsFromJudge) / 2;

        academyPoints = totalPoints;

        if (totalPoints > 1250.5) {
            break;
        }
    }
    if (totalPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);

    } else if (totalPoints < 1250.5) {

        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }

}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);