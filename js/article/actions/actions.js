/**
 *
 * @author Alex
 */
var AppDispatcher    = require('../../common/dispatcher');
var ArticleConstants = require('../config/constants');

var ArticleActions = {

    /**
     * @param  {string} title   文章标题
     * @param  {string} content 文章内容
     */
    create: function(title, content) {
        console.log('action', title, content);
        AppDispatcher.dispatch({
            actionType: ArticleConstants.ARTICLE_CREATE,
            title: title,
            content: content
        });
    },

    /**
     * @param  {int}    id      The ID of the article item
     * @param  {string} title   文章标题
     * @param  {string} content 文章内容
     */
    update: function(id, title, content) {
        AppDispatcher.dispatch({
            actionType: ArticleConstants.ARTICLE_UPDATE_TEXT,
            id: id,
            title: title,
            content: content
        });
    },

    /**
     * Toggle whether a single article is complete
     * @param  {object} article
     */
    toggleComplete: function(article) {
        var id = article.id;
        var actionType = article.complete ?
            ArticleConstants.ARTICLE_UNDO_COMPLETE :
                ArticleConstants.ARTICLE_COMPLETE;

        AppDispatcher.dispatch({
            actionType: actionType,
            id: id
        });
    },

    /**
     * Mark all Articles as complete
     */
    toggleCompleteAll: function() {
        AppDispatcher.dispatch({
            actionType: ArticleConstants.ARTICLE_TOGGLE_COMPLETE_ALL
        });
    },

    /**
     * @param  {int} id
     */
    destroy: function(id) {
        AppDispatcher.dispatch({
            actionType: ArticleConstants.ARTICLE_DESTROY,
            id: id
        });
    },

    /**
     * Delete all the completed Articles
     */
    destroyCompleted: function() {
        AppDispatcher.dispatch({
            actionType: ArticleConstants.ARTICLE_DESTROY_COMPLETED
        });
    }

};

module.exports = ArticleActions;
