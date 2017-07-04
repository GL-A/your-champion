import React, { Component } from 'react';
import ChampionSquare from './ChampionSquare';

class FavoriteChampions extends Component {
  constructor( props ){
    super( props );
    this.state = {
      favorites: localStorage.getItem( 'favoriteChampions')
    }
  }
  render(){
    return (
      <div>
        { this.state.favorites && this.state.favorites.length > 0 ?
          <ul className="champion-ul">{JSON.parse( localStorage.getItem( 'favoriteChampions' )).map( ( champion, idx ) => {
          return <ChampionSquare
            key={ champion.id }
            id={ champion.id }
            name={ champion.name }
            imageUrl={ champion.imageUrl }
            title={ champion.title } />
        })}</ul> :
        <h1>go add to favorites</h1>}
      </div>
    )
  }
}
export default FavoriteChampions;
