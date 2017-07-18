import { coursesActions } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case coursesActions.REQUEST_COURSE_LIST:
      return state;
    case coursesActions.REQUEST_COURSE_LIST_SUCCESS:
      return action.courses;
    case coursesActions.REQUEST_COURSE_LIST_FAILURE:
      return state;
    default:
      return state;
  }
};
