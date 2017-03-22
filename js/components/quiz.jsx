import React from 'react';
import ReactDOM from 'react-dom';
import questions from './quizQuestions';
import {Result} from './result.jsx';

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
      answer: '',
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
          setTimeout(() => this.setState({hidePrev: 'hidden'}), 300)
          setTimeout(() => this.setState({showNext: 'visible'}), 300)
        }
      }}>Start</button>
    </div>
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  getResults() {
   const answersCount = this.state.answersCount;
   const answersCountKeys = Object.keys(answersCount);
   const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
   const maxAnswerCount = Math.max.apply(null, answersCountValues);
   return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
   console.log(answersCountKeys);
   console.log(getResults());
 }

 setResults(result) {
   if (result.length === 1) {
     this.setState({ result: result[0] });
   } else {
     this.setState({ result: 'Undetermined' });
   }
 }


  render(){

    console.log("counter", this.state.counter);
    console.log('wynik', this.state.result);

    if (this.state.hidePrev == 'visible' ) {
      return <div>{this.intro()}</div>
    } else if (this.state.counter < questions.length) {
        const questionOption = questions[this.state.counter];
        const answerOptions = questions[this.state.counter].answers;
      return <div className='quiz' style={{visibility: this.state.showNext}}>
        <div className='quiz-header'>
          <p className='counter-question'>pytanie {this.state.counter + 1} z 8</p>
          <h2 className='question'><span key={questionOption.id}>{questionOption.question}</span></h2>
        </div>
        <div className='answers' >{answerOptions.map((answerOption, i) => {
            // console.log(answerOption);
            return <button className='button-answer' key={i} onClick={() => {
              setTimeout(() => this.setState({counter: this.state.counter + 1}), 300);
            }}>{answerOption.content}</button>
          })}
        </div>
      </div>
    } else {
      return <div><Result quizResult={this.state.result}/></div>
    }
  }
}


// handleClickAnswer = () => {
//   setTimeout(() => this.setState({counter: this.state.counter + 1}), 2000);
// }

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
