var React = require('react');

var CharacterCounter = React.createClass ({
  proptypes: {
    limit: React.PropTypes.number.isRequired
  },
  getInitialState: function(){
    return {
      currentInput: ""
    }
  },
  _handleInput: function(event){
    var valueLength = event.target.value.length;
      if(valueLength < 141) {
        this.setState ({
          currentInput: event.target.value
        });
      }
  },
  render: function (){
    return (
      <div className="well clearfix">
        <input type="text" className="form-control" value={this.state.currentInput} onInput={this._handleInput} /><span>{this.state.currentInput.length}</span>
      </div>
    );
  }
});

module.exports = CharacterCounter;
