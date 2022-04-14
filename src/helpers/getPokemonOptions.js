import pokemonapi from "@/api/PokemonApi";

const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));
  return pokemonArr.map((_, index) => index + 1);
}

/**Los argumentos de la a hasta d representan cada uno un pokemon */
const getPokemonsNames = async ([a, b, c, d]) => {
  const PromiseArr = [
    pokemonapi.get(`/${a}`),
    pokemonapi.get(`/${b}`),
    pokemonapi.get(`/${c}`),
    pokemonapi.get(`/${d}`)
  ];

  const [Pokemon1, Pokemon2, Pokemon3, Pokemon4] = await Promise.all(PromiseArr);

  return [
    { name: Pokemon1.data.name, id: Pokemon1.data.id },
    { name: Pokemon2.data.name, id: Pokemon2.data.id },
    { name: Pokemon3.data.name, id: Pokemon3.data.id },
    { name: Pokemon4.data.name, id: Pokemon4.data.id },
  ];
}

export default async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4));

  return pokemons;
}