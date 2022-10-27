import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Main from "../api/main";
import MainProtected from "../api/main-protected";
import { UserActions } from "./actions/user";
import userReducer from "./reducers/user";

export type State = ReturnType<typeof userReducer>;
export type Actions = UserActions;

export const api = {
  mainApi: Main.getInstance(),
  mainProtectedApi: MainProtected.getInstance(),
};

const reducers = {
  userReducer: userReducer,
};

const enhancer = compose(applyMiddleware(thunk.withExtraArgument(api)));

export default configureStore({
  reducer: reducers,
  enhancers: (defaultEnhancers) => [enhancer, ...defaultEnhancers],
});
