import { createContext } from "react";
import type { PokemonContextType } from "@/types";

export const PokemonContext = createContext<PokemonContextType | undefined>(undefined);
