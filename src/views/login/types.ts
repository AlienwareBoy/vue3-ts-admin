import { FormRules } from 'element-plus'
export interface formProps {
  usernameEmail: string
  password: string
  usertype: number
  vCode: string
  vCodeId: string
}
export interface DataProps {
  vImage: string
  loginForm: formProps
  rules: FormRules
  userTypeList: Array<{
    value: string | number | symbol | undefined
    label: number | string
  }>
}
