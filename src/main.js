import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 配置项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: require('../src/assets/loading.gif'),
  attempt: 1
})

