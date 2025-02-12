import { useAppSelector } from '@/app/appStore';

import { useDebounce } from '@/shared/hooks/useDeboune';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css';
import { NewsFilters } from '@/widgets/news';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination';

function NewsByFilters() {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters categories={data?.categories || []} filters={filters} />
      <NewsListWithPagination isLoading={isLoading} filters={filters} news={news} />
    </section>
  );
}

export default NewsByFilters;
