
var React = require('react');

var Header = require('./components/header.react');
var Footer = require('./components/footer.react');
var Home   = require('./home/components/main.react');

var DemoApp = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
});

React.render(
  <DemoApp />,
  document.getElementById('demoapp')
);
