import { createActionCreators } from "immer-reducer";
import { User } from "../reducers/user";
import { AsyncAction } from "./common";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setFirstAction>;

export const setFirstAction =
  (): AsyncAction =>
  async (dispatch, _, { mainApi }) => {
    try {
      await mainApi.sendPhone();
    } catch (e) {
      console.log(e);
    }
  };
