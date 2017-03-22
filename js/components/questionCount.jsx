import React from 'react';
import ReactDOM from 'react-dom';

class QuestionCounter extends React.Component {
  render(){
    return <div className='questionCounter'>
      Pytanie <span>{this.props.counter}</span> z <span>{this.props.total}</span>
    </div>
  }
}

export { QuestionCounter }
