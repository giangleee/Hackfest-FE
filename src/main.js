import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store/store'
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI, {locale})


new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')
