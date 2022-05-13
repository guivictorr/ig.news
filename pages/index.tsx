import Head from 'next/head';
import styles from 'styles/home.module.scss';
const Home = () => {
  return (
    <>
      <Head>
        <title>ignews</title>
      </Head>
      <h1 className={styles.home}>hello</h1>
    </>
  );
};

export default Home;
