import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import fetch from 'fetch-polyfill'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        pageNum: 1, // 页码
        pageSize: 10, // 每页的数据量
        loadingState: false, // 加载状态，是否正在加载数据
        showState: false, // 页面是否可见，用来避免出现无样式的内容
        completeState: false, // 是否已经加载了全部的视频？
        sid: null, // 选集ID
        activeSid: null, // 当前的选集ID
        userId: null, // 用户/频道ID
        origin: null, // 域名
        channelInfo: null,
        lists: {
            setList: [], // 选集列表
            videoList: [] // 视频列表
        }
    },
    actions: {
        GET_CHANNEL_INFO: function (context) {
            return axios.get(`${context.state.origin}/bolo/api/public/userInfo.htm`, {
                params: {
                    targetUserId: context.state.userId
                }
            }).then(function (res) {
                context.commit({
                    type: 'SET_CHANNEL_INFO',
                    channelInfo: res.data
                });
                return res;
            });
        },
        GET_SET_LIST: function (context) {
            return axios.get(`${context.state.origin}/bolo/api/channel/setList.htm`, {
                params: {
                    userId: context.state.userId
                }
            }).then(function (res) {
                if(res.data.length) {
                    context.commit({
                        type: 'SET_SET_LIST',
                        setList: res.data
                    });
                    context.commit({
                        type: 'SET_SID',
                        sid: res.data[0].sid
                    });
                    context.commit({
                        type: 'SET_ACTIVE_SID',
                        activeSid: res.data[0].sid
                    });
                }
                return res;
            });
        },
        GET_VIDEO_lIST: function (context) {
            const state = context.state;
            const url = `${context.state.origin}/bolo/api/channel/${state.lists.setList.length ? 'setVideoList.htm' : 'videoList.htm'}`;
            context.commit({
                type: 'SET_LOADING_STATE',
                loadingState: true
            });
            context.commit({
                type: 'SET_PAGE_NUM',
            });
            return axios.get(url, {
                params: {
                    pageNum: state.pageNum,
                    pageSize: state.pageSize,
                    sid: state.sid,
                    userId: state.userId
                }
            }).then(function (res) {
                context.commit({
                    type: 'SET_LOADING_STATE',
                    loadingState: false
                });
                if(res.data.length < state.pageSize) {
                    context.commit({
                        type: 'SET_COMPLETE_STATE',
                        completeState: true
                    });
                }
                res.data.forEach(function (e) {
                    state.videoList.push(e);
                });
            });
        }
    },

    mutations: {
        SET_CHANNEL_INFO: (state, payload) => {
            Object.assign(state.channelInfo, payload.channelInfo);
        },
        SET_VIDEO_LIST: (state, payload) => {
            state.lists.videoList = payload.vieoList;
        },
        SET_SET_LIST: (state, payload) => {
            state.lists.setList = payload.setList;
        },
        SET_PAGE_NUM: (state, payload) => {
            if(payload && payload.pageNum)
                state.pageNum = payload.pageNum;
            else
                state.pageNum++;
        },
        SET_SID: (state, payload) => {
            state.sid = payload.sid;
        },
        SET_ACTIVE_SID: (state, payload) => {
            state.activeSid = payload.activeSid;
        },
        SET_LOADING_STATE: (state, payload) => {
            state.loadingState = payload.loadingState;
        },
        SET_SHOW_STATE: (state, payload) => {
            state.showState = payload.showState;
        },
        SET_COMPLETE_STATE: (state, payload) => {
            state.completeState = payload.completeState;
        },
        SET_USER_ID: (state, payload) => {
            state.userId = payload.userId;
        },
        SET_ORIGIN: (state, payload) => {
            state.origin = payload.origin;
        },

    },

    getters: {

    }
})

export default store
