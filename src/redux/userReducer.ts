import { SET_AUTH_TOKEN, SET_CARS } from "./userActions";

const initialState = {
  authToken: null,
  cars: [],
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.data,
      };
    case SET_CARS:
      return {
        ...state,
        cars: action.data,
      };
    default:
      return state;
  }
};
