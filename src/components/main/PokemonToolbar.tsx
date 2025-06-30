import { usePokemonContext } from "@/hooks/usePokemonContext";
import { TypeSelector } from "./TypeSelector";
import { LayoutGrid, List } from "lucide-react";
import PokemonSearch from "./Search";
import { Button } from "../ui/button";

export default function PokemonToolbar() {
    const { viewMode, setViewMode } = usePokemonContext();

    return (
        <div className="container flex gap-2 items-center mb-4">
            <div className="flex-1">
                <TypeSelector />
            </div>
            <div className="flex-1">
                <PokemonSearch />
            </div>
            <Button
                variant="ghost"
                className={`p-2 rounded border transition ${viewMode === "grid" ? "bg-gray-200" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Ver en grilla"
            >
                <LayoutGrid className={`w-5 h-5 ${viewMode === "grid" ? "text-blue-500" : "text-gray-700"}`} />
            </Button>
            <Button
                variant="ghost"
                className={`p-2 rounded border transition ${viewMode === "list" ? "bg-gray-200" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="Ver en lista"
            >
                <List className={`w-5 h-5 ${viewMode === "list" ? "text-blue-500" : "text-gray-700"}`} />
            </Button>
        </div>
    );
} 