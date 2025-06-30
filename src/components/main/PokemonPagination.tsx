import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationLink,
} from "@/components/ui/pagination";
import { usePokemonContext } from "@/hooks/usePokemonContext";

export default function PokemonPagination({ total }: { total: number }) {
    const { page, setPage } = usePokemonContext();
    const limit = 10;
    const totalPages = Math.max(1, Math.ceil(total / limit));

    // Solo muestra un rango pequeño de páginas para no saturar la UI
    const getPageNumbers = () => {
        const delta = 2;
        const range = [];
        for (let i = Math.max(1, page - delta); i <= Math.min(totalPages, page + delta); i++) {
            range.push(i);
        }
        return range;
    };

    const pageNumbers = getPageNumbers();
    const isLastPage = page >= totalPages || total === 0;

    return (
        <div className="flex flex-col items-center gap-2">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={e => {
                                e.preventDefault();
                                if (page > 1) setPage(page - 1);
                            }}
                            href="#"
                            aria-disabled={page === 1}
                        />
                    </PaginationItem>
                    {pageNumbers.map((num) => (
                        <PaginationItem key={num}>
                            <PaginationLink
                                isActive={num === page}
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    setPage(num);
                                }}
                            >
                                {num}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            onClick={e => {
                                e.preventDefault();
                                if (!isLastPage) setPage(page + 1);
                            }}
                            href="#"
                            aria-disabled={isLastPage}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
