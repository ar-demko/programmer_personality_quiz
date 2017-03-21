import React from 'react';
import ReactDOM from 'react-dom';


export class Intro extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidePrev: 'visible',
      showNext: 'hidden'
    }
  }

  render(){
    return <div className='quiz' style={{visibility: this.state.hidePrev}}>
      <h1>Sprawdź jakim typem programisty jesteś</h1>
      <div className='imgIntro'></div>
      <button onClick={() => {
        if (this.state.hidePrev == 'visible') {
          this.setState({hidePrev: 'hidden'})
          this.setState({showNext: 'visible'})
        }
      }}>STRAT</button>
    </div>
  }
}


/*
handleClickStartQuiz = () => {
  if (this.state.hidePrev == 'visible') {
    this.setState({hidePrev: 'hidden'})
    this.setState({showNext: 'visible'})
  }
}
*/
