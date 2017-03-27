import React from 'react';
import ReactDOM from 'react-dom';

export class Intro extends React.Component {
  render(){
    return <div className='quiz-intro' style={this.props.styleIntro}>
      <div className='img-intro'></div>
      <h1>Jakim typem programisty jesteś?</h1>
      <p>Sprawdź się - rozwiąż Quiz!</p>
      <button className='start-button' onClick={this.props.onClickStart}>Start</button>
    </div>
  }
}
