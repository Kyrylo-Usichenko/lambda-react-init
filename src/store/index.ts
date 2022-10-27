import {
  applyMiddleware,
  combineReducers,
  compose,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Main from "../api/main";
import MainProtected from "../api/main-protected";
import { exampleActions } from "./actions/example";
import userReducer from "./reducers/example";

export type State = ReturnType<typeof reducers>;
export type Actions = exampleActions;

export const api = {
  mainApi: Main.getInstance(),
  mainProtectedApi: MainProtected.getInstance(),
};

const reducers = combineReducers({
  userReducer,
});

const enhancer = compose(applyMiddleware(thunk.withExtraArgument(api)));

export default configureStore({
  reducer: reducers,
  enhancers: (defaultEnhancers) => [enhancer, ...defaultEnhancers],
});
