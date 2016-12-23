import axios from 'axios'
import queryString from '../../lib/querystring'
import httpHelper from '../../lib/HttpHelper'
import remHelper from '../../lib/remHelper'
const userId = queryString.parse(location.search).userId
const origin = httpHelper.getOrigin() + '/'
import {createApp} from './main';

export default createApp({
    el: '#app',
    methods: {
        getChannelInfo: function () {
            let self = this;
            return axios.get(origin + 'bolo/api/public/userInfo.htm', {
                params: {
                    targetUserId: userId
                }
            }).then(function (res) {
                self.channelInfo = res.data;
                return res;
            });
        },
        getChannelSet: function () {
            let self = this;
            return axios.get(`${origin}bolo/api/channel/setList.htm`, {
                params: {
                    userId: userId
                }
            }).then(function (res) {
                if(res.data.length) {
                    self.channelSet = res.data;
                    self.sid = self.channelSet[0].sid;
                    self.activeSid = self.channelSet[0].sid
                }
                return res;
            });
        },
        getVideoList: function () {
            let self = this;
            let url = origin + (self.channelSet.length ? 'bolo/api/channel/setVideoList.htm' : 'bolo/api/channel/videoList.htm');
            self.isLoading = true;
            return axios.get(url, {
                params: {
                    pageNum: self.pageNum++,
                    pageSize: self.pageSize,
                    sid: self.sid,
                    userId: self.userId
                }
            }).then(function (res) {
                self.isLoading = false;
                if(res.data.length < self.pageSize) {
                    self.isAll = true;
                }
                res.data.forEach(function (e) {
                    self.videoList.push(e);
                });
            });
        },

        changeSet: function (sid) {
            this.videoList = [],
                    this.pageNum = 1,
                    this.sid = sid;
            this.activeSid = sid;
            this.isAll = false;
            this.getVideoList();
        },

        loadMore: function (event) {
            if(this.isScrollToBottom(event.target) && !this.isLoading && !this.isAll) {
                this.getVideoList();
            }
        },

        // 判断滚动条是否已经到达了底部
        isScrollToBottom: function (wrapper) {
            let scrollHeight = wrapper.scrollHeight;
            let scrollTop = wrapper.scrollTop;
            let viewHeight = parseInt(getComputedStyle(wrapper, null).height);
            return scrollTop + viewHeight >= scrollHeight - 10 ? true : false;
        },
    },
    created: function () {
        let self = this;
        self.canShow = true;
        self.getChannelInfo();
        self.getChannelSet().then(function (res) {
            return self.getVideoList();
        });
        remHelper.init(1080);
    }
})