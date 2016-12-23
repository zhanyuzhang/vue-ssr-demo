<template>
  <div class="channel-info">
    <div class="channel-info-bg1"></div>
    <div class="channel-info-avatar">
      <img v-bind:src="channelInfo.avatar">
    </div>
    <div class="channel-info-title">
      <h2>{{ channelInfo.nick }}</h2>
      <h3>{{ channelInfo.intro }}</h3>
      <h4>
        <span class="channel-info-follows">+ 关注</span>
        <span class="channel-info-fol-num">{{ channelInfo.followedCount }}</span>
        <span class="channel-info-fol-text">人已关注</span>
        <span class="channel-info-share">分享</span>
      </h4>
    </div>
  </div>
</template>
<style scoped lang="sass" rel="stylesheet/scss">
  h3, h4, h5, h6 {
    font-weight: normal;
  }
  .channel-info {
    width:100%;
    clear: both;
    margin:0 auto;
    background: #e3e7ea;
    height:2.66* 1.44rem;
    position: relative;

  .channel-info-bg1 {
    width:100%;
    clear: both;
    margin:0 auto;
    height:1.98* 1.44rem;
    background:#292929  url("./images/bg.png") center 0;
    background-size: 100% 160%;
  }
  .channel-info-avatar {
    background:#fff;
    width:1.80* 1.44rem;
    height:1.80* 1.44rem;
    position: absolute;
    left:0.20* 1.44rem;
    top: 0.7* 1.44rem;
    border:2px solid #fff;
    border-radius: 1.80* 1.44rem;
    overflow: hidden;

  img {
    width:1.80* 1.44rem;
    height:1.80* 1.44rem;
    border-radius: 1.80* 1.44rem;
  }


  }
  .channel-info-title {
    position: absolute;
    left:2.3* 1.44rem;
    top: 0.5* 1.44rem;
    color: #fff;
    width:5.1* 1.44rem;
  }
  .channel-info-title {
  h2 {
    font-size: 0.42* 1.44rem;
    line-height:160%;
    text-align:left;
    padding-right: 0.2* 1.44rem;
    padding-top: 0.10* 1.44rem;
    text-overflow:ellipsis;
    word-break: break-all;
    overflow: hidden;
    height:0.67* 1.44rem;
    font-weight: bold;
  }
  h3 {
    font-size: 0.22* 1.44rem;
    height: 0.60* 1.44rem;
    line-height: 0.30* 1.44rem;
    overflow: hidden;
    padding-right: 0.2* 1.44rem;
    text-overflow: ellipsis;
    display: -webkit-box; -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  h4 {
    padding:0.20* 1.44rem 0 0;

  .channel-info-follows {
    color: #fff;
    font-size: 0.22* 1.44rem;
    background: #ffaf1a;
    border-radius: 4px;
    line-height: 160%;
    padding:3px 10px 3px;
    margin-right: 10px;
    float: left;
  }
  .channel-info-fol-num {
    line-height: 160%;
    font-size: 0.22* 1.44rem;
    color: #2e2e2e;
    float: left;
    padding:3px 0 3px;
  }
  .channel-info-fol-text {
    line-height: 160%;
    font-size: 0.22* 1.44rem;
    color: #2e2e2e;
    float: left;
    padding:3px 0 3px;
  }
  .channel-info-share {
    background:url("./images/share.png") no-repeat 0 3px;
    background-size: 0.38* 1.44rem 0.34* 1.44rem;
    font-size: 0.22* 1.44rem;
    color: #2e2e2e;
    float: right;
    padding:3px 0 3px 0.45* 1.44rem;
    margin-right:0.2* 1.44rem;
    line-height: 160%;
    height: 0.4* 1.44rem;
    display: none;
  }

  }
  }

  }

</style>
<script>
  export default {
    name: 'channel-info',
    props: ['channelInfo']
  }
</script>
