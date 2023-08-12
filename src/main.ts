import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// svg 图片组件全局注册
import SvgIcon from '@/components/svgIcon.vue' // SvgIcon组件
import './icons/index.js'
// 引入 Element Plus 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
