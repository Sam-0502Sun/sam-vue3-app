<template>
  <div class="tabbar-left">
    <el-icon>
      <Fold/>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang="less" scoped>
.tabbar-left {
  display: flex;
  height: 100%;
  align-items: center;

  .el-icon {
    margin-right: 10px;
  }
}
</style>
