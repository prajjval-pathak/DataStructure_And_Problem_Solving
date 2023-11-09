function phoneNumberDirectory(arr) {
  const bt=new Map()
  for(const word of arr){
    const FormattedStr=word.trim().split(":")
    bt.set(FormattedStr[0],FormattedStr[1])
  }
  return bt
}

module.exports = phoneNumberDirectory;
