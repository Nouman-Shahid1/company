import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      username,
      password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
