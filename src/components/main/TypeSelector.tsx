import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { usePokemonContext } from "@/hooks/usePokemonContext";
import { usePokemonTypes } from "@/hooks/usePokemonTypes";

export function TypeSelector() {
    const { type, setType } = usePokemonContext();
    const { types, loading } = usePokemonTypes();

    return (
        <Select value={type} onValueChange={setType} disabled={loading}>
            <SelectTrigger className="container w-full">
                <SelectValue placeholder={loading ? "Loading types..." : "Select type Pokemon"} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {!loading && types.map(typeOption => (
                        <SelectItem key={typeOption} value={typeOption}>{typeOption}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
