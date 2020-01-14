import types from "./types";

const setField = (item, value) => ({
  type: types.SET_VALUE,
  field: item,
  value: value
});
const clearFields = () => ({ type: types.CLEAR_FIELDS, name: "", email: "" });
const toggleStart = item => ({ type: types.TOGGLE_START, start: item });

export default { setField, clearFields, toggleStart };
