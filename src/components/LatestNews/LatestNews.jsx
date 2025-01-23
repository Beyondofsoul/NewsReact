import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css';

function LatestNews({ banners, isLoading }) {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
