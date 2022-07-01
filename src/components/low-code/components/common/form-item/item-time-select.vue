<template>
  <el-date-picker value-format="YYYY-MM-DD HH:mm:ss" v-model="value" :type="config?.itemType || 'datetimerange'" @change="getValue" />
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { ElDatePicker } from 'element-plus'
import { ItemValue } from '../../create-form/types'
import { IDatePickerType } from 'element-plus/lib/components/date-picker/src/date-picker.type'
// import { timeSelectInterface, commonConfig } from './types'

// 因版本问题，无法直接引入，先占位,版本修复问题后解决
interface timeSelectProps {
  curIndex: number
  formKey: string
  defaultValue: string
  config?: {
    itemType?: IDatePickerType
  }
}
interface DataProps {
  value: string
}
const emit = defineEmits<{
  (e: 'getValue', data: ItemValue): void
}>()

const props = withDefaults(defineProps<timeSelectProps>(), {
  formKey: '',
  defaultValue: '',
  config: () => {
    return {
      itemType: 'text'
    }
  }
})
const getValue = (params: any) => {
  console.log(params, 'sfsdf')
  emit('getValue', {
    formKey: props.formKey,
    value: value,
    curIndex: props.curIndex
  })
}
let state = reactive<DataProps>({ value: '' })
const { value } = toRefs(state)
const { config } = toRefs(props)
</script>
<style lang="scss" scoped></style>
