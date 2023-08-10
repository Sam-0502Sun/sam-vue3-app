import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/components/svgIcon.vue' // SvgIcon组件
import './icons/index.js'

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(store)
app.use(router)
app.mount('#app')
