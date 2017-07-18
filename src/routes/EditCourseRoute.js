import React from 'react';

import { Route} from 'react-router-dom';

import EditCourse from '../containers/EditCourse'

const EditCourseRoute = (props) => (
  <Route path='/edit' component={EditCourse}/>
);

export default EditCourseRoute;
