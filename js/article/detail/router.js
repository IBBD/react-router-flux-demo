module.exports = {
    path: ':article_id',

    getComponent(location, cb) {
        require.ensure([], (require) => {
            console.log('router article-detail');
            cb(null, require('./components/article-main.react'))
        })
    }
};
