import { signIn, useSession } from 'next-auth/react';
import { api } from 'services/api';
import { stripeJs } from 'services/stripe-js';
import styles from './styles.module.scss';

export function SubscribeButton() {
  const { data } = useSession();

  async function handleSubscribe() {
    if (!data?.user) {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;

      const stripe = await stripeJs();

      stripe?.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <button
      onClick={handleSubscribe}
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}
