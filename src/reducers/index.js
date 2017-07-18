import { combineReducers } from "redux";

import courses from "./courses";
import course from "./course";

const rootReducer = combineReducers({
  courses,
  course
});

export default rootReducer;
