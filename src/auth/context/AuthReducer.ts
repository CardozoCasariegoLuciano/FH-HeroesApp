import { types } from "../types/types";

export interface Istate {
  logged: boolean;
  user: IUser | null;
}

export interface IUser {
  id: string;
  name: string;
}

interface IActions {
  type: string;
  payload: any;
}

export const authReducer = (state: Istate, action: IActions): Istate => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        ...state,
        logged: false,
        user: null,
      };

    default:
      return state;
  }
};
