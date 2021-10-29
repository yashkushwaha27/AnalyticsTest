import { combineReducers } from "redux";
import { productDataReducer } from "./reducer";

const reducers = combineReducers({
    products: productDataReducer
});

export default reducers;