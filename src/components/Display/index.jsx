import { useSelector } from 'react-redux';


function Display() {
  const gameIsPlaying = useSelector((state) => state.playing);
  return (
      <p>{ gameIsPlaying ? '' : 'jeu en pause' }</p>
  );
}

export default Display;