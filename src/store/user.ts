import { defineStore } from 'pinia'
// import projectRoutes from '@/router/projectRoutes'
import routes from '../router/routes'
import { RouteRecordRaw } from 'vue-router'
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
      console.log(1)
    }
  }
})
export default useUserAuth
