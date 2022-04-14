<template>
  <div class="pokemon-container">
    <img :src="imgSrc" alt="Pokemon" class="hidden-pokemon">
    <img v-if="showpokemon" :src="imgSrc" alt="Pokemon" class="fade-in">
  </div>
</template>

<script>
export default {
  props: {
    pokemonid: {
      type: Number,
      required: true
    },
    showpokemon: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  computed:{
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonid}.svg`
    }
  }
}
</script>

<style scoped>
.hidden-pokemon{
  filter: brightness(0);
}

.pokemon-container{
  height: 200px;
}

img{
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>