import Vue from 'vue'
import App from './App'
// import router from './router'
import customMethods from '@/components/customMethods'

import '@/styles/iconfont/iconfont.css'
import '@/styles/base.scss'

Vue.config.productionTip = false;
Vue.use(customMethods);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})


