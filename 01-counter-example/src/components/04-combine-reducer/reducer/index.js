import { combineReducers } from "redux";
import counter5 from "./todos";
import counter from "./counter";

export const reducer = combineReducers({
  counter5,
  counter,
});
