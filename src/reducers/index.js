import { combineReducers } from "redux";

import courses from "./courses";
import course from "./course";
import auth from "./auth";
import user from "./user";
import breadcrumb from "./breadcrumb";


const rootReducer = combineReducers({
  courses,
  course,
  user,
  auth,
  breadcrumb
});

export default rootReducer;
