import Vue from 'vue';
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import App from './index.vue'
import store from './store'
import types from './types'

const createApp = function createApp(options) {
    options = options || {};
    return new Vue({
        store,
        computed: mapState([
            'pageNum',
            'pageSize',
            'loadingState',
            'showState',
            'completeState',
            'sid',
            'activeSid',
            'userId',
            'channelInfo',
            'lists'
        ]),
        methods: {
            changeSet: function (sid) {
                store.commit({
                    type: types.SET_PAGE_NUM,
                    pageNum: 1
                });
                store.commit({
                    type: types.SET_VIDEO_LIST,
                    videoList: []
                });
                store.commit({
                    type: types.SET_SID,
                    sid: sid
                });
                store.commit({
                    type: types.SET_ACTIVE_SID,
                    activeSid: sid
                });
                store.commit({
                    type: types.SET_COMPLETE_STATE,
                    completeState: []
                });
                store.commit({
                    type: types.SET_VIDEO_LIST,
                    init: true
                });
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

            ...mapActions({
                getChannelInfo: types.GET_CHANNEL_INFO
            }),
            ...mapActions({
                getSetList: types.GET_SET_LIST
            }),
            ...mapActions({
                getVideoList: types.GET_VIDEO_lIST
            })
        },
        ...App,
        ...options
    })
};

export {Vue, createApp, store};