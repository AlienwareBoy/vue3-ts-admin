import { createFormItem } from '@/components/create-form/types'
import { IDatePickerType } from 'element-plus/lib/components/date-picker/src/date-picker.type'
export interface commonConfig {
  formKey: string
  defaultValue: string
}
export interface exportValue {
  curIndex: number
  formKey: string
  value: any
}
export type InputType = 'text' | 'number' | 'textarea'
export interface InputConfigInterface {
  itemType?: InputType
}

export interface ColorConfigInterface {
  showAlpha?: boolean
}
export interface selectConfigInterface {
  // defaultValue: string | number | boolean | object
  collapseTags?: boolean
  collapseTagsTooltip?: boolean
  multiple?: boolean
  options?:
    | Array<{
        label: string
        value: string | number
      }>
    | any
}

export interface timeSelectInterface {
  itemType?: IDatePickerType
}
