var React = require("react");

var numberToGuess = function(){
    return (Math.floor(Math.random() * 100));
};

var randomNum = numberToGuess();

var GuessTheNumber = React.createClass({
  handleButtonClick: function(){
    var guessedNumber = this.refs.userGuess.value;

    if(guessedNumber === randomNum){
      alert("You win!");
    }
    else if (guessedNumber > randomNum){
      alert("You guessed too high!");
    }
    else {
      alert("You guessed too low!");
    }
  },
  render: function (userGuess) {
    return (
      <div>
      <main>
        <p>Guess a number between 1 and 100</p>
        <p>
          <input type="text" ref="userGuess" />
          <button className="btn btn-primary" onClick={this.handleButtonClick}>Submit</button>
        </p>
      </main>
      </div>
    );
  }
});

module.exports = GuessTheNumber;
