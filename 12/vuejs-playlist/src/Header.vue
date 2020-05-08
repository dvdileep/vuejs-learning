<template>
  <div>
      <ul>
          <li v-for="(character, index) in characters" :key="index">{{ character }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title: 'Title here',
        characters: ['luffy','zorro', 'sanji', 'nami', 'robin', 'chopper'],
    }
  }
}
</script>
