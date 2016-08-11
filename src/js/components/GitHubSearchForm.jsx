var React = require('react');

var SearchForm = React.createClass ({
  _handleSubmit: function (event){
    event.preventDefault();
    this.props.onSearch(this.refs.userInput.value);
  },
  render: function() {
    return (
      <div>
        <p>Enter a Github username</p>
        <input type="text" ref="userInput" />
        <button onClick={this._handleSubmit}>Go!</button>
      </div>
    );
  }
});

module.exports = SearchForm;
