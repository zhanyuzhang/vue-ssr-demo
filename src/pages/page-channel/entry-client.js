import remHelper from '../../lib/remHelper'
import {createApp, store} from './main';
import types from './types'

console.log(store.state);
store.replaceState(window.__SERVER_STATE__);

console.log(store.state);

export default createApp({
    el: '#app',
    created: function () {
        const self = this;
        store.commit({
            type: types.SET_SHOW_STATE,
            showState: true
        });
        self.getChannelInfo();
        self.getSetList().then((res) => {
            return self.getVideoList();
        });
        remHelper.init(1080);
    }
})