import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

export function SubscribeButton() {
  const { data } = useSession();

  function handleSubscribe() {
    if (!data?.user) {
      signIn('github');
      return;
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
