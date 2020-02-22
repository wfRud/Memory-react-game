import types from "./types";

const setField = (item, value) => ({
  type: types.SET_VALUE,
  field: item,
  value: value
});
const clearFields = () => ({ type: types.CLEAR_FIELDS, name: "", email: "" });
const toggleStart = item => ({ type: types.TOGGLE_START, start: item });
const toggleQuit = item => ({ type: types.TOGGLE_QUIT, quit: item });
const increaseStep = () => ({ type: types.INCREASE_STEP, step: 0 });
const resetStep = () => ({ type: types.RESET_STEP, step: 0 });
const setFlipped = item => ({ type: types.SET_FLIPPED, item: item });
const resetFlipped = () => ({ type: types.RESET_FLIPPED, flipped: [] });
const setSolved = item => ({ type: types.SET_SOLVED, item: item });
const resetSolved = () => ({ type: types.RESET_SOLVED, solved: [] });
const toCompare = item => ({ type: types.TO_COMPARE, item: item });
const resetCompare = () => ({ type: types.RESET_COMPARE, compare: [] });
const setError = (type, value) => ({
  type: types.SET_ERROR,
  fieldError: type,
  error: value
});

export default {
  setField,
  clearFields,
  toggleStart,
  toggleQuit,
  increaseStep,
  resetStep,
  setFlipped,
  resetFlipped,
  setSolved,
  resetSolved,
  toCompare,
  resetCompare,
  setError
};
