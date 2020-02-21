import types from "./types";

const Initial_Variations = {
  variations: [16, 36, 64],
  variant: null
};

const variantReducer = (state = Initial_Variations, action) => {
  switch (action.type) {
    case types.SET_LEVELS:
      return { ...state, variant: action.variant };
    case types.CLEAR_LEVELS:
      return { ...state, variant: action.variant };
    default:
      return state;
  }
};

export default variantReducer;
