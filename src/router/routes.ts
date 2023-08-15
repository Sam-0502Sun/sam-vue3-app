// 对外暴露配置路由
import Login from '@/views/login/index.vue'
import Layout from '@/views/Layout.vue'
import Home from '@/views/home/index.vue'
import NoData from '@/views/404/index.vue'
import Manage from '@/views/mangement/index.vue'
import UserManage from '@/views/mangement/userManagement/user-management.vue'
import AuthorityManage from '@/views/mangement/authorityManagement/authority-management.vue'
import MenuManage from '@/views/mangement/menuManagement/menu-management.vue'
import DataInfo from '@/views/dataInfo/index.vue'

export const constantRoute = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: '登录', hidden: true, icon: 'Odometer' }
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: { title: 'Layout', hidden: true },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '首页', hidden: false, icon: 'HomeFilled' } // hidden-->菜单权限，是否隐藏菜单, icon-->菜单图标
      },
      {
        path: '/404',
        name: 'NoData',
        component: NoData,
        meta: { title: '404', hidden: true }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'Any',
        redirect: '/404',
        meta: { title: '任意路由', hidden: true }
      },
      {
        path: '/manage',
        name: 'Management',
        component: Manage,
        meta: { title: '管理页面', hidden: false, icon: 'Monitor' },
        children: [
          {
            path: '/manage/userManagement',
            name: 'UserManage',
            component: UserManage,
            meta: { title: '用户管理', hidden: false, icon: 'UserFilled' }
          },
          {
            path: '/manage/authorityManagement',
            name: 'AuthorityManage',
            component: AuthorityManage,
            meta: { title: '权限管理', hidden: false, icon: 'Briefcase' }
          },
          {
            path: '/manage/menuManagement',
            name: 'MenuManage',
            component: MenuManage,
            meta: { title: '菜单管理', hidden: false, icon: 'ScaleToOriginal' }
          }
        ]
      }
      // {
      //   path: '/manage',
      //   name: 'Management',
      //   component: Manage,
      //   meta: { title: '商品管理', hidden: false, icon: 'Monitor' },
      //   children: [
      //     {
      //       path: '/manage/userManagement',
      //       name: 'UserManage',
      //       component: UserManage,
      //       meta: { title: '用户管理', hidden: false, icon: 'UserFilled' }
      //     },
      //     {
      //       path: '/manage/authorityManagement',
      //       name: 'AuthorityManage',
      //       component: AuthorityManage,
      //       meta: { title: '权限管理', hidden: false, icon: 'Briefcase' }
      //     },
      //     {
      //       path: '/manage/menuManagement',
      //       name: 'MenuManage',
      //       component: MenuManage,
      //       meta: { title: '菜单管理', hidden: false, icon: 'ScaleToOriginal' }
      //     }
      //   ]
      // }
    ]
  },
  {
    path: '/dataInfo',
    name: 'DataInfo',
    component: DataInfo,
    meta: { title: '数据大屏', hidden: false, icon: 'TrendCharts' }
  }
]
