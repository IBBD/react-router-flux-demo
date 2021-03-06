module.exports = {
    path: 'article',

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                {
                    path: 'create',
                    component: require('./components/create.react')
                },
                {
                    path: ':article_id',
                    component: require('./components/detail.react')
                },
                {
                    path: 'update/:article_id',
                    component: require('./components/update.react')
                },
                {
                    path: 'remove/:article_id',
                    component: require('./components/remove.react')
                }
            ])
        })
    },

    getComponent(location, cb) {
        require.ensure([], (require) => {
            console.log('router article-list');
            cb(null, require('./components/index.react'))
        })
    }
};
