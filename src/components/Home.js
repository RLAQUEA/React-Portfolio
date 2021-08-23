import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Do I need to import Home since this is the home file?

// import React, { Component } from 'react';

// class Home extends Component {
//   render() {
//     return (
//         <div>
//           <h2>Home</h2>
//         </div>
//     );
//   }
// }


//Routes to Home, About, Contact, Portfolio & Resume?

export default function Navigate() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#">Resume</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          {/* <Route path="/resume">
            <Resume />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

function Portfolio() {
    return (
      <div>
        <h2>Portfolio</h2>
      </div>
    );
  }

  function Resume() {
    return (
      <div>
        <h2>Resume</h2>
      </div>
    );
  }

export default Home;
