// function divisibleSumPairs(n: number, k: number, ar: number[]): number {
//     // Write your code here
//   let count=0
//   for (let i=0;i<n;i++){
//       for(let j=i+1;j<n;j++){
//           if((ar[i]+ar[j])%k==0)
//           {
//              count+=1
//           }
//       }
//   }
//  return count
// }
function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let count = 0;
  const remainderCount = new Array(k).fill(0);

  for (let i = 0; i < n; i++) {
    const remainder = ar[i] % k;

    const complement = (k - remainder) % k;

    count += remainderCount[complement];
    remainderCount[remainder]++;
    console.log(remainder, remainderCount);
  }

  return count;
}
