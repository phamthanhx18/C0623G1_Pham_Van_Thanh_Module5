import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/RootReducers";
import thunk from "redux-thunk";

const init = {};
const middleware = [thunk]
const store = createStore(rootReducer, init, applyMiddleware(...middleware));

export default store;