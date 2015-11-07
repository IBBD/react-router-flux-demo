/**
 * 文章创建
 *
 * @author Alex
 */

var React          = require('react');
var Link           = require('react-router').Link;
var ArticleActions = require('../actions');
var ArticleStores  = require('../stores/article-stores');

var ArticleCreate = React.createClass({

    getInitialState: function() {
        return {title: "", body: ""}
    },

    render: function() {
        console.log('render in article create');
        console.log(this.props);

        return (
            <div>
                <div>标题：<input type="text" placeholder="请输入你的标题" autoFocus onChange={this.handleTitle} value={this.state.title} /></div>
                <div>内容：<textarea placeholder="请输入内容" value={this.state.body} onChange={this.handleBody} /></div>
                <div><input type="button" value="提交" onClick={this._submitNewArticle} /></div>
            </div>
        );
    },

    handleTitle: function(e) {
        this.setState({title: e.target.value});
    },

    handleBody: function(e) {
        this.setState({body: e.target.value});
    },

    _submitNewArticle: function() {
        console.log('_submitNewArticle');
        console.log(this);
        var status = ArticleActions.create(this.state.title, this.state.body);
        console.log('操作结果');
        console.log(status);
    }
});

module.exports = ArticleCreate;

