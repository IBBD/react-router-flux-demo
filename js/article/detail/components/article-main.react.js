/**
 * 文章详情页
 *
 * @author Alex
 */

var React = require('react');

var ArticleMain = React.createClass({
    render: function() {
        console.log('render in article detail ');
        console.log(this.props);
        return (
            <div>
                <div>文章ID：{this.props.params.article_id}</div>
                <div>
                    这是文章内容。。。。
                </div>
            </div>
        );
    }
});

module.exports = ArticleMain;
