<template>
  <div class="main-conatiner">
    <router-view />
  </div>
</template>
<script>
export default {
  watch: {
    $route() {
      console.log(this.$route);
    },
  },
};
</script>
<style lang="scss">
.main-conatiner {
  height: 100vh;
}
</style>
