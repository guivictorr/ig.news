import client from 'graphql/client';
import { GET_PUBLICATION_BY_ID } from 'graphql/queries/publications';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { PostTemplate } from 'templates/Post';

export type PostProps = {
  publication: {
    createdAt: string;
    title: string;
    content: {
      html: string;
    };
    slug: string;
  };
};

export default function Post(props: PostProps) {
  return <PostTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });
  const { slug } = ctx.query;
  if ((session && !session.activeSubscription) || !session) {
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false,
      },
    };
  }

  const response = await client.request(GET_PUBLICATION_BY_ID, {
    slug,
  });

  return {
    props: {
      publication: response.publication,
    },
  };
};
