const path = require('path');
const paths = require('./paths.js');

const webpack = require('webpack');
const webpackCommon = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackCommon, {
    plugins : [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool : 'inline-source-map',
    devServer : {
        contentBase : paths.public,
        hot : true,
        compress : true,
        open : true,
        index : 'index.html',
        host : 'localhost',
        port : 8080
    }
});