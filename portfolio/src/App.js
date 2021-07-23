import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import About from "./about/About"
import Projects from './projects/Projects'
import Landing from './landing/Landing'

function App() {
  return (
    <Router>
      <div>
      <nav className="nav-bar">
        <ul className="nav-bar-ul">
          <li className="nav-bar-ul-li a">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
