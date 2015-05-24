var self = require("sdk/self");
var browserTab = "browser.newtab.url";
var pageUrl = self.data.url("index.html");
require("sdk/preferences/service").set(browserTab, pageUrl);

var UI = require('./ui');
var React = require('./react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <UI/>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
