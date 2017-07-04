import React from 'react';
import { Link } from 'react-router-dom';

class ChampionSquare extends React.Component {
  constructor( props ){
    super( props );

    this.state = {
      heartStyle: { color: 'white' }
    }
    this.handleHeartClick = this.handleHeartClick.bind( this );
  }
  handleHeartClick( ){
    if( this.state.heartStyle.color === 'white' ) {
      this.setState({ heartStyle: { color: 'red' }})
    } else {
      this.setState({ heartStyle: { color: 'white' }})
    }
    let champion = this.props
    if( localStorage.getItem('favoriteChampions') && this.state.heartStyle.color === 'white' ){

      const champions = JSON.parse(localStorage.getItem('favoriteChampions'));
      localStorage.removeItem( 'favoriteChampions' );
      champions.push( champion );
      localStorage.setItem( 'favoriteChampions', JSON.stringify( champions ));

    } else if( localStorage.getItem('favoriteChampions') && this.state.heartStyle.color === 'red' ) {
      let champions = JSON.parse(localStorage.getItem('favoriteChampions'));
      localStorage.removeItem( 'favoriteChampions' );
      champions = champions.filter( ( champion ) => {
        return champion.id !== this.props.id
      })
      localStorage.setItem( 'favoriteChampions', JSON.stringify( champions ));
      this.setState({ heartStyle: { color: 'white'}});
    }
    else {
      localStorage.setItem( 'favoriteChampions', JSON.stringify([champion]));
    }
  }
  componentDidMount(){
    if( localStorage.getItem('favoriteChampions') ){
      let champions = JSON.parse(localStorage.getItem('favoriteChampions'));
      champions.forEach( champion => {
        if( champion.id === this.props.id ) {
          this.setState({ heartStyle: { color: 'red' }})
        }
      })
    }
  }
  render(){
    return(
      <li className="champion-li" >
        <Link className="link" to={`/champions/details/${this.props.id}`} >
          <img  alt="LOL Champion" src={ this.props.imageUrl }></img>
          <p>{ this.props.name }: { this.props.title }</p>
        </Link>
        <i
          onClick={ this.handleHeartClick.bind( null ) }
          style={ this.state.heartStyle }
          className="fa fa-heart heart-style"
          aria-hidden="true"></i>
      </li>
    )
  }
}
export default ChampionSquare;
