import { createFormItem, btnType } from './components/filter-config/types'
import { targetType } from './config-box/consts'
type type1 = Pick<createFormItem, 'type'>
type type2 = type1['type']
export interface lowCodeCompItem {
  label: string
  img: string
  type: type2
  defalutConfig: createFormItem
  config: createFormItem[]
}
