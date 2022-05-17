import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const { status, data } = useSession();
  const isAuthenticated = status === 'authenticated';
  return (
    <button
      className={styles.signInButton}
      onClick={isAuthenticated ? () => signOut() : () => signIn('github')}
    >
      <FaGithub size={24} color={isAuthenticated ? '#04D361' : '#eba417'} />
      <p>{isAuthenticated ? data?.user?.name : 'Sign in with Github'}</p>
      {isAuthenticated && <FiX size={24} color="#737380" />}
    </button>
  );
}
