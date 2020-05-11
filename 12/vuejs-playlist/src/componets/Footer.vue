<template>
  <footer class="footer fixed-bottom mt-5">
    <div class="bg-primary p-2">
      <p class=" text-center">
        {{ copyright }} - {{ title }}
      </p>
    </div>
  </footer>
</template>

<script>
import { bus } from '../main'

export default {
  props: ['title'],
  data () {
    return {
        copyright: 'Copyrights @ 2020'
    }
  },
  created(){
    bus.$on('updateTitle', (data) => this.title = data)
  }
}
</script>
