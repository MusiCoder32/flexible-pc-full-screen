import Vue from 'vue';
import App from './App.vue';
import '@/assets/main.css';
import VueECharts from 'vue-echarts';
import 'echarts-gl'
import sichuanMap from '@/assets/sichuan.json';

import router from './router/router';
import store from './store';
import ELEMENT from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import '@/assets/element-variables.scss';

import Request from './utils/request';
import UrlConfig from './common/url-config';

Vue.config.productionTip = false;
Vue.prototype.$req = Request;
Vue.prototype.$url = UrlConfig;

VueECharts.registerMap('sichuan', VueECharts);

Vue.component('chart', VueECharts);
Vue.use(ELEMENT, {
    size: 'small'
});

function setRem (screenRatioByDesign,path) {
    if (screenRatioByDesign === void 0) {
        screenRatioByDesign = 16 / 9;
    }
    let docEle = document.documentElement;

    function setHtmlFontSize (path) {
        let screenWidth = window.screen.width;
        let screenHeight = window.screen.height;
        //在放大缩小的情况下，bodyOffsetHeight、width与screenHeight、width不相等，全屏且100%时相等
        if ((screenHeight < 1080 || screenWidth < 1920) && (path!=='/login' && path!=='/beidou')) {
            document.documentElement.style.width = '1920px';
            document.documentElement.style.height = '1080px';
        } else {
            document.documentElement.style.width = '100%';
            document.documentElement.style.height = '100%';
        }
        let offsetWidth = docEle.offsetWidth || docEle.clientWidth;
        let offsetHeight = docEle.offsetHeight || docEle.clientHeight;

        let screenRatio = offsetWidth / offsetHeight;
        let fontSize = (screenRatio > screenRatioByDesign
            ? (screenRatioByDesign / screenRatio)
            : 1) * docEle.offsetWidth / 10;
        docEle.style.fontSize = fontSize.toFixed(3) + 'px';
        console.log(fontSize);
    }

    setHtmlFontSize(path);
    window.addEventListener('resize', setHtmlFontSize);
}
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 安信科创`;
    const isLogin = sessionStorage.getItem('isLogin');
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

    setRem(16 / 9,to.path);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
