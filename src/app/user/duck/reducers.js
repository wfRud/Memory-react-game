import types from "./types";

const Initial_User = {
  name: "",
  email: "",
  start: false,
  quit: false,
  time: 0,
  step: 0,
  flipped: [],
  solved: [],
  compare: []
};

const userReducer = (state = Initial_User, action) => {
  switch (action.type) {
    case types.SET_VALUE:
      const { field, value } = action;
      return { ...state, [field]: value };
    case types.CLEAR_FIELDS:
      return { ...state, name: "", email: "" };
    case types.TOGGLE_START:
      return { ...state, start: !state.start };
    case types.TOGGLE_QUIT:
      return { ...state, quit: !state.quit };
    case types.INCREASE_STEP:
      return { ...state, step: state.step + 1 };
    case types.RESET_STEP:
      return { ...state, step: 0 };
    case types.SET_FLIPPED:
      return { ...state, flipped: [...state.flipped, action.item] };
    case types.RESET_FLIPPED:
      return { ...state, flipped: [] };
    case types.SET_SOLVED:
      return { ...state, solved: [...state.solved, action.item] };
    case types.RESET_SOLVED:
      return { ...state, solved: [] };
    case types.TO_COMPARE:
      return { ...state, compare: [...state.compare, action.item] };
    case types.RESET_COMPARE:
      return { ...state, compare: [] };
    default:
      return state;
  }
};

export default userReducer;
