import {combineReducers, createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {postsReducer} from "./reducers/postsReducer";

const rootReducer = combineReducers({
    postsR: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
