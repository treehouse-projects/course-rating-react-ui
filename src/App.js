import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";


import store from "./store";

// Containers
import { CourseDetail , Courses , CreateCourse , EditCourse , SignIn , SignUp } from './containers';

// Routes
import { LogOutRoute, RedirectHome } from './routes';

// Components
import { Header, Authenticated } from "./components";

console.log(SignIn)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Courses} />
              <Authenticated path="/signin" AuthComponent={RedirectHome} NoAuthComponent={SignIn} />
              <Authenticated path="/signup" AuthComponent={RedirectHome} NoAuthComponent={SignUp} />
              <Authenticated path="/courses/:id/edit" AuthComponent={EditCourse} NoAuthComponent={RedirectHome} />
              <Route exact path='/courses/:id' component={CourseDetail} />
              <Authenticated path='/new-course' AuthComponent={CreateCourse} NoAuthComponent={RedirectHome}/>
              <Authenticated path='/logout' AuthComponent={LogOutRoute} NoAuthComponent={RedirectHome} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
