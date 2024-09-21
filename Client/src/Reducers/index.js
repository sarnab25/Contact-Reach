import { combineReducers } from "redux";
import contactReducer from "./contacts";
import messageReducer from "./messages";
export default combineReducers({
contactReducer,
messageReducer
})