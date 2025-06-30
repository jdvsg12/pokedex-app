import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from '../ui/dialog';
import type { Pokemon } from '@/types'
import { StatBadge } from './StateBadge';
import { Button } from '../ui/button';

interface DialogPokemonProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    pokemon: Pokemon | null;
}

export default function PokemonDialog({ open, onOpenChange, pokemon }: DialogPokemonProps) {
    if (!pokemon) return null;

    // Helper to get stat value
    const getStat = (name: string) => pokemon.stats?.find(s => s.stat?.name === name)?.base_stat;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="capitalize flex items-center gap-2">
                        {pokemon.name}
                    </DialogTitle>
                    <DialogDescription>ID: {pokemon.id}</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32" />
                    <div className="flex-1">
                        <div className="mb-2"><b>Tipo:</b> {pokemon.types.join(', ')}</div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div><b>Peso:</b> {(pokemon.weight / 10).toFixed(1)} kg</div>
                            <div><b>Altura:</b> {(pokemon.height / 10).toFixed(1)} m</div>
                            <div><b>Salud base:</b> {getStat('hp') !== undefined ? <StatBadge value={getStat('hp')!} /> : 'N/A'}</div>
                            <div><b>Experiencia base:</b> {pokemon.base_experience ?? 'N/A'}</div>
                            <div><b>Ataque base:</b> {getStat('attack') !== undefined ? <StatBadge value={getStat('attack')!} /> : 'N/A'}</div>
                            <div><b>Defensa base:</b> {getStat('defense') !== undefined ? <StatBadge value={getStat('defense')!} /> : 'N/A'}</div>
                            <div><b>Ataque especial:</b> {getStat('special-attack') !== undefined ? <StatBadge value={getStat('special-attack')!} /> : 'N/A'}</div>
                            <div><b>Defensa especial:</b> {getStat('special-defense') !== undefined ? <StatBadge value={getStat('special-defense')!} /> : 'N/A'}</div>
                            <div><b>Velocidad:</b> {getStat('speed') !== undefined ? <StatBadge value={getStat('speed')!} /> : 'N/A'}</div>
                        </div>
                    </div>
                </div>
                <DialogClose asChild>
                    <Button className="mt-4 px-4 py-2 text-white rounded">Cerrar</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
} 