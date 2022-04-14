<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPictures :pokemonid="pokemon.id" :showpokemon="showpokemon"/>
    <PokemonOptions :pokemonArr="pokemonArr" :userAnswer="pokemon.id" @pokemon-selection="checkAnswer"/>
    <div v-if="showAnswer">
      <h3>{{ message }}</h3>
      <button
        @click="newGame">
      Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPictures from "../components/PokemonPicture.vue";
import getPokemonOptions from "../helpers/getPokemonOptions.js";
export default {
  components: { PokemonOptions, PokemonPictures},
  data () {
    return {
      pokemonArr : [],
      pokemon: null,
      showpokemon: false,
      message: null,
      showAnswer: false,
      userAnswer: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const RandomOption = Math.floor( Math.random() * 4 );
      this.pokemon = this.pokemonArr[ RandomOption ];
    },
    checkAnswer(pokemonId) {
      if(!this.userAnswer){
        this.message = pokemonId == this.pokemon.id ? `¡Felicidades! ${this.pokemon.name} es la respuesta correcta` : `Oh vaya :(, la repuesta correcta es ${this.pokemon.name}`;
        this.showpokemon = true;
        this.showAnswer = true;
        this.userAnswer = true;
      }
    },
    newGame() {
      this.pokemonArr = [];
      this.pokemon = null;
      this.showpokemon = false,
      this.message = null;
      this.showAnswer  = false;
      this.userAnswer = false;
      this.mixPokemonArray();
    }
  },
  mounted() {
    this.mixPokemonArray();
  }
}
</script>