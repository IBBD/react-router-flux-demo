/**
 * 文章创建
 *
 * @author Alex
 */

var React          = require('react');
var Link           = require('react-router').Link;
var ArticleActions = require('../actions/actions');
var ArticleStores  = require('../stores/article-stores');


var ArticleCreate = React.createClass({

    getInitialState: function() {
        console.log('init');
        var state = {
            title: "",
            body: "",
            is_creating: false
        };
        console.log(state);
        return state;
    },

    // Listen for changes
    componentDidMount: function() {
        console.log('componentDidMount');
        ArticleStores.addChangeListener(this._onChange);
    },

    // Unbind change listener
    componentWillUnmount: function() {
        console.log('componentWillUnmount');
        ArticleStores.removeChangeListener(this._onChange);
    },

    // Update view state when change event is received
    _onChange: function() {
        console.log('onChange');
        this.componentWillUnmount();
        window.location.href = '/article';
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
        if (true === this.state.is_creating) {
            console.log('is_creating status is error');
            return false;
        }
        console.log('_submitNewArticle');
        console.log(this);
        this.setState({is_creating: true});
        ArticleActions.create(this.state.title, this.state.body);
        this.setState({is_creating: false});
    }
});

module.exports = ArticleCreate;

