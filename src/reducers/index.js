import { combineReducers } from "redux";

import courses from "./courses";
import breadcrumb from "./breadcrumb";

const rootReducer = combineReducers({
  courses,
  breadcrumb
});

export default rootReducer;
