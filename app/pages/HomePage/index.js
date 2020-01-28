/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import shouldPureComponentUpdate from "react-pure-render/function";

// import Button from 'Button';
// import GettingStarted from 'GettingStarted';
// import Features from 'Features';
// import Contribute from 'Contribute';
// import Supporters from 'Supporters';
// import Logo from './react-boilerplate-logo.svg';

import styles from "./styles.css";

export class HomePage extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = route => {
    this.props.changeRoute(route);
  };

  render() {
    return <div>Test</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: url => dispatch(push(url)),

    dispatch
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(HomePage);
