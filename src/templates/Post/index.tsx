import { PostProps } from 'pages/posts/[slug]';
import styles from './styles.module.scss';

export function PostTemplate({ publication }: PostProps) {
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
          className={styles.externalContent}
          dangerouslySetInnerHTML={{ __html: publication.content.html }}
        />
      </div>
    </main>
  );
}
