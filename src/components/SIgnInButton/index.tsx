import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = false;

  return (
    <button className={styles.signInButton}>
      <FaGithub size={24} color={isUserLoggedIn ? '#04D361' : '#eba417'} />
      <p>{isUserLoggedIn ? 'guivictorr' : 'Sign in with Github'}</p>
      {isUserLoggedIn && <FiX size={24} color="#737380" />}
    </button>
  );
}
