module.exports = {
    path: '/about',
    name: 'about',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/about-main.react'))
        })
    }
};
