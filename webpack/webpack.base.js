const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
var glob = require('glob');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    projectRoot: projectRoot,
    devtool: 'eval-source-map',
    externals: {
        "vue": 'Vue'
    },
    serverEntry: {},
    clientEntry: {},
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    resolveLoader: {
        root: path.join(projectRoot, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader:'url?limit=100&name=/images/[name]-[hash].[ext]'
            }
        ]
    }
};


// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};

    files.forEach(function(filepath) {
        var name = filepath.split('/').find(function (e) {
            return /page-/.test(e);
        });
        name && (entries[name] = filepath);
    });

    return entries;
}

var clientEntries = getEntries(path.join(projectRoot, 'src/pages/mobile/**/entry-client.js'));
var serverEntries = getEntries(path.join(projectRoot, 'src/pages/mobile/**/entry-server.js'));

Object.keys(clientEntries).forEach(function(name) {
    console.log(clientEntries[name])
    config.clientEntry[name] = clientEntries[name];
});

Object.keys(serverEntries).forEach(function(name) {
    console.log(serverEntries[name])
    config.serverEntry[name] = serverEntries[name];
});



module.exports = config;