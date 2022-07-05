import request from '../utils/request/index'
// import qs from 'qs'

// // 创建BCF容器
export function createVersion3_BCF<T>(data: T) {
  return request({
    url: '/bcfe/3.0/projects',
    method: 'post',
    data
  })
}
// BCF容器列表
export function getBCFList(data?: any) {
  return request({
    url: `/bcfe/3.0/projects/query`,
    method: 'post',
    data
  })
}
// // 创建BCF容器列表
// export function setBCFList(version: string) {
//   return request({
//     url: `/bcfe/3.0/projects`,
//     method: 'post'
//   })
// }
// 创建容器内得问题
export function createBCFQa(projectId: string, data: any) {
  console.log(data, '-------data-------')
  return request({
    url: `/bcfe/3.0/projects/${projectId}/topics`,
    method: 'post',
    data
  })
}
// 获取容器内得问题
export function getBCFQa<T>(data: T) {
  return request({
    url: `/bcfe/3.0/projects/topics/query`,
    method: 'post',
    data
    // paramsSerializer: function (params) {
    //   return qs.stringify(
    //     {
    //       ...params,
    //       DpInfos: params.DpInfos,
    //       Title: params.Title,
    //       ViewPointType: 0
    //     },
    //     { arrayFormat: 'repeat' }
    //   )
    // }
  })
}
// 查询视点
export function getBCFViewPort(params: any) {
  return request({
    url: `/bcfe/3.0/projects/topics/viewpoints`,
    method: 'get',
    params
  })
}
// 创建评论
export function createReview<T>({ projectId = '', topicId = '' }, data: T) {
  return request({
    url: `/bcfe/3.0/projects/${projectId}/topics/${topicId}/comments`,
    method: 'post',
    data
  })
}
// 获取BCF下得评论
export function getTopicksReview<T>(params: T) {
  return request({
    url: `/bcfe/3.0/projects/topics/comments`,
    method: 'get',
    params
  })
}
// 删除评论
export function deleteBCFReview({ projectId = '', topicId = '', commentId = '' }) {
  return request({
    url: `/bcfe/3.0/projects/${projectId}/topics/${topicId}/comments/${commentId}`,
    method: 'delete'
  })
}
