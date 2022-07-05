<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import userAdminConfig from '@/store/config'
import { watch } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import zhTW from 'element-plus/lib/locale/lang/zh-tw'
import en from 'element-plus/lib/locale/lang/en'
import { toRefs, reactive, ref } from 'vue'
const store = userAdminConfig()
const locale = ref(zhCn)
watch(
  () => store.defalutLocalLanguage,
  cur => {
    if (cur === 'zh_CN') {
      locale.value = zhCn
    }
    if (cur === 'zh_TW') {
      locale.value = zhTW
    }
    if (cur === 'en') {
      locale.value = en
    }
    console.log(locale, 'sdf')
  },
  { deep: true }
)
</script>
<style lang="scss" scoped></style>
