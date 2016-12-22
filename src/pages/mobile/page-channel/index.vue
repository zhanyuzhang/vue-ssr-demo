<template>
  <div class="wrapper" @scroll="loadMore($event)" v-bind:data-id="userId" id="app" v-show="canShow">
    <channel-info v-bind:channelInfo="channelInfo"></channel-info>
    <div class="channel-set">
      <template v-for="setInfo in channelSet">
        <set-info v-bind:setInfo="setInfo" v-bind:activeSid="activeSid" v-on:changeSet="changeSet"></set-info>
      </template>
    </div>
    <div class="channel-video-list">
      <template v-for="videoInfo in videoList">
        <video-info v-bind:videoInfo="videoInfo"></video-info>
      </template>
    </div>
    <download-bar></download-bar>
  </div>
</template>

<style scoped lang="sass" rel="stylesheet/scss">
  .wrapper {
    height: 100%;
    overflow-y: scroll;
    .channel-set {
      padding: 0 .13rem 0.13rem .3rem;
      background:#e3e7ea;
    }
    .channel-video-list {
      width:100%;
      clear: both;
      margin:0 auto;
      padding-bottom: 1.4*1.44rem;
    }
  }
</style>

<script>
  import Vue from 'vue'
  import channelInfo from './channel-info/index.vue'
  import setInfo from './set-info/index.vue'
  import videoInfo from './video-info/index.vue'
  import downloadBar from '../../../components/mobile/download-bar-orange/index.vue'

  export default {
    name: 'channel',
    components: {
      'channel-info': channelInfo,
      'set-info': setInfo,
      'video-info': videoInfo,
      'download-bar': downloadBar
    },
    data: function () {
      return {
        channelInfo: {},
        channelSet: [],
        videoList: [],
        pageNum: 1,
        pageSize: 10,
        sid: null,
        activeSid: null,
        isLoading: false,
        isAll: false,
        userId: null,
        canShow: false
      }
    },
  }
</script>
