import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Header from './components/Header/Header';
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
