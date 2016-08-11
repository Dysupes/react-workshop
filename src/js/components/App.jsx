var React = require("react");
var ImageCaption = require("./ImageCaption");
var Layout = require("./Layout");
var GuessTheNumber = require("./GuessTheNumber");
var YouClicked = require("./YouClicked");
var CharacterCounter = require("./CharacterCounter");
var CharacterLimit = require("./CharacterLimit");
var GitHubProfile = require('./GitHubProfile');
var GitHubSearch = require('./GitHubSearch');


var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello Kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];
var childrenOfLayout =[
  {id:12, source: "https://facebook.github.io/react/", text: "About us"}
];

var App = React.createClass({
  renderImage: function(pictureObj) {
    return (
      <ImageCaption key={pictureObj.id} source={pictureObj.source} text={pictureObj.text} />
    )
  },
  layoutTester: function(links){
    var parsedLinks = JSON.stringify(links);
    return (
        <Layout key={links.id} links={parsedLinks}/>
    )
  },
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>testing ImageCaption
        </h2>
        <div>
        {imageList.map(this.renderImage)}
        </div>
        <hr/>
        <h2>testing Layout
        </h2>
        <div>
        {childrenOfLayout.map(this.layoutTester)}
        </div>
        <div>
          <GuessTheNumber />
        </div>
        <div>
          <YouClicked />
        </div>
        <div>
          <CharacterCounter />
        </div>
        <div>
          <CharacterLimit />
        </div>
        <div>
          <GitHubSearch />
        </div>
        <footer>
          Copyright 2016 Dysupes
        </footer>
      </main>
    );
  }
});

module.exports = App;
