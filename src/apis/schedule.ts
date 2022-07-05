import request from '../utils/request/index'
// // 查询资源信息
export function getAllSchedule(PId: string) {
  return request.get(`/schedule/schedule-summary/${PId}`)
}
// 查询构件列表
export function getComponentList<T>(params: T) {
  return request.get(`/design-project-object/list`, { params })
}
// 查询分区
export function getWorkSqure<T>(params: T) {
  return request.get(`/work-sequence-region/list`, { params })
}
