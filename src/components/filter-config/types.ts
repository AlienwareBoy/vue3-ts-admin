import ItemInput from '../common/form-item/item-input.vue'
import ItemSelect from '../common/form-item/item-select.vue'
import ItemColor from '../common/form-item/item-color.vue'
import ItemRadio from '../common/form-item/item-radio.vue'
// import ItemUpload from '../common/form-item/item-upload.vue'
import ItemTimeSelect from '../common/form-item/item-time-select.vue'
import { timeSelectInterface, selectConfigInterface, InputConfigInterface, ColorConfigInterface } from '../common/form-item/types'
import { Component, markRaw } from 'vue'
import { FormItemRule } from 'element-plus'

type InputConfig = {
  type: 'input'
  config?: InputConfigInterface
}
type selectConfig = {
  type: 'select'
  config?: selectConfigInterface
}
type timePickerConfig = {
  type: 'time-select'
  config?: timeSelectInterface
}
type colorConfig = {
  type: 'color'
  config?: ColorConfigInterface
}
type radioConfig = {
  type: 'radio'
  config?: {}
}
type filterItem = InputConfig | selectConfig | timePickerConfig | colorConfig | radioConfig
export type btnType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
export const itemMap = new Map([
  ['input', markRaw(ItemInput)],
  ['select', markRaw(ItemSelect)],
  ['color', markRaw(ItemColor)],
  ['radio', markRaw(ItemRadio)],
  // ['upload', markRaw(ItemUpload)],
  ['time-select', markRaw(ItemTimeSelect)]
])
export type formItem = {
  label: string
  formKey: string
  labelWidth?: number
  defaultValue?: string | number | boolean | object
  span?: number
  offset?: number
  required?: boolean
  isShowDelete?: boolean
  rules?: FormItemRule | FormItemRule[]
  isShowErrorMessage?: boolean
  comp?: Component | null
}
export type createFormItem = formItem & filterItem

//  默认配置的泛型传这个泛型
export interface defalutSelectOptions {
  label: string
  value: string
}

export interface btnsConfigItem {
  disabled?: boolean
  label: string
  eventName: string
  span?: number
  type?: btnType
  offset?: number
  push?: number
  pull?: number
}
export interface ItemValue {
  value: any
  formKey: string
  curIndex: number
}
export interface commonFormRef extends HTMLElement {
  resetForm(): void
  init(): void
}
