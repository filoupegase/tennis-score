const playPause = () => ({ type: 'playPause' });

const restartGame = () => ({ type: 'restart' });

const pointScored = (player) => ({
  type: 'pointScored',
  payload: { player: player }
});