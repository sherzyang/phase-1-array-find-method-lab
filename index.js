function superbowlWin(record){
    let obj = record.find(record => record.result === "W");
    if (obj === undefined) {
        return undefined;
    }
    else return obj.year;

}   


