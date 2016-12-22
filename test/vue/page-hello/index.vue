<template lang="jade" src="./index.jade">
</template>
<script>
    module.exports = {
      name: 'hello',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      created: function () {
        var vm = this
        setInterval(function () {
          vm.counter += 1
        }, 1000)
      }
    }
</script>
<style scoped lang="sass" src="./index.scss">
</style>
