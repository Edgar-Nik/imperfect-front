import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
