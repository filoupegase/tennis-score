import initialState from './initialState';
import { PLAY_PAUSE, POINT_SCORE } from './action';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'restart':
      return {
        initialState
      };
    case PLAY_PAUSE:
      return {
        ...state,
        playing: !state.playing
      };
    case POINT_SCORE:
      const player = action.payload.player;
      const currentPlayerScore = state[player];
      return {
        ...state,
        [player]: currentPlayerScore + 15
      };
    default:
      return state;
  }


  if (action.type === 'pointScored') {
    const player = action.payload.player;
    const otherPlayer = player === 'player1' ? 'player2' : 'player1';
    if (state.winner) {
      // On ne peut pas marquer de point si le set est terminé
      return state;
    }
    if (state.playing === false) {
      // On ne peut pas marquer de point si le set est en pause
      return state;
    }
    const currentPlayerScore = state[player];
    if (currentPlayerScore <= 15) {
      // 0 ou 15 => on ajoute 15
      return { ...state, [player]: currentPlayerScore + 15 };
    }
    if (currentPlayerScore === 30) {
      return { ...state, [player]: 40 };
    }
    if (currentPlayerScore === 40) {
      if (state[otherPlayer] !== 40) {
        // Le joueur à gagné
        return { ...state, winner: player };
      }
      if (state.advantage === player) {
        // Le joueur à gagné
        return { ...state, winner: player };
      }
      if (state.advantage === null) {
        // Le joueur a maintenant l'avantage
        return { ...state, advantage: player };
      }
      // L'autre joueur a perdu l'avantage
      return { ...state, advantage: null };
    }
  }
  return state;
};


export default reducer;