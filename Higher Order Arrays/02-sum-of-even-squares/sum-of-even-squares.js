function sumOfEvenSquares(arr) {

  const SumEven=arr.filter((num)=>num%2==0).reduce((total,curr)=>total+(curr*curr),0)
  return (SumEven)
  //using Foreach

}

module.exports = sumOfEvenSquares;
