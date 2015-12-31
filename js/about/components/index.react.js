/**
 *
 *
 *
 */

var React  = require('react');
//var render = require('react-dom').render;
var UserStore = require('../../common/stores/user-stores');
//var browserHistory = require('react-router').browserHistory;

var AboutMain = React.createClass({
    render: function() {
        if (!UserStore.isLogin()) {
            //alert('该页面需要登陆之后才能浏览，现在跳转到登陆页面。')
            //window.location.href = '/auth'
            //return;
            console.log('about====>');
            //console.log(browserHistory);
            //console.log(browserHistory.history.go);
            //browserHistory.history.go('/article');
        }

        return (
            <div>
                这是关于我们的页面。。。
            </div>
        );
    }
});

module.exports = AboutMain;
