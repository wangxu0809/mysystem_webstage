<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <!--<SideMenu></SideMenu>-->
    </el-aside>
    <el-main>
      <!--<books></books>-->
    </el-main>
  </el-container>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
export default {
  name: 'Fileindex',
  components: {},
  data() {
    return {msg: '这是文件管理页面首页'}
  },
  methods: {}
}
</script>
<style lang="postcss" scoped>
body {
  background-color: #ff0000;
}
</style>
