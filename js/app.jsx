
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import questions from './components/quizQuestions';
import {Quiz} from './components/quiz.jsx';
import {Result} from './components/result.jsx';
// import {Intro} from './components/intro.jsx';

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
