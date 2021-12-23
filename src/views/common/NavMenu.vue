<template>
  <el-menu
    :default-active = "'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px;">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{item.navItem}}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">王旭YYDS</span>
  </el-menu>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
export default {
  name: 'NavMenu',
  components: {},
  data() {
    return {
      navList:[
        {name: '/index', navItem: '首页'},
        {name: '/fileIndex', navItem: '文件管理'},
        {name: '/libraryIndex', navItem: '图书馆'},
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="postcss" scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
