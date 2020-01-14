import { combineReducers } from "redux";
import variantReducer from "./app/variations/duck";
import userReducer from "./app/user/duck";

const rootReducer = combineReducers({
  variants: variantReducer,
  user: userReducer
});

export default rootReducer;
