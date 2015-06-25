var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var resolve = webpackConfig.resolve;
var loaders = webpackConfig.module.loaders;
loaders.push({
    test: /\.feature$/,
    include: /test/,
    loader: 'file-loader'
})

module.exports = {
    cache: true,
    watch: true,
    // use an empty module for fs
    // otherwise build will fail
    node: {
        fs: "empty"
    },
    module: {
        loaders: loaders
    },
    resolve: resolve
};
