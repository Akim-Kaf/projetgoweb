import axios from "axios";
//import { store } from "./store";
import { URLSource } from "./utils/const";

const axiosInstance = axios.create({
  baseURL: URLSource + "/projetgoweb/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;