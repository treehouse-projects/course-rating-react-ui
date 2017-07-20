import { coursesActionTypes } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case coursesActionTypes.REQUEST_COURSE_LIST:
      return state;
    case coursesActionTypes.REQUEST_COURSE_LIST_SUCCESS:
      return action.courses;
    case coursesActionTypes.REQUEST_COURSE_LIST_FAILURE:
      return state;
    default:
      return state;
  }
};
