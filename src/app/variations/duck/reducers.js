import types from "./types";

const Initial_Variations = {
  variations: [16, 36, 64],
  variant: null,
  start: false,
  quit: false
};

const variantReducer = (state = Initial_Variations, action) => {
  switch (action.type) {
    case types.TOGGLE_START:
      return { ...state, start: !state.start };
    case types.TOGGLE_QUIT:
      return { ...state, quit: !state.quit };
    case types.SET_LEVELS:
      return { ...state, variant: action.variant };
    case types.CLEAR_LEVELS:
      return { ...state, variant: action.variant };
    default:
      return state;
  }
};

export default variantReducer;
