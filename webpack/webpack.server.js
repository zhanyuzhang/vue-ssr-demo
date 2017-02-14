const webpack = require('webpack');
const base = require('./webpack.base');
const path = require('path');
const projectRoot = path.resolve(__dirname, '../');

const config = Object.assign({}, base, {
    target: 'node',
    devtool: null,
    entry: base.serverEntry,
    output: {
        path: path.join(projectRoot, 'server'),
        filename: "[name].js",
        libraryTarget: 'commonjs2'
    },
    externals: Object.keys(require('../package.json').dependencies),
});

config.plugins.push(new webpack.DefinePlugin({
    'process.env.VUE_ENV': '"server"',
    'isBrowser': false
}));



module.exports = config;