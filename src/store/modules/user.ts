// user 仓库模块
import { storeResponseData, dataType } from '@/api/user/type'

interface userDataItem{
  token?: string
}
export interface StateProps{
  profile: userDataItem
  redirectUrl: string
}

const state = {
  // 用户信息
  profile: {
    token: ''
  },
  // 登录后回跳路径
  redirectUrl: '/'
}
const mutations = {
  // 修改用户信息，payload就是用户信息对象
  setUser (state: storeResponseData, payload: dataType) {
    state.profile = payload
  },
  // 修改回跳地址
  setRedirectUrl (state: storeResponseData, url: string) {
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
