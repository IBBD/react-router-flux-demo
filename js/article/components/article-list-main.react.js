/**
 *
 *
 *
 */

var React = require('react');
var Link  = require('react-router').Link;

var ArticleMain = React.createClass({
    render: function() {
        return (
            <div>
                <div>这是文章列表页面。。。。</div>
                <div>
                    <Link to="/article/1" params="{{article_id: 1}}">文章1</Link> | {' '}
                    <Link to="/article/2" params="{{article_id: 2}}">文章2</Link> | {' '}
                    <Link to="/article/3" params="{{article_id: 3}}">文章3</Link> | {' '}
                    <Link to="/article/4" params="{{article_id: 4}}">文章4</Link> | {' '}
                    <Link to="/article/5" params="{{article_id: 5}}">文章5</Link> | {' '}
                    <Link to="/article/6" params="{{article_id: 6}}">文章6</Link> | {' '}
                    <Link to="/article/7" params="{{article_id: 7}}">文章7</Link> | {' '}
                </div>
            </div>
        );
    }
});

module.exports = ArticleMain;
