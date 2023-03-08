import { gql } from '@apollo/client';

export const GET_POST = gql`
  query GetLocations {
    posts {
      data {
        id
        attributes{
          name
          description
          category
          on
          createdAt
          img{
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HERO_SECTION = gql`
  query GetLocations {
    heroSection{
    data {
      attributes {
        title
        description
      }
    }
  }
  }
`;