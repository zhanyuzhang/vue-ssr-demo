const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base');


const config = Object.assign({}, base, {
    entry: base.clientEntry,
    output: {
        path: path.join(projectRoot, 'public'),
        filename: "scripts/[name]-debug.js"
    }
});
config.plugins.push(new webpack.DefinePlugin({
    'isBrowser': true
}));

// 生成对应的html
Object.keys(config.entry).forEach(function(name) {
    config.plugins.push(new HtmlWebpackPlugin({
        filename: name + '-debug.html',
        template: './templates/default-mobile.html',
        inject: true,
        chunks: [name]
    }));
});

module.exports = config;