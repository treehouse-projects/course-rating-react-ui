import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { Provider, connect } from "react-redux";


import store from "./store";

// Containers
import Courses from "./containers/Courses";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import CourseContainer from './containers/CourseContainer';
import CourseDetail from "./containers/CourseDetail";
import CreateCourse from "./containers/CreateCourse";

// Actions
import { authActions } from "./actions";

// Routes

import EditCourseRoute from "./routes/EditCourseRoute";
import RedirectHome from "./routes/RedirectHome";


// Components
import Header from "./components/Header";
import Authenticated from "./components/Authenticated";

const loggedOut = (component) => {
  return (props) => props.auth ? (<Redirect to="/"/>) : (component);
}

const logout = (props) => {
  
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Courses} />
              <Route path='/signup' render={loggedOut(<SignUp/>)} />
              <Route path='/signin' render={loggedOut(<SignIn/>)} />
              <Route exact path='/courses/:id' component={CourseDetail} />
              <Authenticated AuthComponent={EditCourseRoute} NoAuthComponent={RedirectHome} />
              <Route path='/new-course' component={CreateCourse} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
