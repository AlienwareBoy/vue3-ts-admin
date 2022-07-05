import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.scss'
import './assets/reset.css' // 初始化浏览器
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import directives from '@/utils/directive/index'

const app = createApp(App)
app.use(directives).use(createPinia()).use(router).mount('#app')
