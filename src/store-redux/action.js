export const PLAY_PAUSE = 'PLAY_PAUSE';

export const playPause = () => ({
  type: PLAY_PAUSE
});

const restartGame = () => ({ type: 'restart' });

const pointScored = (player) => ({
  type: 'pointScored',
  payload: { player: player }
});