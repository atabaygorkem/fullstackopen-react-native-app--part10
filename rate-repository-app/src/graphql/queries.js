import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query repositories {
    repositories {
      edges {
        cursor
        node {
          description
          forksCount
          fullName
          id
          language
          ownerAvatarUrl
          stargazersCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`
export const ME = gql`
  query {
    me {
      username
      id
    }
  }
`
