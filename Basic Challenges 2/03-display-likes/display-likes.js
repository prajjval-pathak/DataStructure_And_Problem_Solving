const displayLikes=(arr)=>
{ 
  const le=arr.length
   if(le===1){
  return `${arr[0]} likes this`
  } if(le===2){
  return `${arr[0]} and ${arr[1]} like this`
  }
  if(le==3){
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
  }
  if(le>3){
  return `${arr[0]}, ${arr[1]} and ${le-2} others like this`
  }
  else{
  return 'no one likes this'
}
  }

module.exports = displayLikes;
