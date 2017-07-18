import React, { Component } from 'react';
import { connect } from 'react-redux';


class SignIn extends Component {

  render() {
    return (
      <form>
        <label>SIGNIN</label>
      </form>
    );
  }
}

export default connect()(SignIn);
