import React from "react";
import Head from "next/head";
import styles from "../styles/Post.module.css";

function Post({ post }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h2 className={styles.title}>Comments</h2>
        {post.comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();

  return {
    paths: posts.map((post) => ({
      params: {
        id: `${post.id}`,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();

  const res2 = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}/comments`
  );
  const comments = await res2.json();

  post.comments = comments;

  return {
    props: { post },
  };
}

export default Post;
