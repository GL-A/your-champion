import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import ChampionMap from './ChampionMap';

class ChampionList extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      champions: null,
      role: 'ALL',
      search: ''
    };
    this.filteredChampions = this.filteredChampions.bind( this );
    this.handleRoleChange = this.handleRoleChange.bind( this );
  }
  componentDidMount() {
    axios.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=RGAPI-fa1890b1-56ed-4e01-950f-e70ae86157ca')
    .then( ( res ) => {
      const championsObject = res.data.data;
      this.setState({champions: championsObject})
    })
  }
  filteredChampions( event ){
    this.setState({ search: event.target.value });
  }
  handleRoleChange( event ) {
    this.setState({ role: event.target.value });
  }

  render() {
    return (
      <div style={{ background: '#343956'}}>

        <div className="champion-filter">
          <h1 style={{ color: '#F8F8EF'}}>Champions </h1>
          <input
            style={{ margin: '0 10px', height: '80%'}}
            value={ this.state.searchTerm }
            type="text"
            onChange={ this.filteredChampions }>
          </input>
          <select
            style={{ margin: '0 10px', height: '80%'}}
            onChange={ this.handleRoleChange }>
            <option value="ALL">ALL</option>
            <option value="Fighter">Fighter</option>
            <option value="Tank">Tank</option>
            <option value="Mage">Mage</option>
            <option value="Assassin">Assassin</option>
            <option value="Marksman">Marksman</option>
            <option value="Support">Support</option>
          </select>
        </div>
        { this.state.champions !== null
          ? <ChampionMap role={ this.state.role } filter={ this.state.search } championsObject={ this.state.champions }/>
          : <Loading/> }
      </div>
    )
  }
}
export default ChampionList;
