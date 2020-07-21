// Import combineReducer and reducer from reducer.js
import { combineReducers } from "redux";
import reducer from "./reducer";

// CombineReducer
// Item is the same as reducer.
export default combineReducers({
  item: reducer,
});
