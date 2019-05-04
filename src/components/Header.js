import React, { Component } from 'react';
import logo from '../liqr-logo.svg';
import './navigation.scss';

import {
  NavLink
} from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="Navigation">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
          </ul>
        </div>

      </header>
    );
  }
}

export default Header;
