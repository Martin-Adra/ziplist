"use strict";
function zipList(list1, list2) {
    const zippedList = [];
    for (let i = 0; i < list1.length; i++) {
        zippedList.push(list1[i], list2[i]);
    }
    return zippedList;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(list1, list2) {
    const result = [];
    list1.forEach((curr, index) => {
        result.push(curr, list2[index]);
    });
    return result;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
