function getCount(str) {
  var vowelsCount = "aeiou";
  let count = 0
  let strng = str.toLowerCase()
  // enter your majic here
  for(let i = 0; i <= strng.length; i++){
    if (vowelsCount.indexOf(strng[i]) !== -1){
    count += 1;
    }
  }
  return count;
  console.log(count)
}
