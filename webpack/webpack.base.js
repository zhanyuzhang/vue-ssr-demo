const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const glob = require('glob');

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
            // {
            //     test: /\.html$|\.jade|\.pug/,
            //     loader: 'unicode'
            // },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader:'url?limit=1000&name=/images/[name]-[hash:10].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: []
};


// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};
    files.forEach(function(filepath) {
        var name = filepath.split('/').find(function (e) {
            return /^page-\w+/.test(e);
        });
        name && (entries[name] = filepath);
    });

    return entries;
}


var clientEntries = getEntries(path.join(projectRoot, 'src/pages/**/entry-client.js')); // 浏览器端入口文件
var serverEntries = getEntries(path.join(projectRoot, 'src/pages/**/entry-server.js')); // 服务器端入口文件

Object.keys(clientEntries).forEach(function(name) {
    config.clientEntry[name] = clientEntries[name];
});

Object.keys(serverEntries).forEach(function(name) {
    config.serverEntry[name] = serverEntries[name];
});



module.exports = config;