import type {
  Pokemon,
  PokemonIndexEntry,
  PokeApiListResponse,
  PokeApiTypeEntry
} from '@/types'

let pokemonIndex: PokemonIndexEntry[] = []

export async function fetchByType (
  type: string,
  limit: number,
  cache: Map<string, Pokemon>,
  page: number = 1
): Promise<{ pokemons: Pokemon[]; total: number }> {
  if (pokemonIndex.length === 0) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data: PokeApiListResponse = await res.json()
    pokemonIndex = data.results
  }

  const matches: Pokemon[] = []
  let index = 0

  while (index < pokemonIndex.length) {
    const { name, url } = pokemonIndex[index]
    index++

    if (cache.has(name)) {
      const poke = cache.get(name)!
      if (poke.types.includes(type)) matches.push(poke)
      continue
    }

    try {
      const res = await fetch(url)
      const data = await res.json()
      const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: (data.types as PokeApiTypeEntry[]).map(t => t.type.name),
        weight: data.weight,
        height: data.height,
        base_experience: data.base_experience,
        stats: data.stats
      }
      cache.set(name, pokemon)
      if (pokemon.types.includes(type)) matches.push(pokemon)
    } catch (err) {
      console.error(`Error fetching ${name}`, err)
    }
  }

  const total = matches.length
  const start = (page - 1) * limit
  const end = start + limit
  return { pokemons: matches.slice(start, end), total }
}
