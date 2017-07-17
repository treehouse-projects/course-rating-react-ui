import * as courseActions from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case courseActions.LIST_COURSES:
      return [ ...action.courseList ];
    default:
      return state;
  }
}