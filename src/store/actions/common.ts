import { ThunkAction } from "redux-thunk";

import { Actions, api, State } from "./../index";

export type AsyncAction = ThunkAction<void, State, typeof api | any, Actions>;
