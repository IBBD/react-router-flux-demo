/**
 * 布局文件
 *
 * @author Alex
 */
var React  = require('react');
var Header = require('./header.react');
var Footer = require('./footer.react');
var Home   = require('../home/components/main.react');

var Layout = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                {this.props.children || <Home name="Your Name" />}
                <Footer />
            </div>
        );
    }
});

module.exports = Layout;
