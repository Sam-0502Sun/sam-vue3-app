export interface loginForm {
  username: string,
  password: string
}
export interface dataType {
  token?: string,
  message?: string
}
export interface loginResponseData {
  code: number,
  data: dataType
}

export interface storeResponseData {
  profile?: dataType,
  redirectUrl?: string
}
