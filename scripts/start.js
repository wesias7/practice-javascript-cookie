process.env.NODE_ENV = 'development';
process.env.WEBPACK_ENV = 'development';

const __env = process.env.WEBPACK_ENV == 'development' ? 'dev' : 'prod';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../config/webpack.'+__env+'.js');

var compiler = webpack(config);

compiler.watch({
    ignored: /node_modules/
}, function(err, stats){
    console.log(err);
});

compiler.run((err, stats) => {
    webpackDevServer.addDevServerEntrypoints(config, config.devServer);
    const server = new webpackDevServer(compiler, config.devServer);
    server.listen(config.devServer.port, config.devServer.host, ()=>{
        console.log('development server within webpack is turn on port ', config.devServer.port);
    });
});