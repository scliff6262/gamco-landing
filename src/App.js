import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Toolbar from './components/Toolbar'
import News from './containers/News'
import PressReleases from './containers/PressReleases'
import ContactUs from './components/ContactUs'

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Toolbar history={this.props.history}/>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/media/news" component={News} />
              <Route exact path="/media/releases" component={PressReleases} />
              <Route exact path="/contact" component={ContactUs}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
