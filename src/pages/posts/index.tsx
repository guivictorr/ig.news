import { GET_PUBLICATIONS } from 'graphql/queries/publications';
import client from 'graphql/client';
import { PostsTemplate } from 'templates/Posts';

export type PostsProps = {
  publications: {
    slug: string;
    createdAt: string;
    title: string;
    description: string;
    content: {
      html: string;
    };
  }[];
};

export default function Posts(props: PostsProps) {
  return <PostsTemplate {...props} />;
}

export const getStaticProps = async () => {
  const { publications } = await client.request(GET_PUBLICATIONS);
  return {
    props: {
      publications,
    },
  };
};
