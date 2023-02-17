import { gql } from "@apollo/client"

export const AUTHENTICATE = gql`
  mutation authMutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`

export const CREATE_USER = gql`
  mutation Mutation($user: CreateUserInput) {
    createUser(user: $user) {
      username
      id
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation Mutation($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`
