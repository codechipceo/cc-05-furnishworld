import axios from "axios";
import { backendUrl } from "./config";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: backendUrl,
});



export { axiosInstance };