import { combineReducers } from "redux";
import * as courseActions from "../actionTypes";

function listCourses(state = [], action) {
  switch (action.type) {
    case courseActions.LIST_COURSES:
      return [ ...action.courseList ];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  listCourses
});

export default rootReducer;
