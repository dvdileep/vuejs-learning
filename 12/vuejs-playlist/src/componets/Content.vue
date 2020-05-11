<template>
  <div class="p-3">
      <ul>
          <li v-for="(name, nameIndex) in names" :key="nameIndex">{{ name }}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="(character, index) in charactersInOnePiece" :key="index">{{ character.name }} 
             <span v-show="character.show"> has bounty of {{ character.bounty }}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['charactersInOnePiece'],
    data () {
        return {
            names: ['luffy', 'zorro', 'sanji', 'nami', 'robin', 'chopper'],
        }
    },
    methods: {

    }
}
</script>