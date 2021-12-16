import PlayPauseBtn from './components/PlayPauseBtn';
import Display from './components/Display';
import GameScore from './components/GameScore';
import PointScoreBtn from './components/PointScoreBtn';
import ResetScoreBtn from './components/ResetScoreBtn';
import './App.css';


function App() {

  return (
      <>
        <GameScore />
        <Display />
        <div className="buttons-row">
          <PointScoreBtn player="joueur 1" />
          <PointScoreBtn player="joueur 2" />
        </div>
        <div className="buttons-row">
          <ResetScoreBtn />
          <PlayPauseBtn />
        </div>
      </>
  );
}

export default App;
