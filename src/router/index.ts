import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';
import Test from '@/views/Test.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/vuex', name: 'Vuex', component: Vuex },
  {
    // 懒加载组件
    path: '/axios', name: 'Axios', component: () => import('@/views/axios.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
