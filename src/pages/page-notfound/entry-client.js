import {createApp} from './main';
import remHelper from '../../lib/remHelper'
import native from '../../lib/native'
import DownloadBar from '../../components/download-bar-black/index.vue'

export default createApp({
    el: '#app',
    created: function () {
        remHelper.init(720);
    },
    components: {
        'download-bar': DownloadBar
    },
    methods: {
        downloadByAndroid () {
            native.download('404页面', 'android')
        },
        downloadByIOS () {
            native.download('404页面', 'ios')
        }
    }
})