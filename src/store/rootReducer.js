import { combineReducers } from "redux";
import asyncReducer from "./reducers/asyncReducers";
import eventReducer from "./reducers/fetchReducer";
import categoriesReducer from "./reducers/productsReducer";
const rootReducer = combineReducers({
  items: eventReducer,
  async: asyncReducer,
  categories: categoriesReducer,
});

export default rootReducer;
