<template>
  <div class="layoutFixex">
    <el-container style="height: 100%" direction="vertical">
      <Header @onEditUserInfo="handleOpenUserModal" @change="handleSignOut"></Header>
      <el-container direction="horizontal">
        <Slider :isShow="store.sliderStatus" />
        <el-main class="container-main" :style="store.sliderStatus ? '' : 'margin-left:0px'">
          <div>
            <keep-alive>
              <RouteHistory />
            </keep-alive>
            <transition name="fade" mode="out-in" :duration="3000">
              <div id="main-content-box" class="main-content-box">
                <template v-if="isMenu">
                  <slot></slot>
                </template>
                <template v-else>
                  <router-view v-slot="{ Component, route }">
                    <keep-alive :include="route.meta.name || route.meta.menuTitle" :key="route.name ? route.path : undefined">
                      <component :is="Component" />
                    </keep-alive>
                  </router-view>
                </template>
              </div>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from './header/header.vue'
import Slider from './slider/index.vue'
import RouteHistory from './route-history.vue'
import { onMounted, ref } from 'vue'
import { ElContainer, ElMain } from 'element-plus'
import { useRoute } from 'vue-router'
import userAdminConfig from '@/store/config'
import useUserAuth from '@/store/user'
import { getUserInfo } from '@/apis/common'

const store = userAdminConfig()
const route = useRoute()
const userStore = useUserAuth()
const isMenu = ref(route.meta.isMenu)
let handleOpenUserModal = () => {
  console.log('打开modal')
}
let handleSignOut = () => {
  console.log('我被弹出')
}
const init = () => {
  getUserInfo().then(res => {
    // console.log(res)
    const { data } = res
    userStore.setUserInfo(data)
  })
}
onMounted(() => {
  init()
})
</script>
<style lang="scss" scoped>
.el-header {
  padding: 0px;
  height: 80px;
}
.layoutFixex {
  /* position: fixed;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px; */
}
:deep(.el-main) {
  padding: 0px;
}
.menu-slider {
  position: absolute;
  width: 200px;
  height: 100%;
  left: 0px;
  top: 80px;
}
.content-main {
  margin-left: 200px;
  padding-top: 100px;
}
.container-main {
  position: relative;
  /* background: #fff; */
  transition: all 0.5s ease;
  margin-left: 200px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.main-content-box {
  position: relative;
  height: calc(100vh - 90px);
  top: 0px;
  left: 0px;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}
// .modal-fade-enter-active,
// .modal-fade-leave-active {
//   transition: all 0.5s ease;
//   transform: translateY(0);
// }

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
</style>
