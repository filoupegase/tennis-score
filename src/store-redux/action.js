export const PLAY_PAUSE = 'PLAY_PAUSE';
export const POINT_SCORE = 'POINT_SCORE';

export const playPause = () => ({
  type: PLAY_PAUSE
});

export const pointScore = (player) => ({
      type: POINT_SCORE,
      payload: { player: player }
    }
);

const restartGame = () => ({ type: 'restart' });