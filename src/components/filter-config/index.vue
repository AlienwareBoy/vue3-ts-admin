<template>
  <el-row v-if="list.length > 0">
    <el-col>
      <el-form ref="ruleFormRef" :model="modelForm" :rules="rules" label-position="left" label-width="70px">
        <el-col
          class="comp-preItem"
          v-for="(item, index) in list"
          :span="item.span"
          :offset="item.offset || 0"
          :key="item.formKey"
          style="width: 100%"
          @click.prevent="handleChoiceComp(index)"
        >
          <img
            class="comp-preItem-close"
            src="../../assets/close.png"
            alt=""
            @click="handleDeleteComp(index)"
            v-if="item.isShowDelete && curIndex === index"
          />
          <!-- <el-form-item :prop="`${item.formKey}`" :label="item.label" :label-width="item.labelWidth || 80" >
            
          </el-form-item> -->
          <component
            :is="item.comp"
            v-bind="{ ...item, defaultValue: item?.defaultValue, config: item.config, curIndex: index, ...$attrs }"
            @getValue="getValue"
          ></component>
        </el-col>
      </el-form>
    </el-col>
    <el-col v-if="btns.length > 0">
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
import { reactive, toRefs, ref, defineEmits, onMounted } from 'vue'
import { createFormItem, btnsConfigItem, ItemValue, itemMap } from './types'
import { ElRow, ElCol, ElForm, ElFormItem, ElButton } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { FormRules } from 'element-plus'
import { targetType } from '../../config-box/consts'

// 目前不支持从.ts文件引入interface
const ruleFormRef = ref<FormInstance>()
interface DataProps {
  curIndex: number | undefined
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
  (e: 'choiceCompType', data: { type: targetType; index: number }): void
}>()
const props = withDefaults(defineProps<createFormProps>(), {
  config: () => [],
  btns: () => []
})
const init = () => {
  console.log('初始化选项', props.config)
  let arr = props.config
  arr.forEach(item => {
    if (!item?.comp) {
      let result = itemMap.get(item.type)
      item.comp = result
    }
    state.modelForm[item.formKey] = item.defaultValue || ''
  })
  state.list = arr
}
const handleDeleteComp = (index: number) => {
  state.list.splice(index, 1)
}
const handleChoiceComp = (index: number) => {
  state.curIndex = index
  console.log('点选组件')
  emit('choiceCompType', {
    type: state.list[index].type as targetType,
    index
  })
}
// 获取表单数据
const getValue = (params: ItemValue) => {
  console.log('sdfsdffdlksjflkasjfalskjf')
  state.modelForm[`${params.formKey}`] = params.value

  // state.modelForm[`${params.formKey}`] = params.value
  emit('updateData', { [params.formKey]: params.value, curIndex: params.curIndex, formKey: params.formKey })
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

let state = reactive<DataProps>({ curIndex: undefined, list: [], modelForm: {} })
let { btns, rules } = toRefs(props)
let { list, modelForm, curIndex } = toRefs(state)
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
.el-form-item {
  margin-bottom: 0px;
}
.createBtn {
  text-align: center;
  width: 100%;
}
.comp-preItem {
  // padding: 2px 17px 2px 8px;
  border-radius: 10px;
  box-sizing: content-box;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  &-close {
    position: absolute;
    width: 15px;
    height: 15px;
    right: -7px;
    top: -5px;
    cursor: pointer;
  }
}
</style>
