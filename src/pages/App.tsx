import { PokemonProvider } from "@/context/PokemonProvider";
import PokemonToolbar from "@/components/main/PokemonToolbar";
import PokemonViewSwitch from "@/components/main/PokemonViewSwitch";

export default function App() {
    return (
        <PokemonProvider>
            <div className="flex flex-col gap-4">
                <PokemonToolbar />
                <PokemonViewSwitch />
            </div>
        </PokemonProvider>
    );
}