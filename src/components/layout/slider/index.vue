<template>
  <div style="position: relative">
    <el-aside width="200px" class="aside-capacity" :style="isShow ? 'left:0px' : 'left:-200px'">
      <div class="admin-slider">
        <div>
          <el-menu
            background-color="#0e2045"
            text-color="#fff"
            active-text-color="#163473"
            menu-trigger="click"
            :default-active="defaultActive"
            unique-opened
            router
          >
            <template v-for="navMenu in routes">
              <template v-if="navMenu.children">
                <ElSubMenu :data="navMenu" :index="navMenu.name" :key="navMenu.path">
                  <template #title>
                    <i class="el-icon-location"></i>
                    <span v-if="navMenu.meta"> {{ navMenu.meta.menuTitle }}</span>
                  </template>
                  <template v-for="route in navMenu.children" :key="route.path">
                    <template v-if="route.meta && !route.meta.isHidenRoute">
                      <el-menu-item :index="navMenu.path + '/' + route.path">
                        <span>{{ route.meta.title }}</span>
                      </el-menu-item>
                    </template>
                  </template>
                </ElSubMenu>
              </template>
              <template v-else-if="navMenu.meta && !navMenu.meta.isHidenRoute">
                <el-menu-item :index="navMenu.path" :key="navMenu.path">
                  {{ navMenu.meta.menuTitle }}
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </div>
      </div>
    </el-aside>
    <!-- <div class="project-capacity">
      <p class="project-size">项目容量</p>
      <div class="capacity-percentage">
        <div class="percent-num" style="width: 20%"></div>
      </div>
      <p>800MB/10G</p>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { watchEffect, watch, ref, toRefs } from 'vue'
import { ElMenu, ElMenuItem, ElAside, ElSubMenu } from 'element-plus'
import useUserAuth from '@/store/user'
import { useRoute } from 'vue-router'
const { routes } = useUserAuth()
const router = useRoute()
let defaultActive = ref(router.fullPath)
interface SliderProps {
  isShow: boolean
}
watch(
  () => router.path,
  () => {
    defaultActive.value = router.fullPath
  },
  { immediate: true }
)
const props = withDefaults(defineProps<SliderProps>(), {
  isShow: true
})
const { isShow } = toRefs(props)
</script>
<style lang="scss" scoped>
:deep(.is-active) {
  background: var(--main-menu-bg-selected-background);
}
:deep(.el-menu-item.is-active) {
  color: var(--main-slider-text-hover);
}
@import './index.scss';
</style>
