/**
 *
 * 事件存储，主要提供给其他存储对象调用，及提供给UI组件进行监听
 *
 * @author Alex
 */


var assign           = require('object-assign');
var EventEmitter     = require('events').EventEmitter;

const CHANGE_EVENT = 'action-store-change';

// 存储事件列表
// 格式：key => {}
var _list = {};

var ActionStore = assign({}, EventEmitter.prototype, {


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
    }

});

module.exports = ActionStore;

