<template>
  <el-table
    ref="commonTableRefs"
    :data="data"
    :style="{
      width: width
    }"
    :max-height="maxHeight"
    border
    stripe
    @select-all="selectAll"
    @expand-change="handleExpandChange"
  >
    <template v-for="header in columns" :key="header.columnKey">
      <el-table-column
        v-if="header.type === 'selection'"
        :fixed="header.fixed || false"
        type="selection"
        :width="header.width ? header.width : 60"
      ></el-table-column>
      <el-table-column
        v-else-if="header.type === 'index'"
        :fixed="header.fixed || false"
        type="index"
        :width="header.width ? header.width : 60"
      ></el-table-column>
      <el-table-column
        v-else-if="header.type === 'expand'"
        :fixed="header.fixed || false"
        type="expand"
        :width="header.width ? header.width : 60"
      >
        <template #default="scope">
          <slot :name="header.columnKey" :data="scope.row" :index="scope.$index"></slot>
        </template>
      </el-table-column>
      <el-table-column :fixed="header.fixed || false" :width="header.width" align="center" v-else>
        <template v-slot:header>
          <div>
            <p>{{ header.label }}</p>
          </div>
        </template>
        <template #default="scope">
          <p v-if="header.isScope"><slot :name="header.columnKey" :data="scope.row"></slot></p>
          <template v-else-if="isUseTooltip(scope.row[header.columnKey], header?.minTooltipNum || 20)">
            <el-tooltip class="box-item" effect="dark" :content="scope.row[header.columnKey]" placement="top">
              <p style="cursor: pointer">{{ scope.row[header.columnKey].slice(0, 5) }}...</p>
            </el-tooltip>
          </template>
          <p v-else>{{ scope.row[header.columnKey] }}</p>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue'
import { ElTable, ElTableColumn, ElTooltip } from 'element-plus'
import type { ElTable as commonTableType } from 'element-plus'
import { tablePropsItem } from './types'
const commonTableRefs = ref<InstanceType<typeof commonTableType>>()
const emits = defineEmits<{
  (e: 'selectAll', data: unknown[]): unknown[]
  (e: 'expand-change', data: any, params: any): void
}>()
interface tableProps {
  width?: string
  columns: tablePropsItem[]
  data: Record<string, string | number | object>[]
  maxHeight?: number
}
const props = withDefaults(defineProps<tableProps>(), {
  maxHeight: 200,
  columns: () => [],
  data: () => [],
  width: '100%'
})
const selectAll = (selection: unknown[]) => {
  const list = [...selection]
  console.log(selection, '-------state----------')
  // commonTableRefs.value!.toggleRowSelection(selection[0], false)
  if (selection.length > 0) {
    list.forEach(item => {
      commonTableRefs.value?.setCurrentRow(item)
    })
    console.log(1)
    emits('selectAll', list)
  }
}
const isUseTooltip = (text: string, minTooltipNum: number) => {
  const len = text.length
  if (len >= minTooltipNum) {
    return true
  } else {
    return false
  }
}
const getSelectionRow = () => {
  return commonTableRefs.value?.getSelectionRows()
}
const handleExpandChange = (row: any, params: any) => {
  emits('expand-change', row, params)
}
let { columns, data, width, maxHeight } = toRefs(props)
defineExpose({
  getSelectionRow
})
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
