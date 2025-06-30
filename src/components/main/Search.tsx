"use client"
import { Input } from "@/components/ui/input";
import { usePokemonContext } from "@/hooks/usePokemonContext";

export default function PokemonSearch() {
    const { search, setSearch } = usePokemonContext();

    return (
        <form className="container mx-auto py-10" onSubmit={event => event.preventDefault()}>
            <Input
                inputMode="search"
                id="search"
                placeholder="Find a Pokémon according to type "
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
        </form>
    );
}