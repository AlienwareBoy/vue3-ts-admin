<template>
  <BaseLayout>
    <div style="margin: 20px 20px 0px 20px">
      <createForm :config="quantityConfig" :btns="quantityBtns"></createForm>
      <commonTable :data="[]" :columns="quantityColumns" style="margin-top: 20px"></commonTable>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import BaseLayout from '@/components/layout/index.vue'
import createForm from '@/components/create-form/index.vue'
import commonTable from '@/components/common-table/index.vue'
import { btnsConfigItem, createFormItem } from '@/components/create-form/types'
import { tablePropsItem } from '@/components/common-table/types'
interface DataProps {
  quantityColumns: tablePropsItem[]
  quantityConfig: createFormItem[]
  quantityBtns: btnsConfigItem[]
}
let state = reactive<DataProps>({
  quantityColumns: [
    {
      label: 'ID',
      columnKey: 'selectionKey'
    },
    {
      label: '任务',
      columnKey: 'locName'
    },
    {
      label: '计划开始',
      columnKey: 'process'
    },
    {
      label: '计划结束',
      columnKey: 'process'
    },
    { label: '单位', columnKey: 'startDate' },
    { label: '数量', columnKey: 'endDate' }
  ],
  quantityBtns: [
    {
      label: '查询',
      eventName: 'create',
      span: 7,
      offset: 1,
      type: 'primary'
    },
    {
      label: '重置',
      eventName: 'reset',
      span: 7,
      offset: 1,
      type: 'primary'
    },
    {
      label: '导出',
      eventName: 'reset',
      span: 7,
      offset: 1,
      type: 'primary'
    }
  ],
  quantityConfig: [
    {
      type: 'select',
      formKey: 'modelId',
      span: 6,
      config: {
        options: []
      },
      label: '模型列表'
    },
    {
      type: 'time-select',
      formKey: 'planStart',
      span: 6,
      offset: 1,
      config: {
        itemType: 'datetimerange'
      },
      label: '计划开始'
    },
    {
      type: 'time-select',
      formKey: 'planEnd',
      span: 6,
      offset: 1,
      config: {
        itemType: 'datetimerange'
      },
      label: '计划结束'
    }
  ]
})
let { quantityConfig, quantityBtns, quantityColumns } = toRefs(state)
</script>
<style lang="scss" scoped>
// @import './index.scss';
</style>
\
