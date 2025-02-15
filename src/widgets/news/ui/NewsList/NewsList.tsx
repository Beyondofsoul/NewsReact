import withSkeleton from '@/shared/hocs/withSkeleton';

import styles from './styles.module.css';
import { INews } from '@/entities/news';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import { ReactNode } from 'react';

interface Props {
  news?: INews[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
  viewNewsSlot?: (news: INews) => ReactNode;
}

function NewsList({ news, type = 'item', viewNewsSlot }: Props) {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} viewNewsSlot={viewNewsSlot} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
