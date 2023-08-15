// import type { RouteRecordRaw } from 'vue-router'

export interface loginForm {
  username: string,
  password: string
}
export interface profileType {
  token?: string,
  message?: string,
  // menuRoutes:RouteRecordRaw[]
}
export interface loginResponseData {
  code: number,
  data: profileType
}

export interface userStoreData {
  profile?: profileType,
  redirectUrl?: string
}
