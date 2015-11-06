/**
 *
 *
 *
 */

var React        = require('react');
var Link         = require('react-router').Link;
var ArticleStore = require('../stores/article-stores');

var ArticleListMain = React.createClass({
    render: function() {
        console.log('render in article list');
        console.log(this.props);
        console.log(ArticleStore.getAll());

        // 文章列表
        const articles = ArticleStore.getAll();

        if (this.props.children) {
            return this.props.children;
        } else {
            return (
                <div>
                    <div>
                        <Link to="/article/create">添加文章</Link>
                    </div>
                    <div>这是文章列表页面。。。。</div>
                    <div>
                    {articles.map(function(art) {
                        return (<Link to={`/article/${art.id}`}>{art.title}</Link>)
                    })}
                    </div>
                </div>
            );
        }
    }
});

module.exports = ArticleListMain;