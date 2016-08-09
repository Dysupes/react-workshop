var React = require('react');

var CharacterLimit1 = React.createClass({
    getInitialState: function() {
        return {
            charsLeft: "140"
        };
    },
    handleChange(event) {
        var input = event.target.value;
        this.setState({
            charsLeft: 140 - input.length
        });
    },
    render: function() {
      var message;

      if (this.state.charsLeft === 140){
        message="You have 140 characters remaining."
      }
      else {
        message = "You have " + this.state.charsLeft + " characters remaining.";
      }
      return (
          <div>
              <input type="text" className="form-control" onChange={this.handleChange} />
              <p>{message}</p>
          </div>
      );
    }
});

module.exports = CharacterLimit1;
