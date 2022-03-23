import { useRouter } from "next/router";
function article({ article }) {
  const router = useRouter();
  return (
    <>
      <div>this is an article number {router.query.id}</div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </>
  );
}

export default article;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
