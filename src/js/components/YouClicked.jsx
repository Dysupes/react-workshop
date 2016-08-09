var React = require('react');

var YouClicked = React.createClass({
  getInitialState: function (){
    return (
      {
        timesClicked: 0,
      }
    );
  },
  handleButtonClick: function() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  },
  render: function () {
    var message;

    if (this.state.timesClicked === 0){
      message="You have not clicked the button."
    }
    else if (this.state.timesClicked === 1) {
      message = "You have clicked once.";
    }
    else if (this.state.timesClicked === 2){
      message = "You have clicked twice.";
    }
    else {
      message = "You have clicked " + this.state.timesClicked + " times."
    }

    return(
    <div>
      <button onClick={this.handleButtonClick}>Click here</button>
      <p>{message}</p>
    </div>
  );
  }
});

module.exports = YouClicked;
