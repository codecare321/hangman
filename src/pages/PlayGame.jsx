import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/Hangman/HangMan";
function PlayGame() {
  const { state } = useLocation();
  const [gussedLetters, setGussedLetters] = useState([]);
  const [step, setStep] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  function handleLetterClick(letter) {
    if (gameOver) return;
    //you have to make new array

    setGussedLetters([...gussedLetters, letter]);

    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log("letter is in the word");
    } else {
      console.log("wrong");
      setStep(step + 1);
    }

    const uniqueLetters = new Set(state.wordSelected.toUpperCase());
    const allCorrect = [...uniqueLetters].every(
      (char) => gussedLetters.includes(char) || char === letter
    );
    if (allCorrect) {
      setGameOver(true);
      alert("You win!");
    } else if (step + 1 === 7) {
      setGameOver(true);
      alert("You lose!");
    }
  }

  function resetGame() {
    setGussedLetters([]);
    setStep(0);
    setGameOver(false);
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col border border-2 bg-yellow-100 m-14">
        <div className=" mt-6">
          <div className=" border bg-slate-300 w-30 h-30 p-4 mt-2  ">
            <h1 className="mr-2">Play the Game</h1>

            <MaskedText
              text={state.wordSelected}
              gussedLetters={gussedLetters}
            />
          </div>
        </div>
        <div className="m-8   ">
          <LetterButtons
            text={state.wordSelected}
            gussedLetters={gussedLetters}
            onLetterClick={handleLetterClick}
          />
        </div>
        <div className="">
          <HangMan step={step} />
        </div>

        {gameOver && (
          <div className=" mt-2">
            <button
              onClick={resetGame}
              className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded-md fe"
            >
              Restart Game
            </button>
          </div>
        )}

        <Link to="/start" className="text-blue-500  mt-6 mb-2">
          Start Game Link
        </Link>
      </div>
    </>
  );
}

export default PlayGame;
