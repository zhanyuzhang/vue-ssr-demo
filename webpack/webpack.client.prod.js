const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');

const base = require('./webpack.base');

const config = Object.assign({}, base, {
    entry: base.clientEntry,
    devtool: null,
    output: {
        path: path.join(projectRoot, 'public'),
        filename: "scripts/[name]-[hash:10].js",
        publicPath: '//img1.cache.netease.com/bobo/release/'
    }
});


config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        'isBrowser': true
    })
    // new EncodingPlugin({
    //     encoding: 'GB2312'
    // })
);

// 生成对应的html
Object.keys(config.entry).forEach(function(name) {
    config.plugins.push(new HtmlWebpackPlugin({
        filename: name + '.html',
        template: './tpl.html',
        inject: true,
        chunks: [name]
    }));
});

module.exports = config;