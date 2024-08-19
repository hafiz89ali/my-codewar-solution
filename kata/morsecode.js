const MORSE_CODE = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
};

const REVERSED_MORSE_CODE = Object.fromEntries(
  Object.entries(MORSE_CODE).map(([letter, code]) => [code, letter])
);

function decodeMorse(morseMessage) {
  return morseMessage
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((letter) => REVERSED_MORSE_CODE[letter] || "")
        .join("")
    )
    .join(" ");
}

console.log(decodeMorse(".-- --- .-. -.."));
