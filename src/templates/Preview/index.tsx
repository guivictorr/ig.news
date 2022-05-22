import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PostProps } from 'pages/posts/[slug]';
import { useEffect } from 'react';
import styles from './styles.module.scss';

export function PreviewTemplate({ publication }: PostProps) {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.activeSubscription) {
      router.push(`/posts/${publication.slug}`);
    }
  }, [data, publication, router]);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>{publication.title}</h1>
        <time>
          {new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).format(new Date(publication.createdAt))}
        </time>

        <div
          className={`${styles.externalContent} ${styles.previewContent}`}
          dangerouslySetInnerHTML={{ __html: publication.content.html }}
        />
        <div className={styles.continueReading}>
          Wanna continue reding ?
          <Link href="/">
            <a>Subscribe now 🤗</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
