/**
 * 文章修改
 *
 *
 * @author Alex
 */

var React          = require('react');
var Link           = require('react-router').Link;
var ArticleActions = require('../actions');
//var ArticleStores  = require('../stores/article-stores');

var ArticleRemove = React.createClass({

    render: function() {
        console.log('render in article remove');
        console.log(this.props);
        const article_id = this.props.params.article_id;
        const status = ArticleActions.remove(article_id);


        return (
            <div>
            </div>
        );
    }

});

module.exports = ArticleRemove;

