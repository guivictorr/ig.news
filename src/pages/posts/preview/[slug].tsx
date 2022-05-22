import client from 'graphql/client';
import {
  GET_PUBLICATIONS,
  GET_PUBLICATION_BY_ID,
} from 'graphql/queries/publications';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PreviewTemplate } from 'templates/Preview';
import { PostsProps } from '..';
import { PostProps } from '../[slug]';

export default function Preview(props: PostProps) {
  return <PreviewTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { publications } = await client.request<PostsProps>(GET_PUBLICATIONS);
  return {
    paths: publications.map((publication) => ({
      params: { slug: publication.slug },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await client.request<PostProps>(GET_PUBLICATION_BY_ID, {
    slug: ctx.params?.slug,
  });
  return {
    props: {
      publication: {
        ...response.publication,
        content: {
          html: response.publication.content.html.slice(0, 800),
        },
      },
    },
  };
};
