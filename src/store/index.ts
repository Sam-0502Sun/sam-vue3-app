import { createStore } from 'vuex'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import createPersistedState from 'vuex-persistedstate'

// 引入仓库模块
import user, { StateProps as UserState } from './modules/user'

export type StateProps = {// 导出对应的模块包
  user:UserState
}

export default createStore<StateProps>({
  modules: {
    user
  },
  // 配置插件
  plugins: [
    /* 数据持久化插件
    默认存储在localStorage
    **/
    createPersistedState({
      // 本地存储名字
      key: 'sam-vue3-app',
      // 指定需要存储的模块
      paths: ['user']
    })
  ]
})
