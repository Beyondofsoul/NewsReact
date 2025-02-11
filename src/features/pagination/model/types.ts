export interface PaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (Page: number) => void;
  currentPage: number;
}
