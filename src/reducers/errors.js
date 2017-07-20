import { errorsActionTypes } from "../actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case errorsActionTypes.VALIDATION_ERROR_RAISED:
      return {...state, validationErrors: action.errors };
    case errorsActionTypes.CLEAR_VALIDATION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
