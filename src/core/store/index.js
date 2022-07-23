import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import pagoReducer from "./pagos/reducer";

const reducers = combineReducers({
   pagos: pagoReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
