import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css';
import { NewsList } from '@/widgets/news';

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  return (
    <section className={styles.section}>
      <NewsList direction="row" type="banner" news={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
