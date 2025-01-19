import styles from './styles.module.css';

function Search({ keywords, setKeywords }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Введите текст"
      />
    </div>
  );
}

export default Search;
