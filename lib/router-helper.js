const fs = require('fs');
const path = require('path');
const vueServerRenderer = require('vue-server-renderer');
const projectRoot = path.join(__dirname, '../');
const httpHelper = require('./HttpHelper-server');

global.Vue = require('vue');

function render(req, res, pageName, vueConfig) {
    const isTest = httpHelper.isTest(req); // 判断是正式还是测试环境
    const serverBundlePath = `server/${pageName}.js`;
    const serverBundleCode = fs.readFileSync(serverBundlePath, 'utf8');
    const templatePath = `/public/${pageName}${isTest ? '-debug' : ''}.html`;
    const templateCode = fs.readFileSync(path.join(projectRoot, templatePath), 'utf8');
    const vuePath = isTest ? '/lib/vue.js' : '/lib/vue.min.js';
    const bundleRenderer = vueServerRenderer.createBundleRenderer(serverBundleCode);
    const context = {
        origin: httpHelper.getOrigin(req),
        params: httpHelper.getFormatParams(req)
    };
    bundleRenderer.renderToString(context, (err, html) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error: ' + err.message + '\n' + err.stack);
        }
        // 把服务端store的状态设成全局变量，交给前端渲染时可以通过store.replaceState(__SERVER_STATE__)，从而完成状态交接
        const SERVER_STATE = `<script>var __SERVER_STATE__ = ${JSON.stringify(context.state || {})};</script>`;
        // 将渲染好的内容返回
        res.send(
            templateCode.replace('/lib/vue.js', vuePath)
                    .replace(`"scripts/${pageName}`, `"/scripts/${pageName}`) // 替换js路径，设置为根路径
                    .replace('<div id="app"></div>', `${html}${SERVER_STATE}`) // 替换渲染好的内容
        );
    });
}

module.exports = {
    render: render
};