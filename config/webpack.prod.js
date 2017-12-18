const path = require('path');
const paths = require('./paths.js');

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackCommon = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackCommon, {
    plugins : [
        new UglifyJsWebpackPlugin()
    ]
});