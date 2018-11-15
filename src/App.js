import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Toolbar from './components/Toolbar'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Toolbar/>
            <Switch>
              <Route exact path="/" render={ () => <h1>Welcome</h1>}/>
              <Route exact path="/media/news" render={ () => <div><h1>In the News</h1></div> } />
              <Route exact path="/media/releases" render={ () => <div><h1>Press Releases</h1></div>} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
