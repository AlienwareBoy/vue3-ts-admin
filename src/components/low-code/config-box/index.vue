<template>
  <div style="padding: 20px">
    <div v-if="list.length > 0">
      <p class="basic-field">基础属性</p>
      <filter-config v-model:config="list" v-bind="{ ...$attrs }" @updateData="handleGetConfigInfo" v-if="list.length > 0"></filter-config>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref, watch, onMounted } from 'vue'
import { createFormItem, btnsConfigItem, itemMap } from './types'
import type { FormInstance } from 'element-plus'
import { FormRules } from 'element-plus'
import { targetComp, targetType } from './consts'
import filterConfig from '../components/filter-config/index.vue'
const ruleFormRef = ref<FormInstance>()
interface DataProps {
  list: createFormItem[]
  modelForm: {
    [formProps: string]: any
  }
}
interface createFormProps {
  curiClickndex: number
  compFilterConfig: createFormItem[]
  btns?: btnsConfigItem[]
  rules?: FormRules
}
const props = withDefaults(defineProps<createFormProps>(), {
  curiClickndex: 0,
  compFilterConfig: () => [],
  btns: () => []
})
const handleGetConfigInfo = params => {
  console.log(params, '配置信息')
}
const init = () => {
  console.log('初始化配置盒', props.compFilterConfig)
  let arr = props.compFilterConfig
  // arr.forEach(item => {
  //   if (!item.comp) {
  //     let result = itemMap.get(item.type)
  //     item.comp = result
  //   }
  //   state.modelForm[item.formKey] = item.defaultValue || ''
  // })
  state.list = arr
}
// watch(
//   () => props.compFilterConfig,
//   cur => {
//     if (cur.length > 0) {
//       init()
//     }
//   },
//   { deep: true }
// )
onMounted(() => init())
let state = reactive<DataProps>({ list: [], modelForm: {} })
let { btns, rules } = toRefs(props)
let { list, modelForm } = toRefs(state)
defineExpose({
  init
})
</script>
<style lang="scss" scoped>
:deep(.el-form--label-left .el-form-item__label) {
  font-size: 8px;
  white-space: nowrap;
}
.createBtn {
  text-align: center;
  width: 100%;
}
.basic-field {
  font-size: 14px;
  text-align: left;
}
</style>
