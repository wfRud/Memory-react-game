import types from "./types";

const setField = (item, value) => ({
  type: types.SET_VALUE,
  field: item,
  value: value
});
const clearFields = () => ({ type: types.CLEAR_FIELDS, name: "", email: "" });
const increaseStep = () => ({ type: types.INCREASE_STEP, step: 0 });
const resetStep = () => ({ type: types.RESET_STEP, step: 0 });
const setLevel = item => ({ type: types.SET_LEVELS, variant: item });
const clearLevels = () => ({ type: types.CLEAR_LEVELS, variant: null });

export default {
  setField,
  clearFields,
  increaseStep,
  resetStep,
  setLevel,
  clearLevels
};
