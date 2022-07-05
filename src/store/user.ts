import { defineStore } from 'pinia'
// import projectRoutes from '@/router/projectRoutes'
import routes from '../router/routes'
import { RouteRecordRaw } from 'vue-router'
import { signIn } from '@/apis/common'
import { formProps } from '@/views/login/types'
import storage from '@/utils/storage'
interface userInfoProps {
  createtime: string
  email: string
  group: string
  username: string
  auth: string
}

interface userStoreProps {
  userInfo: userInfoProps
  routes: RouteRecordRaw[]
}
const useUserAuth = defineStore('auth', {
  // arrow function recommended for full type inference
  state: (): userStoreProps => {
    return {
      userInfo: {
        createtime: '',
        email: '',
        auth: '',
        group: '',
        username: ''
      },
      // all these properties will have their type inferred automatically
      routes: routes
    }
  },
  actions: {
    setUserInfo(payload: userInfoProps) {
      console.info(payload, '存放用户信息')
      this.userInfo = payload
    },
    login(form: formProps) {
      return new Promise((resolve, reject) => {
        signIn(form)
          .then(res => {
            const { data } = res
            this.setUserInfo({ ...data.info, auth: data.auth })
            storage.set('auth', data.auth)
            resolve(data)
          })
          .catch(err => {
            reject(false)
          })
      })
    }
  }
})
export default useUserAuth
