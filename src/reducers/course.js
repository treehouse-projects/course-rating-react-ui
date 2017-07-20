import { courseActionTypes } from "../actionTypes";

const defaultState = {
  reviews: [],
  steps: [],
  user: {},
  title: '',
  description: '',
  materialsNeeded: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case courseActionTypes.REQUEST_COURSE:
      return state;
    case courseActionTypes.REQUEST_COURSE_SUCCESS:
      return action.course;
    case courseActionTypes.REQUEST_COURSE_FAILURE:
      return state;

    case courseActionTypes.CREATE_COURSE:
      return state;
    case courseActionTypes.CREATE_COURSE_SUCCESS:
      return action.course;
    case courseActionTypes.CREATE_COURSE_FAILURE:
      return state;

    case courseActionTypes.EDIT_COURSE:
      return state;
    case courseActionTypes.EDIT_COURSE_SUCCESS:
      return action.course;
    case courseActionTypes.EDIT_COURSE_FAILURE:
      return state;

    case courseActionTypes.CREATE_REVIEW:
      return state;
    case courseActionTypes.CREATE_REVIEW_SUCCESS:
      return action.review;
    case courseActionTypes.CREATE_REVIEW_FAILURE:
      return state;

    default:
      return state;
  }
};
