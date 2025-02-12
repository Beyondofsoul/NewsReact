import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import { NewsList } from '@/widgets/news';
import { IFilters } from '@/shared/interfaces';
import { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}
function NewsListWithPagination({ filters, news, isLoading }: Props) {
  const { handleNextPage, handlePrevPage, handlePageClick } = usePaginationNews(filters);

  return (
    <PaginationWrapper
      top={true}
      bottom={true}
      handlePageClick={handlePageClick}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList type="item" direction="column" isLoading={isLoading} news={news} />
    </PaginationWrapper>
  );
}

export default NewsListWithPagination;
