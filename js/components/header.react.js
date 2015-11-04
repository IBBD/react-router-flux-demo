/**
 * 这是公共的头部组件，主要是导航等
 *
 * @author Alex
 */

var React  = require('react');
var Link   = require('react-router').Link;
//var render = require('react-dom').render;

Header = React.createClass({
    render: function() {
        return (
            <div>
                <Link to="">首页</Link> | {' '}
                <Link to="/article">文章列表</Link> | {' '}
                <Link to="/about">关于我们</Link>
            </div>
        )
    }
});

module.exports = Header;
