import remHelper from '../../lib/remHelper'
import {createApp, store} from './main';

store.replaceState(window.__SERVER_STATE__);

export default createApp({
    el: '#app',
    created: function () {
        const self = this;
        self.canShow = true;
        self.getChannelInfo();
        self.getSetList().then(function (res) {
            return self.getVideoList();
        });
        remHelper.init(1080);
    }
})