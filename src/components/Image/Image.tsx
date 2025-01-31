import styles from './styles.module.css';
interface Props {
  image: string;
}
function Image({ image }: Props) {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
}

export default Image;
