import axios from "axios";
import store from "../store/store";
import { refreshToken } from "../reducers/Auth/authSlice";
import { getCookie } from "../utilities/utils";

const baseURL = process.env.NEXT_PUBLIC_GW_URL || "http://localhost:5000/";

export const addAccessToken = async (config) => {
  const state = store.getState();
  const { user } = state.auth;
  const { accessToken } = user;

  if (!accessToken) {
    await store.dispatch(
      refreshToken({
        grant_type: "refresh_token",
        refresh_token: getCookie("refresh_token"),
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      })
    );
    const newState = store.getState();
    const newAccessToken = newState.auth.user.accessToken;
    config.headers.Authorization = `Bearer ${newAccessToken}`;
  } else {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  config.headers.Accept = "application/json";
  return config;
};

export const handleRequestError = (error) => Promise.reject(error);

export const handleResponseOK = (response) => response;

export const handleResponseError = (error) => Promise.reject(error);

export const addInterceptors = (instance) => {
  instance.interceptors.request.use(addAccessToken, handleRequestError);
  instance.interceptors.response.use(handleResponseOK, handleResponseError);
};

// Axios instances
const instance = axios.create({
  baseURL,
  timeout: 60000,
});

const secureInstance = axios.create({
  baseURL,
  timeout: 60000,
});

addInterceptors(secureInstance);

export { instance, secureInstance };
