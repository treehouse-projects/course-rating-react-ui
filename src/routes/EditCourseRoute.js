import React from 'react';

import { Route} from 'react-router-dom';

import EditCourse from '../containers/EditCourse'

const EditCourseRoute = (props) => (
  <Route path='/courses/:id/edit' component={EditCourse}/>
);

export default EditCourseRoute;