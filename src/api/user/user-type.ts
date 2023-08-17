
export interface loginForm {
  username: string,
  password: string
}
export interface profileType {
  message: string|null,
  username: string,
  avatar: string
}
export interface loginResponseData {
  code: number,
  data: profileType
}

export interface userStoreData {
  profile?: profileType,
  redirectUrl?: string,
  token?: string|null
}
