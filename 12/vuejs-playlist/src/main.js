import Vue from 'vue'
import App from './App.vue'

//Global import
import Ninjas from './ninja.vue'
Vue.component('ninjas', Ninjas);
//end Global import


new Vue({
  el: '#app',
  render: h => h(App)
})
