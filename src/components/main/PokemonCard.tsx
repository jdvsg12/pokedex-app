import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import type { Pokemon } from '@/types'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from '../ui/dialog'

interface PokemonCardProps {
    pokemon: Pokemon
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className='bg-amber-100 rounded-2xl flex flex-col items-center cursor-pointer hover:shadow-lg transition'>
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="capitalize">{pokemon.name}</CardTitle>
                        <CardDescription>{pokemon.id}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CardAction>
                            <img src={pokemon.image} alt={pokemon.name} className="w-20 h-20" />
                        </CardAction>
                    </CardContent>
                </Card>
            </DialogTrigger>
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
                            <div><b>Peso:</b> {pokemon.weight ? (pokemon.weight / 10).toFixed(1) + ' kg' : 'N/A'}</div>
                            <div><b>Altura:</b> {pokemon.height ? (pokemon.height / 10).toFixed(1) + ' m' : 'N/A'}</div>
                            <div><b>Salud base:</b> {pokemon.stats?.find(s => s.stat?.name === 'hp')?.base_stat ?? 'N/A'}</div>
                            <div><b>Experiencia base:</b> {pokemon.base_experience ?? 'N/A'}</div>
                            <div><b>Ataque base:</b> {pokemon.stats?.find(s => s.stat?.name === 'attack')?.base_stat ?? 'N/A'}</div>
                            <div><b>Defensa base:</b> {pokemon.stats?.find(s => s.stat?.name === 'defense')?.base_stat ?? 'N/A'}</div>
                            <div><b>Ataque especial:</b> {pokemon.stats?.find(s => s.stat?.name === 'special-attack')?.base_stat ?? 'N/A'}</div>
                            <div><b>Defensa especial:</b> {pokemon.stats?.find(s => s.stat?.name === 'special-defense')?.base_stat ?? 'N/A'}</div>
                            <div><b>Velocidad:</b> {pokemon.stats?.find(s => s.stat?.name === 'speed')?.base_stat ?? 'N/A'}</div>
                        </div>
                    </div>
                </div>
                <DialogClose asChild>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cerrar</button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default PokemonCard