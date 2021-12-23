<template>
  <el-row>
    <el-col :span="3">
      <el-menu
        default-active="5"
        class="el-menu-vertical-demo"
        @open=""
        @close=""
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
export default {
  name: 'Index',
  components: {},
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
