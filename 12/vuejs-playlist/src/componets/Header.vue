<template>
  <header>
    <div class="bg-danger p-5 text-center">
      <h1 @click="updateTitle">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
import { bus } from '../main'

export default {
  props: ['title'],
  data () {
    return {
        
    }
  },
  methods: {
    updateTitle() {
      // this.title = "Title is updated"
      bus.$emit('updateTitle','Title is updated')
    }
  }
}
</script>

