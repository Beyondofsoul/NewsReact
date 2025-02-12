import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import Slider from '@/features/slider/ui/Slider/Slider';
import { IFilters } from '@/shared/interfaces';
import styles from './styles.module.css';

import { setFilters } from '@/entities/news/model/newsSlice';
import { Categories } from '@/features/category';
import { Search } from '@/features/search';
import { CategoriesType } from '@/entities/category';

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

function NewsFilters({ filters, categories }: Props) {
  const dispatch = useAppDispatch();
  const { isDark } = useTheme();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
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
