import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

// Containers
import {
  CourseDetail,
  Courses,
  CreateCourse
} from "./containers";

// Routes
import {
  LogOutRoute,
  EditCourseRoute,
  RedirectHome,
  SignInRoute,
  SignUpRoute
} from "./routes";

// Components
import { Header, Authenticated, RedirectManager } from "./components";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <RedirectManager />

            <Switch>
              <Route exact path="/" component={Courses} />
              <Authenticated
                path="/signin"
                AuthComponent={RedirectHome}
                NoAuthComponent={SignInRoute}
              />
              <Authenticated
                path="/signup"
                AuthComponent={RedirectHome}
                NoAuthComponent={SignUpRoute}
              />
              <Route exact path="/courses/:id" component={CourseDetail} />
              <Authenticated
                path="/courses/:id/edit"
                AuthComponent={EditCourseRoute}
                NoAuthComponent={RedirectHome}
              />
              <Route path="/new-course" component={CreateCourse} />
              <Authenticated
                path="/logout"
                AuthComponent={LogOutRoute}
                NoAuthComponent={RedirectHome}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
