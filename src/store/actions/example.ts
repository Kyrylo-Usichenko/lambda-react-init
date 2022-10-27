import { exampleActions } from "../reducers/example";
import { AsyncAction } from "./common";

export type exampleActions = ReturnType<typeof exampleActions.setProducts>;

export const setProducts =
  (): AsyncAction =>
  async (dispatch, _, { mainApi }) => {
    try {
      // const response = await mainApi.getProducts();
      // console.log(response);
      dispatch(exampleActions.setProducts());
    } catch (e) {
      console.log(e);
    }
  };
