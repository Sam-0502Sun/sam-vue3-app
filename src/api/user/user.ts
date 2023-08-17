// 用户相关的接口

import request from '@/utils/request'
import { loginForm } from '@/api/user/user-type'

/**
 * 帐号密码登录
 * @param {String} username - 帐号
 * @param {String} password - 密码
 * @returns promise
 */
export const userAccountLogin = ({ username, password }: loginForm) => {
  return request('/admin/acl/index/login', 'post', { username, password })
}

/**
 * token 获取用户信息
 * @param {String} Token - 秘钥
 * @returns promise
 */
export const getUserInfo = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return request('/admin/acl/index/info', 'get')
}

/**
 * 退出登录
 * @param {String} token - 秘钥
 * @returns promise
 */
export const userAccountLogout = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return request('/admin/acl/index/logout', 'post')
}
