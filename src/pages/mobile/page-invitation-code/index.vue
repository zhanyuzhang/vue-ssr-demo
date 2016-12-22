<template>
  <div class="wrapper" id="app">
    <div class="tip-box">
      <div class="content">
        <div class="img"></div>
        <div class="intro">把观影码分享给好友，可让他们免费看 <sapn>大力金刚第二季</sapn></div>
      </div>
    </div>
    <div class="code-box">
      <div class="title">发送您的观影码</div>
      <div class="code">{{ code }}</div>
      <div class="usage-tip">您还可以有 <span>{{count}} 次使用机会</span></div>
      <div class="share-btn" v-on:click="openShareView">分享到社交媒体</div>
      <div>{{ answer }}</div>
    </div>
  </div>
</template>
<style  lang="sass" rel="stylesheet/scss">
  @import "../../../sass-common/mobile/base";
  @import "../../../sass-common/mobile/ui";

  $tip-img:'./images/tip-img.png';

  body{background:#fff;}

  .wrapper{
    background:#e3e7ea;
    .tip-box{
      height:6.18rem;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack:center;background:#fff;
      .img{width:4.78rem;height:2.66rem;@include icon-bg($tip-img);margin:0 auto;}
      .intro{
        margin-top:.46rem;font-size:.42rem;width:7.5rem;text-align:center;
        span{color:$main-color;}
      }
    }
    .code-box{
      margin-top:.3rem;background:#fff;padding-top:2.5rem;text-align:center;
      .title{font-size:.42rem;}
      .code{width:5.4rem;font-size:1.1rem;line-height:1.36rem;border-bottom:1px solid $default-font-color;margin:0 auto;font-weight: bold;}
      .usage-tip{
        margin-top:.3rem;font-size:.36rem;color:$gray;
        span{margin:0 .1rem;color:$main-color;}
      }
      .share-btn{@include bolo-btn(5.4rem,1.1rem,.42rem);margin:.46rem auto 0;}
    }
  }
</style>
<script>
    export default {
        name: 'invitation-code',
        data: function () {
          return {
            code: '',
            count: '0'
          }
        }
    }
</script>

