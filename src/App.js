import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

// Containers
import Courses from "./containers/Courses";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import CourseContainer from './containers/CourseContainer';
import CourseDetail from "./containers/CourseDetail";
import CreateCourse from "./containers/CreateCourse";

// Components
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route component={Header} />

            <Switch>
              <Route exact path='/' component={Courses}/>
              <Route path='/signup' component={SignUp} />
              <Route path='/signin' component={SignIn} />
              <Route path='/courses/:id' render={({match}) => <CourseContainer id={match.params.id}/>} />
              <Route path='/new-course' component={CreateCourse} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
