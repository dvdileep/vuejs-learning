<template>  
  <div>
      <app-header></app-header>
      <h1> {{ title }} </h1>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Header.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      title: 'Title here'
    }
  }
}
</script>
