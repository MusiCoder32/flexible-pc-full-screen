import Vue from 'vue';
import App from './App.vue';
import '@/assets/main.css';
import ECharts from 'vue-echarts';
import sichuanMap from '@/assets/sichuan.json';

import router from './router/router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import '@/assets/element-variables.scss';

import Request from './utils/request';
import UrlConfig from './common/url-config';

Vue.config.productionTip = false;
Vue.prototype.$req = Request;
Vue.prototype.$url = UrlConfig;

ECharts.registerMap('sichuan', sichuanMap);

Vue.component('chart', ECharts);
Vue.use(ElementUI, {
    size: 'small'
});


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 安信科创`;
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin && to.path !== '/login') {
        if (to.path === '/beidou') {
            next();
        }
        else {
            next('/login');
        }
    }
    else {
        next();
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
