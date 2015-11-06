/**
 *
 * 文章属性：id, title, body, read_times
 *
 * @author Alex
 */


var Reflux           = require('reflux');
var EventEmitter     = require('events').EventEmitter;
var ArticleActions   = require('../actions');


var _articles = [];

var ArticleStore = Reflux.createStore({

    listenables: [ArticleActions],

    getAll: function() {
        return _articles;
    },

    /**
     *
     * @param  {int}    id
     */
    getOne: function(id) {
        if ( 'number' !== typeof id ) {
            id = id * 1;
        }
        return _articles[id];
    },

    /**
     * 创建一篇文章
     * @param  {string} title
     * @param  {string} body
     * @return {bool}
     */
    onCreate: function(title, body) {
        if (body.length < 10) {
            return false;
        }

        var id = _articles.length;
        _articles.push({
            id: id,
            title: title,
            body: body,
            read_times: 0
        });
        console.log('onCreate:');
        console.log(_articles);
        console.log(this);

        return true;
    },

    /**
     *  更新文章
     * @param  {int}    id
     * @param  {string} title
     * @param  {string} body
     */
    onUpdate: function(id, title, body) {
        if ( 'number' !== typeof id ) {
            id = id * 1;
        }
        if ( 'undefined' === typeof _articles[id] ) {
            console.log('update error')
            return false;
        }
        _articles[id].title = title;
        _articles[id].body = body;
        return true;
    },

    /**
     * Delete
     * @param  {int}    id
     */
    onRemove: function(id) {
        if ( 'number' !== typeof id ) {
            id = id * 1;
        }
        if ( 'undefined' === typeof _articles[id] ) {
            console.log('update error')
            return false;
        }
        delete _articles[id];
        return true;
    },

    /**
     * read
     * @param  {int}    id
     */
    onRead: function(id) {
        if ( 'number' !== typeof id ) {
            id = id * 1;
        }
        if ( 'undefined' === typeof _articles[id] ) {
            console.log('update error')
            return false;
        }
        _articles[id].read_times++;
        return true;
    }

});

module.exports = ArticleStore;

