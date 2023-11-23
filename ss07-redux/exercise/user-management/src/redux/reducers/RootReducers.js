import {combineReducers} from "redux";
import {UserReducers} from "./UserReducers";

export const rootReducer = combineReducers({
    users : UserReducers,
})
