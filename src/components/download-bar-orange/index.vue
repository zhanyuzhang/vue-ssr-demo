<template>
  <div class="download-bar">
    <div class="logo"></div>
    <div class="content">
      网易菠萝 <br> <b>超好玩的视频社区</b>
    </div>
    <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.bolo.android"></a>
  </div>
</template>
<style scoped lang="sass" rel="stylesheet/scss">
  $main-color: #ffaf1a;
  $device-width: 10.8rem;

  .download-bar {
    width:$device-width;
    position:fixed;
    bottom:0;
    left:50%;
    margin-left:-$device-width / 2;
    height:2rem;
    background:$main-color;
    display: -webkit-box;
    -webkit-box-align:center;
    z-index:30;

  .logo {
    width:1.04rem;
    height:1.38rem;
    background:url(./images/logo.png) no-repeat;
    background-size:100%;
    margin-left:.37rem;
  }
  .content {
    -webkit-box-flex:1;
    margin-left:.28rem;
    line-height:.6rem;
    font-size:.46rem;
  }
  .download-btn {
    width:4.6rem;
    height:2rem;
    background:url(./images/download-btn.gif)
    no-repeat;background-size:100%;
    display: block;
    margin-right:.39rem;
  }
  }
</style>
</template>
<script>
  export default {
    name: 'download-bar-orange',
  }
</script>
