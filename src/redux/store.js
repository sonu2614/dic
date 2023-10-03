import fetchReducer from "./Reducers/searchReducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";


const store = createStore(fetchReducer, applyMiddleware(thunk));

export default store;