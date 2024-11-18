import { getMaskedString } from "./maskingUtility";

function MaskedText({ text, gussedLetters }) {
  const maskedString = getMaskedString(text, gussedLetters);

  return (
    <>
      return (
      <>
        {maskedString.split("").map((char, index) => (
          <span key={index} className="mx-1">
            {char}
          </span>
        ))}
      </>
      );
    </>
  );
}
export default MaskedText;
