import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// 引入进度条插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from '@/setting'
import store from '@/store'

// 消除加载转圈图标
NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior () {
    return {
      left: 0,
      top: 0
    }
  }
})

// 全局守卫： 项目中任意路由切换都会触发的钩子函数
// 全局的前置路由守卫
router.beforeEach((to: any, from: any, next: any) => {
  // 访问路由前会触发 to:将要访问哪个路由 from: 从哪个路由来 next：路由的放行函数
  // NProgress 进度条开启
  NProgress.start()
  // 网页表头显示文字修改, setting文件中设置了一些内容，直接模板字符串使用
  document.title = `${setting.title} - ${to.meta.title}`
  if (store.state.user.token) {
    //  用户已登录
    if (to.path === '/login') {
      return next({ path: '/' })
    } else {
      return next()
    }
  } else {
    // 用户未登录
    if (to.path === '/login') {
      return next()
    } else {
      return next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
// 全局的后置守卫
router.afterEach((to: any, from: any) => {
  // 访问路由后会触发
  // NProgress 进度条关闭
  NProgress.done()
})

// 暴露router
export default router
