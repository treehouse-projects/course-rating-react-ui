import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import CourseList from "./components/CourseList";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <CourseList />
        </div>
      </Provider>
    );
  }
}
