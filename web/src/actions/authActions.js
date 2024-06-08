import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
