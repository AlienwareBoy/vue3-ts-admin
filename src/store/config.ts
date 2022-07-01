import { defineStore } from 'pinia'
interface adminProps {
  defalutLocalLanguage: string //默认本地语言环境
  isPadding: boolean
  isShowSlider: boolean
}
const userAdminConfig = defineStore('config', {
  state: (): adminProps => {
    return {
      defalutLocalLanguage: 'zh_TW',
      isPadding: true,
      isShowSlider: true
    }
  },
  getters: {
    sliderStatus(state) {
      return state.isShowSlider
    },
    layoutCantainerPadding(state) {
      return state.isPadding
    }
  },
  actions: {
    setAdminLanguage(params: string) {
      this.defalutLocalLanguage = params
    },
    setSliderStatus(status: boolean) {
      this.isShowSlider = status
    },
    setLayoutCantainerPadding(status: boolean) {
      this.isPadding = status
    }
  }
})
export default userAdminConfig
