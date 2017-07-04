import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

function Champion ( props ) {
  return (
    <div>
      <h1 className="details-header" >{ props.name }</h1>
      <h3 className="details-header">{ props.title }</h3>
      <ul className="details-tags-ul">
        {props.tags.map( (tag, idx) => {
          return <li style={{ margin: '0 10px 0 0' }} key={ idx }>{ tag }</li>
        })}
      </ul>
      <ul className="details-skins-ul">
        {props.skins.map( (skins, idx ) => {
        return <li key={ idx } className="details-skins-li">
          <img alt={ `${ props.name }'s ${ skins.num } skin` } style={{ padding: '0', width: '250px' }} src={ `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${ props.name }_${ skins.num }.jpg` }/>
        </li>
      })}
    </ul>
    <div className="details-lore">
      <h2>Lore: </h2>
      <h4 >{ props.lore }</h4>
    </div>
    <div className="details-abilities">
      <h1>
        Abilities
      </h1>
      <div className="details-abilities-passive">
        <h2 >Passive: { props.passive.name }</h2>
        <img alt={ `${ props.name }'s passive`} src={ `http://ddragon.leagueoflegends.com/cdn/7.2.1/img/passive/${props.passive.image.full}` } />
        <h3>
          { props.passive.sanitizedDescription }
        </h3>
      </div>
      <ul>
        { props.spells.map( ( spell, idx ) => {
          return <li className="details-spells-li"  key={ idx }>
            <div className="details-spells-container">

              <div className="details-spells-img">
                <img  alt={ `${spell.name} spell` } src={ `http://ddragon.leagueoflegends.com/cdn/7.2.1/img/spell/${spell.image.full}`} />
              </div>
              <div className="details-spell-info">
                <h2 style={{ margin: '10px 0'}}>{ spell.name }</h2>
                <h4 style={{ margin: '0'}}>{ spell.sanitizedDescription }</h4>
              </div>
            </div>
          </li>
        })}
      </ul>
    </div>
  </div>
  )
}
class ChampionDetails extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      id: this.props.match.params.id,
      name: null,
      lore: null,
      tags: null
    }
  }
  componentDidMount() {
    axios.get(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/${this.state.id}?champData=all&api_key=RGAPI-fa1890b1-56ed-4e01-950f-e70ae86157ca`)
      .then( (res) => {
        const name = res.data.key;
        const lore = res.data.lore;
        const tags = res.data.tags;
        const title = res.data.title;
        const skins = res.data.skins;
        const passive = res.data.passive;
        const spells = res.data.spells;
        // console.log( res );
        this.setState( () => {
          return {
            name: name,
            lore: lore,
            tags: tags,
            title: title,
            skins: skins,
            passive: passive,
            spells: spells
          }
        })
      })
  }
  render(){
    return (
      <div style={{ background: '#54668E', color: '#F8F8EF', padding: '20px 0', maxWidth: '1200px', margin: '0 auto' }}>
        {this.state.name !== null
        ? <Champion
          name={ this.state.name }
          lore={ this.state.lore }
          tags={ this.state.tags }
          title={ this.state.title }
          skins={ this.state.skins }
          passive={ this.state.passive }
          spells={ this.state.spells }
        /> : <Loading/>}
      </div>
    )
  }
}
export default ChampionDetails;
