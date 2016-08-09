var React = require('react');

var Layout = React.createClass({
  proptypes: {
    source: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="layout">
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
          <p>We are {this.props.links.text}<a href={this.props.links.source}>React</a> developers!</p>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

module.exports = Layout;
