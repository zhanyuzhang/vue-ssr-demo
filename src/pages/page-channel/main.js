import Vue from 'vue';
import App from './index.vue';
const createApp = function createApp(options) {
    const VueApp = Vue.extend(App);
    return new VueApp(Object.assign({}, options || null));
};

export {Vue, createApp};