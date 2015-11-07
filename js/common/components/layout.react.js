/**
 * 布局文件
 *
 * @author Alex
 */
var React  = require('react');
var Header = require('./header.react');
var Footer = require('./footer.react');
var Home   = require('../../home/components/index.react');

var Layout = React.createClass({
    render: function() {
        console.log('in layout');
        console.log(this.props);
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
