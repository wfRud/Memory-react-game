import types from "./types";

const Initial_User = {
  name: "",
  email: "",
  start: false
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
    default:
      return state;
  }
};

export default userReducer;
