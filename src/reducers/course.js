import { courseActions } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case courseActions.REQUEST_COURSE_SUCCESS:
      return action.course;
    case courseActions.REQUEST_COURSE_FAILURE:
      return state;
    default:
      return state;
  }
};