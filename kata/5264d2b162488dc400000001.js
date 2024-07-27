// Description:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// Here is the solution

function spinWords(string) {
  const words = string.split(" "); // split paragraph to number of words
  let result = []; // store final result

  for (let i = 0; i < words.length; i++) {
    // test every word
    const word = words[i];
    if (word.length >= 5) {
      // if word has more than 5 letter go here
      let reverseWord = ""; // store reversed letter
      for (let j = word.length - 1; j >= 0; --j) {
        reverseWord += word[j]; // combine reversed letter into string
      }
      result.push(reverseWord); // push reversed word into result
    } else {
      // if word has less than 5 letter, go here. Do nothing. Just push into reslut.
      result.push(word);
    }
  }
  return result.join(" ");
}
