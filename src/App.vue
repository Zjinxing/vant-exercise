<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">基础组件</router-link> |
      <router-link to="/about">反馈组件</router-link> |
      <router-link to="/refresh">下拉刷新</router-link> |
      <router-link to="/navs">导航组件</router-link> |
      <router-link to="/business">业务组件</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
