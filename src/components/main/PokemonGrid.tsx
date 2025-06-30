import type { Pokemon } from '@/types'
import PokemonCard from "./PokemonCard";

// Puedes personalizar el diseño de la grilla aquí

type PokemonGridProps = {
    pokemons: Pokemon[];
};

export default function PokemonGrid({ pokemons }: PokemonGridProps) {
    return (
        <div className="container grid grid-cols-2 md:grid-cols-5 gap-4">
            {pokemons.length === 0 ? (
                <div className="col-span-full text-center">No se encontraron Pokémon.</div>
            ) : (
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            )}
        </div>
    );
}