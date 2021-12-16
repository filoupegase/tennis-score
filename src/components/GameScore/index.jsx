import { useSelector } from 'react-redux';


function GameScore() {
  const stateRedux = useSelector((state) => state);

  return (
      <div className="display">
        { stateRedux.playing === false ? 'jeu en pause' : `Le score est : ${ stateRedux.player1 } - ${ stateRedux.player2 }` }
      </div>
  );
}

export default GameScore;