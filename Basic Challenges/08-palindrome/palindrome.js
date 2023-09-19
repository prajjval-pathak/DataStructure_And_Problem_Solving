function isPalindrome(str) {
  const format=str.toLowerCase().replace(/[^a-z0-9]/g,"")
  console.log(format)
  const pali=format.split('').reverse().join('')
  console.log(pali)
  if(format===pali)return true
  else return false
}

module.exports = isPalindrome;
