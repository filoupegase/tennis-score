import './App.css';
import PlayPauseBtn from './components/PlayPauseBtn';
import Display from './components/Display';
import GameScore from './components/GameScore';


function App() {
  return (
      <>
        <GameScore />
        <Display />
        <PlayPauseBtn />
      </>
  );
}

export default App;
