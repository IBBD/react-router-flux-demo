
var React = require('react');

//var DemoApp = require('./components/DemoApp.react');

var Hello = React.createClass({
    render: function() {
        return (
            <div>Hello World!</div>
        );
    }
});

React.render(
  <Hello />,
  document.getElementById('demoapp')
);
