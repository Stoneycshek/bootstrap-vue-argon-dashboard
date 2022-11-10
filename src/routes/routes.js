import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'cur-apprv-task',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'CSM轉檔作業',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/icons',
        name: '查詢作業',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: '費用分攤',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/cur-apprv-task',
        name: '待辦事項',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Poc/CurApprvTaskPage.vue')
      },
      {
        path: '/csm-cls-add',
        name: 'CSM計算資料準備',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Poc/CsmClsAddPage.vue')
      },
      {
        path: '/hub-cls-add',
        name: 'HUB計算資料準備',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Poc/HubClsAddPage.vue')
      },
      {
        path: '/role-add',
        name: '功能權限設定',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Poc/RoleAddPage.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
