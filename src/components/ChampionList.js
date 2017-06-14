import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function ChampionMap( props ) {
  const championsObj = props.championsObject;
  const filter = props.filter;
  const role = props.role
   function renderChamps() {
     let champions = [];
     for ( var key in championsObj ) {
       if ( key.toLowerCase().includes( filter.toLowerCase() ) ){
         if( championsObj[ key ].tags.indexOf( role ) > -1 || !role ) {
           let imageUrl = " http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + championsObj[key].key + "_0.jpg";
           champions.push(
             <li key={ championsObj[key].id }>
               <Link to={`/champions/details/${championsObj[key].id}`} >
                 <h3 >{ championsObj[key].name }: { championsObj[key].title }</h3>
                 <img alt="LOL Champion" src={ imageUrl }></img>
               </Link>
             </li>
           );
         }
       }
     }
     return champions;
   }
  return (
      <ul>
        {renderChamps()}
      </ul>
  )
}

class ChampionList extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      champions: null,
      role: '',
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
      <div>
        <h1>Champions </h1>
        <input
          value={ this.state.searchTerm }
          type="text"
          onChange={ this.filteredChampions }>
        </input>
        <select onChange={ this.handleRoleChange }>
          <option value={ this.state.role }>All</option>
          <option value="Fighter">Fighter</option>
          <option value="Tank">Tank</option>
          <option value="Mage">Mage</option>
          <option value="Assassin">Assassin</option>
          <option value="Marksman">Marksman</option>
          <option value="Support">Support</option>
        </select>
        { this.state.champions !== null
          ? <ChampionMap role={ this.state.role } filter={ this.state.search } championsObject={ this.state.champions }/>
          : <h1>hello</h1> }
      </div>
    )
  }
}
export default ChampionList;
