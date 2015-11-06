/**
 * 文章详情页
 *
 * @author Alex
 */

var React        = require('react');
var Link         = require('react-router').Link;
var ArticleStore = require('../stores/article-stores');

var ArticleDetail = React.createClass({
    render: function() {
        console.log('render in article detail ');
        console.log(this.props);
        const article_id = this.props.params.article_id;
        const article = ArticleStore.getOne(article_id);

        return (
            <div>
                <div>文章ID：{article_id}</div>
                <div>文章标题：{article.title}</div>
                <div>
                    文章内容: {article.body}
                </div>
                <div>
                    <Link to={`/article/update/${article_id}`}>修改</Link>
                    <Link to={`/article/remove/${article_id}`}>删除</Link>
                </div>
            </div>
        );
    }
});

module.exports = ArticleDetail;
