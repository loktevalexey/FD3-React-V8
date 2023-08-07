import React from 'react';
import PropTypes from 'prop-types';

import './VotesAnswer.css';

class VotesAnswer extends React.Component {

  static propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    workMode: PropTypes.number.isRequired,
  };

  render() {

    if ( this.props.workMode==1 ) {
      return (
        <div>
          <label className='VotesBlockAnswer'>
            <input type='radio' value={this.props.code} name='voteanswer' />
            <span>{this.props.text}</span>
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
