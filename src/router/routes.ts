// 对外暴露配置路由
import Login from '@/views/login/index.vue'
import Layout from '@/views/Layout.vue'
import Home from '@/views/home/index.vue'
import NoData from '@/views/404/index.vue'
// 权限管理
import Manage from '@/views/mangement/index.vue'
import UserManage from '@/views/mangement/userManagement/user-management.vue'
import AuthorityManage from '@/views/mangement/authorityManagement/authority-management.vue'
import MenuManage from '@/views/mangement/menuManagement/menu-management.vue'
// 商品管理
import Product from '@/views/product/index.vue'
import Trademark from '@/views/product/trademark/trademark.vue'
import Attr from '@/views/product/attr/attr.vue'
import SPU from '@/views/product/spu/spu.vue'
import SKU from '@/views/product/sku/sku.vue'
// 数据大屏
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
    redirect: '/',
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
        redirect: '/manage/userManagement',
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
      },
      {
        path: '/product',
        name: 'Product',
        component: Product,
        meta: { title: '商品管理', hidden: false, icon: 'Goods' },
        redirect: '/product/trademark',
        children: [
          {
            path: '/product/trademark',
            name: 'Trademark',
            component: Trademark,
            meta: { title: '品牌管理', hidden: false, icon: 'ShoppingCartFull' }
          },
          {
            path: '/product/attr',
            name: 'Attr',
            component: Attr,
            meta: { title: '属性管理', hidden: false, icon: 'ChromeFilled' }
          },
          {
            path: '/product/spu',
            name: 'SPU',
            component: SPU,
            meta: { title: 'SPU管理', hidden: false, icon: 'Notification' }
          },
          {
            path: '/product/sku',
            name: 'SKU',
            component: SKU,
            meta: { title: 'SKU管理', hidden: false, icon: 'Discount' }
          }
        ]
      }
    ]
  },
  {
    path: '/dataInfo',
    name: 'DataInfo',
    component: DataInfo,
    meta: { title: '数据大屏', hidden: false, icon: 'TrendCharts' }
  }
]
