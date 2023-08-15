<template>
  <div class="tabbar-container">
    <div class="tabbar-left">
      <el-icon>
        <Fold/>
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar-right">
      <el-button icon="Refresh" circle/>
      <el-button icon="FullScreen" circle/>
      <el-button icon="Setting" circle/>
      <img src="../../../assets/logo.png" alt=""/>
      <!-- 下拉菜单 -->
      <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.tabbar-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .tabbar-left {
    display: flex;
    align-items: center;

    .el-icon {
      margin-right: 10px;
    }
  }

  .tabbar-right {
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      border: 1px solid #333;
      border-radius: 50%;
      margin: 0 10px;
    }
  }
}
</style>
