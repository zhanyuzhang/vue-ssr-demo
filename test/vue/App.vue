<template>
    <div>
        <h1>{{ counter }}</h1>
        <h2> {{ title }} </h2>
    </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        counter: 0
      }
    },
    props: ['title'],
    created: function () {
      var vm = this
      setInterval(function () {
        vm.counter += 1
      }, 1000)
    }
  }
</script>