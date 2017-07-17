import fetch from 'isomorphic-fetch'

import * as courseActions from '../actionTypes';

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

export function listCourses() {
  return {
    type: courseActions.LIST_COURSES,
    courseList: [...courseState.data]
  }
}
