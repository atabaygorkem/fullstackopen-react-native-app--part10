import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int = 5
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
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
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`
export const ME = gql`
  query Me($first: Int = 5, $after: String, $includeReviews: Boolean = false) {
    me {
      id
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            user {
              username
            }
            text
            createdAt
            rating
            id
            repositoryId
          }
        }
      }
    }
  }
`
export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      description
      forksCount
      fullName
      id
      language
      ownerAvatarUrl
      reviewCount
      ratingAverage
      stargazersCount
      url
    }
  }
`
export const GET_REVIEWS = gql`
  query Reviews($repositoryId: ID!, $first: Int = 5, $after: String) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews(first: $first, after: $after) {
        edges {
          cursor
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
      }
    }
  }
`
