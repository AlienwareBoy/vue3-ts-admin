import request from '../utils/request/index'

// // 获取验证码
export function getvCode() {
  return request.get('/captcha')
}
// 登录账户
interface signInBody {
  usernameEmail: string
  password: string
  usertype: number
  vCode: string
  vCodeId: string
}
// 登录用户
export function signIn(data: signInBody) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 获取天气
export function getWeather<T>(params: T) {
  return request({
    url: '/weather/weatherInfo',
    method: 'get',
    params
  })
}
// 获取当前用户参与的项目列表
export function getProjectList<T>(params: T) {
  return request({
    url: '/project/list',
    method: 'get',
    params
  })
}
// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
// 获取当前用户所在项目设计模型列表
export function getProjectModelList<T>(params: T) {
  return request({
    url: '/design-project/list',
    method: 'get',
    params
  })
}

// 获取当前用户所在项目
export function setProject<T>(data: T) {
  return request({
    url: '/designer-project/new',
    method: 'post',
    data
  })
}

// 获取资源信息
export function getResourcesUrl<T>(params: T) {
  console.log(params, '-params')
  return request({
    url: '/resources/list',
    method: 'get',
    params
  })
}
interface tew {
  DpId: string
}
export function getCurProModetil(params: tew) {
  return request({
    url: '/designer-project-object/list',
    method: 'get',
    params
  })
}
interface zz {
  PId: string
}
export function getRegion(params: zz) {
  return request({
    url: '/work-sequence-region/list',
    method: 'get',
    params
  })
}
