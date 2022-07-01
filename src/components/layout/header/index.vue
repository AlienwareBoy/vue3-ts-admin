<template>
  <div class="bim-header">
    <div class="bim-header-left f-c-center">
      <p>管理后台</p>
    </div>
    <p style="color: #fff">{{ proInfo.projectName }}</p>
    <div class="bim-header-right f-c-center">
      <i class="iconfont icon-yonghu" @click="jumpUserInfo"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { onMounted, reactive, toRaw, toRefs } from 'vue'
import storage from '@/utils/storage'
interface projectItem {
  projectName: string
  createTime: string
  id: string
}
interface DataProps {
  proInfo: projectItem | {}
}
const emits = defineEmits<{
  (e: 'change'): void
}>()
const jumpUserInfo = () => {
  emits('change')
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
