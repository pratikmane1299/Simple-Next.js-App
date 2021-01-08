import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Posts.module.css";

import Card from "../components/Card";

export default function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h2 className={styles.title}>Posts</h2>
        {posts.map((post) => (
          <Card 
            key={post.id} 
            className={styles.post} 
            width="50%"
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span className={styles.link}>
              <Link href={`/${post.id}`}>View Comments &rarr;</Link>
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const posts = await res.json();
  
  return {
    props: {
      posts,
    },
  }
}
