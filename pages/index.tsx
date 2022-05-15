import { GetServerSideProps } from 'next';
import { stripe } from 'services/stripe';
import HomeTemplate from 'templates/Home';

export type HomeProps = {
  priceData: {
    id: string;
    price: string;
  };
};

function Home(props: HomeProps) {
  return <HomeTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KzYeREcbM5W9LXWqUGq86tP');

  const priceData = {
    id: price.id,
    price: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price.unit_amount ?? 0) / 100),
  };

  return {
    props: {
      priceData,
    },
  };
};

export default Home;
