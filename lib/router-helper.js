const fs = require('fs');
const path = require('path');
const vueServerRenderer = require('vue-server-renderer');
const projectRoot = path.join(__dirname, '../');

global.Vue = require('vue');

function render(req, res, pageName, vueConfig, hash) {
    const debugServerBundleFilePath = `public/scripts/${pageName}/server-debug.js`;
    const releaseServerBundleFilePath = `public/scripts/${pageName}/server-release.js`;
    const debugClientBundleFilePath = `/scripts/${pageName}/client-debug.js`;
    const releaseClientBundleFilePath = `/scripts/${pageName}/client-release.js`;
    const cdnClientBundleFilePath = `//img3.cache.netease.com/bobo/release/scripts/${pageName}/client-${hash}.js`;

    const bundleCode = fs.readFileSync(debugServerBundleFilePath, 'utf8');
    const templateCode = fs.readFileSync(path.join(projectRoot, 'templates/default-mobile.html'), 'utf8');
    const bundleRenderer = vueServerRenderer.createBundleRenderer(bundleCode);
    bundleRenderer.renderToString(vueConfig || null, (err, html) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.send(templateCode.replace('<div id="app"></div>', function () {
            var clientVue = '<script src="//cdn.bootcss.com/vue/2.1.6/vue.min.js"></script>';
            var clientBundle = `<script src="${debugClientBundleFilePath}"></script>`;
            return html + clientVue + clientBundle;
        }));
    });
}

module.exports = {
    render: render
};