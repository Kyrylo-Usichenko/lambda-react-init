import { ThunkAction } from "redux-thunk";

import { Actions, api, State } from "./../index";

export type AsyncAction<R = void> = ThunkAction<R, State, typeof api, Actions>;
