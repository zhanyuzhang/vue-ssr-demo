import Vue from 'vue';
import App from './vue/App.vue'
// import App from './vue/page-hello/index.vue';
const createApp = function createApp(options) {
    const VueApp = Vue.extend(App);
    return new VueApp(Object.assign({}, options));
};

export {Vue, createApp};