import { combineReducers } from "redux";
import * as courseActions from "../actionTypes";

// DELETE ME LATER
const courseState = {
  data: [
    {
      _id: "57029ed4795118be119cc43d",
      title: "Build a Basic Bookcase"
    },
    {
      _id: "57029ed4795118be119cc440",
      title: "Learn How to Program"
    },
    {
      _id: "596ce6931cd35bbf39200a89",
      title: "jQuery Basics"
    }
  ]
};

// DELETE ME END

function listCourses(state = [], action) {
  switch (action.type) {
    case courseActions.LIST_COURSES:
      return [ ...action.courseList ];
    default:
      // return state;
      return courseState.data;
  }
}

const rootReducer = combineReducers({
  listCourses
});

export default rootReducer;
