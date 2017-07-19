import { courseActions } from "../actionTypes";

const defaultState = {
  reviews: [],
  steps: [],
  user: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case courseActions.REQUEST_COURSE:
      return state;
    case courseActions.REQUEST_COURSE_SUCCESS:
      return action.course;
    case courseActions.REQUEST_COURSE_FAILURE:
      return state;

    case courseActions.CREATE_COURSE:
      return state;
    case courseActions.CREATE_COURSE_SUCCESS:
      return action.course;
    case courseActions.CREATE_COURSE_FAILURE:
      return state;

    case courseActions.EDIT_COURSE:
      return state;
    case courseActions.EDIT_COURSE_SUCCESS:
      return action.course;
    case courseActions.EDIT_COURSE_FAILURE:
      return state;

    case courseActions.CREATE_REVIEW:
      return state;
    case courseActions.CREATE_REVIEW_SUCCESS:
      return action.review;
    case courseActions.CREATE_REVIEW_FAILURE:
      return state;

    default:
      return state;
  }
};
