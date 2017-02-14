import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import types from './types'

if(!isBrowser)
    Vue.use(Vuex)
console.log(isBrowser);
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
        channelInfo: {},
        lists: {
            setList: [], // 选集列表
            videoList: [] // 视频列表
        }
    },
    actions: {
        // 获取频道信息
        [types.GET_CHANNEL_INFO]: (context) => {
            return axios.get(`${context.state.origin}/bolo/api/public/userInfo.htm`, {
                params: {
                    targetUserId: context.state.userId
                }
            }).then((res) => {
                context.commit({
                    type: types.SET_CHANNEL_INFO,
                    channelInfo: res.data
                });
                return res;
            });
        },
        // 获取选集列表
        [types.GET_SET_LIST]: (context) => {
            return axios.get(`${context.state.origin}/bolo/api/channel/setList.htm`, {
                params: {
                    userId: context.state.userId
                }
            }).then((res) => {
                if(res.data.length) {
                    context.commit({
                        type: types.SET_SET_LIST,
                        setList: res.data
                    });
                    context.commit({
                        type: types.SET_SID,
                        sid: res.data[0].sid
                    });
                    context.commit({
                        type: types.SET_ACTIVE_SID,
                        activeSid: res.data[0].sid
                    });
                }
                return res;
            });
        },
        // 获取视频列表
        [types.GET_VIDEO_lIST]: (context) => {
            const state = context.state;
            const url = `${context.state.origin}/bolo/api/channel/${state.lists.setList.length ? 'setVideoList.htm' : 'videoList.htm'}`;
            context.commit({
                type: types.SET_LOADING_STATE,
                loadingState: true
            });
            return axios.get(url, {
                params: {
                    pageNum: state.pageNum,
                    pageSize: state.pageSize,
                    sid: state.sid,
                    userId: state.userId
                }
            }).then((res) => {
                context.commit({
                    type: types.SET_PAGE_NUM,
                });
                context.commit({
                    type: types.SET_LOADING_STATE,
                    loadingState: false
                });
                if(res.data.length < state.pageSize) {
                    context.commit({
                        type: types.SET_COMPLETE_STATE,
                        completeState: true
                    });
                }
                context.commit({
                    type: types.SET_VIDEO_LIST,
                    videoList: res.data
                })
            });
        }
    },

    mutations: {
        [types.SET_CHANNEL_INFO]: (state, payload) => {
            Object.keys(payload.channelInfo).forEach((e) => {
                Vue.set(state.channelInfo, e, payload.channelInfo[e])
            });
        },
        [types.SET_VIDEO_LIST]: (state, payload) => {
            if(payload.init) state.lists.videoList = [];
            else state.lists.videoList = state.lists.videoList.concat(payload.videoList)

        },
        [types.SET_SET_LIST]: (state, payload) => {
            state.lists.setList = payload.setList;
        },
        [types.SET_PAGE_NUM]: (state, payload) => {
            if(payload && payload.pageNum) {
                state.pageNum = payload.pageNum;
                console.log(state.pageNum);
            }
            else
                state.pageNum++;
        },
        [types.SET_SID]: (state, payload) => {
            state.sid = payload.sid;
        },
        [types.SET_ACTIVE_SID]: (state, payload) => {
            state.activeSid = payload.activeSid;
        },
        [types.SET_LOADING_STATE]: (state, payload) => {
            state.loadingState = payload.loadingState;
        },
        [types.SET_SHOW_STATE]: (state, payload) => {
            state.showState = payload.showState;
        },
        [types.SET_COMPLETE_STATE]: (state, payload) => {
            state.completeState = payload.completeState;
        },
        [types.SET_USER_ID]: (state, payload) => {
            state.userId = payload.userId;
        },
        [types.SET_ORIGIN]: (state, payload) => {
            state.origin = payload.origin;
        }
    },

    getters: {

    }
})

export default store
