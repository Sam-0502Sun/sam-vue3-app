// user 仓库模块
import { userStoreData, profileType } from '@/api/user/user-type'

export interface StateProps{
  profile?: profileType
  redirectUrl?: string
  token?: string|null
}

const state: userStoreData = {
  // 用户信息
  profile: {
    message: '',
    username: '',
    avatar: ''
  },
  // token 信息
  token: '',
  // 登录后回跳路径
  redirectUrl: '/'
}
const mutations = {
  // 修改用户信息，payload就是用户信息对象
  setToken (state: userStoreData, payload: string) {
    state.token = payload
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
