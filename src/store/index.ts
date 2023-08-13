import { createStore } from 'vuex'

// 引入仓库模块
import user, { StateProps as UserState } from './modules/user'

export type StateProps = {// 导出对应的模块包
  user:UserState
}

export default createStore<StateProps>({
  modules: {
    user
  }
})
