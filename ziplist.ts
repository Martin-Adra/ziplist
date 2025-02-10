function zipList(list1: unknown[], list2: unknown[]) {
  const zippedList = [];
  for (let i = 0; i < list1.length; i++) {
    zippedList.push(list1[i], list2[i]);
  }
  return zippedList;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  list1.forEach((curr, index) => {
    result.push(curr, list2[index]);
  });
  return result;
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
