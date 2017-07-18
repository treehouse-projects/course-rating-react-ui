import { combineReducers } from "redux";

import courses from "./courses";

const rootReducer = combineReducers({
  courses,
  users
});

export default rootReducer;
