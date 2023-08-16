<template>
  <div class="tabbar-left">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.name" :to="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbList:any = ref([])
breadcrumbList.value = route.matched

// 更新面包屑导航的方法
const renewBreadcrumb = () => {
  breadcrumbList.value = route.matched.filter(item => item.name !== 'Layout')
}

watch(route, () => {
  renewBreadcrumb()
}, { deep: true, immediate: true })
</script>

<style lang="less" scoped>
.tabbar-left {
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
