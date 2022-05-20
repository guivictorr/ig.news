import { gql } from 'graphql-request';

export const GET_PUBLICATIONS = gql`
  query QueryPublications {
    publications {
      slug
      content {
        html
      }
      description
      title
      createdAt
    }
  }
`;

export const GET_PUBLICATION_BY_ID = gql`
  query QueryPublicationById($slug: String) {
    publication(where: { slug: $slug }) {
      createdAt
      description
      slug
      title
      content {
        html
      }
    }
  }
`;
