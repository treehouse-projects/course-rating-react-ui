import { combineReducers } from "redux";

import courses from "./courses";
import course from "./course";
import auth from "./auth";
import user from "./user";
import breadcrumb from "./breadcrumb";
import errors from "./errors";
import redirect from "./redirect";


const rootReducer = combineReducers({
  courses,
  course,
  user,
  auth,
  breadcrumb,
  errors,
  redirect
});

export default rootReducer;
