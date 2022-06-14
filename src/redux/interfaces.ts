import { SET_AUTH_TOKEN } from "./userActions";
export interface IClient {
  avatar: string;
  email: string;
  password: string;
}

export interface IFullName {
  name: string;
  surname: string;
  patronymic: string;
}

export interface IAddress {
  country: string;
  city: string;
  street: string;
  buildingNumber: string;
  flatNumber: string;
}

export interface ICar {
  id: number;
  photo: string;
  brand: string;
  type: string;
  state: string;
  agreements: [];
  rentalCost: {
    id: number;
    hryvnias: number;
    kopiykas: number;
    clientId: null;
    carId: number;
    agreementId: null;
    fineId: null;
  };
}

export interface IAgreement {
  issueingDate: number;
  expectedReturnDate: number;
}

export interface ICollateralAmount {
  hryvnias: number;
  kopiykas: number;
}
