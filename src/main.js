import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// import 'echarts-gl'

import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'

import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell'

Vue.use(YDUI)

Vue.use(router)


Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)

Vue.component(CellGroup.name, CellGroup)
Vue.component(CellItem.name, CellItem)

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
