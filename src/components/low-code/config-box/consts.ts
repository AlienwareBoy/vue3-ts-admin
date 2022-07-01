import commonInput from '../components/common/form-item/item-input.vue'
import commonSelect from '../components/common/form-item/item-select.vue'
import commonRadio from '../components/common/form-item/item-radio.vue'
import { markRaw } from 'vue'
import { createFormItem } from '../components/filter-config/types'
export type targetType = 'input' | 'select' | 'radio'
// 公共的配置
const commonKFieldConfig: createFormItem[] = [
  {
    label: '字体宽度',
    labelWidth: 80,
    type: 'input',
    span: 24,
    defaultValue: 'input1',
    formKey: 'fontWidth',
    required: false
  },
  {
    label: '左侧间隔',
    labelWidth: 80,
    type: 'input',
    span: 24,
    defaultValue: 'input1',
    formKey: 'leftOffse',
    required: false
  },
  {
    label: '栅格列数',
    labelWidth: 80,
    type: 'input',
    span: 24,
    defaultValue: 'input1',
    formKey: 'colSpan',
    required: false
  },
  {
    label: '绑定字段',
    labelWidth: 80,
    type: 'input',
    span: 24,
    defaultValue: 'input1',
    formKey: 'formKey',
    required: true
  },
  {
    label: '字段标题',
    labelWidth: 80,
    type: 'input',
    span: 24,

    defaultValue: '请输入字段标题',
    formKey: 'formKey2',
    required: true
  },
  {
    label: '提示文字',
    labelWidth: 80,
    type: 'input',
    span: 24,
    defaultValue: '请输入提示文字',
    formKey: 'formKey3',
    required: true
  },
  {
    label: '是否必填',
    labelWidth: 80,
    type: 'radio',
    span: 24,
    defaultValue: false,
    formKey: 'formKey3',
    required: false
  },
  {
    label: '输入值',
    labelWidth: 80,
    type: 'input',
    span: 24,
    defaultValue: '',
    formKey: 'formKey4',
    required: true
  }
]
export const commonKeyObj = {
  label: '默认值',
  labelWidth: '字体宽度',
  offset: '左侧间隔',
  span: '栅格列数',
  formKey: '绑定字段',
  defaultValue: '提示文字',
  required: '是否必填'
}
export const basicInputConfig: createFormItem[] = [...commonKFieldConfig]
export const basicSelectConfig: createFormItem[] = [...commonKFieldConfig]
export const targetComp = {
  input: basicInputConfig,
  select: basicSelectConfig,
  radio: []
}
