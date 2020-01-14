import types from "./types";

const setLevel = item => ({ type: types.SET_LEVELS, variant: item });
const clearLevels = () => ({ type: types.CLEAR_LEVELS, variant: null });

export default { setLevel, clearLevels };
