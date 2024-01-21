function getPokemonId(url) {

  // Use uma expressão regular para extrair o ID da URL
  var match = url.match(/\/(\d+)\/$/);

  // O ID estará na segunda captura da expressão regular
  var pokemonId = match ? match[1] : null;

  // Exiba o ID
  // console.log(pokemonId);
  return pokemonId
}

function convertPokemonToLi(pokemon) {
  // Obtenha a URL atual
  const pokemonId = getPokemonId(pokemon.url)

  return `
    <li class="pokemon">
      <span class="number">#00${pokemonId}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg"
          alt="${pokemon.name}">
      </div>
    </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})
