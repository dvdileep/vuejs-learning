<template>  
  <div>
      <!-- <app-header :title="title" @updateTitle="changeTitle($event)"></app-header>
      <app-content :charactersInOnePiece="charactersInOnePiece"></app-content>
      <app-footer :title="title"></app-footer> -->
      <blog></blog>
  </div>
</template>

<script>
import Header from './componets/Header.vue'
import Footer from './componets/Footer.vue'
import Content from './componets/Content.vue'
import Blog from './componets/Blog.vue'

export default {
  components: {
    // 'app-header': Header,
    // 'app-footer': Footer,
    // 'app-content': Content
    'blog': Blog
  },
  data () {
    return {
      title: 'Title here',
      charactersInOnePiece: [
            { name: 'luffy', bounty: '5 Billion Berries', show: true},
            { name: 'zorro', bounty: '3 Billion Berries', show: false},
            { name: 'sanji', bounty: '2 Million Berries', show: true},
            { name: 'nami', bounty: '5 Million Berries', show: true},
        ]
    }
  },
  methods: {
    changeTitle(newTitle){
      this.title = newTitle;
    }
  }
}
</script>
