import { combineReducers } from "redux";
import asyncReducer from "./reducers/asyncReducers";
import eventReducer from "./reducers/fetchReducer";

const rootReducer = combineReducers({
  items: eventReducer,
  async: asyncReducer,
});

export default rootReducer;
