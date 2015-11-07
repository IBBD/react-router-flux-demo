/**
 *
 * 文章的数据模型：id, title, body, read_times
 *
 * @author Alex
 */


var assign           = require('object-assign');
var EventEmitter     = require('events').EventEmitter;
var AppDispatcher    = require('../../common/dispatcher');
var ArticleConstants = require('../config/constants');

var CHANGE_EVENT = 'change';

var ArticleStore = assign({}, EventEmitter.prototype, {

    _articles: [{id:0, title: 'title', content: 'this is content...', read_times: 0}],

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
    create: function(title, body) {
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

        this.emitChange();
        return true;
    },

    /**
     *  更新文章
     * @param  {int}    id
     * @param  {string} title
     * @param  {string} body
     */
    update: function(id, title, body) {
        if ( 'number' !== typeof id ) {
            id = id * 1;
        }
        if ( 'undefined' === typeof this._articles[id] ) {
            console.log('update error')
            return false;
        }
        this._articles[id].title = title;
        this._articles[id].body = body;
        this.emitChange();
        return true;
    },

    /**
     * Delete
     * @param  {int}    id
     */
    destroy: function(id) {
        if ( 'number' !== typeof id ) {
            id = id * 1;
        }
        if ( 'undefined' === typeof this._articles[id] ) {
            console.log('update error')
            return false;
        }
        delete this._articles[id];
        this.emitChange();
        return true;
    },

    /**
     * read
     * @param  {int}    id
     */
    show: function(id) {
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

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var content, title, id;

    switch(action.actionType) {
        case ArticleConstants.ARTICLE_CREATE:
            content = action.content.trim();
            title = action.title.trim();
            console.log('register ', action.actionType, title, content);
            if (title !== '' && content !== '') {
                ArticleStore.create(title, content);
            }
            break;

        case ArticleConstants.ARTICLE_UPDATE:
            content = action.content.trim();
            title = action.title.trim();
            if (title !== '' && content !== '') {
                ArticleStore.update(action.id, title, content);
            }
            break;

        case ArticleConstants.ARTICLE_DESTROY:
            ArticleStore.destroy(action.id);
            break;

        case ArticleConstants.ARTICLE_SHOW:
            ArticleStore.show();
            break;

        default:
            // no op
    }
});

module.exports = ArticleStore;

