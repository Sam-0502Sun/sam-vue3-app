<template>
  <div class="layout-container">
    <el-container>
      <el-aside>
        <div class="Logo-container">
          <Web3dImg :Logo="Logo" />
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/images/Logo/Logo.png'
import Web3dImg from '@/components/CommonComponents/web-3d-img/web-3d-img.vue'

</script>

<style lang="less" scoped>
.layout-container {
  .el-container {
    .el-aside {
      width: @asideWidth;
      height: 100vh;
      background: @menuBackground;
      .Logo-container {
        height: 80px;
        width: 100%;
      }
    }
    .el-header {
      background: #27BA9B;
    }
  }
}
</style>
