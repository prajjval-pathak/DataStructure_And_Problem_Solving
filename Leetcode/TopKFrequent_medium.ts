function topKFrequent(nums: number[], k: number): number[] {
  const mp = new Map();
  const ct: number[] = [];
  for (let number of nums) {
    if (mp.has(number)) {
      mp.set(number, mp.get(number) + 1);
    } else {
      mp.set(number, 1);
    }
    // if(mp.get(number)>=k && !ct.includes(number)){
    //     ct.push(number)
    // }
  }
  const mapSort1 = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));
  console.log(mapSort1);
  return Array.from(mapSort1.keys()).slice(0, k);
}
console.log(topKFrequent([1,1,2,3],1))
