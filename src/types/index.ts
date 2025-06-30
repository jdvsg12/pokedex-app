export interface Pokemon {
  id: number
  name: string
  image: string
  types: string[]
  weight: number
  height: number
  base_experience: number
  stats: Array<{
    base_stat: number
    stat: { name: string }
  }>
}

export type PokemonIndexEntry = {
  name: string
  url: string
}

export type PokeApiListResponse = {
  results: PokemonIndexEntry[]
}

export type PokeApiTypeEntry = {
  type: { name: string }
}

// Context types
export type PokemonContextType = {
  type: string
  setType: (type: string) => void
  pokemons: Pokemon[]
  fetchPokemons: (
    selectedType: string,
    limit?: number,
    page?: number
  ) => Promise<void>
  search: string
  setSearch: (value: string) => void
  page: number
  setPage: (page: number) => void
  limit: number
  totalPokemonsOfType: number
  loading: boolean
  allPokemonsOfType: Pokemon[]
  viewMode: 'list' | 'grid'
  setViewMode: (mode: 'list' | 'grid') => void
}
