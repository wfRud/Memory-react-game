import types from "./types";

const Initial_User = {
  name: "",
  email: "",
  variant: null,
  time: 0,
  step: 0
};

const userReducer = (state = Initial_User, action) => {
  switch (action.type) {
    case types.SET_VALUE:
      const { field, value } = action;
      return { ...state, [field]: value };
    case types.CLEAR_FIELDS:
      return { ...state, name: "", email: "" };
    case types.INCREASE_STEP:
      return { ...state, step: state.step + 1 };
    case types.RESET_STEP:
      return { ...state, step: 0 };
    case types.SET_LEVELS:
      return { ...state, variant: action.variant };
    case types.CLEAR_LEVELS:
      return { ...state, variant: action.variant };

    default:
      return state;
  }
};

export default userReducer;
