<template>
  <div>
    我是app跟组建
  </div>
  <div>
    <svg-icon icon-class="phone" class="phone" />
    <svg-icon icon-class="profile" class="profile" />
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">

</script>

<style scoped>
.phone {
  color: blue;
  width: 30px;
}
.profile {
  color: black;
  width: 50px;
}
</style>
