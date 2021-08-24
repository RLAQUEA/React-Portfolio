import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
         <Header/>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;