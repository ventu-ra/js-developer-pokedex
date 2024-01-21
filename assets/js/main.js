// function getPokemonId(url) {

//   // Use uma expressão regular para extrair o ID da URL
//   var match = url.match(/\/(\d+)\/$/);

//   // O ID estará na segunda captura da expressão regular
//   var pokemonId = match ? match[1] : null;

//   // Exiba o ID
//   // console.log(pokemonId);
//   return pokemonId
// }

function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonToLi(pokemon) {
  // Obtenha a URL atual
  // const pokemonId = getPokemonId(pokemon)
  // console.log(`ID: ${pokemon.id}`);
  return `
    <li class="pokemon">
      <span class="number">#00${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"
          alt="${pokemon.name}">
      </div>
    </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})
