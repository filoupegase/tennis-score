import { useSelector } from 'react-redux';


function GameScore() {
  const scorePlayer1 = useSelector((state) => state.player1);
  const scorePlayer2 = useSelector((state) => state.player2);
  console.log(scorePlayer1);
  console.log(scorePlayer2);

  return (
      <div className="display">
        Le score est : { scorePlayer1 } - { scorePlayer2 }
      </div>
  );
}

export default GameScore;