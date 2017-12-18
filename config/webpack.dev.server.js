const path = require('path');
const paths = require('./paths.js');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.dev.js');

const compiler = webpack(config);

compiler.run((err, stats) => {
    webpackDevServer.addDevServerEntrypoints(config, config.devServer);
    const server = new webpackDevServer(compiler, config.devServer);
    
    server.listen(config.devServer.port, config.devServer.host, (err)=>{
        console.log('development server within webpack is turn on port ', config.devServer.port);
    });
});