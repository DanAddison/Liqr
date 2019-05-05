import React, { Component } from 'react';
import './navigation.scss';

import {
  NavLink
} from "react-router-dom";


class Navigation extends Component {
  render() {
    return (

      <div className="Navigation">
        <ul>
          <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/About" exact activeClassName="active-link">About</NavLink></li>
        </ul>
      </div>

    );
  }
}

export default Navigation;