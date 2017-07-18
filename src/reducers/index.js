import { combineReducers } from "redux";

import courses from "./courses";
import course from "./course";
import auth from "./auth";

const rootReducer = combineReducers({
  courses,
  course,
  auth
});

export default rootReducer;
