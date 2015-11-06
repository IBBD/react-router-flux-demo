/**
 * 文章创建
 *
 * @author Alex
 */

var React = require('react');
var Link  = require('react-router').Link;
//var ArticleLinkList = require('./article-link-list-main.react');

var ArticleListMain = React.createClass({
    render: function() {
        console.log('render in article create');
        console.log(this.props);

        return (
            <div>
                <div>标题：<input type="text" name="title" /></div>
                <div>内容：<textarea name="msg" /></div>
                <div><input type="button" value="提交" /></div>
            </div>
        );
    }
});

module.exports = ArticleListMain;
