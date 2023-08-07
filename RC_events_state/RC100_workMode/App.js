import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

const questionText='Как вы относитесь к программированию?';
const answersArr=require('./answers.json');
const defaultFreeAnswerText="???";

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    answers={answersArr}
    deffreeanswertext={defaultFreeAnswerText}
    workMode={2}
  />
  , document.getElementById('container') 
);

