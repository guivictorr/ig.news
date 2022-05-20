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
