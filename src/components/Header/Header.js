import React, { Component } from 'react';
import logo from '../../liqr-logo.svg';
import Navigation from '../Navigation/Navigation';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="App-header">

      <div className="row row--pad">

        <img src={logo} className="App-logo" alt="app logo" />

        <Navigation />

      </div>

      </header>
    );
  }
}

export default Header;
