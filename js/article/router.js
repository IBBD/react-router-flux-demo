module.exports = {
    path: 'article',

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./detail/router')
            ])
        })
    },

    getComponent(location, cb) {
        require.ensure([], (require) => {
            console.log('router article-list');
            cb(null, require('./components/article-list-main.react'))
        })
    }
};
