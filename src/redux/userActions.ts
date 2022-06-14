import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../API/API";
import {
  IAddress,
  IAgreement,
  ICar,
  IClient,
  ICollateralAmount,
  IFullName,
} from "./interfaces";
import { AppDispatch } from "./reduxStore";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const SET_CARS = "SET_CARS";
export const SET_AGREEMENTS = "SET_AGREEMENTS";

export const setAuthToken = (authToken: string) => ({
  type: SET_AUTH_TOKEN,
  data: authToken,
});

export const setCars = (cars: ICar) => ({
  type: SET_CARS,
  data: cars,
});

export const setAgreements = (agreements, agreementCars) => ({
  type: SET_AGREEMENTS,
  data: { agreements, agreementCars },
});

export const createUserData = (
  newClient: IClient,
  newFullName: IFullName,
  newAddress: IAddress
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await API.signUp(newClient, newFullName, newAddress);

      await AsyncStorage.setItem("authToken", response.data.token);

      dispatch(setAuthToken(response.data.token));
    } catch (error) {
      console.warn(error);
    }
  };
};

export const getCars = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await API.getCars();

      dispatch(setCars(response.data));
    } catch (error) {
      console.warn(error);
    }
  };
};

export const getAgreeements = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await API.getAgreeements();

      const agreementCars = response.data.map(async (x) => {
        const result = await API.getCarById(x.carId);

        return result.data;
      });

      const result = await Promise.all(agreementCars);

      dispatch(setAgreements(response.data, result));
    } catch (error) {}
  };
};

export const rentACar = (carId: number, newAgreement: IAgreement) => {
  return async (dispatch: AppDispatch) => {
    try {
      await API.createAgreement(carId, newAgreement);

      dispatch(getAgreeements());
    } catch (error) {
      console.warn(error);
    }
  };
};
