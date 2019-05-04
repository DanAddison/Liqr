import React, { Component } from 'react';
import Header from './components/Header';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import About from "./About";


class App extends Component {
  render() {
    return (
      <div className="App">

      <HashRouter>

        <Header />

        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
        </div>

      </HashRouter>

      </div>
    );
  }
}

export default App;
