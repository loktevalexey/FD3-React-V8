﻿import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

const questionText='Как вы относитесь к программированию?';
import answersArr from './answers.json';
const defaultFreeAnswerText="???";

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    answers={answersArr}
    deffreeanswertext={defaultFreeAnswerText}
    startWorkMode={1}
  />
  , document.getElementById('container') 
);

