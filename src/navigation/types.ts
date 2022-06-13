export enum ScreenNames {
  "AuthNav" = "AuthNav",
  "Login" = "Login",
  "SignUp" = "SignUp",
  "TabNav" = "TabNav",
  "Rent" = "Rent",
  "Car" = "Car",
  "Success" = "Success",
}

export type RootStackParamList = {
  AuthNav: undefined;
  TabNav: undefined;
  // TODO:
  Car: { item: any };
  Success: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type TabStackParamList = {
  Rent: undefined;
};
