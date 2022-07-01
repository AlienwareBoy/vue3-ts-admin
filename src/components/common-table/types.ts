type typeProps = 'selection' | 'index' | 'expand'

export interface tablePropsItem {
  label: string
  columnKey: string
  type?: typeProps //列类型
  isallSection?: boolean
  isSelection?: boolean //是否选中
  width?: number //固定宽
  isScope?: boolean // 自定义显示内容，使用columnKey为具名插槽
  minTooltipNum?: number // 最小显示Tooltip字段
  fixed?: boolean
}
export interface tableDataItem {
  itemKey: string
}
export type initArrInterface = Array<{
  [keyword: string]: unknown
}>
export interface tableRef extends HTMLElement {
  getSelectionRow(): unknown[] | undefined
}
