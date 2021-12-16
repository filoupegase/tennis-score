import { pointScore } from '../../store-redux/action';
import { useDispatch } from 'react-redux';


function PointScoreBtn({ playerId, children }) {
  const dispatch = useDispatch();
  return (
      <button
          className="button"
          onClick={ () => dispatch(pointScore(playerId)) }
      >
        { children }
      </button>
  );
}

export default PointScoreBtn;