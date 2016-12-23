import {createApp} from './main';
import remHelper from '../../lib/remHelper'
export default createApp({
    el: '#app',
    created: function () {
        remHelper.init(1080);
    }
})