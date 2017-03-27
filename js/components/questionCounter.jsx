import React from 'react';
import ReactDOM from 'react-dom';

export class QuestionCounter extends React.Component {
  render(){
    return <div className='quiz-header'>
      <p className='counter-question'>pytanie {this.props.counterQuestion} z 8</p>
      <h2 className='question'><span key={this.props.keyQuestion}>{this.props.currentQuestion}</span></h2>
    </div>
  }
}
