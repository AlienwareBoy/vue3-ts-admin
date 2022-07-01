import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/reset.css' // 初始化浏览器
import './assets/common.scss'
import 'element-plus/dist/index.css'
createApp(App).use(createPinia()).use(router).mount('#app')
