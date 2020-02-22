import types from "./types";

const toggleStart = item => ({ type: types.TOGGLE_START, start: item });
const toggleQuit = item => ({ type: types.TOGGLE_QUIT, quit: item });

const setLevel = item => ({ type: types.SET_LEVELS, variant: item });
const clearLevels = () => ({ type: types.CLEAR_LEVELS, variant: null });

export default { toggleStart, toggleQuit, setLevel, clearLevels };
