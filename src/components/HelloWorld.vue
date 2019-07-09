<template lang='pug'>
  #app.hello
    .vdl-text-center
      h1 {{ msg }}
      h2 For a guide and recipes on how to configure / customize this project, check out the
        a(href='https://cli.vuejs.org' target='_blank' rel='noopener')  vue-cli documentation)
        | .

    .vdl-text-center
      #installed-plugins.vdl-secondary-nav__container
        h3 Installed CLI Plugins
          ul.vdl-secondary-nav__items
            li.vdl-secondary-nav-item
              a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel' target='_blank' rel='noopener').vdl-secondary-nav-item__container babel
            li.vdl-secondary-nav-item
              a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa' target='_blank' rel='noopener').vdl-secondary-nav-item__container pwa
            li.vdl-secondary-nav-item
              a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint' target='_blank' rel='noopener').vdl-secondary-nav-item__container eslint
            li.vdl-secondary-nav-item
              a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha' target='_blank' rel='noopener').vdl-secondary-nav-item__container unit-mocha
            li.vdl-secondary-nav-item
              a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch' target='_blank' rel='noopener').vdl-secondary-nav-item__container e2e-nightwatch

      #essential-links.vdl-secondary-nav__container
        h3 Essential Links
          ul.vdl-secondary-nav__items
            li.vdl-secondary-nav-item
              a(href='https://vuejs.org' target='_blank' rel='noopener') Core Docs
            li.vdl-secondary-nav-item
              a(href='https://forum.vuejs.org' target='_blank' rel='noopener') Forum
            li.vdl-secondary-nav-item
              a(href='https://chat.vuejs.org' target='_blank' rel='noopener') Community Chat
            li.vdl-secondary-nav-item
              a(href='https://twitter.com/vuejs' target='_blank' rel='noopener') Twitter
            li.vdl-secondary-nav-item
              a(href='https://news.vuejs.org' target='_blank' rel='noopener') News

      #ecossystem.vdl-secondary-nav__container
        h3 Ecosystem
          ul.vdl-secondary-nav__items
            li.vdl-secondary-nav-item
              a(href='https://router.vuejs.org' target='_blank' rel='noopener') vue-router
            li.vdl-secondary-nav-item
              a(href='https://vuex.vuejs.org' target='_blank' rel='noopener') vuex
            li.vdl-secondary-nav-item
              a(href='https://github.com/vuejs/vue-devtools#vue-devtools' target='_blank' rel='noopener') vue-devtools
            li.vdl-secondary-nav-item
              a(href='https://vue-loader.vuejs.org' target='_blank' rel='noopener') vue-loader
            li.vdl-secondary-nav-item
              a(href='https://github.com/vuejs/awesome-vue' target='_blank' rel='noopener') awesome-vue

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
  .home{
    margin-left:  auto;
    margin-right: auto;
  }
  .vdl-secondary-nav__container{
    clear: both;
    display: block
  }
  #installed-plugins{
    margin-top: 30%;
  }
  #essential-links{
    margin-top: 38%;
  }
  #ecossystem{
    margin-top: 46%;
  }
</style>
