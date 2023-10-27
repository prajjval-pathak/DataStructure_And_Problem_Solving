function birthday(s: number[], d: number, m: number): number {
  // Write your code here

  //Optimal solution with sliding window(Time Complexity O(N))
  let birth_sum: number = 0;
  let count: number = 0;
  for (let i = 0; i < m; i++) {
    birth_sum += s[i];
  }
  if (birth_sum === d) {
    count++;
  }
  for (let j = m; j < s.length; j++) {
    birth_sum = birth_sum - s[j - m] + s[j];
    if (birth_sum === d) {
      count++;
    }
    console.log(count, birth_sum);
  }
  return count;

  //Using Brute First Approch(Not Optimal Time Complexity Quadratic)
  //     for(let i=0;i<s.length;i++){
  //     let birth_sum=0
  //         for(let j=i;j<i+m;j++){
  //         birth_sum+=s[j]
  //     }
  //         if(birth_sum===d){count++}
  // }
  // return count
}

