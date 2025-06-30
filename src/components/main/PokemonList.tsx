import { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Pokemon } from '@/types'
import PokemonDialog from "./PokemonDialog";
import { ArrowUpDown } from "lucide-react";
import { pokemonTableColumns } from '@/utils/pokemonTableColumns';

type PokemonListProps = {
    pokemons: Pokemon[];
};

function getStat(pokemon: Pokemon, stat: string) {
    return pokemon.stats?.find(s => s.stat?.name === stat)?.base_stat ?? "N/A";
}

function getSortValue(pokemon: Pokemon, key: string): string | number {
    const statMap: Record<string, string> = {
        hp: "hp",
        attack: "attack",
        defense: "defense",
        special_attack: "special-attack",
        special_defense: "special-defense",
        speed: "speed",
    };
    if (statMap[key]) {
        return getStat(pokemon, statMap[key]);
    }
    if (key === "types") {
        return pokemon.types[0] || "";
    }
    if (key === "weight") {
        return pokemon.weight;
    }
    if (key === "height") {
        return pokemon.height;
    }
    return pokemon[key as keyof Pokemon] as string | number;
}

export default function PokemonList({ pokemons }: PokemonListProps) {
    const [selected, setSelected] = useState<Pokemon | null>(null);
    const [open, setOpen] = useState(false);
    const [sortKey, setSortKey] = useState<string>("id");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    // Ordenamiento
    const sortedPokemons = [...pokemons].sort((a, b) => {
        const col = pokemonTableColumns.find(c => c.key === sortKey);
        if (!col) return 0;
        let aValue = getSortValue(a, sortKey);
        let bValue = getSortValue(b, sortKey);

        if (col.type === "number") {
            aValue = Number(aValue);
            bValue = Number(bValue);
            return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        } else {
            return sortOrder === "asc"
                ? String(aValue).localeCompare(String(bValue))
                : String(bValue).localeCompare(String(aValue));
        }
    });

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortOrder("asc");
        }
    };

    return (
        <>
            <Table className="container">
                <TableCaption>Lista de Pokémon filtrados.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Imagen</TableHead>
                        {pokemonTableColumns.map(col => (
                            <TableHead
                                key={col.key}
                                className="cursor-pointer select-none"
                                onClick={() => col.sortable && handleSort(col.key)}
                            >
                                {col.label}
                                {col.sortable && (
                                    <ArrowUpDown
                                        className={`inline ml-1 w-4 h-4 ${sortKey === col.key ? (sortOrder === 'asc' ? 'text-blue-500' : 'text-red-500') : 'text-gray-400'}`}
                                    />
                                )}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedPokemons.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={pokemonTableColumns.length + 1} className="text-center">No se encontraron Pokémon.</TableCell>
                        </TableRow>
                    ) : (
                        sortedPokemons.map(pokemon => (
                            <TableRow
                                key={pokemon.id}
                                className="cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    setSelected(pokemon);
                                    setOpen(true);
                                }}
                            >
                                <TableCell><img src={pokemon.image} /></TableCell>
                                <TableCell>{pokemon.id}</TableCell>
                                <TableCell className="capitalize">{pokemon.name}</TableCell>
                                <TableCell>{pokemon.types.join(", ")}</TableCell>
                                <TableCell>{(pokemon.weight / 10).toFixed(1)}</TableCell>
                                <TableCell>{(pokemon.height / 10).toFixed(1)}</TableCell>
                                <TableCell>{pokemon.base_experience}</TableCell>
                                <TableCell>{getStat(pokemon, "hp")}</TableCell>
                                <TableCell>{getStat(pokemon, "attack")}</TableCell>
                                <TableCell>{getStat(pokemon, "defense")}</TableCell>
                                <TableCell>{getStat(pokemon, "special-attack")}</TableCell>
                                <TableCell>{getStat(pokemon, "special-defense")}</TableCell>
                                <TableCell>{getStat(pokemon, "speed")}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <PokemonDialog open={open} onOpenChange={setOpen} pokemon={selected} />
        </>
    );
}