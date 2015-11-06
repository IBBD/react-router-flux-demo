/**
 *
 *
 *
 */

var React = require('react');
var Link  = require('react-router').Link;
//var ArticleLinkList = require('./article-link-list-main.react');

var ArticleListMain = React.createClass({
    render: function() {
        console.log('render in article list');
        console.log(this.props);

        // 文章列表
        const articles = [
            {
                id: 1,
                title: '文章1'
            },
            {
                id: 2,
                title: '文章2'
            },
            {
                id: 3,
                title: '文章3'
            },
            {
                id: 4,
                title: '文章4'
            },
            {
                id: 5,
                title: '文章5'
            },
        ];

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
