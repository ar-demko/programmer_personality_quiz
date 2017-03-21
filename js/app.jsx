
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import questions from './components/quizQuestions';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidePrev: 'visible',
      showNext: 'hidden',
      questionsList: questions,
      counter: 0,
      answersCount: {
        programmer1: 0,
        programmer2: 0,
        programmer3: 0,
        programmer4: 0
      },
      result: ''
    }
  }

  intro(){
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

  quizBox(){
    return
  }

  render(){
    console.log(questionOption);
    const questionOption = questions[this.state.counter];
    const answerOptions = questions[this.state.counter].answers;
    if (this.state.hidePrev == 'visible') {
      return <div>{this.intro()}</div>
    } else {
      if (this.state.counter < 8) {
        return <div className='quiz' style={{visibility: this.state.showNext}}>
          <header>
            <p className='counter-question'>{this.state.counter + 1} z 8</p>
            <h2 className='question'><span key={questionOption.id}>{questionOption.question}</span></h2>
          </header>
          <div className='answers' >{answerOptions.map((answerOption, i) => {
              console.log(answerOption);
              return <button className='buttonAnswer' key={i} onClick={() => {
                this.setState({counter: this.state.counter + 1})
              }}>{answerOption.content}</button>
            })}
          </div>
        </div>
      } else {
        return <div className='quiz' style={{visibility: this.state.showNext}}>
          <div className='result' >{answerOptions.map((resultOption, i) => {
              return <p key={i}>{resultOption.type}</p>
            })}
          </div>
        </div>
      }
    }
  }

/*
  render(){
    const questionOption = questions[this.state.counter];
    const answerOptions = questions[this.state.counter].answers;
    if (this.state.hidePrev == 'visible') {
      return <div>{this.intro()}</div>
    } else {
      if (this.state.counter < 8) {
        return <div className='quiz' style={{visibility: this.state.showNext}}>
          <header>
            <p className='counter-question'>{this.state.counter + 1} z 8</p>
            <h2 className='question'><span key={questionOption.id}>{questionOption.question}</span></h2>
          </header>
          <div className='answers' >{answerOptions.map((answerOption, i) => {
              console.log(answerOption);
              return <button className='buttonAnswer' key={i} onClick={() => {
                this.setState({counter: this.state.counter + 1})
              }}>{answerOption.content}</button>
            })}
          </div>
        </div>
      } else {
        return <div className='quiz' >
          <div className='result' >{answerOptions.map((resultOption, i) => {
              return <p key={i}>{resultOption.type}</p>
            })}
          </div>
        </div>
      }
    }
  }
*/






}
//to jest koniec komponentu glownego

class App extends React.Component{
  render(){
    return <div className='app-container'>
      <Quiz/>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
















//
