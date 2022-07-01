<template>
  <el-form-item
    :prop="formKey"
    :label="label"
    :label-width="labelWidth || 80"
    :required="required || false"
    :rules="rules || []"
    :isShowErrorMessage="isShowErrorMessage || false"
  >
    <el-checkbox v-model="itemValue" @change="getValue"></el-checkbox>
  </el-form-item>
</template>

<script setup lang="ts">
import { onMounted, reactive, toRefs, watch } from 'vue'
import { ElCheckbox, ElFormItem, FormItemRule } from 'element-plus'
import { InputType, exportValue } from './types'
import utils from '@/utils/utils'
interface InputProps {
  curIndex: number
  formKey: string
  label: string
  labelWidth?: number
  required?: boolean
  rules?: FormItemRule | FormItemRule[]
  isShowErrorMessage?: boolean
  defaultValue?: boolean
  config?: {
    itemType?: InputType
  }
}
const props = withDefaults(defineProps<InputProps>(), {
  curIndex: 0,
  formKey: '',
  required: false,
  labelWidth: 80,
  isShowErrorMessage: false,
  rules: () => [],
  defaultValue: false,
  config: () => {
    return {
      itemType: 'text'
    }
  }
})
interface DataProps {
  itemValue: false
}
let state = reactive<DataProps>({ itemValue: false })
const emit = defineEmits<{
  (e: 'getValue', data: exportValue): void
}>()
const getValue = (value: string | boolean | number) => {
  console.log('start', value)
  utils.throttle(() => {
    emit('getValue', {
      formKey: props.formKey,
      value: value,
      curIndex: props.curIndex
    })
  }, 500)
}

watch(
  () => props.defaultValue,
  cur => {
    state.itemValue = cur
  },
  { immediate: true }
)
const init = () => {
  if (props.defaultValue) {
    state.itemValue = props.defaultValue
  } else {
    state.itemValue = false
  }
}
onMounted(() => {
  init()
})
let { itemValue } = toRefs(state)
let { config, formKey, label, labelWidth, required, rules, isShowErrorMessage } = toRefs(props)
</script>
<style lang="scss" scoped></style>
