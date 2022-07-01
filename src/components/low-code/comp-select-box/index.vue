<!--  -->
<template>
  <p>请拖拽组件</p>
  <div class="select-box">
    <div class="comp-item" draggable="true" v-for="item in compList" :key="item.label" @dragstart="handleDragStart($event, item)">
      <img :src="item.img" alt="" />
      <p>{{ item.label }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createFormItem } from '../components/filter-config/types'
import { reactive, toRefs } from 'vue'
import { lowCodeCompItem } from '../types'
import { targetType } from '../config-box/consts'
import { selectConfig } from './consts'
interface DataProps {
  compList: lowCodeCompItem[]
}

const state = reactive<DataProps>({
  compList: selectConfig
})
const handleDragStart = (ev: DragEvent, item: lowCodeCompItem) => {
  console.log('开始拖拽')
  ev.dataTransfer &&
    ev.dataTransfer.setData(
      'target',
      JSON.stringify({
        default: { ...item.defalutConfig, formKey: Math.random().toString(36).substr(2) },
        config: item.config
      })
    )
}
const { compList } = toRefs(state)
</script>
<style lang="scss" scoped>
.select-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;
  .comp-item {
    padding: 10px 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    p {
      font-size: 14px;
      color: #000;
      margin-left: 8px;
    }
    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }
}
</style>
