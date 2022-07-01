import { createFormItem } from '@/components/create-form/types'
import { basicInputConfig, basicSelectConfig } from '../config-box/consts'
import { preConfig } from '../preview-box/consts'
import { lowCodeCompItem } from '../types'

export const selectConfig: lowCodeCompItem[] = [
  {
    label: '输入框',
    img: require('../assets/input.png'),
    type: 'input',
    defalutConfig: preConfig['input'],
    config: basicInputConfig
  },
  {
    label: '选择框',
    img: require('../assets/select.png'),
    type: 'select',
    defalutConfig: preConfig['select'],
    config: basicSelectConfig
  },
  {
    label: '单选框',
    img: require('../assets/select.png'),
    type: 'radio',
    defalutConfig: preConfig['select'],
    config: basicSelectConfig
  },
  {
    label: '时间选择器',
    img: require('../assets/select.png'),
    type: 'time-select',
    defalutConfig: preConfig['select'],
    config: basicSelectConfig
  },
  {
    label: '颜色筛选器',
    img: require('../assets/select.png'),
    type: 'color',
    defalutConfig: preConfig['select'],
    config: basicSelectConfig
  }
]
export type dragInterface = {
  default: createFormItem
  config: createFormItem[]
}
