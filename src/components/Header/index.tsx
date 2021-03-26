import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
           <img src="/images/logo.svg" alt="ig.news"/>
          </a>
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}