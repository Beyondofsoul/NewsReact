import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css';
import { NewsList } from '@/widgets/news';
import { INews } from '@/entities/news';
import { useAppDispatch } from '@/app/appStore';
import { setCurrentNews } from '@/entities/news/model/newsSlice';
import { useNavigate } from 'react-router-dom';

function LatestNews() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };
  return (
    <section className={styles.section}>
      <NewsList
        direction="row"
        type="banner"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => (
          <p className={styles.view} onClick={() => navigateTo(news)}>
            view more
          </p>
        )}
      />
    </section>
  );
}

export default LatestNews;
