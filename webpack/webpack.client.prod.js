const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const base = require('./webpack.base');

const config = Object.assign({}, base, {
    resolve: {
        alias: Object.assign({}, base.resolve.alias, {
            'httpHelper': '/src/lib/httpHelper.js'
        })
    },
    entry: base.clientEntry,
    output: {
        path: path.join(projectRoot, 'public'),
        filename: "scripts/[name].js"
    },
    // vue : {
    //     loaders : {
    //         sass : ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader')
    //     }
    // },
    // vue: {
    //     loaders: {
    //         css: ExtractTextPlugin.extract("css"),
    //         // you can also include <style lang="less"> or other langauges
    //         sass: ExtractTextPlugin.extract("css!sass")
    //     }
    // },
    plugins: [
        // new ExtractTextPlugin('styles/[name]/index.css'),
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