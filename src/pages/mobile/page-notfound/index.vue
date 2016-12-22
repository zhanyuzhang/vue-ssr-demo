<template>
  <div class="wrapper" id="app">
    <div class="android-btn" v-on:click="downloadByAndroid"></div>
    <div class="ios-btn" v-on:click="downloadByIOS"></div>
    <download-bar :msg="msg"></download-bar>
  </div>
</template>
<style scoped lang="sass" rel="stylesheet/scss">
  .wrapper {
      height: 100%;
      padding-bottom:1.4rem;
      background:#ffaf1a;
      position:relative;
      background:url(./images/bg.png) no-repeat;background-size:100%;
      width: 7.20rem;

      .android-btn, .ios-btn {
        position: absolute;
        left: 3.44rem;
        top: 7.35rem;
        width: 2.83rem;
        height: .81rem;
      }
      .android-btn {
        background: url(./images/android_download.png) no-repeat;
        background-size:100%;
      }
      .ios-btn {
        top: 6.19rem !important;
        background: url(./images/ios_download.png) no-repeat;
        background-size:100%;
      }
  }
</style>

<script>
  export default {

  }
</script>
