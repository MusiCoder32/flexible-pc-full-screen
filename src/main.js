import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.scss'
import ECharts from 'vue-echarts'
import sichuanMap from '@/assets/sichuan.json'

Vue.config.productionTip = false

ECharts.registerMap('sichuan', sichuanMap)
Vue.component('chart', ECharts)

new Vue({
  render: h => h(App)
}).$mount('#app')
