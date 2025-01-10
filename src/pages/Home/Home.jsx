import { useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../components/NewsList/NewsList';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
}

export default Home;
