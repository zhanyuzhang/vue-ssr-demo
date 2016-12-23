<template>
  <div class="wrapper" id="app">
    <div class="video-cover"></div>
    <div class="ticket">
      <div class="title">免费观影码:</div>
      <div class="info">
        <div class="code">2ag82m</div>
        <div class="usage-tip">您还可以有</div> <span>5 次使用机会</span>
      </div>
    </div>
    <div class="tutorial">
      <p>参照下面的教程，赶紧上车！</p>
      <div class="icon-point"></div>
      <p>1.下载
        <span>网易菠萝</span>
      </p>
      <p>2. 登录后进入个人中心-兑换码，填写你的观影码即可免费观看大力金刚第二季前5集视频！</p>
    </div>
    <download-bar></download-bar>
  </div>
</template>
<style  lang="sass" rel="stylesheet/scss">
  @import "../../sass-common/base";
  @import "../../sass-common/ui";

  $ticket-bg:'./images/ticket-bg.png';
  $icon-point:'./images/icon-point.png';
  $icon-relevance:'./images/icon-relevance.png';
  $icon-more:'./images/icon-more.png';

  body{background:#e3e7ea;}

  .wrapper{
    .video-cover{
      height:6.2rem;@include filled-img;background:#000;
    }
    .ticket{
      width:10.19rem;height:3.4rem;@include icon-bg($ticket-bg);margin:.5rem auto;display:-webkit-box;-webkit-box-align: center;-webkit-box-pack: justify;
      .title{font-size:.52rem;padding-left:.52rem;font-weight: bold;}
      .info{
        padding-right:1.08rem;width:4.8rem;text-align: center;
        .code{font-size:1.1rem;line-height:1.36rem;border-bottom:1px solid $default-font-color;}
        .usage-tip{
          margin-top:.3rem;font-size:.36rem;
          span{margin:0 .1rem;color:$main-color;}
        }
      }
    }
    .tutorial{
      line-height:.76rem;padding:0 .42rem;font-size:.42rem;
      span{color:$main-color;}
      .icon-point{width:.92rem;height:1.1rem;@include icon-bg($icon-point);margin:.1rem 0;}
    }

    .video-list-box{
      background:#fff;margin-top:.4rem;padding-bottom:2rem;
      .title{
        display: -webkit-box;-webkit-box-align:center;padding:0 .3rem .2rem;height:1.5rem;
        &:before{width:.66rem;height:.69rem;@include icon-bg($icon-relevance);content:'';margin-right:.15rem;display: block;margin-top:-.1rem;}
        .text{font-size:.48rem;font-weight: bold;line-height:1;-webkit-box-flex:1;}
        .more-btn{
          display: -webkit-box;-webkit-box-align:center;
          .text{font-size:.3rem;color:$gray;-webkit-box-flex:0;}
          &:after{width:.58rem;height:.56rem;@include icon-bg($icon-more);content:'';display:block;margin-left:.2rem;}
        }
      }

      .list-wrap{
        text-align: justify;font-size:0;padding:0 .3rem;
        .item{
          width:4.96rem;display: inline-block;vertical-align: top;padding-bottom:.5rem;text-align:left;
          .cover{
            height:2.8rem;border-radius: .1rem;overflow: hidden;
            img{width:100%;height:100%;display: block;}
          }
          .name{padding:.18rem 0;font-size:.36rem;line-height:.45rem;height:.9rem;overflow: hidden;}
          .stuff{
            display: -webkit-box;-webkit-box-pack:justify;font-size:.32rem;color:$light-gray;
            .text{line-height:1;}
            .author{
              display: -webkit-box;-webkit-box-align: center;
              .avatar{@include circular-avatar(.5rem);margin-right:.15rem;}
            }
            .play-count{
              display: -webkit-box;-webkit-box-align: center;
              &:before{width:.36rem;height:.36rem;@include icon-bg($icon-play-count);content:'';display: block;margin-right:.1rem;}
            }
          }
        }
        &:after{width:100%;height:0;display: inline-block;font-size:0;overflow: hidden;content:'';}
      }
    }

  }
</style>
<script>
    import DownloadBar from '../../components/download-bar-orange/index.vue'
    export default {
        name: 'invitation-video',
        components: {
            'download-bar': DownloadBar
        },
    }
</script>

