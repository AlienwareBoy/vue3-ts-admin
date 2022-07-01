import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { ElMessage } from 'element-plus'
const SECRET: string = process.env.VUE_APP_SECRET!

const baseURL = process.env.VUE_APP_URL
const request = axios.create({
  baseURL,
  headers: {
    TID: SECRET
  }
})

function resolve(res: any) {
  const { data } = res
  if (data.statusCode === 200) {
    return Promise.resolve(data)
  } else if (data.statusCode === 500) {
    ElMessage.error(data.errors)
    return Promise.resolve(data)
  }
}
function reject(err: any) {
  return Promise.reject(err)
}
// 添加请求拦截器
request.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const auth = await sessionStorage.getItem('auth')!
    const TID = process.env.VUE_APP_SECRET as string
    const headers = config.headers as AxiosRequestHeaders
    headers.Authorization = 'Bearer ' + auth
    headers.TID = TID
    return {
      ...config,
      headers
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(resolve, reject)

export default request
