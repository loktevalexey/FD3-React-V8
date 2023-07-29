﻿var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  propTypes: {
    question: React.PropTypes.string.isRequired, // текст вопроса
    answers: React.PropTypes.array.isRequired, // варианты ответов и счётчики
    // answers:React.PropTypes.arrayOf(
    //   React.PropTypes.shape({
    //     code: React.PropTypes.number.isRequired,
    //     count: React.PropTypes.number.isRequired,
    //     text: React.PropTypes.string.isRequired,
    //   })
    // )

  },

  render: function() {

    var answersCode=this.props.answers.map( v =>
        React.DOM.div({key:v.code,className:'Answer'},
          React.DOM.span({className:'Count'},v.count),
          React.DOM.span({className:'Text'},v.text),
        )
      );
    return React.DOM.div( {className:'VotesBlock'}, 
      React.DOM.div( {className:'Question'}, this.props.question ),
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },

});