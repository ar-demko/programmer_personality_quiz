import React from 'react';
import ReactDOM from 'react-dom';

import questions from './quizQuestions';

// console.log(questions[0].id);
// console.log(questions[0].question);
// console.log(questions[0].answers);


export class QuizHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionsList: questions,
      counter: 0,
      answersCount: {
        programmer1: 0,
        programmer2: 0,
        programmer3: 0,
        programmer4: 0
      }
    }
  }

  // handleClickAnswer = () => {
  //   if (this.state.counter < 8) {
  //     setTimeout(() => this.setState({counter: this.state.counter + 1}), 2000);
  //   } else {
  //     setTimeout(() => this.setState({counter: 0}), 300);
  //   }
  // }
  // handleClickButton = () => {
  //   this.setState({counter: this.state.counter + 1})
  // }

render(){
  // console.log(questions);
  const questionOption = questions[this.state.counter];
  const answerOptions = questions[this.state.counter].answers;
  if (this.state.counter < 8) {
    return <div>
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
    return <div className='result-box' >
      <div className='result' >{answerOptions.map((resultOption, i) => {
          return <p key={i}>{resultOption.type}</p>
        })}
      </div>
    </div>
  }

}
}




/*

to działa

render(){
  // console.log(questions);
  const questionOption = questions[this.state.counter];
  const answerOptions = questions[this.state.counter].answers;
  console.log(answerOptions);
  return <div>
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
}
}
*/





// <h2 className='question'>{questions.map((el) => {
//     return <span key={el.id}>{el.question}</span>
//   })}</h2>


// export class QuizHeader extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: 0,
//       questionId: 1,
//       questionOption: []
//     }
//   }
//   componentWillMount() {
//     selectQuestion = () => {
//       {questions.map((el) => {
//         return <span key={el.id}>{el.question}</span>
//         }
//       }
//     }
//   }
//   handleClick = () => {
//     this.setState()
//   }
//   render(){
//     return <header>
//       <h2 className='question'>{this.props.question}</h2>
//       <button className='nextQuestion' onClick={this.handleClick}>Next</button>
//     </header>
//   }
// }

/*
render(){
  console.log(questions);
  return <header>
    <h2 className='question'>{questions.map((el) => {
        return <span key={el.id}>{el.question}</span>
      })}</h2>
  </header>
}
*/

/*
export class QuizHeader extends React.Component{
  render(){
    return <h2 className='question'>{this.props.content}</h2>
  }
}
*/


// constructor(props) {
//     super(props);
//
//     this.state = {
//       counter: 0,
//       questionId: 1,
//       question: '',
//       answerOptions: [],
//       answer: '',
//       answersCount: {
//         Nintendo: 0,
//         Microsoft: 0,
//         Sony: 0
//       },
//       result: ''
//     };
//
//     this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
//   }
//
//   componentWillMount() {
//     const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
//     this.setState({
//       question: quizQuestions[0].question,
//       answerOptions: shuffledAnswerOptions[0]
//     });
//   }


/*
export class QuizHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionsList: questions
    }
  }
  render(){
    console.log(questions);
    return <header>
      <h2 className='question'>{questions.map((el) => {
          return <span key={el.id}>{el.question}</span>
        })}</h2>
    </header>
  }
}
*/

/*
export class QuizHeader extends React.Component{
  render(){
    return <header>
      <p className='counter'>1 z 10</p>
      <h2 className='question'>Jak reagujesz, gdy ktoś krytykuje lub poprawia twój kod?</h2>
    </header>
  }
}
*/

/*
export class QuizHeader extends React.Component{
  render(){
    return <h2 className='question'>{this.props.content}</h2>
  }
}
*/


/*
class PeopleList2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: people
    }
  }
  handleClick = () => {
    this.setState({list: people.reverse()})
  }
  render(){
    console.log(people);
    return <div>
      <ul>{ people.map((el) => {
          return <li key={el.email}>{el.name}</li>
        })}
      </ul>
      <button onClick={this.handleClick}>Kupa</button>
    </div>
  }
}
*/
