const path = require('path');
const paths = require('./paths.js');

const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        index : './src/index.js'
    },

    output : {
        filename : '[name].js',
        path : paths.public,
        publicPath : paths.publicPath
    },
    
    module : {
        rules : [
            { 
                test : /\.(js|mjs)$/,
                exclude : /node_modules/,
                use : [
                    { loader : 'eslint-loader', options : 
                        {   
                            "rules": {
                                "semi": ["error", "always"],
                                "quotes": ["error", "single"]
                            }
                        }
                    },
                    { loader : 'babel-loader', options : { presets : ['env'] } }
                ]
            },
            {
                test : /\.(scss|sass|css)$/,
                exclude : /node_modules/,
                use : [
                    { loader : 'sass-loader', options : {} },
                    { loader : 'css-loader', options : { module : true } },
                    { loader : 'style-loader', options : {} }
                ]
            },
            {
                test : /\.(json)$/,
                exclude : /node_modules/,
                use : [
                    { loader : 'json-loader', options : {} }
                ]
            },
            {
                test : /\.(json5)$/,
                exclude : /node_modules/,
                use : [
                    { loader : 'json5-loader', options : {} }
                ]
            },
            {
                test : /\.(txt)$/,
                exclude : /node_modules/,
                use : [
                    { loader : 'raw-loader', options : {} }
                ]
            },
            {
                test : /\.(xml)$/,
                exclude : /node_modules/,
                use : [
                    { loader : 'xml-loader', options : {} }
                ]
            }
        ]
    },

    plugins : [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : process.env.NODE_ENV ? process.env.NODE_ENV : 'undefined with process.env.NODE_ENV',
            'process.env.WEBPACK_ENV' : process.env.WEBPACK_ENV ? process.env.WEBPACK_ENV : 'undefined with process.env.WEBPACK_ENV' 
        }),
        new HtmlWebpackPlugin({
            title : 'practice-javascript-cookies development views.'
        })
    ]

};