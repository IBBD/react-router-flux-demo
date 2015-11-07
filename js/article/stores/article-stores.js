/**
 *
 * 文章属性：id, title, body, read_times
 *
 * @author Alex
 */


var Reflux           = require('reflux');
var EventEmitter     = require('events').EventEmitter;
var ArticleActions   = require('../actions');


var ArticleStore = Reflux.createStore({

    listenables: [ArticleActions],

    _articles: [],

    getAll: function() {
        return this._articles;
    },

    /**
     *
     * @param  {int}    id
     */
    getOne: function(id) {
        if ( 'number' !== typeof id ) {
            id = id * 1;
        }
        return this._articles[id];
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

        var id = this._articles.length;
        this._articles.push({
            id: id,
            title: title,
            body: body,
            read_times: 0
        });
        console.log('onCreate:');
        console.log(this._articles);
        console.log(this);
        create.completed(true);

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
        if ( 'undefined' === typeof this._articles[id] ) {
            console.log('update error')
            return false;
        }
        this._articles[id].title = title;
        this._articles[id].body = body;
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
        if ( 'undefined' === typeof this._articles[id] ) {
            console.log('update error')
            return false;
        }
        delete this._articles[id];
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
        if ( 'undefined' === typeof this._articles[id] ) {
            console.log('update error')
            return false;
        }
        this._articles[id].read_times++;
        return true;
    }

});

module.exports = ArticleStore;

