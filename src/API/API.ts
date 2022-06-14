import { ICollateralAmount } from "./../redux/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { IAddress, IAgreement, IClient, IFullName } from "../redux/interfaces";

const axiosInstance = axios.create({
  baseURL: "http://192.168.0.110:5000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = await AsyncStorage.getItem("authToken");

  req.headers = {
    ...req.headers,
    token: token ?? "",
  };

  return req;
});

export const API = {
  signUp(newClient: IClient, newFullName: IFullName, newAddress: IAddress) {
    return axiosInstance.post(`/login`, { newClient, newFullName, newAddress });
  },
  getCars() {
    return axiosInstance.get("/cars");
  },
  getCarById(carId: number) {
    return axiosInstance.get(`/cars/${carId}`);
  },
  createAgreement(carId: number, newAgreement: IAgreement) {
    return axiosInstance.post("/agreements", {
      carId,
      newAgreement,
    });
  },
  getAgreeements() {
    return axiosInstance.get("/agreements");
  },
};
