import React from 'react';
import ReactDOM from 'react-dom';

import {QuizHeader} from './quizHeader.jsx';
import {QuizAnswers} from './quizAnswers.jsx';
import {QuizAnswerOption} from './quizAnswerOption.jsx';

export class Quiz extends React.Component{
  render(){
    return <div className='quiz'>
      <QuizHeader/>
      <QuizAnswers/>
    </div>
  }
}
