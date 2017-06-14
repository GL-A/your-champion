import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import ChampionList from './components/ChampionList';
import ChampionDetails from './components/ChampionDetails';

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/champions' component={ ChampionList }/>
            <Route path='/champions/details/:id' component={ ChampionDetails }/>
            <Route render={ () => {
              return <p> Not found</p>
            }}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
