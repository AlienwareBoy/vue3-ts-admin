import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    menuTitle?: string // 组件名称
    isMenu?: boolean // 判断是否一级菜单
    v2?: boolean // 判断是否二级目录
    keepAlive?: boolean // 是否对页面进行缓存
    title?: string // 二级目录菜单名称
    isShowRoute?: boolean //是否显示在slider 默认显示
  }
}
