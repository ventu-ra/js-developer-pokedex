const pokeApi = {

}

pokeApi.getPokemons = async (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

  try {
    const res = await fetch(url)
    const { results } = await res.json()
    return results
  } catch (error) {
    return console.error(error)
  }
}
