import { ICar } from "../redux/interfaces";

export enum ScreenNames {
  "AuthNav" = "AuthNav",
  "Login" = "Login",
  "SignUp" = "SignUp",
  "TabNav" = "TabNav",
  "Rent" = "Rent",
  "Car" = "Car",
  "Success" = "Success",
  "Agreements" = "Agreements",
}

export type RootStackParamList = {
  AuthNav: undefined;
  TabNav: undefined;
  Car: { item: ICar };
  Success: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type TabStackParamList = {
  Rent: undefined;
  Agreements: undefined;
};
