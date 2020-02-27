import types from "./types";

const toggleStart = item => ({ type: types.TOGGLE_START, start: item });
const setError = (type, value) => ({
  type: types.SET_ERROR,
  fieldError: type,
  error: value
});
const setFlipped = item => ({ type: types.SET_FLIPPED, item: item });
const resetFlipped = () => ({ type: types.RESET_FLIPPED, flipped: [] });
const setSolved = item => ({ type: types.SET_SOLVED, item: item });
const resetSolved = () => ({ type: types.RESET_SOLVED, solved: [] });
const toCompare = item => ({ type: types.TO_COMPARE, item: item });
const resetCompare = () => ({ type: types.RESET_COMPARE, compare: [] });
const setRegister = item => ({ type: types.SET_REGISTER, register: item });
const setIsLogged = item => ({ type: types.SET_isLogged, isLogged: item });

export default {
  toggleStart,
  setError,
  setFlipped,
  resetFlipped,
  setSolved,
  resetSolved,
  toCompare,
  resetCompare,
  setRegister,
  setIsLogged
};
