<template>
  <div class="layout-container">
    <el-container>
      <el-aside>
        <div class="Logo-container">
          <Web3dImg :Logo="Logo" />
          <div class="txt">后台管理系统</div>
        </div>
        <el-scrollbar class="scrollbar">
          <Menu :constantRoute="constantRoute" />
        </el-scrollbar>
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
import Menu from '@/components/CommonComponents/web-menu/menu-index.vue'
import { constantRoute } from '@/router/routes'

</script>

<style lang="less" scoped>
.layout-container {
  .el-container {
    .el-aside {
      width: @asideWidth;
      height: 100vh;
      background: @menuBackground;
      .Logo-container {
        height: @LogoHeight;
        width: 100%;
        display: flex;
        .txt {
          height: @LogoHeight;
          line-height: @LogoHeight;
          font-size: 20px;
          color: white;
          margin-left: 20px;
        }
      }
      .scrollbar {
        width: 100%;
        height: calc(100vh - @LogoHeight);
      }
    }
    .el-header {
      background: #27BA9B;
    }
  }
}
</style>
