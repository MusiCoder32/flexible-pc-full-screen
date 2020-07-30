import Vue from 'vue';
import Router from 'vue-router';
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('../pages/index.vue'),
            meta: {title: '可视化大屏'},
            redirect: '/first',
            children: [
                {
                    path: 'first',
                    component: () => import('../pages/first-map/index.vue'),
                    meta: {title: '一张图'}
                },
                {
                    path: 'chemical',
                    component: () => import('../pages/dangerous-chemical/index.vue'),
                    meta: {title: '危化一张图'}
                },
                {
                    path: 'coal',
                    component: () => import('../pages/coal/index.vue'),
                    meta: {title: '非煤一张图'}
                },
                {
                    path: '/404',
                    component: () => import( '../pages/404.vue'),
                    meta: { title: '404' }
                },

            ]
        },
        {
            path: '/login',
            component: () => import( '../pages/Login.vue'),
            name: 'login',
            meta: { title: '登录' }
        },

                {
            path: '/beidou',
            component: () => import( '../pages/beidou/Map.vue'),
            name: 'beidou',
            meta: { title: '北斗+' }
        },

        {
            path: '*',
            redirect: '/404'
        }
    ]
});