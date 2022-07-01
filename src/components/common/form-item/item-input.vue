<template>
  <el-form-item
    :props="formKey"
    :label="label"
    :label-width="labelWidth"
    :required="required"
    :rules="rules"
    :isShowErrorMessage="isShowErrorMessage"
  >
    <el-input :type="config?.itemType || 'text'" :autosize="{ minRows: 2, maxRows: 4 }" v-model="itemValue" @change="getValue"></el-input>
  </el-form-item>
</template>

<script setup lang="ts">
import { onMounted, reactive, toRefs, watch } from 'vue'
import { ElInput, ElFormItem, FormItemRule } from 'element-plus'
import { InputType, exportValue } from './types'
import utils from '@/utils/utils'
interface InputProps {
  curIndex: number
  formKey: string
  label: string
  labelWidth: number
  required: boolean
  rules: FormItemRule | FormItemRule[]
  isShowErrorMessage: boolean
  defaultValue: string
  config?: {
    itemType?: InputType
  }
}
const props = withDefaults(defineProps<InputProps>(), {
  curIndex: 0,
  formKey: '',
  defaultValue: '',
  config: () => {
    return {
      itemType: 'text'
    }
  }
})
interface DataProps {
  itemValue: string
}
let state = reactive<DataProps>({ itemValue: '' })
const emit = defineEmits<{
  (e: 'getValue', data: exportValue): void
}>()
const getValue = utils.throttle(value => {
  console.log(value)
}, 3000)
//  (value: string) => {
//   // console.log(props)
//   // emit('getValue', {
//   //   formKey: props.formKey,
//   //   value: value,
//   //   curIndex: props.curIndex
//   // })
// }
watch(
  () => props.defaultValue,
  cur => {
    // console.log('变更', cur)
    state.itemValue = cur
  },
  { immediate: true }
)
const init = () => {
  if (props.defaultValue) {
    state.itemValue = props.defaultValue
  } else {
    state.itemValue = ''
  }
}
onMounted(() => {
  init()
})
let { itemValue } = toRefs(state)
let { config, formKey, label, labelWidth, required, rules, isShowErrorMessage } = toRefs(props)
</script>
<style lang="scss" scoped></style>
