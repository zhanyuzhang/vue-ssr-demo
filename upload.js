'use strict';
var path = require('path'),
    colors = require('colors'),
    Ftp = require('ftp'),
    ProgressBar = require('progress'),
    fs = require('fs');

// 遍历本地文件
function eachFile(p, callback) {
    if(fs.statSync(p).isFile()) callback(p);
    else{
        var files = fs.readdirSync(p);
        if(files) files.forEach(function(sub){
            eachFile(path.join(p, sub),callback);
        });
    }
}

// 读取并解析缓存文件
function getCachedFileList(path) {
    var text;
    try {
        text = fs.readFileSync(path, 'utf8');
    }catch(err) {
        text = '';
    }
    return text ? JSON.parse(text) : [];
}

/**
 * @method checkFiles: 检查当前文件是否存在于FTP中
 * @param String localDirPath: 文件的本地路径
 * @param String remoteDirPath: 文件对应的远程路径
 * @param Array cachedFileList: 缓存文件清单数组
 * @param Object bar: 进度条实例
 * @return Object: 返回的对象包含下面3个属性：
 *  localDirPath: 文件的本地路径
 *  remoteDirPath: 文件对应的远程路径
 *  status: 取值为0或1，1为FTP上存在该文件，0则不存在
 *
 */
console.log(process.argv);
var checkFiles = process.argv.indexOf('--cache') !== -1
        ? function (localDirPath, remoteDirPath, cachedFileList, bar) {
    return new Promise(function (resolve, reject) {
        var fileInfo = {
            localDirPath: localDirPath,
            remoteDirPath: remoteDirPath
        };
        fileInfo.status = cachedFileList.indexOf(remoteDirPath) === -1 ? 0 : 1;
        bar.tick({
            filename: path.basename(localDirPath)
        });
        resolve(fileInfo);
    });
}
        : function (localDirPath, remoteDirPath, cachedFileList, bar) {
    // console.log(remoteDirPath);
    return new Promise(function (resolve, reject) {
        var fileInfo = {
            localDirPath: localDirPath,
            remoteDirPath: remoteDirPath
        };
        ftp.list(remoteDirPath, function (err) {
            fileInfo.status = err ? 0 : 1;
            bar.tick({
                filename: path.basename(localDirPath)
            });
            resolve(fileInfo);
        });
    });
};

// 调用ftp.mkdir()创建目录，参数fileInfo的格式和checkFiles()的返回值一致，参数bar为进度条实例
function makeDir(fileInfo, bar) {
    return new Promise(function (resolve, reject) {
        ftp.mkdir(path.dirname(fileInfo.remoteDirPath), true, function() {
            bar.tick({
                filename: path.basename(fileInfo.localDirPath)
            });
            resolve(fileInfo);
        });
    });
}

// 调用ftp.mkdir()创建目录，参数fileInfo的格式和checkFiles()的返回值一致，bar为进度条实例
function putFile(fileInfo, bar) {
    return new Promise(function (resolve, reject) {
        ftp.put(fileInfo.localDirPath, fileInfo.remoteDirPath, function (err) {
            bar.tick({
                filename: path.basename(fileInfo.localDirPath)
            });
            if(err) {
                console.log((err.toString()).red);
                reject(err);
            } else {
                resolve(fileInfo);
            }
        });
    });
}

function upload() {
    var uploadDirectory = path.resolve(__dirname, './public/');
    var files = [];
    eachFile(uploadDirectory, function(p) {
        !/.html/.test(p) && files.push(p); // 把不是html的文件放到上传队列
    });
    var startTime = Date.now();
    var cachedFileList = getCachedFileList('cachedFileList.txt');
    var barMsg = 'progress[:bar] percent[:percent] elapsed[:elapsed] remaining[:etas] filename[:filename]';
    var barConfig = {
        total: files.length,
        complete: '=',
        incomplete: '-',
        width: 20
    };
    console.log('[INFO] 正在检查文件...');
    var bar = new ProgressBar(barMsg, barConfig);
    var tasks = files.map(function (p, i) {
        return checkFiles(p, p.replace(uploadDirectory, '').slice(1).replace(/\\/g, '/'), cachedFileList, bar);
    });
    Promise.all(tasks)
            .then(function (res) {
                // 把已经存在FTP上的文件(即status==1的文件)给过滤掉
                var notExistedFiles = res.filter(function (e) {
                    return e.status === 0;
                });
                // 如果cachedFileList不为空，就只把FTP不存在的文件push进去；否则，把本地所有的文件都push进去
                (cachedFileList.length ? notExistedFiles : res).forEach(function (e) {
                    cachedFileList.push(e.remoteDirPath);
                });
                barConfig.total = notExistedFiles.length;
                var bar = new ProgressBar(barMsg, barConfig);
                var tasks = notExistedFiles.map(function (fileInfo) {
                    return makeDir(fileInfo, bar);
                });
                console.log('[INFO] 正在创建目录...');
                return Promise.all(tasks);
            })
            .then(function (res) {
                barConfig.total = res.length;
                var bar = new ProgressBar(barMsg, barConfig);
                var tasks = res.map(function (fileInfo, i) {
                    return putFile(fileInfo, bar);
                });
                console.log('[INFO] 正在上传文件...');
                return Promise.all(tasks);
            })
            .then(function (res) {
                fs.writeFileSync('cachedFileList.txt', JSON.stringify(cachedFileList), 'utf8');
                res.forEach(function (fileInfo) {
                    console.log('[INFO] ' + ' 成功上传 ' + (fileInfo.localDirPath).green);
                });
                console.log('[INFO]' + ' 上传完成!!!'.green + ' 共上传了' + (res.length + '').cyan + '个文件！');
                console.log('[INFO]' + ' 本次总耗时为' + ((Date.now() - startTime) / 1000 + '').cyan + '秒!!!');
                ftp.end();
            })
            .catch(function (err) {
                ftp.end();
                console.log('upload ' + 'ERROR'.red + ' !!!');
            });
}

var ftp = new Ftp();

ftp.on('ready', function() {
    console.log('ftp connect success!!!'.green);
    // 在--cache模式下，如果getCachedFileList()返回的数组为空（即cachedFileList.txt不存在），报错！
    if(!getCachedFileList('cachedFileList.txt').length && process.argv.indexOf('--cache') !== -1) {
        console.log('upload', 'ERR! '.red, 'argv'.magenta, 'cachedFileList.txt不存在，必须使用--remote参数!!!');
        ftp.end();
        return ;
    }
    ftp.cwd('/bobo/release', function (err) {
        if (err) {
            console.log('[INFO] ftp mkdir /bobo/release'.green);
            ftp.mkdir('/bobo/release', true, function() {
                upload();
            });
        } else {
            upload();
        }
    });

});

ftp.connect({
    host: '61.135.251.132',
    port: 16321,
    user: 'gztandilun',
    password: 'qwer1234!@#$',
    secure: true,
    secureOptions: {
        key: undefined,
        cert: undefined,
        requestCert: true,
        rejectUnauthorized: false
    }
});