import axios from "axios";
//import { store } from "./store";
import { URLSource } from "./utils/const";

const API_SECRET_KEY="#VictoireKAFANGA%&"

const axiosInstance = axios.create({
  baseURL: URLSource + "/projetgoweb/",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_SECRET_KEY}`,
    /*"Access-Control-Allow-Origin": "*",*/
  },
});

export default axiosInstance;