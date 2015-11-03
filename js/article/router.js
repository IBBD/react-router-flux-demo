module.exports = {
    path: 'article',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/article-main.react'))
        })
    }
};
