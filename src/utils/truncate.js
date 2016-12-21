
export default (str, maxLength, ellipsis = '...') => {
  if (str && str.length > maxLength) {
    return str.substring(0, maxLength - 1) + ellipsis
  }
  return str
}
