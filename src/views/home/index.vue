<template>
  <div>
    Home页面
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
console.log(store.state.user.profile)
</script>

<style lang="less" scoped>

</style>
