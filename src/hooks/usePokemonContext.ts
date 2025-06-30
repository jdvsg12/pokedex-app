import { PokemonContext } from '@/context/PokemonContext'
import { useContext } from 'react'

export const usePokemonContext = () => {
  const context = useContext(PokemonContext)
  if (!context)
    throw new Error('usePokemonContext must be used within a PokemonProvider')
  return context
}
