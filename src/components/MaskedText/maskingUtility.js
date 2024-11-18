export function getMaskedString(originalWord, gussedLetters) {
  gussedLetters = gussedLetters.map((letter) => letter.toUpperCase());

  const gussedLetterSet = new Set(gussedLetters);

  
  const result = originalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (gussedLetterSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });

  return result.join("");
}
