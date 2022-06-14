import { SET_AGREEMENTS, SET_AUTH_TOKEN, SET_CARS } from "./userActions";

const initialState = {
  authToken: null,
  cars: [],
  agreements: [],
  agreementCars: [],
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
    case SET_AGREEMENTS:
      return {
        ...state,
        agreements: action.data.agreements,
        agreementCars: action.data.agreementCars,
      };
    default:
      return state;
  }
};
