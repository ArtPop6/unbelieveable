import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'

import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'

import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell'

Vue.use(YDUI)

Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)

Vue.component(CellGroup.name, CellGroup)
Vue.component(CellItem.name, CellItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
