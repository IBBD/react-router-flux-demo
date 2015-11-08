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

var _articles = [{id:0, title: 'title', content: 'this is content...', read_times: 0}];

var ArticleStore = assign({}, EventEmitter.prototype, {

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
    }
});


/**
 * 创建一篇文章
 * @param  {string} title
 * @param  {string} body
 * @return {bool}
 */
function create(title, body) {
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

    ArticleStore.emitChange();
    return true;
}

/**
 *  更新文章
 * @param  {int}    id
 * @param  {string} title
 * @param  {string} body
 */
function update(id, title, body) {
    if ( 'number' !== typeof id ) {
        id = id * 1;
    }
    if ( 'undefined' === typeof _articles[id] ) {
        console.log('update error')
            return false;
    }
    _articles[id].title = title;
    _articles[id].body = body;
    ArticleStore.emitChange();
    return true;
}

/**
 * Delete
 * @param  {int}    id
 */
function destroy(id) {
    if ( 'number' !== typeof id ) {
        id = id * 1;
    }
    if ( 'undefined' === typeof _articles[id] ) {
        console.log('update error')
            return false;
    }
    delete _articles[id];
    ArticleStore.emitChange();
    return true;
}

/**
 * read
 * @param  {int}    id
 */
function show(id) {
    if ( 'number' !== typeof id ) {
        id = id * 1;
    }
    if ( 'undefined' === typeof _articles[id] ) {
        console.log('update error');
        return false;
    }
    _articles[id].read_times++;
    return true;
}

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var content, title, id;

    switch(action.actionType) {
        case ArticleConstants.ARTICLE_CREATE:
            content = action.content.trim();
            title = action.title.trim();
            console.log('register ', action.actionType, title, content);
            if (title !== '' && content !== '') {
                create(title, content);
            }
            break;

        case ArticleConstants.ARTICLE_UPDATE:
            content = action.content.trim();
            title = action.title.trim();
            if (title !== '' && content !== '') {
                update(action.id, title, content);
            }
            break;

        case ArticleConstants.ARTICLE_DESTROY:
            destroy(action.id);
            break;

        case ArticleConstants.ARTICLE_SHOW:
            show();
            break;

        default:
            // no op
    }
});

module.exports = ArticleStore;

