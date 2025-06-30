import { useCallback, useState, useEffect, type ReactNode } from "react";
import { fetchByType } from "@/utils/fetchByType";
import type { Pokemon } from "@/types";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const [type, setType] = useState<string>("normal");
    const [allPokemonsOfType, setAllPokemonsOfType] = useState<Pokemon[]>([]);
    const [cache] = useState<Map<string, Pokemon>>(new Map());
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(10);
    const [totalPokemonsOfType, setTotalPokemonsOfType] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");

    // Fetch all pokemons of the selected type when type changes
    const fetchAllPokemonsOfType = useCallback(
        async (selectedType: string) => {
            setLoading(true);
            // Fetch all 151 and filter by type
            const { pokemons, total } = await fetchByType(selectedType, 151, cache, 1);
            setAllPokemonsOfType(pokemons);
            setTotalPokemonsOfType(total);
            setLoading(false);
        },
        [cache]
    );

    useEffect(() => {
        fetchAllPokemonsOfType(type);
        setPage(1);

    }, [type, fetchAllPokemonsOfType]);

    return (
        <PokemonContext.Provider
            value={{
                type,
                setType,
                pokemons: allPokemonsOfType,
                fetchPokemons: fetchAllPokemonsOfType,
                search,
                setSearch,
                page,
                setPage,
                limit,
                totalPokemonsOfType,
                loading,
                allPokemonsOfType,
                viewMode,
                setViewMode,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
}; 