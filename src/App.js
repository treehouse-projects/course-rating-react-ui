import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import CourseList from "./components/CourseList";
import * as courseActions from "./actions/courses";

export default class App extends Component {
  isAuthenticated = () => true;
  componentWillMount() {
    if (this.isAuthenticated()) {
      this.authenticated = "Hello";
    } else {
      this.authenticated = "Goodbye";
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>
            {this.authenticated} world
          </h1>
          <CourseList />
        </div>
      </Provider>
    );
  }
}
