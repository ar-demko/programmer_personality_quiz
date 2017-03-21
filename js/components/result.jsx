import React from 'react';
import ReactDOM from 'react-dom';
import questions from './quizQuestions';

export class Result extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
  render(){
    const answerOptions = questions[this.state.counter].answers;
    return <div className='quiz' >
      <div className='result' >{answerOptions.map((resultOption, i) => {
          return <p key={i}>{resultOption.type}</p>
        })}
      </div>
    </div>
  }
}
