import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import Welcome from './components/Welcome'
import Toolbar from './components/Toolbar'
import News from './containers/News'
import PressReleases from './containers/PressReleases'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Toolbar/>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/media/news" component={News} />
              <Route exact path="/media/releases" component={PressReleases} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
