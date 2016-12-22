import {createApp} from './main';
import axios from 'axios'
import httpHelper from '../../../lib/HttpHelper'
import queryString from '../../../lib/querystring'
import native from  '../../../lib/native'
import stat from '../../../lib/Stat'
import remHelper from '../../../lib/remHelper'

const origin = httpHelper.getOrigin() + '/';
export default createApp({
    el: '#app',
    methods: {
        getShareCount: function () {
            var self = this;
            axios.get(origin + 'bolo/api/video/commentList.htm', {
                params: {
                    videoId: 14691107825751,
                    pageNum: 1,
                    pageSize: 5,
                    type:2
                }
            })
                    .then(function (response) {
//                    self.code = response.data.count;
                        self.count = 5;
                    })
                    .catch(function (error) {
                        self.answer = 'Error! Could not reach the API. ' + error
                    })
        },

        getShareCode: function () {
            this.code = queryString.parse(location.search).code;
        },

        setShareInfo: function () {
            var self = this;
            native.call('setShareInfo',{
                default: {
                    title: '一本正经安利：菠萝专辑',
                    description: '1个G的文件夹资源都在这',
                    url: location.origin + '/m/invitation/video?code=' + self.code
                },
                weibo: {
                    title: '1个G的文件夹资源都在这' + location.href + '@网易菠萝菌'
                }
            });
        },

        openShareView: function () {
            native.call('openShareView');
            stat.send("fuck");
        },


    },
    created: function () {
        this.getShareCount();
        this.getShareCode();
        remHelper.init(1080);
    },
    mounted: function () {
        this.setShareInfo();
    }
})