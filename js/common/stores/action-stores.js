/**
 *
 * 数据模型：id, title, body, read_times
 *
 * @author Alex
 */


var assign           = require('object-assign');
var EventEmitter     = require('events').EventEmitter;
var CommonConstants  = require('../config/constants');

var CommonStore = assign({}, EventEmitter.prototype, {

    _list: [],

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

module.exports = CommonStore;

