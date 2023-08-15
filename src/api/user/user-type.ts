
export interface loginForm {
  username: string,
  password: string
}
export interface profileType {
  token: string|null,
  message: string|null,
}
export interface loginResponseData {
  code: number,
  data: profileType
}

export interface userStoreData {
  profile?: profileType,
  redirectUrl?: string
}
