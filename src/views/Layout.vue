<template>
  <div class="layout-container">
    <el-container>
      <el-aside>
        <div class="Logo-container">
          <Web3dImg :Logo="Logo" />
          <div v-show="isCollapse===false" class="txt">后台管理系统</div>
        </div>
        <el-scrollbar class="scrollbar">
          <!-- 菜单组件 -->
          <Menu :constantRoute="constantRoute" :isCollapse="isCollapse"/>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-container">
            <el-icon class="fold-icon" @click="changeIcon">
              <component :is="isCollapse?'Expand':'Fold'"></component>
            </el-icon>
            <!-- 顶部导航组件 -->
            <TableBar />
          </div>
        </el-header>
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
import TableBar from '@/components/CommonComponents/web-tablebar/tablebar-index.vue'
import { constantRoute } from '@/router/routes'
import { ref } from 'vue'

const isCollapse = ref(false)
const changeIcon = () => {
  isCollapse.value = !isCollapse.value
}

</script>

<style lang="less" scoped>
.layout-container {
  .el-container {
    .el-aside {
      height: 100vh;
      width: unset;
      background: @menuBackground;
      .Logo-container {
        height: @LogoHeight;
        display: flex;
        .txt {
          height: @LogoHeight;
          line-height: @LogoHeight;
          width: 220px;
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
      background-image: linear-gradient(to right, #d7d1d1, #ac9999, #f4dada);
      .header-container {
        display: flex;
        height: 100%;
        align-items: center;
        .fold-icon {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
