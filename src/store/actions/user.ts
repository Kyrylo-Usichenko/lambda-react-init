import { userActions } from "./../reducers/user";
import { AsyncAction } from "./common";

export type UserActions = ReturnType<typeof userActions.setProducts>;

export const setProducts =
  (): AsyncAction =>
  async (dispatch, _, { mainApi }) => {
    try {
      // const response = await mainApi.getProducts();
      // console.log(response);
      dispatch(userActions.setProducts());
    } catch (e) {
      console.log(e);
    }
  };
