import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import ChampionList from './components/ChampionList';
import ChampionDetails from './components/ChampionDetails';
import FavoirteChampions from './components/FavoriteChampions';

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './app.css';

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
            <Route path='/champions/favorites' component={ FavoirteChampions }/>
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
