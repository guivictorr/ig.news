import Head from 'next/head';
import styles from './styles.module.scss';

export function PostsTemplate() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>25 de julho de 2022</time>
            <strong>Título muito maneiro</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
          <a href="">
            <time>25 de julho de 2022</time>
            <strong>Título muito maneiro</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
