import Vue from 'vue'
import App from './App.vue'
import './index.css'
import { cartStore } from './store/CartStore'
Vue.config.productionTip = false

new Vue({
  store:cartStore,
  render: h => h(App),
}).$mount('#app')
