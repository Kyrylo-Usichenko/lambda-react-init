import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
 
}

const initialState: UserState = {
  
};

export class User extends ImmerReducer<UserState> {
  setFirstAction() {
 
  }

}

export default createReducerFunction(User, initialState);
