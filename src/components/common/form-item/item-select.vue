<template>
  <el-form-item
    :props="formKey"
    :label="label"
    :label-width="labelWidth"
    :required="required"
    :rules="rules"
    :isShowErrorMessage="isShowErrorMessage"
  >
    <el-select
      v-model="itemValue"
      :multiple="config?.multiple || false"
      :collapse-tags-tooltip="config?.collapseTagsTooltip || false"
      :collapse-tags="config?.collapseTags || false"
      placeholder="请选择"
      @change="handleChangeValue"
      @remove-tag="handleGetDeleteTags"
      value-key="value"
    >
      <template v-if="config?.options && config.options.length > 0">
        <el-option v-for="item in config?.options" :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </el-select>
  </el-form-item>
</template>

<script setup lang="ts">
import { reactive, toRefs, onMounted, watch, watchEffect } from 'vue'
import { ElSelect, ElOption, FormItemRule, ElFormItem } from 'element-plus'
import { ItemValue } from '../../create-form/types'
// 因版本问题,虽然不报错，但是并不能继承，先占位,版本修复问题后解决
import { selectConfigInterface, commonConfig } from './types'

// export interface selectProps extends , commonConfig {
//   d?: number
// }
interface selectProps {
  curIndex: number
  formKey: string
  defaultValue?: string | number | boolean | object
  label: string
  labelWidth: number
  required: boolean
  rules: FormItemRule | FormItemRule[]
  isShowErrorMessage: boolean
  config: {
    collapseTags?: boolean
    collapseTagsTooltip?: boolean
    multiple?: boolean
    options: Array<{
      label: string
      value: string | number
    }>
  }
}

interface DataProps {
  itemValue: string | number | boolean | object
}
const props = withDefaults(defineProps<selectProps>(), {
  defaultValue: '',
  collapseTagsTooltip: false,
  multiple: false,
  config: () => {
    return {
      collapseTags: false,
      collapseTagsTooltip: false,
      multiple: false,
      options: []
    }
  }
})
const handleGetDeleteTags = (val: any) => {
  console.log(val, 'sdfsfsf')
  emits('getDeleteValue', {
    formKey: props.formKey,
    value: val,
    curIndex: props.curIndex
  })
}
const emits = defineEmits<{
  (e: 'getValue', data: ItemValue): void
  (e: `getDeleteValue`, data: ItemValue): void
}>()

onMounted(() => {
  // console.log(props.defaultValue, 'select props.defaultValue')
  state.itemValue = props.defaultValue
})
const handleChangeValue = () => {
  console.log(state.itemValue, '------------select value')
  emits('getValue', {
    formKey: props.formKey,
    value: state.itemValue,
    curIndex: props.curIndex
  })
}
// watch(
//   () => props.defaultValue,
//   cur => {
//     console.log('select', cur)
//     state.itemValue = cur
//   },
//   { immediate: true }
// )
// watchEffect(() => {
//   state.itemValue = props.defaultValue
// })
let state = reactive<DataProps>({ itemValue: '' })
let { config, formKey, label, labelWidth, required, rules, isShowErrorMessage } = toRefs(props)
let { itemValue } = toRefs(state)
</script>
<style lang="scss" scoped></style>
