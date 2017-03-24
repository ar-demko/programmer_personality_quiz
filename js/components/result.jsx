import React from 'react';
import ReactDOM from 'react-dom';
import questions from './quizQuestions';

class Result extends React.Component {

  render(){
    return <div className='quiz-result' >
      <div className='img-result img-4'></div>
      <h2>Twój typ to:</h2>
      <h1>{this.props.quizResult}</h1>
      <p>
        Non-stop idziesz na skróty, by zmieścić się w terminach.
        Jesteś jedną z najbardziej produktywnych osób w zespole.
        Niestety...
        braki w dokumentacji i nieprzetestowane kody sprawiają, że już po
        miesiącu zaczynasz się gubić… W dłuższej współpracy stwarzasz więcej problemów,
        ale wciąż radzisz sobie dobrze z deadline’ami. Najgorzej układa ci się współpraca z Perfekcjonistą.
      </p>
    </div>
  }
}

export {Result}

/*
  render(){
    return <div className='quiz-result' >
      <div className='img-result'></div>
      <h1>
        Twój typ to:<br></br>
      <strong>{this.props.quizResult}!</strong>
      </h1>
    </div>
  }
}
*/
