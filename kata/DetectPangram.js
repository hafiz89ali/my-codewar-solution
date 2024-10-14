// Name: Detect Pangram
// ID: 545cedaa9943f7fe7b000048
// URL: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// Description:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  console.log(alphabet);
  const inputLetters = new Set(string.toLowerCase().replace(/[^a-z]/g, ""));
  console.log(inputLetters);

  // Check if the input contains all letters of the alphabet
  for (let letter of alphabet) {
    console.log(letter);
    if (!inputLetters.has(letter)) {
      return false;
    }
  }
  return true;
}

export default isPangram;
