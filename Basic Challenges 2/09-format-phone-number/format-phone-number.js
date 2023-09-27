function formatPhoneNumber(arr) {
  const formatted_string="("+arr.slice(0,3).join('')+") "+arr.slice(3,6).join('')+"-"+arr.slice(6).join('')
  return (formatted_string)
}

module.exports = formatPhoneNumber;
