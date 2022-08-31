// code your solution here

function superbowlWin(record) {
    const isWin = record.find((myrecord) => myrecord.result === "W");
    if (isWin) {
        return isWin.year;
    } else {
        return undefined;
    }
}
