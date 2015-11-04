module.exports = {
    path: '/article',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            console.log('router article-list');
            cb(null, require('./components/article-list-main.react'))
        })
    },
    childRoutes: [
        {
            path: '/article/:article_id',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    console.log('router article');
                    cb(null, require('./components/article-main.react'))
                })
            }
        }
    ]
};
