<template>
  <el-container class="h-full">
    <el-header class="header">
      <div class="flex">
        <router-link to="/" class="menu-item cursor-pointer"
          >首页</router-link
        >
        <router-link to="/child-router" class="menu-item cursor-pointer"
          >嵌套路由</router-link
        >
        <router-link to="/about" class="menu-item cursor-pointer"
          >about</router-link
        >
      </div>
    </el-header>
    <el-main class="p-0">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.header {
  border-bottom: 1px solid rgba(248, 250, 252, 0.06);
}
</style>
