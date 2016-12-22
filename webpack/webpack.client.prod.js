const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const base = require('./webpack.base');

const config = Object.assign({}, base, {
    entry: base.clientEntry,
    output: {
        path: path.join(projectRoot, 'public'),
        filename: "scripts/[name]/client-release.js"
    },
    // vue : {
    //     loaders : {
    //         sass : ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader')
    //     }
    // },
    plugins: [
        // new ExtractTextPlugin('styles/[name]/index.scss'),
        new webpack.DefinePlugin({
            'isBrowser': true
        })
    ]
});

config.devtool = null;

config.plugins.push(
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
);

module.exports = config;