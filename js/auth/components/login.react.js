/**
 *
 *
 *
 */

var React  = require('react');
//var render = require('react-dom').render;
var UserStore = require('../../common/stores/user-stores');

var LoginMain = React.createClass({
    render: function() {
        if (UserStore.isLogin()) {
            alert('你已经登陆，现在跳转到首页');
            window.location.href = '/';
            return;
        }

        return (
            <div>
                这是登陆页面。。。
            </div>
        );
    }
});

module.exports = LoginMain;
