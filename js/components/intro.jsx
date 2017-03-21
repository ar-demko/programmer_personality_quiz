import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

export class Intro extends React.Component {
  render(){
    return <div className='quiz' style={{visibility: this.state.hidePrev}}>
      <h1>Sprawdź jakim typem programisty jesteś</h1>
      <div className='imgIntro'></div>
      <button  onClick={() => {
        if (this.state.hidePrev == 'visible') {
          this.setState({hidePrev: 'hidden'})
          this.setState({showNext: 'visible'})
        }
      }}>STRAT</button>
    </div>
  }
}
