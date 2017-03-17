import React from 'react';
import ReactDOM from 'react-dom';

class QuestionCounter extends React.Component {
  render(){
    return <div className="questionCounter">
      Pytanie <span>{props.counter}</span> z <span>{props.total}</span>
    </div>
  }
}
