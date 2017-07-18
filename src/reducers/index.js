import { combineReducers } from "redux";

import courses from "./courses";
import course from "./course";
import auth from "./auth";
import users from "./users";

const rootReducer = combineReducers({
  courses,
  course,
  users,
  auth
});

export default rootReducer;
