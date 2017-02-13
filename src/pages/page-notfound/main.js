import Vue from 'vue';
import App from './index.vue';
const createApp = function createApp(req, res, options) {
    const VueApp = Vue.extend(App);
    return new VueApp(Object.assign({}, options || {}));
};

export {Vue, createApp};