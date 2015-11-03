/**
 * 这是首页的主体部分
 *
 * @author Alex
 */

var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                Hello { this.props.name }!
            </div>
        )
    }
});

module.exports = Main;
