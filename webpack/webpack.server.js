const webpack = require('webpack');
const base = require('./webpack.base');
const path = require('path');
const projectRoot = path.resolve(__dirname, '../');

module.exports = Object.assign({}, base, {
    resolve: {
        alias: Object.assign({}, base.resolve.alias, {
            'httpHelper': '/src/lib/httpHelper-server.js'
        })
    },
    target: 'node',
    devtool: null,
    entry: base.serverEntry,
    output: {
        path: path.join(projectRoot, 'server'),
        filename: "[name].js",
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VUE_ENV': '"server"',
            'isBrowser': false
        })
    ]
});