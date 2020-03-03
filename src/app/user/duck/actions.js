import types from "./types";

const setUserId = value => ({ type: types.SET_USER_ID, user_id: value });
const setNick = value => ({ type: types.SET_NICK, nick: value });
const clearNick = () => ({ type: types.CLEAR_NICK, nick: "" });
const setGamesAmount = value => ({
  type: types.SET_GAMES_AMOUNT,
  gamesAmount: value
});
const setTime = value => ({ type: types.SET_TIME, time: value });
const increaseStep = () => ({ type: types.INCREASE_STEP, step: 0 });
const resetStep = () => ({ type: types.RESET_STEP, step: 0 });
const setLevel = item => ({ type: types.SET_LEVELS, variant: item });
const clearLevels = () => ({ type: types.CLEAR_LEVELS, variant: null });

export default {
  setUserId,
  setNick,
  clearNick,
  setGamesAmount,
  setTime,
  increaseStep,
  resetStep,
  setLevel,
  clearLevels
};
