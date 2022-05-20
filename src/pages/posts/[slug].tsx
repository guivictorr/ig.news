import client from 'graphql/client';
import { GET_PUBLICATION_BY_ID } from 'graphql/queries/publications';
import { GetServerSideProps } from 'next';
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
  const { slug } = ctx.query;
  const response = await client.request(GET_PUBLICATION_BY_ID, {
    slug,
  });

  return {
    props: {
      publication: response.publication,
    },
  };
};
