const fs = require('fs');
const path = require('path');
const vueServerRenderer = require('vue-server-renderer');
const projectRoot = path.join(__dirname, '../');
const httpHelper = require('./HttpHelper-server');

global.Vue = require('vue');

function render(req, res, pageName, vueConfig) {
    const serverBundle = `server/${pageName}.js`;
    const clientBundle = `/scripts/${pageName}-debug.js`;

    const serverBundleCode = fs.readFileSync(serverBundle, 'utf8');
    const templateCode = fs.readFileSync(path.join(projectRoot, 'templates/default-mobile.html'), 'utf8');
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
        const SERVER_STATE = `<script>var __SERVER_STATE__ = ${JSON.stringify(context.state)};</script>`;
        res.send(templateCode.replace('<div id="app"></div>', function () {
            return `${html}${SERVER_STATE}<script src="//cdn.bootcss.com/vue/2.1.6/vue.min.js"></script><script src="${clientBundle}"></script>`
        }));
    });
}

module.exports = {
    render: render
};