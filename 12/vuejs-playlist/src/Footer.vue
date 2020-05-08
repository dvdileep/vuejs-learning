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
        copyright: 'Copyrights @ 2020'
    }
  }
}
</script>
