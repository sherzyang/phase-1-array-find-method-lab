function superbowlWin(record){
    function dolphin (record){return record.result === "W"};
    let obj = record.find(dolphin);
    if (obj === undefined) {
        return undefined;
    }
    else return obj.year;

}   


