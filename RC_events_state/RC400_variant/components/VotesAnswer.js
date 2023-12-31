﻿import React from 'react';

import './VotesAnswer.css';

class VotesAnswer extends React.Component {

  answerClicked = eo => {
    this.props.cbSelected(this.props.code);

    // как можно достучаться к атрибутам тега:
    console.log(eo.target.getAttribute('value'));    // сработает с любым атрибутом
    console.log(eo.target.getAttribute('data-kkk')); // сработает с любым атрибутом
    console.log(eo.target.dataset.kkk);              // сработает только с data- атрибутом
  };

  freeAnswerTextChanged = eo => {
    this.props.cbFreeAnswerTextChanged(eo.target.value);
  };

  render() {

    if ( this.props.workMode==1 ) {
      return (
        <div>
          <label className='VotesBlockAnswer'>
            <input type='radio' value={this.props.code} name='voteanswer'
                   onChange={this.answerClicked}
                   data-kkk={this.props.code+100}
            />
            <span>{this.props.text}</span>
            {
              (this.props.freeanswer) &&
              <input type='text' name='votefreeanswer' className='FreeAnswer'
                defaultValue="???" onChange={this.freeAnswerTextChanged} />
            }
          </label>
        </div>
      )
    }
    else {
      return (
        <div className='VotesBlockAnswer'>
          <span className='Count'>{this.props.count}</span>
          <span className='Text'>{this.props.text}</span>
        </div>
      );
    }

  }

}

export default VotesAnswer;
