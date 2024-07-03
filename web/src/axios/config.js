import axios from "axios";
import {
  addAccessToken,
  handleRequestError,
  handleResponseOK,
  handleResponseError,
} from "./interceptors";

const baseURL = process.env.NEXT_PUBLIC_GW_URL || "http://localhost:5000/";

const instance = axios.create({
  baseURL,
  timeout: 60000,
});

const secureInstance = axios.create({
  baseURL,
  timeout: 60000,
});

secureInstance.interceptors.request.use(addAccessToken, handleRequestError);
secureInstance.interceptors.response.use(handleResponseOK, handleResponseError);

export { instance, secureInstance };
