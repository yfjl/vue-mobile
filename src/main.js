

import Vue from 'vue'

import store from './store'

import App from './App'
import router from './router/routes'

import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import config from './config/index'
Vue.use(config)





new Vue({
  router,
  store,
  el: '#appIndex',
  render: h => h(App)
})
