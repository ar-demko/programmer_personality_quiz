import React from 'react';
import ReactDOM from 'react-dom';
import questions from '../api/quizQuestions';
import content from '../api/resultContent';
import {Result} from './result.jsx';
import {Intro} from './intro.jsx';
import {QuestionCounter} from './questionCounter.jsx';

export class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidePrev: 'visible',
      showNext: 'hidden',
      questionsList: questions,
      counter: 0
    }
  }

  answersCount = {
    programmer1: 0,
    programmer2: 0,
    programmer3: 0,
    programmer4: 0
  };

  handleClikButtonStart = () => {
    if (this.state.hidePrev == 'visible') {
      setTimeout(() => this.setState({hidePrev: 'hidden'}), 300)
      setTimeout(() => this.setState({showNext: 'visible'}), 300)
    }
  }

  handleClickAnswer = (e) => {
    let type = e.target.dataset.type;
    if (type === 'Perfekcjonista') {this.answersCount.programmer1+=1;}
    else if(type === 'MacGyver') {this.answersCount.programmer2+=1;}
    else if(type === 'Pan "Nie da się"') {this.answersCount.programmer3+=1;}
    else if(type === 'Spaghetti') {this.answersCount.programmer4+=1;}
    setTimeout(() => this.setState({counter: this.state.counter + 1}), 300);
    console.log(e.target.dataset.type, this.answersCount);
  }

  render() {
    if (this.state.hidePrev == 'visible' ) {
      return <Intro styleIntro={{visibility: this.state.hidePrev}} onClickStart={this.handleClikButtonStart}/>
    } else if (this.state.counter < questions.length) {
        const questionOption = questions[this.state.counter];
        const answerOptions = questions[this.state.counter].answers;
      return <div className='quiz' style={{visibility: this.state.showNext}}>
        <QuestionCounter counterQuestion={this.state.counter + 1} keyQuestion={questionOption.id} currentQuestion={questionOption.question}/>
        <div className='answers' >{answerOptions.map((answerOption, i) => {
          return <button className='button-answer' data-type={answerOption.type} key={i} onClick={this.handleClickAnswer}>{answerOption.content}</button>
        })}
        </div>
      </div>
    } else {
        const list = {'Perfekcjonista': this.answersCount.programmer1, 'MacGyver': this.answersCount.programmer2, 'Pan "Nie da się"': this.answersCount.programmer3, 'Spaghetti': this.answersCount.programmer4};
        const keySorted = Object.keys(list).sort(function(a,b){
          return list[a] - list[b];
        });
        const result = keySorted[3];
        if (result == 'Perfekcjonista') {
          return <div><Result quizResult={result} imgResult={content[0].img} descriptionResult={content[0].text}/></div>
        } else if (result == 'MacGyver') {
          return <div><Result quizResult={result} imgResult={content[1].img} descriptionResult={content[1].text}/></div>
        } else if (result == 'Pan "Nie da się"') {
          return <div><Result quizResult={result} imgResult={content[2].img} descriptionResult={content[2].text}/></div>
        } else {
          return <div><Result quizResult={result} imgResult={content[3].img} descriptionResult={content[3].text}/></div>
        }
    }
  }
}
