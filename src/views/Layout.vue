<template>
  <div class="layout-container">
    <el-container>
      <el-aside>
        <div class="Logo-container">
          <Web3dImg :Logo="Logo" />
          <div class="txt">后台管理系统</div>
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
        height: 60px;
        width: 100%;
        display: flex;
        .txt {
          height: 60px;
          line-height: 60px;
          font-size: 28px;
          color: white;
          margin-left: 20px;
        }
      }
    }
    .el-header {
      background: #27BA9B;
    }
  }
}
</style>
