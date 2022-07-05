<template>
  <div class="bim-header">
    <div class="bim-header-left f-c-center" @click="jumpToProList">
      <p>后台系统</p>
    </div>
    <p style="color: #fff">{{ proInfo.projectName }}</p>
    <div class="bim-header-right f-c-center">
      <i class="iconfont icon-lingsheng" @click="jumpToMessage"></i>
      <el-dropdown trigger="click" @command="handleCommand">
        <i class="iconfont icon-zhongyingwen"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh_CN">简体中文</el-dropdown-item>
            <el-dropdown-item command="zh_TW">繁体中文</el-dropdown-item>
            <el-dropdown-item command="en">英文</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <i class="iconfont icon-yonghu" @click="jumpUserInfo"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { onMounted, reactive, toRaw, toRefs } from 'vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import userAdminConfig from '@/store/config'
import storage from '@/utils/storage'
const store = userAdminConfig()
interface DataProps {
  proInfo: any
}
const emits = defineEmits<{
  (e: 'change'): void
}>()
const jumpUserInfo = () => {
  console.log('干嘛士大夫')
  defineEmits({
    change: () => {
      return {
        num: 3
      }
    }
  })
}
const handleCommand = (params: string) => {
  store.setAdminLanguage(params)
}
const jumpToProList = () => {
  storage.remove('proInfo')
  router.push({ name: 'projectList' })
}
const jumpToMessage = () => {
  router.push({ name: 'messageList' })
}
onMounted(() => {
  if (storage.get('proInfo')) {
    state.proInfo = storage.get('proInfo')
  }
})
let state = reactive<DataProps>({ proInfo: {} })
const { proInfo } = toRefs(state)
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
