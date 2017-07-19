import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { Provider, connect } from "react-redux";


import store from "./store";

// Containers
import Courses from "./containers/Courses";
import CourseDetail from "./containers/CourseDetail";
import CreateCourse from "./containers/CreateCourse";

// Actions
import { authActions } from "./actions";

// Routes

import EditCourseRoute from "./routes/EditCourseRoute";
import SignInRoute from "./routes/SignInRoute";
import SignUpRoute from "./routes/SignUpRoute";
import RedirectHome from "./routes/RedirectHome";


// Components
import Header from "./components/Header";
import Authenticated from "./components/Authenticated";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Courses} />
              <Authenticated path="/signin" AuthComponent={RedirectHome} NoAuthComponent={SignInRoute} />
              <Authenticated path="/signup" AuthComponent={RedirectHome} NoAuthComponent={SignUpRoute} />
              <Route exact path='/courses/:id' component={CourseDetail} />
              <Authenticated path="/courses/:id/edit" AuthComponent={EditCourseRoute} NoAuthComponent={RedirectHome} />
              <Route path='/new-course' component={CreateCourse} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
