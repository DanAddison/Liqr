import React, { Component } from 'react';
import logo from '../liqr-logo.svg';
import Navigation from './Navigation';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/About' },
];


class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Navigation links={LINKS} />
        </div>
      </header>
    );
  }
}

export default Header;
