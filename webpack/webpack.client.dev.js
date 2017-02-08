const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const webpack = require('webpack');
const base = require('./webpack.base');
const config = Object.assign({}, base, {
    entry: base.clientEntry,
    output: {
        path: path.join(projectRoot, 'public'),
        filename: "scripts/[name]-debug.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'isBrowser': true
        })
    ]
});
module.exports = config;