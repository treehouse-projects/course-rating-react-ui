import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider, connect } from "react-redux";
import store from "./store";

// Containers
import Courses from "./containers/Courses";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import CourseDetail from "./containers/CourseDetail";

// Actions
import { authActions } from "./actions";

// Components
import Header from "./components/Header";


const loggedOut = (state) => store.dispatch(authActions.checkAuthEmpty(state)).auth;
const loggedIn = (state) => store.dispatch(authActions.checkAuthEmpty(state)).auth;

const signIn = (state) => loggedOut(state) ? (<Redirect to="/"/>) : (<SignUp/>);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Courses}/>
            <Route path='/signup' render={signIn}  />
            <Route path='/signin' component={SignIn} />
            <Route path='/courses/:id' component={CourseDetail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
