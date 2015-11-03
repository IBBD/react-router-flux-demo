/**
 * 这是公共的头部组件，主要是导航等
 *
 * @author Alex
 */

var React = require('react');

Header = React.createClass({
    render: function() {
        return (
            <div>
                <a href="/home">首页</a>
                <a href="/article">文章页</a>
                <a href="/about">关于我们</a>
            </div>
        )
    }
});

module.exports = Header;
