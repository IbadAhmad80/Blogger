import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./reducers/index";

export const initStore = (initialState = {}) => {
  return createStore(accountReducer, initialState, applyMiddleware(thunk));
};
