import { createFormItem } from '../create-form/types'
import commonInput from '@/components/common/form-item/item-input.vue'
import commonSelect from '@/components/common/form-item/item-select.vue'
import { markRaw } from 'vue'
// 默认基础input配置
// export const basicInputConfig: createFormItem = {
//   label: '默认值',
//   labelWidth: 80,
//   offset: 1,
//   type: 'input',
//   span: 6,
//   formKey: 'defalutInput',
//   comp: markRaw(commonInput),
//   defaultValue: '默认value值',
//   config: { itemType: 'text' }
// }
// // 默认基础select配置
// export const basicSelectConfig: createFormItem = {
//   label: '默认值',
//   labelWidth: 80,
//   offset: 1,
//   type: 'select',
//   span: 6,
//   formKey: 'defalutInput',
//   comp: markRaw(commonSelect),
//   defaultValue: '默认value值',
//   config: { collapseTags: false, collapseTagsTooltip: false, multiple: false, options: [] }
// }

// export const targetComp = {
//   input: basicInputConfig,
//   select: basicSelectConfig
// }
