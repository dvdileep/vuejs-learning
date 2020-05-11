import Vue from 'vue'
import App from './App.vue'

//Global import
// import Ninjas from './ninja.vue'
// Vue.component('ninjas', Ninjas);
//end Global import

export const bus = new Vue();

//Custom Directives
Vue.directive('customTitleColor',{
  bind(el, binding, vnode){
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
})


//Custom Filters
Vue.filter('toUpperCase', function(value) {
  return value.toUpperCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
