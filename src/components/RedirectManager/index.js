import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RedirectAfterAction from "./RedirectAfterAction";
import { redirectActions } from "../../actions";

const RedirectManager = props =>
  props.path ? <RedirectAfterAction {...props} /> : null;

const mapStateToProps = state => ({ path: state.redirect });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearRedirect: () => redirectActions.clearRedirect()
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(RedirectManager);
