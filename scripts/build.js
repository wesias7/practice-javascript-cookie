process.env.NODE_ENV = 'produce';
process.env.WEBPACK_ENV = 'produce';

const __env = process.env.WEBPACK_ENV == 'development' ? 'dev' : 'prod';
const webpack = require('webpack');
const config = require('../config/webpack.'+__env+'.js');

var compiler = webpack(config);

compiler.watch({
    ignored: /node_modules/
}, function(err, stats){
    console.log(err);
});

compiler.run((err, stats) => {
    console.log(err);
});