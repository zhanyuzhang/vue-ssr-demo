<template>
  <div class="channel-video">
    <a class="channel-video-cover" v-bind:href="videoInfo.videoId | formatVideoId">
      <img v-bind:src="videoInfo.cover">
      <span class="channel-video-cover-bg"></span>
      <span class="channel-video-cover-playic"></span>
      <span class="channel-video-cover-text">
        <span class="channel-video-cover-text-update">{{ videoInfo.uploadTime | formatUploadTime }}</span>
        <span class="channel-video-cover-text-time">{{ videoInfo.duration | formatDuration }}</span>
      </span>
    </a>
    <h2>
      <a v-bind:href="videoInfo.videoId | formatVideoId">{{ videoInfo.title }}</a>
    </h2>
    <div class="channel-video-type">
      <span>{{videoInfo.tag | formatTag}}</span>
    </div>
    <a class="channel-video-pt">
      <span class="channel-video-pt-ic"></span>
      <span class="channel-video-pt-num">{{ videoInfo.playCount }}</span>
      <span>次</span>
    </a>
    <div class="channel-video-bline"></div>
  </div>
</template>
<style scoped lang="sass" rel="stylesheet/scss">
  .channel-video { width:100%; clear: both; margin:0 auto; border-top:0.22*1.44rem solid #e3e7ea;}
  .channel-video-cover { width:100%; clear: both; margin:0 auto; height: 4.22*1.44rem; position: relative; display: block;}
  .channel-video-cover img { width:100%; height: 4.22*1.44rem;}
  .channel-video-cover-bg { position: absolute; left:0; top:0; width:100%; height:4.22*1.44rem;z-index: 5;background:url("./images/crbg05.png") repeat-x; background-size: 100% 100%; }
  .channel-video-cover-playic { position: absolute; left:50%;top:50%;width:1.12*1.44rem; height: 1.12*1.44rem; background:url("./images/cr_play.png") repeat-x; background-size: 100% 100%;z-index: 6; display: block; margin-left: -0.56*1.44rem; margin-top: -0.56*1.44rem;}
  .channel-video-cover-text { position: absolute; right: 0.2*1.44rem; bottom:0.2*1.44rem; z-index: 5;}
  .channel-video-cover-text-update { background:url("./images/crbg03.png"); line-height: 0.18*1.44rem; font-size: 0.18*1.44rem; color:#fff; padding:3px 6px 2px; border-radius: 3px;}
  .channel-video-cover-text-time { background:url("./images/crbg03.png"); line-height: 0.18*1.44rem; font-size: 0.18*1.44rem; color:#fff; padding:3px 6px 2px; border-radius: 3px; margin-left:0.1*1.44rem;}
  .channel-video h2 {  text-align: left; clear: both;}
  .channel-video h2 a { display: block;font-size: 0.32*1.44rem; line-height: 140%; padding:0.3*1.44rem 0.2*1.44rem; font-weight: bold;}
  .channel-video h2 a ,.channel-video h2 a:visited { color: #2e2e2e;}
  .channel-video h2 a:active { color:#a60000;}
  .channel-video-info { width:100%; clear: both; margin:0 auto; border-bottom:0.38*1.44rem solid #ccc;}
  .channel-video-type { margin-left:0.2*1.44rem; color:#ff9933; float: left; display: inline-block; font-size:0.22*1.44rem; color:#b4b4b4;}
  .channel-video-pt { margin-right:0.2*1.44rem; font-size: 0.22*1.44rem; color: #2e2e2e; float: right; line-height: 0.26*1.44rem;}
  .channel-video-pt-ic {background:url("./images/crbg02.png") no-repeat; width:0.26*1.44rem; height:0.26*1.44rem; background-size: 0.24*1.44rem 0.24*1.44rem; display: inline-block;margin-right: 2px; vertical-align: bottom;}
  .channel-video-pt span { font-size:0.22*1.44rem;}
  .channel-video-bline {width:100%; clear: both; margin:0 auto; height: 0.38*1.44rem;}
  a {text-decoration: none;}
</style>
<script>
  export default {
    name: 'videoInfo',
    props: ['videoInfo'],
    filters: {
      formatUploadTime : function (val) {
        var differStr = "";
        var nowTime = new Date();
        var nowMillis = nowTime.getTime();
        var differSeconds = (nowMillis - val)/1000;
        var differMinutes = Math.floor(differSeconds / 60);
        if (differMinutes < 0) {
          differMinutes=1;
        }
        if (differMinutes <= 59) {
          differStr = differMinutes + "分钟前";
        } else if (differMinutes >59 && differMinutes < 1440) {
          differStr = Math.floor(differMinutes/60) + "小时前";
        } else if (differMinutes >=1440 && differMinutes < 43200) {
          differStr = Math.floor(differMinutes/60/24) + "天前";
        } else {
          differStr = Math.floor(differMinutes/60/24/30) + "个月前";
        }
        return differStr;
      },
      formatDuration: function (val) {
          var theTime = parseInt(val);// 秒
          var theTime1 = 0;// 分
          var theTime2 = 0;// 小时
          if(theTime > 60) {
            theTime1 = parseInt(theTime/60);
            theTime = parseInt(theTime%60);
            if(theTime1 > 60) {
              theTime2 = parseInt(theTime1/60);
              theTime1 = parseInt(theTime1%60);
            }
          }
          if(theTime < 10 ){
            theTime= "0" + theTime;
          }
          var result = ""+theTime;
          if(theTime1 > 0) {
            if(theTime1 < 10 ){
              theTime1= "0" + theTime1;
            }
            result = ""+theTime1+":"+result;
          }
          if(theTime2 > 0) {
            if(theTime2 < 10 ){
              theTime2= "0" + theTime2;
            }
            result = ""+theTime2+":"+result;
          }
          return result;
      },
      formatVideoId: function (val) {
        return '/m/play?videoId=' + val + '&sourceFrom=up';
      },
      formatTag: function (val) {
        return '#' + val.split(',').join(' #');
      }
    }
  }
</script>
