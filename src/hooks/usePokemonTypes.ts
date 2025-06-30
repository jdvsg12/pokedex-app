import { useEffect, useState } from 'react'

export function usePokemonTypes () {
  const [types, setTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTypes () {
      setLoading(true)
      const res = await fetch('https://pokeapi.co/api/v2/type')
      const data = await res.json()
      const filtered = data.results
        .map((t: { name: string }) => t.name)
        .filter((name: string) => !['shadow', 'unknown'].includes(name))
      setTypes(filtered)
      setLoading(false)
    }
    fetchTypes()
  }, [])

  return { types, loading }
}
