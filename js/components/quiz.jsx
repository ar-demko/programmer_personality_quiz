import React from 'react';
import ReactDOM from 'react-dom';
import questions from './quizQuestions';

export class Quiz extends React.Component {
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
    return <div className='quiz-intro' style={{visibility: this.state.hidePrev}}>
      <div className='img-intro'></div>
      <h1>Jakim typem programisty jesteś?</h1>
      <p>Sprawdź się - rozwiąż Quiz!</p>
      <button className='start-button' onClick={() => {
        if (this.state.hidePrev == 'visible') {
          this.setState({hidePrev: 'hidden'})
          this.setState({showNext: 'visible'})
        }
      }}>Start</button>
    </div>
  }

  render(){
    console.log(questionOption);
    const questionOption = questions[this.state.counter];
    const answerOptions = questions[this.state.counter].answers;
    if (this.state.hidePrev == 'visible') {
      return <div>{this.intro()}</div>
    } else {
      return <div className='quiz' style={{visibility: this.state.showNext}}>
        <div className='quiz-header'>
          <p className='counter-question'>{this.state.counter + 1} z 8</p>
          <h2 className='question'><span key={questionOption.id}>{questionOption.question}</span></h2>
        </div>
        <div className='answers' >{answerOptions.map((answerOption, i) => {
            console.log(answerOption);
            return <button className='button-answer' key={i} onClick={() => {
              this.setState({counter: this.state.counter + 1})
            }}>{answerOption.content}</button>
          })}
        </div>
      </div>
    }
  }
}

/*
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
*/
