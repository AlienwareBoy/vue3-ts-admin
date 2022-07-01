<template>
  <el-color-picker v-model="itemValue" @change="getValue" :show-alpha="config.showAlpha"></el-color-picker>
</template>

<script setup lang="ts">
import { onMounted, reactive, toRefs, watch } from 'vue'
import { ElColorPicker } from 'element-plus'
import { exportValue } from './types'

interface InputProps {
  curIndex: number
  formKey: string
  defaultValue: string
  config?: {
    showAlpha?: boolean
  }
}
const props = withDefaults(defineProps<InputProps>(), {
  curIndex: 0,
  formKey: '',
  defaultValue: '',
  config: () => {
    return {
      showAlpha: false
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
const getValue = (value: string) => {
  console.info('颜色变更', {
    formKey: props.formKey,
    value: value,
    curIndex: props.curIndex
  })
  emit('getValue', {
    formKey: props.formKey,
    value: value,
    curIndex: props.curIndex
  })
}
watch(
  () => props.defaultValue,
  cur => {
    console.log('变更', cur)
    state.itemValue = cur
  }
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
let { config } = toRefs(props)
</script>
<style lang="scss">
:deep(.el-color-picker__trigger) {
  box-sizing: content-box !important;
}
</style>
