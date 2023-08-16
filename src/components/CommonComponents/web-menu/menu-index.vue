<template>
  <div class="menu-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      router
      :collapse="isCollapse"
    >
      <template v-for="item in constantRoute" :key="item.name">
        <template v-if="item.children">
          <template v-for="i in item.children" :key="i.name">
            <template v-if="!i.children">
              <el-menu-item v-if="!i.meta.hidden" :index="i.path">
                <el-icon>
                  <component :is="i.meta.icon"></component>
                </el-icon>
                <template #title>
                  <span>{{ i.meta.title }}</span>
                </template>
              </el-menu-item>
            </template>
            <template v-if="i.children&&i.children.length === 1">
              <el-menu-item v-if="!i.children[0].meta.hidden" :index="i.children[0].path">
                <el-icon>
                  <component :is="i.children[0].meta.icon"></component> // 加载对应的图标
                </el-icon>
                <template #title>
                  <span>{{ i.children[0].meta.title }}</span>
                </template>
              </el-menu-item>
            </template>
            <template v-if="i.children&&i.children.length > 1">
              <el-sub-menu v-if="!i.meta.hidden" :index="i.path">
                <template #title>
                  <el-icon>
                    <component :is="i.meta.icon"></component>
                  </el-icon>
                  <span>{{ i.meta.title }}</span>
                </template>
                <template v-for="ii in i.children" :key="ii.name">
                  <el-menu-item v-if="!ii.meta.hidden" :index="ii.path">
                    <el-icon>
                      <component :is="ii.meta.icon"></component>
                    </el-icon>
                    <span>{{ ii.meta.title }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
          </template>
        </template>
        <template v-else>
          <el-menu-item v-if="!item.meta.hidden" :index="item.path">
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <template #title>
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Menu',
  props: {
    constantRoute: {
      type: Array
    },
    isCollapse: {
      type: Boolean
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup () {
    const activeIndex = ref('/')
    const route = useRoute()
    activeIndex.value = route.path

    watch(route, () => {
      activeIndex.value = route.path
    })

    return {
      activeIndex
    }
  }
}
</script>

<style lang="less" scoped>
.menu-container {
  .el-menu-demo:not(.el-menu--collapse) {
    width: 300px;
  }
  :deep(.el-menu) {
    border-right: 1px solid @menuBackground;
    .el-menu-item {
      background: @menuBackground;
      color: white;
    }
    .el-menu-item.is-active {
      color: #FFB302;
      background: #02243f;
    }
    .el-menu-item:hover {
      background: #02243f;
    }
    .el-sub-menu {
      background: @menuBackground;
      color: white;
      .el-sub-menu__title {
        color: white;
      }
      .el-sub-menu__title:hover {
        background: unset;
      }
    }
    .el-sub-menu:hover {
      background: #02243f;
    }
  }
}
</style>
