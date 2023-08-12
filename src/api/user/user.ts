// 用户相关的接口

import request from '@/utils/request'
import { loginForm } from '@/api/user/type'

/**
 * 帐号密码登录
 * @param {String} username - 帐号
 * @param {String} password - 密码
 * @returns promise
 */
export const userAccountLogin = ({ username, password }: loginForm) => {
  return request('/login', 'post', { username, password })
}
