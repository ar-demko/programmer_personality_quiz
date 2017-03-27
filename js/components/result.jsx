import React from 'react';
import ReactDOM from 'react-dom';
import questions from './quizQuestions';
import content from './resultContent';

export class Result extends React.Component {
  render(){
    return <div className='quiz-result'>
      <div className={this.props.imgResult}></div>
      <div className='your-type'>
        <h2>Twój typ to:</h2>
        <h1>Programista {this.props.quizResult}</h1>
        <p>{this.props.descriptionResult}</p>
      </div>
    </div>
  }
}
