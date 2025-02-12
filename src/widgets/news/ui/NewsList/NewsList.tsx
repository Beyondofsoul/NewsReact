import withSkeleton from '@/shared/hocs/withSkeleton';

import styles from './styles.module.css';
import { INews } from '@/entities/news';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';

interface Props {
  news?: INews[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
}

function NewsList({ news, type = 'item' }: Props) {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
