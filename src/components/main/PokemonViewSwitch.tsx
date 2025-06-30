import { usePokemonContext } from "@/hooks/usePokemonContext";
import PokemonList from "@/components/main/PokemonList";
import PokemonGrid from "@/components/main/PokemonGrid";
import PokemonPagination from "@/components/main/PokemonPagination";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { pokemonTableColumns } from '@/utils/pokemonTableColumns';
import { TableRowSkeleton, CardSkeleton } from "@/components/ui/SkeletonLoaders";

export default function PokemonViewSwitch() {
    const { allPokemonsOfType, search, page, limit, loading, viewMode } = usePokemonContext();

    // Filter Pokemon in view
    const filteredPokemons = allPokemonsOfType.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    // Apply pagination on the filtered result
    const paginatedPokemons = filteredPokemons.slice((page - 1) * limit, page * limit);

    return (
        <>
            {loading ? (
                viewMode === "list" ? (
                    <Table className="container">
                        <TableCaption>Lista de Pokémon filtrados.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Imagen</TableHead>
                                {pokemonTableColumns.map(col => (
                                    <TableHead key={col.key}>{col.label}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[...Array(10)].map((_, i) => <TableRowSkeleton key={i} />)}
                        </TableBody>
                    </Table>
                ) : (
                    <section className="container grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[...Array(10)].map((_, i) => <CardSkeleton key={i} />)}
                    </section>
                )
            ) : viewMode === "list" ? (
                <PokemonList pokemons={paginatedPokemons} />
            ) : (
                <PokemonGrid pokemons={paginatedPokemons} />
            )}
            <PokemonPagination total={filteredPokemons.length} />
        </>
    );
} 