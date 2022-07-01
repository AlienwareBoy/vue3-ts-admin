import { createFormItem } from '../components/filter-config/types'
import { markRaw } from 'vue'
import { targetType } from '../config-box/consts'
export interface preInterface {
  [dataText: string]: createFormItem
}
export const preConfig: preInterface = {
  input: {
    label: '默认值',
    labelWidth: 80,
    offset: 1,
    type: 'input',
    isShowDelete: false,
    span: 6,
    formKey: 'defalutInput',
    required: false,
    defaultValue: '默认value值',
    config: { itemType: 'text' }
  },
  select: {
    label: '默认值',
    labelWidth: 80,
    offset: 1,
    type: 'select',
    isShowDelete: false,
    span: 6,
    formKey: 'defalutInput',
    defaultValue: '默认value值',
    config: { collapseTags: false, collapseTagsTooltip: false, multiple: false, options: [] }
  },
  radio: {
    label: '默认值',
    labelWidth: 80,
    offset: 1,
    type: 'radio',
    required: false,
    isShowDelete: true,
    span: 6,
    formKey: 'defalutInput',
    defaultValue: '默认value值'
  }
}
