import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import '@/assets/styles/common.less'
// svg 图片组件全局注册
import SvgIcon from '@/components/svgIcon.vue' // SvgIcon组件
import './icons/index.js'
// 引入 Element Plus 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('svg-icon', SvgIcon) // <svg-icon icon-class="phone" class="phone" /> 组件中直接使用
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
