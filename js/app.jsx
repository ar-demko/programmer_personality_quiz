
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import {Quiz} from './components/quiz.jsx';
import {QuizHeader} from './components/quizHeader.jsx';
import {QuizAnswerOption} from './components/quizAnswerOption.jsx';
import {QuizAnswers} from './components/quizAnswers.jsx';












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
