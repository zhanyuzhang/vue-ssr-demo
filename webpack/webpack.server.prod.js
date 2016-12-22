const webpack = require('webpack');
const base = require('./webpack.base');

const path = require('path');
const projectRoot = path.resolve(__dirname, '../');

module.exports = Object.assign({}, base, {
    target: 'node',
    devtool: null,
    entry: base.serverEntry,
    output: {
        path: path.join(projectRoot, 'public'),
        filename: "scripts/[name]/server-release.js",
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VUE_ENV': '"server"',
            'isBrowser': false
        }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});