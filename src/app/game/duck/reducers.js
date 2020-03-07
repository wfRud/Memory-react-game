import types from "./types";

const Initial_Variations = {
  name: "",
  email: "",
  password: "",
  password2: "",
  variations: [16, 36, 64],
  start: false,
  flipped: [],
  solved: [],
  compare: [],
  nameError: false,
  emailError: false,
  passwordError: false,
  passwordConfirmError: false,
  register: false,
  isLogged: null
};

const variantReducer = (state = Initial_Variations, action) => {
  switch (action.type) {
    case types.SET_VALUE:
      const { field, value } = action;
      return { ...state, [field]: value };
    case types.CLEAR_FIELDS:
      return { ...state, name: "", email: "", password: "", password2: "" };
    case types.TOGGLE_START:
      return { ...state, start: !state.start };
    case types.SET_ERROR:
      const { fieldError, error } = action;
      return { ...state, [fieldError]: error };
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
    case types.SET_REGISTER:
      return { ...state, register: action.register };
    case types.SET_isLogged:
      return { ...state, isLogged: action.isLogged };
    default:
      return state;
  }
};

export default variantReducer;
