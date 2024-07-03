import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducers/Auth/authSlice";
import userReducer from "../reducers/User/userSlice";
import jobReducer from "../reducers/Job/jobSlice";
import projectReducer from "@/reducers/Project/projectSlice";
import blogReducer from "@/reducers/Blog/blogSlice";
import courseReducer from "../reducers/Course/courseSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  jobs: jobReducer,
  projects: projectReducer,
  blogs: blogReducer,
  courses: courseReducer,
});

export default rootReducer;
