import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function PlayGame() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <h1>Play the Game</h1>
      <Link to="/start" className="text-blue-500">
        Link
      </Link>
      <p>{data.value}</p>
    </>
  );
}

export default PlayGame;
