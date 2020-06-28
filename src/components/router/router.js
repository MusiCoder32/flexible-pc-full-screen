import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('../index.vue'),
            meta: {title: '可视化大屏'},
            redirect: '/first',
            children: [
                {
                    path: 'first',
                    component: () => import('../pages/first-map/index.vue'),
                    meta: {title: '一张图'}
                }
            ]
        }
    ]
});