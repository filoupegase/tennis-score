import { useDispatch } from 'react-redux';
import { playPause } from '../../store-redux/action';
import '../../App.css';


function PlayPauseBtn() {
  const dispatch = useDispatch();
  return (
      <button
          className="button"
          onClick={ () => dispatch(playPause()) }
      >Play / Pause</button>
  );
}

export default PlayPauseBtn;