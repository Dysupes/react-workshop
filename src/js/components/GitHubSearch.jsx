var React = require('react');
var GitHubSearchForm = require('./GitHubSearchForm');
var GitHubUser = require('./GitHubUser');

var GitHubSearch = React.createClass({
  getInitialState: function(){
    return {};
  },
  _handleSearch: function (searchTerm){
    this.setState({
      user: searchTerm
    });
  },
  render: function (){
    return (
      <div>
        <GitHubSearchForm onSearch={this._handleSearch} />
        {this.state.user ? <GitHubUser username={this.state.user} /> : null}
      </div>
    );
  }
});

module.exports = GitHubSearch;
