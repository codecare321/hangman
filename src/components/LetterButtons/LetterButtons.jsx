const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ text, gussedLetters, onLetterClick }) {
  const originalLetters = new Set(text.toUpperCase().split(""));
  const gussedLettersSet = new Set(gussedLetters);

  const buttonStyle = (letter) => {
    if (gussedLettersSet.has(letter)) {
      return originalLetters.has(letter) ? "bg-green-500" : "bg-red-500";
    }
    return "bg-blue-500";
  };

  function handleLetterClick(e) {
    const characterOfTheLetter = e.target.value;
    onLetterClick?.(characterOfTheLetter);
  }

  const buttons = ALPHABETS.map((letter) => {
    return (
      <button
        key={`button-${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={gussedLettersSet.has(letter)}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
      >
        {letter}
      </button>
    );
  });
  return <>{buttons}</>;
}

export default LetterButtons;
