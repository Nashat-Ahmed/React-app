import { combineReducers } from "redux";
import loginReducer from "./slice";

export const rootReducer = combineReducers({
  login: loginReducer,      
});
