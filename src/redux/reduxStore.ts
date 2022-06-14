import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppDispatch = typeof store.dispatch;

export default store;
