<template>
  <div class="historyList">
    <div class="menu-fold" @click="handleFoldMenu">
      <i :class="['iconfont', store.sliderStatus ? 'icon-zhedie1' : 'icon-zhedie2']"></i>
    </div>
    <div class="routerList" v-if="routeList.length > 0">
      <template v-for="(item, index) in routeList" :key="item.path">
        <div class="history-item" @click="handlerPathJump(item)">
          <span>{{ item.menuTitle }}</span>
          <i
            class="iconfont icon-guanbishixin"
            style="margin-left: 10px"
            @click.stop="handlerClickClose(index)"
            v-if="currActive !== item.path"
          ></i>
        </div>
      </template>
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
import storage from '@/utils/storage'
import userAdminConfig from '@/store/config'
const store = userAdminConfig()
const route = useRoute()
const router = useRouter()
const HISTORY_LIST = 'HISTORY_LIST'
interface historyItem {
  menuTitle: string
  path: string
}
interface DataProps {
  currActive: string
  routeList: historyItem[]
}

let state = reactive<DataProps>({ currActive: '', routeList: [] })
watch(
  () => route.path,
  (pre, cur) => {
    state.currActive = pre
    let list = (storage.get(HISTORY_LIST) as historyItem[]) || []
    let isSamePath = list.map(item => item.path).indexOf(route.path)
    if (isSamePath === -1) {
      let title = route.meta.v2 ? (route.meta.title as string) : (route.meta.menuTitle as string)
      let item: historyItem = {
        menuTitle: title,
        path: pre
      }
      list.push(item)
      state.routeList.push(item)
      storage.set(HISTORY_LIST, list)
    }
  },
  { immediate: true }
)
const init = () => {
  let list = storage.get(HISTORY_LIST)

  if (!list) {
    state.routeList = []
  } else {
    state.routeList = list as historyItem[]
  }
}
const handleFoldMenu = () => {
  store.setSliderStatus(!store.isShowSlider)
}
onMounted(() => {
  init()
})
const handlerClickClose = (index: number) => {
  if (state.routeList.length === 1) return
  state.routeList.splice(index, 1)
  storage.set(HISTORY_LIST, state.routeList)
}
const handlerPathJump = (item: historyItem) => {
  if (route.path === item.path) return
  state.currActive = item.menuTitle
  router.replace({
    path: item.path
  })
}
const { currActive, routeList } = toRefs(state)
</script>
<style lang="scss" scoped>
.historyList {
  border-bottom: 1px solid #e8e8e8;
  background: #ffffff;
  box-shadow: 2px 0px 10px 0px rgba(67, 133, 245, 0.15);
  border-radius: 2px;
  display: flex;
}
.active {
  border: 1px solid #000000;
}
.el-button:active {
  color: #000000;
}
.el-button:focus,
.el-button:hover {
  background-color: #fafafa;
}
.menu-fold {
  cursor: pointer;
  margin-right: 30px;
  border-right: 1px solid #ccc;
  padding: 10px;
  height: 100%;
}
.routerList {
  display: flex;
  justify-items: flex-start;
  align-items: center;
  width: 900px;
  overflow-x: scroll;
  // overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 4px !important;
    background: #ccc;
  }
}
.history-item {
  background: #0e2045;
  color: #fff;
  font-size: 4px;
  border-radius: 10px;
  padding: 0px 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 24px;
  span {
    white-space: nowrap;
  }
  cursor: pointer;
  i {
    font-size: 14px;
  }
}
</style>
