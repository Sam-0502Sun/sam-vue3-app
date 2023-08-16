// user 仓库模块
import { userStoreData, profileType } from '@/api/user/user-type'

export interface StateProps{
  profile: profileType
  redirectUrl: string
}

const state: StateProps = {
  // 用户信息
  profile: {
    token: '',
    message: '',
    username: '',
    avatar: ''
  },
  // 登录后回跳路径
  redirectUrl: '/'
}
const mutations = {
  // 修改用户信息，payload就是用户信息对象
  setUser (state: userStoreData, payload: profileType) {
    state.profile = payload
  },
  // 修改回跳地址
  setRedirectUrl (state: userStoreData, url: string) {
    state.redirectUrl = url
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
