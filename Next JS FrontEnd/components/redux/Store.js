import { applyMiddleware, createStore } from "redux";
import { accountReducer } from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialStore = {};
const middleware = [thunk];

const store = createStore(
  accountReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
