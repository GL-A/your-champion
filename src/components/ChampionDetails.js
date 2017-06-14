import React, { Component } from 'react';
import axios from 'axios';


function Champion ( props ) {

  return (
    <div>
      <h1>{ props.name }</h1>
      <ul>
        {props.tags.map( (tag, idx) => {
          return <li key={ idx }>{ tag }</li>
        })}
      </ul>
      <h4>{ props.lore }</h4>

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
        const name = res.data.name;
        const lore = res.data.lore;
        const tags = res.data.tags;
        this.setState( () => {
          return {
            name: name,
            lore: lore,
            tags: tags
          }
        })
      })
  }
  render(){
    return (
      <div>
        {this.state.name !== null
        ? <Champion
          name={ this.state.name }
          lore={ this.state.lore }
          tags={ this.state.tags }
        /> : <p>Loading</p>}
      </div>
    )
  }
}
export default ChampionDetails;
