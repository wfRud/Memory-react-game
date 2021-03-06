import { combineReducers } from "redux";
import variantReducer from "./app/game/duck";
import userReducer from "./app/user/duck";

const rootReducer = combineReducers({
  game: variantReducer,
  user: userReducer
});

export default rootReducer;
