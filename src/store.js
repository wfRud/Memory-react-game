import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import variantReducer from "./app/variations/duck";

const store = createStore(variantReducer, composeWithDevTools());

export default store;
