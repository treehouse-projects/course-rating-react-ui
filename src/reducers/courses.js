import * as courseActions from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case courseActions.REQUEST_COURSE_LIST:
      return state;
    case courseActions.REQUEST_COURSE_LIST_SUCCESS:
      return action.courses;
    case courseActions.REQUEST_COURSE_LIST_FAILURE:
      return state;
    default:
      return state;
  }
};
