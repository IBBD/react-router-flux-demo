module.exports = {
    entry: './js/app.js',
    output: {
        path: 'public/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loader: 'coffee-loader' },
            { test: /\.js$/,     loader: 'jsx-loader?harmony' } // loaders 可以接受 querystring 格式的参数
        ]
    }
};
