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
