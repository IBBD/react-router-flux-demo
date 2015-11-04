/**
 * 文章详情页
 *
 * @author Alex
 */

var React = require('react');

var ArticleListMain = React.createClass({
    render: function() {
        return (
            <div>
                <div>文章ID：{this.props.acticle_id}</div>
                <div>
                    这是文章内容。。。。
                </div>
            </div>
        );
    }
});

module.exports = ArticleListMain;
