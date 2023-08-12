// 用户相关的接口

import request from '@/utils/request'

/**
 * 帐号密码登录
 * @param {String} username - 帐号
 * @param {String} password - 密码
 * @returns promise
 */
export const userAccountLogin = ({ username, password }: { username: string, password: string }) => {
  return request('/login', 'post', { username, password })
}
