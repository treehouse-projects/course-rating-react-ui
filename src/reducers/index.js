import { combineReducers } from "redux";

import courses from "./courses";
import course from "./course";
import auth from "./auth";
import users from "./users";
import breadcrumb from "./breadcrumb";


const rootReducer = combineReducers({
  courses,
  course,
  users,
  auth,
  breadcrumb
});

export default rootReducer;
