function highestScoringWord(st) {
  const ar=st.split(' ')
  const sum=[]
  const score=ar.map((pt)=>
  pt.split('').reduce((total,curr)=>total+curr.charCodeAt(0)-96,0)
  )
  console.log(score)
  console.log(Math.max(...score))
  const maxi=score.indexOf(Math.max(...score))
  return ar[maxi]
}

module.exports = highestScoringWord;
