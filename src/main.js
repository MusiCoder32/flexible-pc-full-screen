import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import ECharts from 'vue-echarts'
import sichuanMap from '@/assets/sichuan.json'

import router from './components/router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import '@/assets/element-variables.scss'

Vue.config.productionTip = false

ECharts.registerMap('sichuan', sichuanMap)

Vue.component('chart', ECharts)
Vue.use(ElementUI, {
    size: 'small'
});


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 安信科创`;
    next()
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
