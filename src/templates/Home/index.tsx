import { SubscribeButton } from 'components/SubscribeButton';
import Head from 'next/head';
import Image from 'next/image';
import { HomeProps } from 'pages';

import styles from './styles.module.scss';

function HomeTemplate({ priceData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <p className={styles.greetings}>
            <Image
              src="/images/clap.png"
              width={26}
              height={26}
              alt="Emoji of clapping hands"
            />
            <span>Hey, welcome</span>
          </p>
          <h1>
            News about <br /> the <span>React</span> world
          </h1>
          <p className={styles.pricing}>
            Get acess to all the publications <br />
            <span>for {priceData.price} month</span>
          </p>
          <SubscribeButton />
        </section>
        <Image
          src="/images/woman.svg"
          alt="Cartoon version of a woman using a computer"
          width={334}
          height={520}
        />
      </main>
    </>
  );
}

export default HomeTemplate;
