import Vue from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import VueECharts from "vue-echarts";
import "echarts-gl";

import router from "./router/router";
import store from "./store";
import ELEMENT from "element-ui";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
import "@/assets/element-variables.scss";

import Request from "./utils/request";
import UrlConfig from "./common/url-config";

Vue.config.productionTip = false;
Vue.prototype.$req = Request;
Vue.prototype.$url = UrlConfig;

VueECharts.registerMap("sichuan", VueECharts);

Vue.component("chart", VueECharts);
Vue.use(ELEMENT, {
    size: "small"
});

function setRem(screenRatioByDesign, path) {
    if (screenRatioByDesign === void 0) {
        screenRatioByDesign = 16 / 9;
    }
    let docEle = document.documentElement;

    function setHtmlFontSize(path) {
        //屏幕尺寸大小
        let screenWidth = window.screen.width;
        let screenHeight = window.screen.height;

        //可视区域大小
        let offsetWidth = docEle.clientWidth || docEle.offsetWidth;
        let offsetHeight = docEle.clientHeight || docEle.offsetHeight;
        //在放大缩小的情况下，bodyOffsetHeight、width与screenHeight、width不相等，全屏且100%时相等
        if (((offsetWidth < 810 || offsetWidth < 1440) || (screenHeight < 1080 || screenWidth < 1920)) && (path !== "/login" && path !== "/beidou" && path !== "/sensors")) {
            document.documentElement.style.width = "1920px";
            document.documentElement.style.height = "1080px";
        }
        else {
            document.documentElement.style.width = "100%";
            document.documentElement.style.height = "100%";
        }


        let screenRatio = offsetWidth / offsetHeight;
        let fontSize = (screenRatio > screenRatioByDesign
            ? (screenRatioByDesign / screenRatio)
            : 1) * docEle.offsetWidth / 10;
        if (path === "/sensors") {
            fontSize *= 1.5;
        }
        docEle.style.fontSize = fontSize.toFixed(3) + "px";
        console.log(fontSize);
    }

    setHtmlFontSize(path);
    window.addEventListener("resize", setHtmlFontSize);
}

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    setRem(16 / 9, to.path);
    document.title = `${to.meta.title} | 安信科创`;
    const isLogin = sessionStorage.getItem("isLogin");
    if (to.path !== "/beidou" && to.path !== "/sensors") {
        let img = require("./assets/img/bg.png");
        document.body.style.background = `url(${img}) 0% 0% / cover no-repeat`;
    }
    if (!isLogin && to.path !== "/login") {
        if (to.path === "/beidou" || to.path === "/sensors") {
            next();
        }
        else {
            next("/login");
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
}).$mount("#app");
