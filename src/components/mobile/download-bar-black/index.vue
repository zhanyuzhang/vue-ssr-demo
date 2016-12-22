<template>
  <div>
    <div class="download-bar">
      <div class="logo"></div>
      <div class="ip-name">
        网易 <br> 菠萝
      </div>
      <div class="content">
        双手下载 <br> 以示清白
      </div>
      <div class="btn" v-on:click="download"></div>
    </div>
    <div class="download-guide">
      <div class="container">
        <div class="content">
          请点击这里使用浏览器打开
        </div>
        <div class="triangle"></div>
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass" rel="stylesheet/scss">
  $main-color:#ffaf1a;
  .download-bar{
    width:100%;height:1.4rem;background:#000;position:fixed;left:0;bottom:0;display: -webkit-box;overflow: hidden;-webkit-box-align:center;z-index:5;
    .logo{width:.94rem;height:.94rem;margin-left:.2rem;background:url(./images/logo.png) no-repeat;background-size:100%;}
    .ip-name{font-size: .38rem;font-weight: 700;margin-left: .2rem;line-height:.47rem;color:#fff;}
    .content{line-height:.47rem;color:#ffaf1a;margin-left:.22rem;font-size: .38rem;font-weight: 700;padding-left:.22rem;border-left:1px solid #fff;-webkit-box-flex:1;}
    .btn{width:2.52rem;height:1.4rem;background:url(./images/download-btn.gif) no-repeat;background-size:100%;display: block;}
  }
  .download-guide{
    width:100%;height:100%;position: fixed;top:0;left:0;background:rgba(0,0,0,.8);z-index:10;display:none;
    .container{
      position:absolute;top:0;right:.23rem;padding-top:.23rem;
      .content{padding-left:.66rem;padding-right:.16rem;height:.5rem;line-height:.5rem;border-radius:.05rem;background:$main-color;font-size:.24rem;}
    }
  }
</style>

<script>
import native from '../../../lib/native';
    export default {
        name: 'download-bar-black',
        methods: {
            download() {
                native.download('404页面')
            }
        },
        props: ['msg']
    }
</script>

