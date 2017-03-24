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

  answersCount = {
      programmer1: 0,
      programmer2: 0,
      programmer3: 0,
      programmer4: 0
  };




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

/*
  types = ['MacGyver', 'Perfekcyjny Perfekcjonista', 'Pan Nie da się', 'Programista Spaghetti'];

  handleClickAnswer = () => {

    if (types[0]){ this.answersCount.programmer1+=1;}
    else if(types[1]){this.answersCount.programmer2+=1;}
    else if(types[2]){this.answersCount.programmer3+=1;}
    else if(types[3]){this.answersCount.programmer4+=1;}
    setTimeout(() => this.setState({counter: this.state.counter + 1}), 300);
    // console.log(e.target.dataset.type, this.answersCount);
  }

  */



  handleClickAnswer = (e) => {
    let t=e.target.dataset.type;
    if (t==='Perfekcyjny Perfekcjonista'){ this.answersCount.programmer1+=1;}
    else if(t==='MacGyver'){this.answersCount.programmer2+=1;}
    else if(t==='Pan Nie da się'){this.answersCount.programmer3+=1;}
    else if(t==='Programista Spaghetti'){this.answersCount.programmer4+=1;}
    setTimeout(() => this.setState({counter: this.state.counter + 1}), 300);
    console.log(e.target.dataset.type, this.answersCount);
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
            return <button className='button-answer' data-type={answerOption.type} key={i} onClick={this.handleClickAnswer}>{answerOption.content}</button>
          })}
        </div>
      </div>
    } else {
      //oblicz result na podstawie this.answersCount


      let result ='';
      if ((this.answersCount.programmer1 > this.answersCount.programmer2) && (this.answersCount.programmer1 > this.answersCount.programmer3) && (this.answersCount.programmer1 > this.answersCount.programmer4)) {
        result = 'Perfekcyjny Perfekcjonista';
      } else if ((this.answersCount.programmer2 > this.answersCount.programmer1) && (this.answersCount.programmer2 > this.answersCount.programmer3) && (this.answersCount.programmer2 > this.answersCount.programmer4)) {
        result = 'MacGyver';
      } else if ((this.answersCount.programmer3 > this.answersCount.programmer1) && (this.answersCount.programmer3 > this.answersCount.programmer2) && (this.answersCount.programmer3 > this.answersCount.programmer4)) {
        result = 'Pan Nie da się';
      } else {
        result = 'Programista Spaghetti';
      }

      return <div><Result quizResult={result}/></div>


/*
      const list = {programmer1: this.answersCount.programmer1, programmer2: this.answersCount.programmer2, programmer3: this.answersCount.programmer3, programmer4: this.answersCount.programmer4};
      const keySorted = Object.keys(list).sort(function(a,b){
        return list[a] - list[b];
      });
      const result = keySorted[3];
      console.log("result", result);
      console.log("list", list);


      // let result = keySorted[3];
      // if (keySorted[3] == {programmer1}) {
      //   result = 'Perfekcyjny Perfekcjonista';
      // } else if (keySorted[3] == {programmer2}) {
      //   result = 'MacGyver';
      // } else if (keySorted[3] == {programmer3}) {
      //   result = 'Pan Nie da się';
      // } else {
      //   result = 'Programista Spaghetti';
      // }
      return <div><Result quizResult={result}/></div>
*/


    }
  }
}


// var list = {programmer1: 0, programmer2: 2, programmer3: 8, programmer4: 5,};
// var keySorted = Object.keys(list).sort(function(a,b){
//   console.log(a,b,list[a],list[b]);
//   return list[a] - list[b];
// });
// console.log(keySorted);


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
