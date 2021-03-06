var React = require('react');
var $ = require('jquery');

var GitHubProfile = React.createClass ({
  proptypes: {
    username: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {
    var url = `https://api.github.com/users/${this.props.username}`;
    var that = this;

    $.getJSON(url).then(function (response){
        that.setState({
            user:response
        });
    });
  },
  render: function(){

    if (!this.state.user){
      return (
      <div>
        <p>LOADING</p>
      </div>
    )
    }

    return (
    <div className="github-user">
      <img className="github-user_avatar" src={this.state.user.avatar_url} />
      <div className="github-user_info">
        <p>{this.state.user.login}({this.state.user.name})</p>
        <p>{this.state.user.bio}</p>
      </div>
    </div>
  )
  }
});
module.exports = GitHubProfile;
