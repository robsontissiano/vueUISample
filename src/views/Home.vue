<template lang='pug'>
.home
  .content
    HelloWorld(msg='Welcome to Your Vue.js App')
    img(alt='Vue logo' src='../assets/logo.png')
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
.content{
  clear: both;
  position: relative;
  display: block;
  margin: 0 auto;
}
</style>
