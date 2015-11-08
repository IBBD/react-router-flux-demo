/**
 *
 * 事件存储，主要提供给其他存储对象调用，及提供给UI组件进行监听
 *
 * @author Alex
 */


var assign           = require('object-assign');
var EventEmitter     = require('events').EventEmitter;
var AppDispatcher    = require('../dispatcher');
var CommonConstants  = require('../config/constants');

const CHANGE_EVENT = 'change';

// 存储事件列表
// 格式：key => {}
var _list = {};

// 登陆的用户信息
// {name: ''}
var _login_user = {};

var UserStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
     * 判断用户是否登陆
     * @return {object}
     */
    isLogin: function() {
        if ('undefined' === typeof _login_user[name]) {
            return false;
        }
        return true;
    },

    /**
     * 获取登陆用户
     * @return {object|false}
     */
    getLoginUser: function() {
        if (this.isLogin()) {
            return _login_user;
        }
        return false;
    },

    /**
     * 获取某个用户的信息
     * @param {int} id 用户ID
     * @return {object|false}
     */
    getOne: function(id) {
        return _list[id];
    }

});

function login(username, password) {
    // 登陆
    UserStore.emit();
}

function logout(username) {
    // 登出
    UserStore.emit();
}

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var username, password, code;

    switch(action.actionType) {
        case CommonConstants.ACTION_USER_LOGIN:
            username = action.username.trim();
            password = action.password.trim();
            console.log('register ', action.actionType, username);
            if (username !== '' && password !== '') {
                login(username, password);
            }
            break;

        case CommonConstants.ACTION_USER_LOGOUT:
            username = action.username.trim();
            if (username !== '') {
                logout(username);
            }
            break;

        default:
            // no op
    }
});


module.exports = UserStore;

