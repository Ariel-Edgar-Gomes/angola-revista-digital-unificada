
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface UserPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const UserPagination: React.FC<UserPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Criar array de números de página para exibição
  const getPageNumbers = () => {
    const pages = [];
    
    // Sempre mostrar a primeira página
    pages.push(1);
    
    // Adicionar elipses e páginas intermediárias
    if (currentPage > 3) {
      pages.push('ellipsis');
    }
    
    // Páginas ao redor da página atual
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    
    // Adicionar elipses antes da última página
    if (currentPage < totalPages - 2) {
      pages.push('ellipsis');
    }
    
    // Adicionar última página se não for a primeira
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        
        {pageNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <span className="px-4 py-2">...</span>
            ) : (
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onPageChange(page as number)}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        
        <PaginationItem>
          <PaginationNext
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default UserPagination;
