import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationWrapper = ({ page, lastPage }: PaginationProps) => {
  return (
    <Pagination className="not-prose">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={
                page > 2
                  ? `/articles/?page=${page - 1}#articles`
                  : "/articles#articles"
              }
            />
          </PaginationItem>
        )}
        {page > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {Array.from({ length: lastPage }, (_, i) => i + 1)
          .slice(Math.max(0, page - 2), Math.min(lastPage, page + 1))
          .map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink
                href={`/articles/?page=${pageNum}#articles`}
                isActive={pageNum === page}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          ))}
        {page < lastPage && (
          <PaginationItem>
            <PaginationNext href={`/articles/?page=${page + 1}#articles`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWrapper;
