<template>
  <el-row v-if="list.length > 0">
    <el-col>
      <el-form ref="ruleFormRef" :model="modelForm" :rules="rules" label-position="left" label-width="70px">
        <el-col v-for="(item, index) in list" :span="item.span" :offset="item.offset || 0" :key="item.formKey" style="width: 100%">
          <el-form-item :prop="`${item.formKey}`" :label="item.label" :label-width="item.labelWidth || 80">
            <component
              :is="item.comp"
              v-bind="{ ...item, defaultValue: item?.defaultValue, config: item.config, curIndex: index, ...$attrs }"
              @getValue="getValue"
            ></component>
          </el-form-item>
        </el-col>
      </el-form>
    </el-col>
    <el-col>
      <el-row>
        <div class="createBtn">
          <el-col
            :pull="item.pull"
            :push="item.push"
            :span="item.span"
            :offset="index !== 0 ? item?.offset : 0"
            v-for="(item, index) in btns"
            :key="item.eventName"
          >
            <el-button :disabled="item.disabled || false" :type="item.type" @click="checkForm(item, ruleFormRef)">{{
              item.label
            }}</el-button>
          </el-col>
        </div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref, defineEmits, watchEffect, onMounted } from 'vue'
import { createFormItem, btnsConfigItem, ItemValue, itemMap } from './types'
import { ElRow, ElCol, ElForm, ElFormItem, ElButton } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { FormRules } from 'element-plus'

// 目前不支持从.ts文件引入interface
const ruleFormRef = ref<FormInstance>()
interface DataProps {
  list: createFormItem[]
  modelForm: {
    [formProps: string]: any
  }
}
interface createFormProps {
  config: createFormItem[]
  btns?: btnsConfigItem[]
  rules?: FormRules
}
const emit = defineEmits<{
  (
    e: 'getForm',
    data: {
      [formProps: string]: string | number | object
    }
  ): void
  (e: 'resetForm'): void
  (e: 'updateData', data: { [formProps: string]: string | number | object; curIndex: number }): void
  (e: string): void
}>()
const props = withDefaults(defineProps<createFormProps>(), {
  config: () => [],
  btns: () => []
})
const init = () => {
  console.log('初始化选项', props.config)
  let arr = props.config
  arr.forEach(item => {
    if (!item.comp) {
      let result = itemMap.get(item.type)
      item.comp = result
    }
    state.modelForm[item.formKey] = item.defaultValue || ''
  })
  state.list = arr
}
// 获取表单数据
const getValue = (params: ItemValue) => {
  console.log(params, 'paramsparamsparamsparamsparams')
  state.modelForm[`${params.formKey}`] = params.value

  // state.modelForm[`${params.formKey}`] = params.value
  emit('updateData', { [params.formKey]: params.value, curIndex: params.curIndex })
  console.log(state.modelForm, 'getForm')
}
const createForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const obj = {}
      for (let item in state.modelForm) {
        console.log(item)
        console.log(state.modelForm)
        if (state.modelForm[item]) {
          obj[item] = state.modelForm[item]
        }
      }
      console.log('submit!', obj)
      emit('getForm', obj)
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = () => {
  if (!ruleFormRef.value) return
  // formEl.resetFields()
  ruleFormRef.value?.resetFields()
  state.list = state.list.map(item => {
    return {
      ...item,
      defaultValue: ''
    }
  })
}
const checkForm = (item: btnsConfigItem, formEl: FormInstance | undefined) => {
  if (item.eventName === 'create') {
    createForm(formEl)
  } else if (item.eventName === 'reset') {
    resetForm()
    emit('resetForm')
  } else {
    emit(`${item.eventName}`)
  }
}

let state = reactive<DataProps>({ list: [], modelForm: {} })
let { btns, rules } = toRefs(props)
let { list, modelForm } = toRefs(state)
onMounted(() => {
  init()
})
defineExpose({
  resetForm,
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
</style>
