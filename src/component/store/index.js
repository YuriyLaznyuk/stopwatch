import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {timerReducer} from "./reducers/timerReducer";

const rootReducer = combineReducers({
    timer: timerReducer
});

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));