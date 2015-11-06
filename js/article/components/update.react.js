/**
 * 文章修改
 *
 *
 * @author Alex
 */

var React          = require('react');
var Link           = require('react-router').Link;
var ArticleActions = require('../actions');
var ArticleStores  = require('../stores/article-stores');

var ArticleUpdate = React.createClass({

    getInitialState: function() {
        const article_id = this.props.params.article_id;
        const article = ArticleStores.getOne(article_id);
        return {id: article_id, title: article.title, body: article.body, is_change: false}
    },

    render: function() {
        console.log('render in article create');
        console.log(this.props);

        return (
            <div>
                <div>ID:  {this.state.id}</div>
                <div>标题：<input type="text" onChange={this.handleTitle} value={this.state.title} /></div>
                <div>内容：<textarea value={this.state.body} onChange={this.handleBody} /></div>
                <div><input type="button" value="提交" onClick={this._submitUpdateArticle} /></div>
            </div>
        );
    },

    handleTitle: function(e) {
        this.setState({title: e.target.value, is_change: true});
    },

    handleBody: function(e) {
        this.setState({body: e.target.value, is_change: true});
    },

    _submitUpdateArticle: function() {
        if (false === this.state.is_change) {
             alert('没有值改变');
        }

        console.log('_submitNewArticle');
        console.log(this);
        ArticleActions.update(this.state.id, this.state.title, this.state.body);
    }
});

module.exports = ArticleUpdate;

