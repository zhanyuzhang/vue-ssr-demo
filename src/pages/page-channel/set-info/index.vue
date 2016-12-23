<template>
  <div class="channel-set-list" v-on:click="selectSet" v-bind:class="{active: isActive}">
    {{ setInfo.name }}
  </div>
</template>
<style scoped lang="sass" rel="stylesheet/scss">
  .channel-set-list {
    display: inline-block;
    font-size: .3*1.44rem;
    margin: .13rem;
    border: .01*1.44rem solid #2e2e2e;
    text-align: center;
    background: #fff;
    padding: .05*1.44rem .2*1.44rem;
    color: #2e2e2e;
    border-radius: .05*1.44rem;

    &.active {
      color: #ffaf1a;
      font-weight: bold;
      border: #ffaf1a .01*1.44rem solid
    }
  }

</style>
<script>
  export default {
    name: 'set-info',
    props: ['setInfo', 'activeSid'],
    computed: {
      isActive: function () {
        return this.setInfo.sid === this.activeSid;
      }
    },
    methods: {
      selectSet: function () {
        this.$emit('changeSet', this.setInfo.sid);
      }
    }
  }
</script>
