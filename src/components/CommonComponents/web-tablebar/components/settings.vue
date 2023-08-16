<template>
  <div class="tabbar-right">
    <el-button icon="Refresh" circle/>
    <el-button icon="FullScreen" @click="fullScreen" circle/>
    <el-button icon="Setting" circle/>
    <img src="../../../../assets/logo.png" alt=""/>
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
</template>

<script lang="ts" setup>
// 全屏按钮点击回调
const fullScreen = () => {
  // Dom对象的一个属性:可以用拍判断当前是否全屏【全屏：true   非全屏： false】
  const full = document.fullscreenElement
  if (!full) {
    // 全屏模式开启
    document.documentElement.requestFullscreen()
  } else {
  //  退出全屏模式
    document.exitFullscreen()
  }
}
</script>

<style lang="less" scoped>
.tabbar-right {
  display: flex;
  height: 100%;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    border: 1px solid #333;
    border-radius: 50%;
    margin: 0 10px;
  }
  .el-dropdown-link:focus {
    outline: none;
  }
}
</style>
