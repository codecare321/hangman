import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
function PlayGame() {
  const { state } = useLocation();

  return (
    <>
      <h1>Play the Game</h1>

      <MaskedText text={state.wordSelected} gussedLetters={["H", "E"]} />
      <Link to="/start" className="text-blue-500">
        Link
      </Link>
      <p>{state.wordSelected}</p>
    </>
  );
}

export default PlayGame;
