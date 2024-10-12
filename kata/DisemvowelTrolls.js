function disemvowel(str) {
  const strArray = str.split("");
  const result = [];
  for (let i = 0; i < strArray.length; i++) {
    if (!/[aeiou]/i.test(strArray[i])) {
      result.push(strArray[i]);
    }
  }
  return result.join("");
}

export default disemvowel;
