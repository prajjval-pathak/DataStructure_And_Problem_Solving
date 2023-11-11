function migratoryBirds(arr: number[]): number {
  // Write your code here
  const obj: { [index: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const bt of arr) {
    obj[bt] = obj[bt] + 1;
  }
  console.log(obj);
  let maxVal: number = obj[1];
  let index = 1;
  for (let i = 1; i <= 5; i++) {
    if (maxVal < obj[i]) {
      index = i;
      maxVal = obj[i];
    }
  }
  // console.log(previousVal)
  return index;
}
