import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import CourseList from "./components/CourseList";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Helloworld</h1>
          <CourseList />
        </div>
      </Provider>
    );
  }
}
