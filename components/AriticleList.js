import styles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
function AriticleList({ articles }) {
  return (
    <div className={styles.grid}>
      {articles &&
        articles.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}
    </div>
  );
}

export default AriticleList;
