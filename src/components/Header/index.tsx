import { ActiveLink } from 'components/ActiveLink';
import { SignInButton } from 'components/SIgnInButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width={100} height={50} />
        <nav>
          <ActiveLink classNameActive={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink classNameActive={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
