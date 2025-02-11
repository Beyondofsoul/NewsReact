import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import Slider from '@/features/slider/ui/Slider/Slider';
import { IFilters } from '@/shared/interfaces';
import styles from './styles.module.css';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { setFilters } from '@/entities/news/model/newsSlice';
import { Categories } from '@/features/category';
import { Search } from '@/features/search';

interface Props {
  filters: IFilters;
}

function NewsFilters({ filters }: Props) {
  const dispatch = useAppDispatch();
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);
  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))}
      />
    </div>
  );
}

export default NewsFilters;
