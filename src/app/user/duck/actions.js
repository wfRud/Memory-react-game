import types from "./types";

const setNick = value => ({ type: types.SET_NICK, nick: value });
const clearNick = () => ({ type: types.CLEAR_NICK, nick: "" });
const setTime = value => ({ type: types.SET_TIME, time: value });
const increaseStep = () => ({ type: types.INCREASE_STEP, step: 0 });
const resetStep = () => ({ type: types.RESET_STEP, step: 0 });
const setLevel = item => ({ type: types.SET_LEVELS, variant: item });
const clearLevels = () => ({ type: types.CLEAR_LEVELS, variant: null });

export default {
  setNick,
  clearNick,
  setTime,
  increaseStep,
  resetStep,
  setLevel,
  clearLevels
};
