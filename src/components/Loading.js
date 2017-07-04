import React, { Component } from 'react';

class Loading extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      text: props.text
    }
  }
  componentDidMount() {
    let stopper = this.props.text + '...';

    this.interval = window.setInterval( () => {
      if( this.state.text === stopper ) {
        this.setState( () => {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState( ( prevState ) => {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }, this.props.speed)
  }
  componentWillUnmount(){
    window.clearInterval( this.interval );
  }
  render() {
    return (
      <p style={ style }>{ this.state.text }</p>
    )
  }
}

export default Loading;
let style = {
  height: '100vh',
  fontSize: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};
