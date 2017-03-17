import React from 'react';
import ReactDOM from 'react-dom';



export class QuizAnswerOption extends React.Component{
  render(){
    return <div></div>
    // <ul className='answer'>
    //   <li>odpowiedź 1</li>
    //   <li>odpowiedź 2</li>
    //   <li>odpowiedź 3</li>
    //   <li>odpowiedź 4</li>
    // </ul>
  }
}


// export class QuizAnswerOption extends React.Component{
//   render(){
//     return <li className='answerOption'>
//       <input
//         type='radio'
//         className='answerButton'
//       />
//     </li>
//   }
// }
//
// function AnswerOption(props) {
//
//   return (
//     <li className="answerOption">
//       <input
//         type="radio"
//         className="radioCustomButton"
//         name="radioGroup"
//         checked={props.answerType === props.answer}
//         id={props.answerType}
//         value={props.answerType}
//         disabled={props.answer}
//         onChange={props.onAnswerSelected}
//       />
//       <label className="radioCustomLabel" htmlFor={props.answerType}>
//         {props.answerContent}
//       </label>
//     </li>
//   );
//
// }
