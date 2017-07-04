import React from 'react';
import ChampionSquare from './ChampionSquare';

class ChampionMap extends React.Component {
  constructor( props ){
    super( props );
    this.renderChamps = this.renderChamps.bind( this );
  }
  renderChamps() {
    const championsObj = this.props.championsObject;
    const filter = this.props.filter;
    const role = this.props.role;
    let champions = [];
    for ( var key in championsObj ) {
      if ( key.toLowerCase().includes( filter.toLowerCase() )){
        if( championsObj[ key ].tags.indexOf( role ) > -1 || role === 'ALL' ) {
          let imageUrl = " http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + championsObj[key].key + "_0.jpg";
          champions.push(
            <ChampionSquare key={ championsObj[key].id }  id={championsObj[key].id} name={ championsObj[key].name} title={ championsObj[key].title } imageUrl={ imageUrl } />
          );
        }
      }
    }
    return champions;
  }
  render() {
    return (
        <ul className="champion-ul">
          {this.renderChamps()}
        </ul>
    )
  }
}
export default ChampionMap;
