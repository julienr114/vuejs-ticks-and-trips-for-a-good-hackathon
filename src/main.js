import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Application Entry Point
new Vue({
  render: h => h(App)
}).$mount('#app')
