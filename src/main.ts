import { createApp } from 'vue';
import ElementPlus, { ElIcon } from 'element-plus';
import App from './App.vue';

import router from './router/index';
import store from './store/index';

import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
.use(router)
.use(store)
.use(ElementPlus)
.use(ElIcon)
.mount('#app');
