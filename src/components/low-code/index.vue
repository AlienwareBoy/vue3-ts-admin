<template>
  <div class="low-container">
    <div class="low-common" style="flex: 2">
      <CompSelectBox />
    </div>
    <div class="low-common" style="flex: 4; border: 1px solid red" @drop="handleDrop($event)" @dragover="dragover">
      <PreviewBox v-model:addConfig="defalutConfig" @choiceCompType="handleGetCompType" v-if="defalutConfig" />
    </div>
    <div class="low-common" style="flex: 2">
      <ConfigBox
        v-model:compFilterConfig="compFilterConfig"
        :curiClickndex="curClickIndex"
        @updateData="handleUpdatePreviewAttr"
        v-if="compFilterConfig.length > 0"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import CompSelectBox from './comp-select-box/index.vue'
import ConfigBox from './config-box/index.vue'
import { commonKeyObj, targetComp, targetType } from './config-box/consts'
import PreviewBox from './preview-box/index.vue'
import { preConfig } from './preview-box/consts'
import { createFormItem } from './components/filter-config/types'
import { dragInterface } from './comp-select-box/consts'
interface DataProps {
  curClickIndex: number
  compFilterConfig: createFormItem[]
  defalutConfig: createFormItem | null
  tagetConfigType: targetType | null
}
const state = reactive<DataProps>({ compFilterConfig: [], curClickIndex: 0, defalutConfig: null, tagetConfigType: null })
const handleDrop = (ev: DragEvent) => {
  const data: targetType = (ev.dataTransfer && ev.dataTransfer.getData('target')) as targetType
  const targetData = JSON.parse(data) as dragInterface
  state.defalutConfig = targetData.default
  state.compFilterConfig = targetData.config
  console.log('松手', targetData)

  // state.curCompType = data
  // initConfig()
}
const dragover = (ev: DragEvent) => {
  ev.preventDefault()
}
const handleUpdatePreviewAttr = params => {
  console.log(params, '----params')
}
const handleGetCompType = (params: any) => {
  console.log('----选择组件后回调-', params)
  const { type, index } = params
  state.tagetConfigType = type
  state.curClickIndex = index
}
const { compFilterConfig, defalutConfig, curClickIndex, tagetConfigType } = toRefs(state)
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
