<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import NavMenu from "./common/NavMenu";
export default {
  name: 'Homepage',
  components: {NavMenu},
  data() {
    return {msg: '这个是Home模板页'}
  },
  methods: {}
}
</script>
<style lang="postcss" scoped>
body {
  background-color: #ff0000;
}
</style>
