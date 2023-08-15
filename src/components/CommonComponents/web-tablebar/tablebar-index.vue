<template>
  <div class="tabbar-container">
    <div>
      <Breadcrumb />
    </div>
    <div>
      <Settings />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from './components/breadcrumb.vue'
import Settings from './components/settings.vue'

</script>

<style lang="less" scoped>
.tabbar-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
