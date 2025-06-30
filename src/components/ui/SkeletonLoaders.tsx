import { Skeleton } from "./skeleton";

// Table row skeleton for loading state in PokemonList
export function TableRowSkeleton() {
    return (
        <tr>
            <td><Skeleton className="h-8 w-8" /></td>
            <td><Skeleton className="h-4 w-8" /></td>
            <td><Skeleton className="h-4 w-20" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
            <td><Skeleton className="h-4 w-16" /></td>
        </tr>
    );
}

// Card skeleton for loading state in grid/card view
export function CardSkeleton() {
    return (
        <div className="flex flex-col items-center p-4 border rounded-md w-40 h-56 gap-2">
            <Skeleton className="w-20 h-20 mb-2" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-12" />
        </div>
    );
} 